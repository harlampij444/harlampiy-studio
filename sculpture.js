import * as THREE from './harlampiy-studio/vendor/three.module.js';

const DEFAULT_PALETTE = Object.freeze({
  coral: '#F27365',
  mint: '#DAF2E7',
  ink: '#123129',
  paper: '#FFFDF8',
});

const clamp = THREE.MathUtils.clamp;

/** A closed, bevel-edged rectangular sweep, not an infinitely thin ribbon. */
function ribbonGeometry(points, { width, thickness, twist, segments = 176 }) {
  const curve = new THREE.CatmullRomCurve3(
    points.map((point) => new THREE.Vector3(...point)),
    false,
    'centripetal',
  );
  const perimeter = [];
  const halfWidth = width / 2;
  const halfDepth = thickness / 2;
  const bevel = Math.min(thickness * 0.38, 0.046);
  const corners = [
    [halfWidth - bevel, halfDepth - bevel, 0],
    [-halfWidth + bevel, halfDepth - bevel, Math.PI / 2],
    [-halfWidth + bevel, -halfDepth + bevel, Math.PI],
    [halfWidth - bevel, -halfDepth + bevel, Math.PI * 1.5],
  ];
  for (const [x, y, startAngle] of corners) {
    for (let step = 0; step <= 5; step += 1) {
      const angle = startAngle + (step / 5) * Math.PI / 2;
      perimeter.push([x + Math.cos(angle) * bevel, y + Math.sin(angle) * bevel]);
    }
  }

  const ringSize = perimeter.length;
  const positions = [];
  const uvs = [];
  const indices = [];
  const rotation = new THREE.Quaternion();
  const tangent = curve.getTangentAt(0).normalize();
  const transported = new THREE.Vector3(-tangent.y, tangent.x, 0).normalize();
  const priorTangent = tangent.clone();
  const side = new THREE.Vector3();
  const normal = new THREE.Vector3();
  const vertex = new THREE.Vector3();
  const centers = [];

  for (let i = 0; i <= segments; i += 1) {
    const t = i / segments;
    const center = curve.getPointAt(t);
    centers.push(center);
    tangent.copy(curve.getTangentAt(t)).normalize();
    rotation.setFromUnitVectors(priorTangent, tangent);
    transported.applyQuaternion(rotation).normalize();
    side.copy(transported).applyAxisAngle(tangent, twist(t));
    normal.crossVectors(tangent, side).normalize();
    priorTangent.copy(tangent);

    // A subtle end taper gives the cut ends a manufactured, paper-like finish.
    const edgeTaper = 0.93 + 0.07 * Math.sin(Math.PI * t) ** 0.4;
    for (let j = 0; j < ringSize; j += 1) {
      const [across, depth] = perimeter[j];
      vertex.copy(center).addScaledVector(side, across * edgeTaper).addScaledVector(normal, depth);
      positions.push(vertex.x, vertex.y, vertex.z);
      uvs.push(j / ringSize, t);
      if (i < segments) {
        const a = i * ringSize + j;
        const b = i * ringSize + (j + 1) % ringSize;
        const c = a + ringSize;
        const d = b + ringSize;
        indices.push(a, b, c, b, d, c);
      }
    }
  }

  // Duplicate the cap vertices so their normals remain flat against the sweep.
  for (const end of [0, segments]) {
    const start = positions.length / 3;
    const center = centers[end];
    positions.push(center.x, center.y, center.z);
    uvs.push(0.5, 0.5);
    for (let j = 0; j < ringSize; j += 1) {
      const source = (end * ringSize + j) * 3;
      positions.push(positions[source], positions[source + 1], positions[source + 2]);
      uvs.push(j / ringSize, end / segments);
    }
    for (let j = 0; j < ringSize; j += 1) {
      const a = start + 1 + j;
      const b = start + 1 + (j + 1) % ringSize;
      if (end === 0) indices.push(start, b, a);
      else indices.push(start, a, b);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}

/** Broad luminous panels baked into a small local reflection map. */
function studioEnvironment(renderer) {
  const studio = new THREE.Scene();
  studio.background = new THREE.Color('#87968F');
  const resources = [];
  const roomGeometry = new THREE.BoxGeometry(24, 24, 24);
  const roomMaterial = new THREE.MeshBasicMaterial({ color: '#94A299', side: THREE.BackSide });
  studio.add(new THREE.Mesh(roomGeometry, roomMaterial));
  resources.push(roomGeometry, roomMaterial);

  const panel = (position, scale, strength, tint) => {
    const geometry = new THREE.PlaneGeometry(...scale);
    const color = new THREE.Color(tint).multiplyScalar(strength);
    const material = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide, toneMapped: false });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...position);
    mesh.lookAt(0, 0, 0);
    studio.add(mesh);
    resources.push(geometry, material);
  };
  panel([-5, 6, 4], [5, 9], 5.0, '#FFFDF8');
  panel([6, 1, 2], [3.5, 8], 2.6, '#DAF2E7');
  panel([0, 4, -7], [7, 3], 3.0, '#FFFDF8');
  const generator = new THREE.PMREMGenerator(renderer);
  try {
    return generator.fromScene(studio, 0.07, 0.1, 40, { size: 128 });
  } finally {
    generator.dispose();
    resources.forEach((resource) => resource.dispose());
    studio.clear();
  }
}

