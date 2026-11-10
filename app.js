import {websiteLibrary,presentationLibrary} from './portfolio-library.js';
import {caseBoardData,presentationBoardData,identityBoardData} from './case-board-data.js';
import {createCaseBoard} from './case-board.js';
const allCaseBoards={...caseBoardData,...presentationBoardData,...identityBoardData};
const translations={
  en:{
    skip:'Skip to content',home:'Harlampiy — home',name:'Harlampiy',navigation:'Main navigation',mobileNavigation:'Mobile navigation',services:'Services',work:'Selected work',approach:'How I work',write:'Get in touch',discuss:'Discuss a project',
    heroTitle:'Websites & design.<br>With character.<br><span>For your business.</span>',heroDescription:'From a first impression to a clear offer. I build websites, set up promotion and help your business look convincing.',viewWork:'Explore the work',personalWork:'Working with you personally. <br>From the brief to launch.',goServices:'Explore services',portraitAlt:'Harlampiy — designer and website specialist',ticket:'From an idea<br>to a visual system',portraitRole:'Websites · Design · Promotion',
    introTitle:'More than a good-looking site.<br>A thoughtful point of contact<br>with your business.',introText:'I bring structure, design and promotion together, so visitors understand your offer, notice what matters and know what to do next.',chooseService:'What I can do for you',principle1:'Personally',principle2:'Understand the task',principle3:'Build the system',principle4:'Take it to launch',
    servicesTitle:'How I can help',servicesIntro:'One focused task or the whole journey: from a new website to your first advertising campaigns.',
    siteTag:'From structure to launch',siteAction:'Discuss a website',siteTitle:'Turnkey<br>websites',siteText:'Landing pages and company websites. Structure, copy, design, responsive implementation and launch preparation.',siteScope:'We agree on pages and features, gather materials, test the mobile version and hand over source files. Domain and hosting are chosen separately.',
    directTag:'Reach your audience',directAction:'Discuss Yandex Direct',directTitle:'Yandex<br>Direct',directText:'Contextual advertising setup and management: keywords, ads, conversion goals and ongoing campaign work.',directScope:'We start with your offer, region and landing page, then agree on campaigns, analytics and budget. Advertising spend is separate.',
    seoTag:'A foundation for search',seoAction:'Discuss SEO setup',seoTitle:'SEO<br>setup',seoText:'Search intent, page structure, metadata and technical checks. For a new or existing website.',seoScope:'I review structure, indexability and key technical issues, then prepare a prioritised plan. Search positions are not guaranteed.',
    designTag:'Make meaning visible',designAction:'Discuss design',designTitle:'Design &<br>presentations',designText:'Presentations, logos and visual identity. A visual language that carries the character of your business.',designScope:'I review the materials, propose a direction and develop the agreed deliverables. We define formats and scope first; source files are included.',scope:'What’s included',
    workTitle:'Work that<br>speaks for me.',workIntro:'Websites, logos and presentations. Different challenges and character, the same attention to detail.',filterLabel:'Filter work',allWork:'All work',presentations:'Presentations',studies:'Visual concepts',presentationDesign:'Presentation design',ownStudy:'Self-initiated concept',visualStudy:'Identity study',formStudy:'Form study',architectureTitle:'Space for ideas',portfolioNote:'Examples of visual approaches. Self-initiated concepts are labelled separately; names shown do not establish verified client relationships.',
    openAltivara:'Open Altivara Air',openClearpath:'Open Clearpath',openAxiom:'Open AXIOM',openArchitecture:'Open the architecture presentation',openBrio:'Open BRIO DRAFT',openLeap:'Open Line & Leap',
    altivaraAlt:'Altivara Air: a black and gold presentation',clearpathAlt:'Clearpath: a light presentation with infographics',axiomAlt:'AXIOM: a blue technology presentation',architectureAlt:'An architectural presentation with spaces and plans',brioAlt:'BRIO DRAFT: a self-initiated mint and coral concept',leapAlt:'Line & Leap: a lavender and lemon spatial ribbon',
    approachTitle:'Personally involved.<br>Thoughtfully delivered.',approachIntro:'I personally lead your project and bring in the team where needed. At every stage, you know who is responsible and what comes next.',process1Title:'First, the task',process1Text:'I explore your business, materials and references, then clarify only what is still missing.',process2Title:'Then, the solution',process2Text:'We agree on scope, cost and timing. I show the structure and visual direction using your actual content.',process3Title:'Next, the launch',process3Text:'I build and check the details and mobile experience, then hand over the result, source files and clear instructions.',
    faqTitle:'Before we start',faq1:'Can we start with just the website?',faq1Text:'Yes. Websites, advertising, SEO and design are separate tasks. You do not have to order everything: we can select the right scope for your situation.',faq2:'What if I already have a website?',faq2Text:'I can review its structure, design, mobile version and technical foundations. Targeted improvements may be enough; starting from scratch is not always necessary.',faq3:'What do you need to estimate the price?',faq3Text:'Send the task, your current website if you have one, and any materials or references. I can then propose a scope, price and timeline.',
    contactTitle:'My team and I<br>create design<br><span>for your business.</span>',contactIntro:'A new website, presentation, identity or promotion — we’ll shape the right solution for your task. Message or call to discuss materials, scope, timing and cost.',ourEmail:'Our email',ourPhone:'Phone',telegram:'Message me on Telegram',briefTitle:'Or prepare a short brief',whatNeed:'What do you need?',websiteShort:'Website',directShort:'Yandex Direct',designShort:'Design',yourName:'What should I call you?',namePlaceholder:'Your name',contactField:'Email or Telegram',taskField:'A little about the task',taskPlaceholder:'What do you need? Is there a website, material or preferred timeline?',localNotice:'Your brief downloads to your device. Send it to me on Telegram or by email. This form does not send anything automatically.',downloadBrief:'Download your brief',footerNote:'Websites. Design. Promotion.<br>A personal approach, at every stage.',backTop:'Back to top',closeView:'Close preview',wantSimilar:'Discuss a similar task',
    "websites":"Websites",
    "logos":"Logos",
    "moreWork":"More work",
    "lessWork":"Show less",
    "brandExtensionTitle":"Need more than a website?<br>Let’s build <span>a coherent identity.</span>",
    "brandExtensionText":"My team and I can extend your project with a logo and visual identity, connecting your website, presentations and business materials. Or we can develop the identity as a standalone task.",
    "brandServices":"Additional design services",
    "brandLogo":"Logo",
    "brandIdentity":"Visual identity",
    "brandMaterials":"Brand applications",
    "discussIdentity":"Discuss your identity",
    "reviewsTitle":"What people say<br>about our work.",
    "open_website-01":"Open Memorabilia Market",
    "alt_website-01":"Memorabilia Market — catalogue website",
    "type_website-01":"Catalogue website",
    "open_logo-04":"Open ELEBUNNY",
    "alt_logo-04":"ELEBUNNY — logo",
    "type_logo-04":"Logo",
    "open_original-18":"Open Oply",
    "alt_original-18":"Oply — product presentation",
    "type_original-18":"Product presentation",
    "open_website-02":"Open Andriy.dev",
    "alt_website-02":"Andriy.dev — personal website",
    "type_website-02":"Personal website",
    "open_identity-01":"Open VALO",
    "alt_identity-01":"VALO — logo & visual identity",
    "type_identity-01":"Logo & visual identity",
    "open_original-22":"Open Vitaloop",
    "alt_original-22":"Vitaloop — product presentation",
    "type_original-22":"Product presentation",
    "open_website-05":"Open The Red Phone",
    "alt_website-05":"The Red Phone — landing page",
    "type_website-05":"Landing page",
    "open_identity-02":"Open GALE",
    "alt_identity-02":"GALE — logo & visual identity",
    "type_identity-02":"Logo & visual identity",
    "open_original-19":"Open IBU",
    "alt_original-19":"IBU — university presentation",
    "type_original-19":"University presentation",
    "open_website-06":"Open Raveidea",
    "alt_website-06":"Raveidea — digital product website",
    "type_website-06":"Digital product website",
    "open_identity-07":"Open HABITUÉ",
    "alt_identity-07":"HABITUÉ — logo & visual identity",
    "type_identity-07":"Logo & visual identity",
    "open_original-23":"Open Komodo Energy",
    "alt_original-23":"Komodo Energy — investor presentation",
    "type_original-23":"Investor presentation"
  },ru:{}
};
// Build from the verified owner-artwork list using text APIs; raw source paths stay private.
const grid=document.getElementById('work-grid');
const cardTemplate=grid.querySelector('.work-item');
const newCards=new Map();
for(const item of [...websiteLibrary,...presentationLibrary]){
 const card=grid.querySelector('[data-case="'+item.id+'"]')?.closest('.work-item')||cardTemplate.cloneNode(true),button=card.querySelector('[data-case]'),img=card.querySelector('img'),caption=card.querySelector('.work-meta>span');
 if(item.category==='presentation'){card.dataset.category='presentation';button.className='work-image case-stage case-stage--presentation';img.width=item.width;img.height=item.height;}
 card.hidden=true;button.dataset.case=item.id;button.dataset.i18nAria='open_'+item.id;button.setAttribute('aria-label','Открыть '+item.title[0]);
 img.removeAttribute('src');img.dataset.src=item.preview?'assets/'+item.preview:'assets/portfolio/'+item.id+'-preview.webp';img.dataset.i18nAlt='alt_'+item.id;img.alt=item.title[0]+' — '+item.type[0];
 card.querySelector('h3').textContent=item.title[0];card.querySelector('h3').dataset.libraryTitle=item.id;caption.dataset.i18n='type_'+item.id;caption.textContent=item.type[0];
 translations.en['open_'+item.id]='Open '+item.title[1];translations.en['alt_'+item.id]=item.title[1]+' — '+item.type[1];translations.en['type_'+item.id]=item.type[1];
 newCards.set(item.id,card);
}
const originalCards=new Map([...grid.querySelectorAll('.work-item')].map(card=>[card.querySelector('[data-case]').dataset.case,card]));
const orderedIds=['site-ilearn','site-002','site-003','site-001','logo-04','original-17','original-18','original-19','original-20','original-21','original-22','original-29','site-004','site-028','identity-01','original-24','site-053','site-033','identity-02','original-25','identity-07','original-23','original-26','original-27','original-28','original-30','original-31','original-32','site-012','site-009','site-036','site-013','site-052'];
// Lead with the freshly framed cases; phone batches are shorter than desktop batches.
const allCards=new Map([...newCards,...originalCards]);
for(const id of [...orderedIds,...newCards.keys(),...originalCards.keys()].filter((id,index,list)=>list.indexOf(id)===index))grid.append(allCards.get(id));
for(const [id,card]of allCards){const board=allCaseBoards[id];if(board?.poster){const img=card.querySelector('img');img.removeAttribute('src');img.dataset.src='assets/'+board.poster;const cover=card.querySelector('.work-image');cover.classList.add('has-case-poster');if(Number.isFinite(board.posterWidth)&&board.posterWidth>0&&Number.isFinite(board.posterHeight)&&board.posterHeight>0)cover.style.setProperty('--work-cover-ratio',board.posterWidth+'/'+board.posterHeight);}}
const lessWorkButton=document.createElement('button');lessWorkButton.type='button';lessWorkButton.id='work-less';lessWorkButton.className='button button-outline';lessWorkButton.hidden=true;lessWorkButton.setAttribute('aria-controls','work-grid');lessWorkButton.textContent='Свернуть подборку';
document.getElementById('work-more').after(lessWorkButton);
const textNodes=[...document.querySelectorAll('[data-i18n]')];
for(const el of textNodes) translations.ru[el.dataset.i18n]=el.innerHTML;
const translatedAttributes=[['data-i18n-placeholder','placeholder'],['data-i18n-aria','aria-label'],['data-i18n-alt','alt']];
for(const [key,attribute] of translatedAttributes) for(const el of document.querySelectorAll('['+key+']')) translations.ru[el.getAttribute(key)]=el.getAttribute(attribute);
translations.ru.lessWork='Свернуть подборку';
let language=(query=>query==='ru'||query==='en'?query:/\/en\/?$/.test(location.pathname)?'en':'ru')(new URLSearchParams(location.search).get('lang'));
let currentCase=null;
const languageButton=document.getElementById('language-switch');
const menuButton=document.getElementById('menu-toggle');
const mobileNav=document.getElementById('mobile-nav');
const reducedMotionQuery=matchMedia('(prefers-reduced-motion: reduce)');
function setMenu(open){mobileNav.hidden=!open;menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',language==='ru'?(open?'Закрыть меню':'Открыть меню'):(open?'Close menu':'Open menu'));}
menuButton.addEventListener('click',()=>setMenu(mobileNav.hidden));
mobileNav.addEventListener('click',e=>{if(e.target.closest('a'))setMenu(false);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobileNav.hidden){setMenu(false);menuButton.focus();}});
matchMedia('(min-width: 901px)').addEventListener('change',e=>{if(e.matches)setMenu(false);});
const WORK_PAGE_SIZE=12;
const MOBILE_WORK_PAGE_SIZE=4;
const mobileLayoutQuery=matchMedia('(max-width: 760px)');
function workPageSize(){return mobileLayoutQuery.matches?MOBILE_WORK_PAGE_SIZE:WORK_PAGE_SIZE;}
let workWallFrame=0;
function queueWorkWall(){cancelAnimationFrame(workWallFrame);workWallFrame=requestAnimationFrame(()=>{grid.classList.add('is-wall');for(const item of grid.querySelectorAll('.work-item:not([hidden])')){const span='span '+Math.ceil(item.getBoundingClientRect().height/8);if(item.style.gridRowEnd!==span)item.style.gridRowEnd=span;}});}
const workWallObserver=new ResizeObserver(queueWorkWall);workWallObserver.observe(grid);for(const item of grid.querySelectorAll('.work-item'))workWallObserver.observe(item);document.fonts.ready.then(queueWorkWall);
let activeWorkCategory='all',visibleWorkLimit=workPageSize();
function matchingWork(){return [...document.querySelectorAll('.work-item')].filter(el=>activeWorkCategory==='all'||el.dataset.category===activeWorkCategory);}
function updateCount(){const matching=matchingWork(),shown=matching.filter(el=>!el.hidden).length,next=Math.min(workPageSize(),matching.length-shown);document.getElementById('work-count').textContent=language==='ru'?(shown<matching.length?shown+' из '+matching.length+' работ':shown+' '+(shown%10===1&&shown%100!==11?'работа':shown%10>=2&&shown%10<=4&&(shown%100<12||shown%100>14)?'работы':'работ')):(shown<matching.length?shown+' of '+matching.length+' projects':shown+' projects');document.getElementById('work-more-label').textContent=next>0?(language==='ru'?'Показать ещё: '+next:'Show '+next+' more'):translations[language].moreWork;lessWorkButton.textContent=translations[language].lessWork;queueWorkWall();}
function updateWorkVisibility(){let index=0;for(const item of document.querySelectorAll('.work-item')){const matches=activeWorkCategory==='all'||item.dataset.category===activeWorkCategory;item.hidden=!matches||index>=visibleWorkLimit;if(matches)index++;if(!item.hidden){const img=item.querySelector('img');if(img.dataset.src&&!img.hasAttribute('src'))img.src=img.dataset.src;}}const more=document.getElementById('work-more');more.hidden=index<=visibleWorkLimit;more.setAttribute('aria-expanded',String(visibleWorkLimit>workPageSize()));lessWorkButton.hidden=visibleWorkLimit<=workPageSize();updateCount();}
function applyLanguage(){
  document.documentElement.lang=language;
  // These HTML strings are static author-controlled dictionaries, never URL/form data.
  for(const el of textNodes){const value=translations[language][el.dataset.i18n];if(value!==undefined)el.innerHTML=value;}
  for(const [key,attribute] of translatedAttributes) for(const el of document.querySelectorAll('['+key+']')) el.setAttribute(attribute,translations[language][el.getAttribute(key)]);
  languageButton.textContent=language==='ru'?'EN':'RU';
  languageButton.setAttribute('aria-label',language==='ru'?'Switch to English':'Переключить на русский');
  document.title=language==='ru'?'Харлампий — сайты, дизайн и продвижение':'Harlampiy — websites, design & promotion';
  document.querySelector('meta[name=description]').content=language==='ru'?'Харлампий — личный специалист по сайтам, дизайну и продвижению. Разработка под ключ, Яндекс Директ, SEO, презентации и айдентика.':'Harlampiy — personal website and design specialist. Turnkey websites, Yandex Direct, SEO, presentations and visual identity.';
  for(const item of [...websiteLibrary,...presentationLibrary]){const title=document.querySelector('[data-library-title="'+item.id+'"]');title.textContent=item.title[language==='ru'?0:1];}
  setMenu(!mobileNav.hidden);updateCount();updateBriefDisclosure();renderReviews();if(currentCase)fillCase(currentCase);document.getElementById('form-status').textContent='';
}
languageButton.addEventListener('click',()=>{language=language==='ru'?'en':'ru';const url=new URL(location);url.searchParams.set('lang',language);history.replaceState(null,'',url);applyLanguage();});
for(const button of document.querySelectorAll('[data-filter]'))button.addEventListener('click',()=>{activeWorkCategory=button.dataset.filter;visibleWorkLimit=workPageSize();for(const other of document.querySelectorAll('[data-filter]')){const selected=other===button;other.setAttribute('aria-pressed',String(selected));other.classList.toggle('is-active',selected);}document.getElementById('work-grid').classList.toggle('is-filtered',activeWorkCategory!=='all');grid.classList.toggle('is-website',activeWorkCategory==='website');updateWorkVisibility();});
document.getElementById('work-more').addEventListener('click',()=>{const firstNew=matchingWork()[visibleWorkLimit];visibleWorkLimit+=workPageSize();updateWorkVisibility();if(firstNew){const button=firstNew.querySelector('button');button.focus({preventScroll:true});firstNew.scrollIntoView({block:'start',behavior:reducedMotionQuery.matches?'instant':'smooth'});}});
lessWorkButton.addEventListener('click',()=>{visibleWorkLimit=workPageSize();updateWorkVisibility();document.getElementById('work-title').scrollIntoView({behavior:reducedMotionQuery.matches?'instant':'smooth'});document.getElementById('work-more').focus({preventScroll:true});});
const cases={
  "website-01": {
    "title": "Memorabilia Market",
    "image": "portfolio/website-01-full.webp",
    "type": [
      "Сайт-каталог",
      "Catalogue website"
    ],
    "text": [
      "Каталог спортивной атрибутики: первый экран, категории и товарная сетка. В полном макете — навигация и подача ассортимента.",
      "A sports memorabilia catalogue: hero, categories and product grid. The full layout shows navigation and catalogue presentation."
    ]
  },
  "logo-04": {
    "title": "ELEBUNNY",
    "image": "portfolio/logo-04-full.webp",
    "type": [
      "Логотип",
      "Logo"
    ],
    "text": [
      "Графический знак, в котором соединены слон и кролик. Контрастная чёрно-жёлтая версия с ясным силуэтом.",
      "A graphic mark combining an elephant and a rabbit. A high-contrast black-and-yellow treatment with a clear silhouette."
    ]
  },
  "original-18": {
    "title": "Oply",
    "image": "portfolio/original-18-full.webp",
    "type": [
      "Презентация продукта",
      "Product presentation"
    ],
    "text": [
      "Презентация системы умного дома: продукт, интерфейсы и инфографика в одной системе. Тёмные экраны и яркие акценты разделяют смысловые блоки.",
      "A smart-home system presentation combining product, interfaces and infographics. Dark screens and bright accents separate the key sections."
    ]
  },
  "website-02": {
    "title": "Andriy.dev",
    "image": "portfolio/website-02-full.webp",
    "type": [
      "Персональный сайт",
      "Personal website"
    ],
    "text": [
      "Персональный сайт разработчика: услуги, описание опыта и примеры проектов. Светлая сетка и спокойная типографика.",
      "A developer's personal website with services, experience and project examples. A light grid and restrained typography."
    ]
  },
  "identity-01": {
    "title": "VALO",
    "image": "portfolio/identity-01-full.webp",
    "type": [
      "Логотип и фирменный стиль",
      "Logo & visual identity"
    ],
    "text": [
      "Знак, типографика и носители для падел-бренда. Чёрный и лавандовый объединяют ракетку, упаковку и текстиль.",
      "A mark, typography and applications for a padel brand. Black and lavender connect racket, packaging and textile treatments."
    ]
  },
  "original-22": {
    "title": "Vitaloop",
    "image": "portfolio/original-22-full.webp",
    "type": [
      "Презентация продукта",
      "Product presentation"
    ],
    "text": [
      "Презентация продукта для очистки воды: фотографии, характеристики и сравнение решений. Светлая композиция с тёмными продуктовыми акцентами.",
      "A water-purification product presentation with photography, specifications and comparisons. A light composition with darker product-focused accents."
    ]
  },
  "website-05": {
    "title": "The Red Phone",
    "image": "portfolio/website-05-full.webp",
    "type": [
      "Лендинг",
      "Landing page"
    ],
    "text": [
      "Лендинг с выразительной красной палитрой. В полном макете — первый экран, информационные блоки и завершение страницы.",
      "A landing page with a distinctive red palette. The full layout includes the hero, information sections and closing content."
    ]
  },
  "identity-02": {
    "title": "GALE",
    "image": "portfolio/identity-02-full.webp",
    "type": [
      "Логотип и фирменный стиль",
      "Logo & visual identity"
    ],
    "text": [
      "Шрифтовой знак и его применение в музыкальной айдентике. Монохромная система для печатных и цифровых носителей.",
      "A wordmark and its application in a music identity. A monochrome system for print and digital materials."
    ]
  },
  "original-19": {
    "title": "IBU",
    "image": "portfolio/original-19-full.webp",
    "type": [
      "Презентация университета",
      "University presentation"
    ],
    "text": [
      "Презентация университета: позиционирование, аудитория и цифровые коммуникации. Фотографии, схемы и инфографика в общей системе.",
      "A university presentation covering positioning, audience and digital communication. Photography, diagrams and infographics share one system."
    ]
  },
  "website-06": {
    "title": "Raveidea",
    "image": "portfolio/website-06-full.webp",
    "type": [
      "Сайт цифрового продукта",
      "Digital product website"
    ],
    "text": [
      "Сайт цифрового продукта: первый экран, интерфейсные изображения и блоки возможностей. Светлая палитра с фиолетовыми акцентами.",
      "A digital product website: hero, interface imagery and feature sections. A light palette with violet accents."
    ]
  },
  "identity-07": {
    "title": "HABITUÉ",
    "image": "portfolio/identity-07-full.webp",
    "type": [
      "Логотип и фирменный стиль",
      "Logo & visual identity"
    ],
    "text": [
      "Знак, цвет и типографика интерьерного бренда. Визуальная система показана на цифровых и физических носителях.",
      "A mark, colour and typography for an interiors brand. The visual system is shown on digital and physical applications."
    ]
  },
  "original-23": {
    "title": "Komodo Energy",
    "image": "portfolio/original-23-full.webp",
    "type": [
      "Инвестиционная презентация",
      "Investor presentation"
    ],
    "text": [
      "Инвестиционная презентация энергетического проекта: продукт, рынок и финансовые диаграммы. Синий и зелёный связывают схемы и данные.",
      "An energy project's investor presentation: product, market and financial charts. Blue and green connect diagrams and data."
    ]
  }
};
for(const item of [...websiteLibrary,...presentationLibrary])cases[item.id]=item;
const approvedReviews=[];
function renderReviews(){
 const section=document.getElementById('reviews'),list=document.getElementById('reviews-list');list.replaceChildren();
 const valid=approvedReviews.filter(r=>r.ownerApproved===true&&typeof r.author==='string'&&r.author.trim()&&typeof r.quote==='string'&&r.quote.trim()&&r.sourceUrl&&(()=>{try{return new URL(r.sourceUrl).protocol==='https:';}catch{return false;}})());
 section.hidden=valid.length===0;
 for(const r of valid){const article=document.createElement('article');article.className='review';const quote=document.createElement('blockquote');quote.textContent=r.quote;const author=document.createElement('p');author.className='review-author';author.textContent=r.author;const source=document.createElement('a');source.href=r.sourceUrl;source.target='_blank';source.rel='noopener noreferrer';source.textContent=r.sourceLabel||new URL(r.sourceUrl).hostname;article.append(quote,author,source);list.append(article);}
}