/**
 * Mount one self-contained sculpture into a sized HTML element.
 * Keep a raster fallback in the host; hide it only after onReady / sculpture:ready.
 * Events: sculpture:ready, sculpture:fallback, sculpture:state (detail is state).
 */
export async function mountSculpture(container, { onReady, onFallback } = {}) {
  if (!container || typeof container.appendChild !== 'function') {
    throw new TypeError('mountSculpture requires a container element.');
  }

  const ownerDocument = container.ownerDocument;
  const view = ownerDocument.defaultView;
  const motionQuery = view.matchMedia('(prefers-reduced-motion: reduce)');
  const coarseQuery = view.matchMedia('(pointer: coarse)');
  const scene = new THREE.Scene();
  const sculpture = new THREE.Group();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 60);
  const baseRotation = new THREE.Euler(-0.13, -0.28, -0.16);
  const palette = { ...DEFAULT_PALETTE };
  const geometries = new Set();
  const materials = new Set();
  const paletteTargets = new Map();
  const listeners = [];
  const pointer = new THREE.Vector2();
  const smoothedPointer = new THREE.Vector2();
  let renderer;
  let environment;
  let resizeObserver;
  let intersectionObserver;
  let frame = 0;
  let previousTime = 0;
  let elapsed = 0;
  let inViewport = false;
  let hasSize = false;
  let userPaused = false;
  let reducedMotion = motionQuery.matches;
  let destroyed = false;
  let failed = false;
  let ready = false;
  let canvas;

  const state = () => ({
    ready,
    paused: userPaused,
    reducedMotion,
    visible: inViewport && !ownerDocument.hidden,
    running: Boolean(frame),
    fallback: failed,
    destroyed,
  });
  const emit = (name, detail = state()) => {
    container.dispatchEvent(new view.CustomEvent(name, { detail }));
  };
  const listen = (target, name, handler, options) => {
    target.addEventListener(name, handler, options);
    listeners.push(() => target.removeEventListener(name, handler, options));
  };
  const canRender = () => !destroyed && !failed && hasSize && inViewport && !ownerDocument.hidden;
  const canAnimate = () => canRender() && !userPaused && !reducedMotion;
  const stop = () => {
    if (frame) view.cancelAnimationFrame(frame);
    frame = 0;
    previousTime = 0;
  };
  const releaseGraphics = () => {
    geometries.forEach((geometry) => geometry.dispose());
    materials.forEach((material) => material.dispose());
    geometries.clear();
    materials.clear();
    environment?.dispose();
    environment = null;
    scene.environment = null;
    scene.traverse((object) => object.shadow?.dispose());
    scene.clear();
    if (renderer) {
      renderer.dispose();
      renderer.forceContextLoss();
      renderer = null;
    }
    canvas?.remove();
  };
  const fallback = (reason, error) => {
    if (failed || destroyed) return;
    failed = true;
    ready = false;
    stop();
    resizeObserver?.disconnect();
    intersectionObserver?.disconnect();
    listeners.splice(0).forEach((remove) => remove());
    releaseGraphics();
    const detail = { ...state(), reason, error: error?.message || null };
    emit('sculpture:fallback', detail);
    if (typeof onFallback === 'function') onFallback(detail);
  };

  const render = () => {
    if (!canRender() || !renderer) return;
    try {
      renderer.render(scene, camera);
    } catch (error) {
      fallback('render-error', error);
      return;
    }
    if (!ready) {
      ready = true;
      emit('sculpture:ready');
      if (typeof onReady === 'function') onReady(state());
    }
  };

  const animate = (time) => {
    frame = 0;
    if (!canAnimate()) return;
    const delta = previousTime ? Math.min((time - previousTime) / 1000, 0.05) : 0;
    previousTime = time;
    elapsed += delta;
    const smoothing = 1 - Math.exp(-delta * 4.5);
    smoothedPointer.lerp(pointer, smoothing);
    sculpture.rotation.set(
      baseRotation.x + smoothedPointer.y * 0.085 + Math.sin(elapsed * 0.32) * 0.018,
      baseRotation.y + smoothedPointer.x * 0.16 + Math.sin(elapsed * 0.24) * 0.035,
      baseRotation.z + Math.sin(elapsed * 0.18) * 0.016,
    );
    sculpture.position.y = Math.sin(elapsed * 0.4) * 0.035;
    render();
    if (canAnimate()) frame = view.requestAnimationFrame(animate);
  };
  const syncMotion = () => {
    stop();
    if (canRender()) render();
    if (canAnimate()) frame = view.requestAnimationFrame(animate);
    emit('sculpture:state');
  };

  const controls = {
    pause(value = true) {
      if (destroyed || failed) return state();
      userPaused = Boolean(value);
      syncMotion();
      return state();
    },
    setPalette(next = DEFAULT_PALETTE) {
      if (destroyed || failed) return state();
      for (const key of Object.keys(DEFAULT_PALETTE)) {
        if (typeof next?.[key] !== 'string' || !/^#[\da-f]{6}$/i.test(next[key])) continue;
        palette[key] = next[key];
        paletteTargets.get(key)?.forEach((target) => target.color.set(next[key]));
      }
      render();
      return state();
    },
    getState: state,
    destroy() {
      if (destroyed) return;
      destroyed = true;
      stop();
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
      listeners.splice(0).forEach((remove) => remove());
      releaseGraphics();
      emit('sculpture:state');
    },
  };

  try {
    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'low-power',
      premultipliedAlpha: true,
      preserveDrawingBuffer: false,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(view.devicePixelRatio || 1, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.04;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    canvas = renderer.domElement;
    canvas.className = 'sculpture-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    canvas.style.cssText = 'display:block;width:100%;height:100%;pointer-events:none;';
    container.appendChild(canvas);

    const makeMaterial = (key, options) => {
      const material = new THREE.MeshPhysicalMaterial({
        color: palette[key],
        metalness: 0.08,
        roughness: 0.3,
        clearcoat: 0.35,
        clearcoatRoughness: 0.3,
        envMapIntensity: 0.65,
        ...options,
      });
      materials.add(material);
      if (!paletteTargets.has(key)) paletteTargets.set(key, []);
      paletteTargets.get(key).push(material);
      return material;
    };
    const coral = makeMaterial('coral', { roughness: 0.27, clearcoat: 0.45 });
    const mint = makeMaterial('mint', { roughness: 0.38, clearcoat: 0.2 });
    const ink = makeMaterial('ink', { roughness: 0.25, metalness: 0.18 });
    const addRibbon = (points, options, material) => {
      const geometry = ribbonGeometry(points, options);
      geometries.add(geometry);
      const mesh = new THREE.Mesh(geometry, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      sculpture.add(mesh);
    };

    addRibbon([
      [-1.48, -1.58, 0.08], [-1.15, -1.14, 0.6], [-0.18, -0.82, 0.82],
      [0.95, -0.35, 0.5], [1.2, 0.26, -0.02], [0.6, 0.81, -0.33],
      [-0.53, 1.18, 0.04], [-0.75, 1.77, 0.25],
    ], {
      width: 1.05,
      thickness: 0.145,
      twist: (t) => -0.34 + Math.sin(t * Math.PI * 2.1) * 0.44 + t * 0.52,
    }, coral);

    addRibbon([
      [1.16, -1.52, -0.3], [0.44, -1.36, -0.7], [-0.8, -0.66, -0.51],
      [-1.25, 0.03, 0.1], [-0.83, 0.59, 0.68], [0.25, 0.93, 0.88],
      [1.24, 1.42, 0.29],
    ], {
      width: 0.92,
      thickness: 0.115,
      twist: (t) => 0.27 - Math.sin(t * Math.PI * 1.65) * 0.59,
    }, mint);

    addRibbon([
      [-0.85, -1.63, -0.85], [-0.33, -0.66, -0.98], [0.55, 0.17, -0.75],
      [0.53, 1.18, -0.51], [0.12, 1.75, -0.29],
    ], {
      width: 0.6,
      thickness: 0.12,
      twist: (t) => -0.62 + t * 0.92,
      segments: 128,
    }, ink);

    sculpture.rotation.copy(baseRotation);
    scene.add(sculpture);
    environment = studioEnvironment(renderer);
    scene.environment = environment.texture;
    const hemisphere = new THREE.HemisphereLight(palette.paper, '#46675C', 1.0);
    scene.add(hemisphere);
    const key = new THREE.DirectionalLight('#FFF7EF', 2.6);
    key.position.set(-3, 5, 6);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.camera.left = -4;
    key.shadow.camera.right = 4;
    key.shadow.camera.top = 4;
    key.shadow.camera.bottom = -4;
    key.shadow.camera.near = 0.5;
    key.shadow.camera.far = 20;
    key.shadow.normalBias = 0.025;
    key.shadow.bias = -0.00015;
    key.shadow.radius = 4;
    scene.add(key);
    paletteTargets.set('paper', [hemisphere, key]);
    const fill = new THREE.DirectionalLight('#DAF2E7', 1.1);
    fill.position.set(4, 1, -2);
    scene.add(fill);
    paletteTargets.get('mint').push(fill);
    const shadowGeometry = new THREE.PlaneGeometry(20, 20);
    const shadowMaterial = new THREE.ShadowMaterial({ color: '#123129', opacity: 0.085 });
    geometries.add(shadowGeometry);
    materials.add(shadowMaterial);
    paletteTargets.get('ink').push(shadowMaterial);
    const ground = new THREE.Mesh(shadowGeometry, shadowMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -2.15;
    ground.receiveShadow = true;
    scene.add(ground);

    const bounds = new THREE.Box3().setFromObject(sculpture);
    const size = bounds.getSize(new THREE.Vector3());
    const center = bounds.getCenter(new THREE.Vector3());
    const resize = () => {
      if (destroyed || failed) return;
      const rect = container.getBoundingClientRect();
      const width = Math.round(rect.width);
      const height = Math.round(rect.height);
      hasSize = width > 0 && height > 0;
      if (!hasSize) {
        syncMotion();
        return;
      }
      renderer.setPixelRatio(Math.min(view.devicePixelRatio || 1, 1.5));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      const tanHalfFov = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
      const distance = Math.max(size.y, size.x / camera.aspect) / (2 * tanHalfFov) * 1.1 + size.z * 0.5;
      camera.position.set(center.x, center.y + 0.13, distance);
      camera.lookAt(center.x, center.y - 0.06, 0);
      camera.updateProjectionMatrix();
      syncMotion();
    };

    listen(canvas, 'webglcontextlost', (event) => {
      event.preventDefault();
      fallback('context-lost');
    });
    listen(container, 'pointermove', (event) => {
      if (coarseQuery.matches || reducedMotion || userPaused || event.pointerType === 'touch') return;
      const rect = container.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      pointer.set(
        clamp(((event.clientX - rect.left) / rect.width - 0.5) * 2, -1, 1),
        clamp(((event.clientY - rect.top) / rect.height - 0.5) * 2, -1, 1),
      );
    }, { passive: true });
    listen(container, 'pointerleave', () => pointer.set(0, 0), { passive: true });
    listen(ownerDocument, 'visibilitychange', syncMotion);
    listen(motionQuery, 'change', () => {
      reducedMotion = motionQuery.matches;
      pointer.set(0, 0);
      smoothedPointer.set(0, 0);
      if (reducedMotion) {
        sculpture.rotation.copy(baseRotation);
        sculpture.position.y = 0;
      }
      syncMotion();
    });

    const initialRect = container.getBoundingClientRect();
    inViewport = initialRect.bottom > 0 && initialRect.top < view.innerHeight
      && initialRect.right > 0 && initialRect.left < view.innerWidth;
    if ('IntersectionObserver' in view) {
      intersectionObserver = new view.IntersectionObserver(([entry]) => {
        inViewport = entry.isIntersecting;
        syncMotion();
      }, { threshold: 0 });
      intersectionObserver.observe(container);
    } else {
      const checkViewport = () => {
        const rect = container.getBoundingClientRect();
        inViewport = rect.bottom > 0 && rect.top < view.innerHeight
          && rect.right > 0 && rect.left < view.innerWidth;
        syncMotion();
      };
      listen(view, 'scroll', checkViewport, { passive: true });
      listen(view, 'resize', checkViewport, { passive: true });
    }
    if ('ResizeObserver' in view) {
      resizeObserver = new view.ResizeObserver(resize);
      resizeObserver.observe(container);
    }
    // Window resizing also catches a DPR change when moving between displays.
    listen(view, 'resize', resize, { passive: true });
    resize();
  } catch (error) {
    fallback('initialization-error', error);
  }

  return controls;
}