const dialog=document.getElementById('case-dialog');
const boardViewport=document.createElement('div');boardViewport.id='case-board-view';boardViewport.className='case-board-viewport';boardViewport.hidden=true;boardViewport.tabIndex=0;dialog.append(boardViewport);
const caseTools=document.createElement('div');caseTools.className='case-tools';caseTools.hidden=true;dialog.append(caseTools);
const caseDetail=dialog.querySelector('.case-detail'),caseContact=document.getElementById('case-contact');
const caseContext=document.createElement('details');caseContext.className='case-context';
const caseContextSummary=document.createElement('summary');caseContext.append(caseContextSummary,document.getElementById('case-description'));caseDetail.append(caseContext);
const caseZoom=document.createElement('button');caseZoom.type='button';caseZoom.className='button button-outline';caseZoom.id='case-zoom';caseZoom.setAttribute('aria-pressed','false');caseZoom.setAttribute('aria-controls','case-board-view');
const sourceDownload=document.createElement('a');sourceDownload.className='button button-outline';sourceDownload.id='case-source';caseTools.append(caseContact,caseZoom,sourceDownload);
function updateZoomLabel(){caseZoom.textContent=language==='ru'?(boardViewport.classList.contains('is-zoomed')?'Уместить целиком':'Увеличить макет'):(boardViewport.classList.contains('is-zoomed')?'Fit the full layout':'Enlarge layout');caseZoom.setAttribute('aria-pressed',String(boardViewport.classList.contains('is-zoomed')));const board=allCaseBoards[currentCase];if(board?.restored)sourceDownload.textContent=language==='ru'?'Скачать восстановленный макет':'Download restored layout';}
caseZoom.addEventListener('click',()=>{boardViewport.classList.toggle('is-zoomed');boardViewport.scrollTop=0;boardViewport.scrollLeft=0;updateZoomLabel();queueCaseFit();});
let caseFitFrame=0;
function queueCaseFit(){cancelAnimationFrame(caseFitFrame);caseFitFrame=requestAnimationFrame(fitCaseView);}
function fitCaseView(){
 if(!dialog.open||!dialog.classList.contains('has-case-board'))return;
 const canvas=boardViewport.querySelector('.case-board-canvas'),board=canvas?.querySelector('.case-board');if(!board)return;
 const screenWidth=window.visualViewport?.width||innerWidth,screenHeight=window.visualViewport?.height||innerHeight;
 const stacked=screenWidth<=760&&screenHeight>=560,gap=screenWidth<=760?8:20,pad=16;
 const limitWidth=Math.min(1440,screenWidth-gap*2),limitHeight=screenHeight-gap*2;
 dialog.classList.toggle('is-stacked',stacked);dialog.style.width=limitWidth+'px';dialog.style.height=limitHeight+'px';
 const referenceWidth=1200,referenceHeight=board.offsetHeight;
 const sideWidth=stacked?0:Math.min(280,Math.max(220,limitWidth*.32));
 dialog.style.setProperty('--case-side-width',sideWidth+'px');
 const infoHeight=caseDetail.getBoundingClientRect().height,toolsHeight=caseTools.getBoundingClientRect().height;
 const availableWidth=Math.max(80,limitWidth-sideWidth-pad*2);
 const availableHeight=Math.max(80,limitHeight-(stacked?infoHeight+toolsHeight:0)-pad*2);
 const scale=Math.min(1,availableWidth/referenceWidth,availableHeight/referenceHeight);
 const fitWidth=Math.floor(referenceWidth*scale),fitHeight=Math.floor(referenceHeight*scale);
 const zoomed=boardViewport.classList.contains('is-zoomed');
 canvas.style.width=(zoomed?referenceWidth:fitWidth)+'px';canvas.style.height=(zoomed?referenceHeight:fitHeight)+'px';
 board.style.transform='scale('+(zoomed?1:scale)+')';
 const frameWidth=stacked?limitWidth:fitWidth+pad*2+sideWidth;
 const frameHeight=stacked?fitHeight+pad*2+infoHeight+toolsHeight:Math.max(fitHeight+pad*2,infoHeight+toolsHeight);
 dialog.style.width=Math.ceil(frameWidth)+'px';dialog.style.height=Math.min(limitHeight,Math.ceil(frameHeight))+'px';
 dialog.scrollTop=0;dialog.dataset.fitReady='true';
}
caseContext.addEventListener('toggle',queueCaseFit);
window.addEventListener('resize',queueCaseFit);window.visualViewport?.addEventListener('resize',queueCaseFit);
document.fonts.ready.then(queueCaseFit);
const langValue=value=>Array.isArray(value)?value[language==='ru'?0:1]:value;
function fillCase(id){
 const c=cases[id],board=allCaseBoards[id];
 document.getElementById('case-title').textContent=langValue(c.title);document.getElementById('case-type').textContent=langValue(c.type);
 document.getElementById('case-description').textContent=board&&!board.preformatted&&!board.kind?(language==='ru'?'Полный макет в двух колонках: продолжение — справа. Разрез выбран между законченными блоками; пропорции и исходное разрешение сохранены.':'The complete layout in two columns; continue on the right. The split follows complete blocks, preserving proportions and source resolution.'):langValue(c.text);
 const img=document.getElementById('case-image');dialog.classList.toggle('has-case-board',Boolean(board));boardViewport.hidden=!board;caseTools.hidden=!board;boardViewport.classList.remove('is-zoomed');boardViewport.replaceChildren();img.hidden=Boolean(board);
 caseContextSummary.textContent=language==='ru'?'О проекте':'About this project';
 if(board){
  img.removeAttribute('src');const canvas=document.createElement('div');canvas.className='case-board-canvas';canvas.append(createCaseBoard(board,language));boardViewport.append(canvas);
  for(const asset of canvas.querySelectorAll('img'))asset.addEventListener('load',queueCaseFit,{once:true});
  sourceDownload.href='assets/'+board.source;sourceDownload.download=id+(board.reconstructed?'-reconstructed.webp':'-source-resolution.webp');sourceDownload.textContent=language==='ru'?(board.reconstructed?'Скачать раскладку':'Скачать макет'):'Download artwork';
  boardViewport.setAttribute('aria-label',language==='ru'?'Кейс целиком. Для просмотра деталей нажмите «Увеличить макет».':'Complete case. Choose Enlarge layout to inspect details.');updateZoomLabel();queueCaseFit();
 }else{img.src='assets/'+c.image;img.alt=langValue(c.title);}
}
for(const el of document.querySelectorAll('[data-case]'))el.addEventListener('click',()=>{currentCase=el.dataset.case;caseContext.open=innerWidth>760&&innerHeight>600;fillCase(currentCase);const image=document.getElementById('case-image'),width=cases[currentCase].width;image.style.maxWidth=Number.isFinite(width)?width+'px':'';image.style.marginInline='auto';dialog.showModal();dialog.scrollTop=0;boardViewport.scrollTop=0;boardViewport.scrollLeft=0;document.body.classList.add('dialog-open');fitCaseView();});
document.getElementById('dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');currentCase=null;});
document.getElementById('case-contact').addEventListener('click',()=>{dialog.close();requestAnimationFrame(()=>document.getElementById('contact').scrollIntoView({behavior:reducedMotionQuery.matches?'instant':'smooth'}));});
document.querySelectorAll('[data-service]').forEach(link=>link.addEventListener('click',()=>{const checkbox=[...document.querySelectorAll('input[name=service]')].find(input=>input.value===link.dataset.service);if(checkbox)checkbox.checked=true;}));
export function createBrief(fields,lang){const clean=v=>String(v??'').trim();const labels={website:lang==='ru'?'Сайт':'Website',direct:lang==='ru'?'Яндекс Директ':'Yandex Direct',seo:'SEO',design:lang==='ru'?'Дизайн':'Design',presentation:lang==='ru'?'Презентация':'Presentation'};return [lang==='ru'?'Бриф проекта — Харлампий':'Project brief — Harlampiy','',`${lang==='ru'?'Имя':'Name'}: ${clean(fields.name)}`,`${lang==='ru'?'Контакт':'Contact'}: ${clean(fields.contact)}`,`${lang==='ru'?'Услуги':'Services'}: ${(fields.services||[]).map(s=>labels[s]||s).join(', ')||'—'}`,'',clean(fields.task),'',lang==='ru'?'Бриф подготовлен локально. Автоматической отправки не было.':'Prepared locally. This brief has not been sent automatically.'].join('\n');}
document.getElementById('brief-form').addEventListener('submit',e=>{e.preventDefault();const form=e.currentTarget;if(!form.reportValidity())return;const data=new FormData(form);const values={name:data.get('name'),contact:data.get('contact'),task:data.get('task'),services:data.getAll('service')};const status=document.getElementById('form-status');if(!String(values.name).trim()||!String(values.contact).trim()||String(values.task).trim().length<10){status.textContent=language==='ru'?'Укажите имя, контакт и задачу не короче 10 символов.':'Add your name, contact and at least 10 characters about the task.';return;}try{const blob=new Blob(['\uFEFF'+createBrief(values,language)],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='Harlampiy-project-brief.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);status.textContent=language==='ru'?'Бриф подготовлен для скачивания. Теперь отправьте файл мне в Telegram или по почте.':'Your brief is ready to download. Send the file to me on Telegram or by email.';}catch{status.textContent=language==='ru'?'Браузер не смог скачать файл. Скопируйте введённый текст и отправьте его вручную.':'Your browser could not download the file. Copy the text and send it manually.';}});
const briefForm=document.getElementById('brief-form');
const briefToggle=document.createElement('button');briefToggle.type='button';briefToggle.id='brief-toggle';briefToggle.className='brief-mobile-toggle';briefToggle.setAttribute('aria-controls','brief-form');
const briefToggleLabel=document.createElement('span');briefToggle.append(briefToggleLabel);
const briefChevron=document.createElementNS('http://www.w3.org/2000/svg','svg');briefChevron.setAttribute('viewBox','0 0 24 24');briefChevron.setAttribute('aria-hidden','true');
const briefChevronPath=document.createElementNS('http://www.w3.org/2000/svg','path');briefChevronPath.setAttribute('d','m6 9 6 6 6-6');briefChevron.append(briefChevronPath);briefToggle.append(briefChevron);briefForm.before(briefToggle);
let mobileBriefOpen=false;
function updateBriefDisclosure(){const phone=mobileLayoutQuery.matches;briefToggle.hidden=!phone;briefForm.hidden=phone&&!mobileBriefOpen;briefToggle.setAttribute('aria-expanded',String(phone&&mobileBriefOpen));briefToggleLabel.textContent=language==='ru'?(mobileBriefOpen?'Свернуть бриф':'Заполнить бриф'):(mobileBriefOpen?'Close brief':'Fill in a brief');}
briefToggle.addEventListener('click',()=>{mobileBriefOpen=!mobileBriefOpen;updateBriefDisclosure();});
mobileLayoutQuery.addEventListener('change',e=>{const previousSize=e.matches?WORK_PAGE_SIZE:MOBILE_WORK_PAGE_SIZE,pages=Math.max(1,Math.ceil(visibleWorkLimit/previousSize));visibleWorkLimit=pages*workPageSize();updateWorkVisibility();updateBriefDisclosure();});
updateWorkVisibility();
applyLanguage();
// One restrained material response. Static on touch, reduced motion and hidden pages.
const heroArt=document.getElementById('hero-art');
const ticket=document.querySelector('.work-ticket');
const finePointer=matchMedia('(pointer: fine)');
heroArt.addEventListener('pointermove',event=>{if(reducedMotionQuery.matches||!finePointer.matches||document.hidden)return;const r=heroArt.getBoundingClientRect();const x=(event.clientX-r.left)/r.width-.5;const y=(event.clientY-r.top)/r.height-.5;ticket.style.transform=`translate(${x*7}px,${y*7}px)`;});
const resetMaterial=()=>{ticket.style.transform='';};
heroArt.addEventListener('pointerleave',resetMaterial);
reducedMotionQuery.addEventListener('change',resetMaterial);
document.addEventListener('visibilitychange',resetMaterial);
