// Generated display metadata; source paths/provenance remain private.
import {presentationLibrary} from './portfolio-library.js';
const projectPalettes={
 'original-17':['#e6f0e8','#7ecb9b','#d6e8d7','#143b2a'],
 'original-18':['#f4eddb','#f2c466','#dce4df','#27303d'],
 'original-19':['#e4ebe9','#84aaa5','#ead79e','#153c3c'],
 'original-20':['#f0e8ce','#d9ba5c','#e9e0c8','#3e3218'],
 'original-21':['#e3e9f5','#93a9e8','#a3ddd8','#172e60'],
 'original-22':['#ecece2','#b9c2a6','#dedbcc','#343e2d'],
 'original-23':['#e7eef5','#76a4ed','#b9e58c','#15283b'],
 'original-24':['#f4e8ce','#edbb68','#fff2ce','#332b1e'],
 'original-25':['#e9e8dc','#abd3c3','#e5b8a0','#1f3d36'],
 'original-26':['#edf1f8','#a9c9f2','#d6e2ef','#172c45'],
 'original-27':['#ece8df','#d1d5cb','#e5c3a3','#34332b'],
 'original-28':['#e9e5f5','#a9c6e5','#edbfd4','#302844'],
 'original-29':['#f3dfe5','#e8a6b8','#f6e9e3','#4b2231'],
 'original-30':['#e6ebf8','#9caee4','#d3e4c6','#152654'],
 'original-31':['#e9eccc','#d0df65','#d6d9d2','#2c3217'],
 'original-32':['#e6ecdd','#aacfa1','#e8e5cf','#243f2c'],
 'logo-04':['#f4ebae','#d5c34c','#fff5be','#2c2913'],
 'identity-01':['#e9e2e9','#b7a2c8','#d7c2a6','#302536'],
 'identity-02':['#d7d6cf','#a2a29b','#e7e5db','#252622'],
 'identity-07':['#eeebd8','#b6b5da','#e6d37c','#35324f']
};
const framedData=(item,kind)=>{const [base,start,end,ink]=projectPalettes[item.id];return {...item,kind,source:item.image,poster:'portfolio/'+item.id+'-poster-framed.webp',posterWidth:1200,posterHeight:1500,palette:{base,start,end,ink}};};
export const presentationBoardData=Object.fromEntries(presentationLibrary.map(item=>[item.id,framedData(item,'presentation')]));
export const identityBoardData=Object.fromEntries([
 {id:'logo-04',title:['ELEBUNNY','ELEBUNNY'],type:['Логотип','Logo'],image:'portfolio/logo-04-full.webp',width:1800,height:1041,kind:'logo'},
 {id:'identity-01',title:['VALO','VALO'],type:['Логотип и фирменный стиль','Logo & visual identity'],image:'portfolio/identity-01-full.webp',width:1800,height:1081,kind:'identity'},
 {id:'identity-02',title:['GALE','GALE'],type:['Логотип и фирменный стиль','Logo & visual identity'],image:'portfolio/identity-02-full.webp',width:1800,height:1081,kind:'identity'},
 {id:'identity-07',title:['HABITUÉ','HABITUÉ'],type:['Логотип и фирменный стиль','Logo & visual identity'],image:'portfolio/identity-07-full.webp',width:1260,height:757,kind:'identity'}
].map(item=>[item.id,framedData(item,item.kind)]));
export const caseBoardData={
 "site-001": {
  "id": "site-001",
  "title": [
   "Thai Cooking Class",
   "Thai Cooking Class"
  ],
  "type": [
   "Кулинарные мастер-классы",
   "Cooking classes"
  ],
  "width": 893,
  "height": 5358,
  "split": 2690,
  "source": "portfolio/site-001-source-lossless.webp",
  "poster": "portfolio/site-001-poster-brand.webp",
  "palette": {
   "base": "#e8e6d4",
   "start": "#aabb93",
   "end": "#d3bb94",
   "ink": "#263326"
  },
  "posterWidth": 1600,
  "posterHeight": 2685
 },
 "site-002": {
  "id": "site-002",
  "title": [
   "DVA BRO",
   "DVA BRO"
  ],
  "type": [
   "Барбершоп",
   "Barbershop"
  ],
  "width": 1117,
  "height": 5358,
  "split": 2884,
  "source": "portfolio/site-002-source-lossless.webp",
  "poster": "portfolio/site-002-poster-brand.webp",
  "palette": {
   "base": "#27231f",
   "start": "#60503a",
   "end": "#7f6946",
   "ink": "#fff8ec"
  },
  "posterWidth": 1600,
  "posterHeight": 2264
 },
 "site-003": {
  "id": "site-003",
  "title": [
   "Ремонт инструмента",
   "Tool repair"
  ],
  "type": [
   "Сервисный сайт",
   "Repair service"
  ],
  "width": 795,
  "height": 5358,
  "split": 2572,
  "source": "portfolio/site-003-source-lossless.webp",
  "poster": "portfolio/site-003-poster-brand.webp",
  "palette": {
   "base": "#c4d5dc",
   "start": "#7da2b4",
   "end": "#e4ddd0",
   "ink": "#102d3b"
  },
  "posterWidth": 1600,
  "posterHeight": 2935
 },
 "site-004": {
  "id": "site-004",
  "title": [
   "Daycoffee",
   "Daycoffee"
  ],
  "type": [
   "Уличные кофейни",
   "Coffee kiosks"
  ],
  "width": 1117,
  "height": 3346,
  "split": 1748,
  "source": "portfolio/site-004-source-lossless.webp",
  "poster": "portfolio/site-004-poster-brand.webp",
  "palette": {
   "base": "#dcc8ac",
   "start": "#ae8965",
   "end": "#eadccc",
   "ink": "#2c2019"
  },
  "posterWidth": 1600,
  "posterHeight": 1655
 },
 "site-005": {
  "id": "site-005",
  "title": [
   "bizark.ru",
   "bizark.ru"
  ],
  "type": [
   "Бизнес-консалтинг",
   "Business consulting"
  ],
  "width": 1400,
  "height": 4944,
  "split": 2471,
  "source": "portfolio/site-005-source-lossless.webp",
  "poster": "portfolio/site-005-poster-brand.webp",
  "palette": {
   "base": "#d0cfdc",
   "start": "#9191b9",
   "end": "#c2c1d7",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1840
 },
 "site-006": {
  "id": "site-006",
  "title": [
   "Mae-d’Agua Professional",
   "Mae-d’Agua Professional"
  ],
  "type": [
   "Уход за волосами",
   "Professional haircare"
  ],
  "width": 1400,
  "height": 7552,
  "split": 3474,
  "source": "portfolio/site-006-source-lossless.webp",
  "poster": "portfolio/site-006-poster-brand.webp",
  "palette": {
   "base": "#d1d1cf",
   "start": "#949799",
   "end": "#c4c4c5",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 2466
 },
 "site-007": {
  "id": "site-007",
  "title": [
   "XBRL Хаб",
   "XBRL Hub"
  ],
  "type": [
   "Финансовый B2B-сервис",
   "Financial B2B service"
  ],
  "width": 1400,
  "height": 2760,
  "split": 1360,
  "source": "portfolio/site-007-source-lossless.webp",
  "poster": "portfolio/site-007-poster-brand.webp",
  "palette": {
   "base": "#edf0f2",
   "start": "#dde8f2",
   "end": "#eef3f8",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1306
 },
 "site-008": {
  "id": "site-008",
  "title": [
   "Хостел на 3000 мест",
   "Staff accommodation"
  ],
  "type": [
   "Размещение сотрудников",
   "Staff accommodation"
  ],
  "width": 1400,
  "height": 8335,
  "split": 4309,
  "source": "portfolio/site-008-source-lossless.webp",
  "poster": "portfolio/site-008-poster-brand.webp",
  "palette": {
   "base": "#e9eded",
   "start": "#d4dfe7",
   "end": "#e9eef2",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 2667
 },
 "site-009": {
  "id": "site-009",
  "title": [
   "Pearl River",
   "Pearl River"
  ],
  "type": [
   "Международная логистика",
   "International logistics"
  ],
  "width": 1400,
  "height": 3135,
  "split": 1800,
  "source": "portfolio/site-009-source-lossless.webp",
  "poster": "portfolio/site-009-poster-brand.webp",
  "palette": {
   "base": "#c9e3ea",
   "start": "#80c6df",
   "end": "#b9e0ed",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1381
 },
 "site-010": {
  "id": "site-010",
  "title": [
   "Saland",
   "Saland"
  ],
  "type": [
   "Бренд бумажных стаканов",
   "Paper cup brand"
  ],
  "width": 1400,
  "height": 2653,
  "split": 1296,
  "source": "portfolio/site-010-source-lossless.webp",
  "poster": "portfolio/site-010-poster-brand.webp",
  "palette": {
   "base": "#e0e3e0",
   "start": "#bac6c5",
   "end": "#dadfde",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1280
 },
 "site-011": {
  "id": "site-011",
  "title": [
   "NAVAYANA",
   "NAVAYANA"
  ],
  "type": [
   "Торговля и логистика",
   "Trade & logistics"
  ],
  "width": 1400,
  "height": 2490,
  "split": 1225,
  "source": "portfolio/site-011-source-lossless.webp",
  "poster": "portfolio/site-011-poster-brand.webp",
  "palette": {
   "base": "#f4dfc9",
   "start": "#efba87",
   "end": "#f8d9bb",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1240
 },
 "site-012": {
  "id": "site-012",
  "title": [
   "Ruxing Auto",
   "Ruxing Auto"
  ],
  "type": [
   "Импорт автомобилей",
   "Car imports"
  ],
  "width": 1400,
  "height": 6046,
  "split": 2735,
  "source": "portfolio/site-012-source-lossless.webp",
  "poster": "portfolio/site-012-poster-brand.webp",
  "palette": {
   "base": "#c9e3cf",
   "start": "#7fc698",
   "end": "#b8dfc4",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 2096
 },
 "site-013": {
  "id": "site-013",
  "title": [
   "LT Modular Homes",
   "LT Modular Homes"
  ],
  "type": [
   "Модульные дома",
   "Modular homes"
  ],
  "width": 1400,
  "height": 6028,
  "split": 2797,
  "source": "portfolio/site-013-source-lossless.webp",
  "poster": "portfolio/site-013-poster-brand.webp",
  "palette": {
   "base": "#d4d2cb",
   "start": "#9c998e",
   "end": "#c9c6bf",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 2097
 },
 "site-014": {
  "id": "site-014",
  "title": [
   "Baby Face",
   "Baby Face"
  ],
  "type": [
   "Модельное агентство",
   "Modelling agency"
  ],
  "width": 1400,
  "height": 5392,
  "split": 2400,
  "source": "portfolio/site-014-source-lossless.webp",
  "poster": "portfolio/site-014-poster-brand.webp",
  "palette": {
   "base": "#1c161b",
   "start": "#20151f",
   "end": "#231123",
   "ink": "#fffaf2"
  },
  "posterWidth": 1600,
  "posterHeight": 1934
 },
 "site-015": {
  "id": "site-015",
  "title": [
   "Toy Rent",
   "Toy Rent"
  ],
  "type": [
   "Прокат детских игрушек",
   "Toy rental"
  ],
  "width": 1400,
  "height": 2524,
  "split": 1055,
  "source": "portfolio/site-015-source-lossless.webp",
  "poster": "portfolio/site-015-poster-brand.webp",
  "palette": {
   "base": "#f7f3d2",
   "start": "#f7f0a0",
   "end": "#fdf7c9",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1232
 },
 "site-016": {
  "id": "site-016",
  "title": [
   "LLM Arena",
   "LLM Arena"
  ],
  "type": [
   "AI-интеграция для бизнеса",
   "Business AI integration"
  ],
  "width": 1400,
  "height": 5258,
  "split": 2633,
  "source": "portfolio/site-016-source-lossless.webp",
  "poster": "portfolio/site-016-poster-brand.webp",
  "palette": {
   "base": "#c9ddf2",
   "start": "#7fb6f2",
   "end": "#b8d6f8",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1917
 },
 "site-017": {
  "id": "site-017",
  "title": [
   "ENETIS",
   "ENETIS"
  ],
  "type": [
   "Отопительное оборудование",
   "Heating equipment rental"
  ],
  "width": 1400,
  "height": 4645,
  "split": 2229,
  "source": "portfolio/site-017-source-lossless.webp",
  "poster": "portfolio/site-017-poster-brand.webp",
  "palette": {
   "base": "#f6dfc4",
   "start": "#f3bb7b",
   "end": "#fbd9b4",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1765
 },
 "site-018": {
  "id": "site-018",
  "title": [
   "Moving",
   "Moving"
  ],
  "type": [
   "Школа брейк-данса",
   "Breakdance school"
  ],
  "width": 1400,
  "height": 4624,
  "split": 2347,
  "source": "portfolio/site-018-source-lossless.webp",
  "poster": "portfolio/site-018-poster-brand.webp",
  "palette": {
   "base": "#e9f0f0",
   "start": "#d3e7ee",
   "end": "#e9f2f5",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1762
 },
 "site-019": {
  "id": "site-019",
  "title": [
   "Gelon Tech",
   "Gelon Tech"
  ],
  "type": [
   "Аренда автовышек",
   "Aerial lift rental"
  ],
  "width": 1400,
  "height": 4912,
  "split": 2244,
  "source": "portfolio/site-019-source-lossless.webp",
  "poster": "portfolio/site-019-poster-brand.webp",
  "palette": {
   "base": "#242519",
   "start": "#31341c",
   "end": "#3e421e",
   "ink": "#fffaf2"
  },
  "posterWidth": 1600,
  "posterHeight": 1823
 },
 "site-020": {
  "id": "site-020",
  "title": [
   "ОДС",
   "ODS"
  ],
  "type": [
   "Диспетчерская служба",
   "Dispatch service"
  ],
  "width": 1400,
  "height": 2940,
  "split": 1650,
  "source": "portfolio/site-020-source-lossless.webp",
  "poster": "portfolio/site-020-poster-brand.webp",
  "palette": {
   "base": "#d7d4ce",
   "start": "#a39e96",
   "end": "#cdc9c3",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1339
 },
 "site-021": {
  "id": "site-021",
  "title": [
   "DinoEgg",
   "DinoEgg"
  ],
  "type": [
   "Керамические грили",
   "Ceramic grills"
  ],
  "width": 1400,
  "height": 4993,
  "split": 2233,
  "source": "portfolio/site-021-source-lossless.webp",
  "poster": "portfolio/site-021-poster-brand.webp",
  "palette": {
   "base": "#dbdcc7",
   "start": "#afb283",
   "end": "#d4d4b8",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1838
 },
 "site-022": {
  "id": "site-022",
  "title": [
   "iFabrique — продажи",
   "iFabrique — sales"
  ],
  "type": [
   "CRM для продаж",
   "Sales CRM"
  ],
  "width": 1400,
  "height": 3542,
  "split": 1520,
  "source": "portfolio/site-022-source-lossless.webp",
  "poster": "portfolio/site-022-poster-brand.webp",
  "palette": {
   "base": "#151820",
   "start": "#141829",
   "end": "#101633",
   "ink": "#fffaf2"
  },
  "posterWidth": 1600,
  "posterHeight": 1480
 },
 "site-023": {
  "id": "site-023",
  "title": [
   "Club of Builders",
   "Club of Builders"
  ],
  "type": [
   "Сообщество строителей",
   "Builders’ community"
  ],
  "width": 1400,
  "height": 3507,
  "split": 1984,
  "source": "portfolio/site-023-source-lossless.webp",
  "poster": "portfolio/site-023-poster-brand.webp",
  "palette": {
   "base": "#cfe4e6",
   "start": "#8fc7d5",
   "end": "#c1e0e7",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1474
 },
 "site-024": {
  "id": "site-024",
  "title": [
   "iFabrique — клиники",
   "iFabrique — clinics"
  ],
  "type": [
   "Медицинский CRM-сервис",
   "Medical CRM"
  ],
  "width": 1400,
  "height": 3959,
  "split": 2071,
  "source": "portfolio/site-024-source-lossless.webp",
  "poster": "portfolio/site-024-poster-brand.webp",
  "palette": {
   "base": "#c9dbe4",
   "start": "#80b1cf",
   "end": "#b9d3e4",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1597
 },
 "site-025": {
  "id": "site-025",
  "title": [
   "SEO миллионер",
   "SEO Millionaire"
  ],
  "type": [
   "Онлайн-курс SEO",
   "Online SEO course"
  ],
  "width": 1400,
  "height": 2512,
  "split": 1421,
  "source": "portfolio/site-025-source-lossless.webp",
  "poster": "portfolio/site-025-poster-brand.webp",
  "palette": {
   "base": "#413425",
   "start": "#6b5233",
   "end": "#8b673c",
   "ink": "#fffaf2"
  },
  "posterWidth": 1600,
  "posterHeight": 1235
 },
 "site-026": {
  "id": "site-026",
  "title": [
   "СтройИндустрия",
   "StroyIndustriya"
  ],
  "type": [
   "Каркасные дома",
   "Timber-frame homes"
  ],
  "width": 1400,
  "height": 3461,
  "split": 2008,
  "source": "portfolio/site-026-source-lossless.webp",
  "poster": "portfolio/site-026-poster-brand.webp",
  "palette": {
   "base": "#d7d4c9",
   "start": "#a49d89",
   "end": "#cec8bc",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1456
 },
 "site-027": {
  "id": "site-027",
  "title": [
   "Даниял Шаллаев",
   "Daniyal Shallayev"
  ],
  "type": [
   "Тренер по тайскому боксу",
   "Muay Thai coach"
  ],
  "width": 1400,
  "height": 3127,
  "split": 1795,
  "source": "portfolio/site-027-source-lossless.webp",
  "poster": "portfolio/site-027-poster-brand.webp",
  "palette": {
   "base": "#211a16",
   "start": "#2b1d16",
   "end": "#351e14",
   "ink": "#fffaf2"
  },
  "posterWidth": 1600,
  "posterHeight": 1379
 },
 "site-028": {
  "id": "site-028",
  "title": [
   "StatFlow",
   "StatFlow"
  ],
  "type": [
   "Аналитика маркетплейсов",
   "Marketplace analytics"
  ],
  "width": 1400,
  "height": 2025,
  "split": 695,
  "source": "portfolio/site-028-source-lossless.webp",
  "poster": "portfolio/site-028-poster-brand.webp",
  "palette": {
   "base": "#edcbe3",
   "start": "#dd87cb",
   "end": "#eebbe2",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1078
 },
 "site-029": {
  "id": "site-029",
  "title": [
   "95 agency",
   "95 agency"
  ],
  "type": [
   "Продвижение в Google Maps",
   "Google Maps promotion"
  ],
  "width": 1400,
  "height": 3076,
  "split": 1383,
  "source": "portfolio/site-029-source-lossless.webp",
  "poster": "portfolio/site-029-poster-brand.webp",
  "palette": {
   "base": "#cdd3da",
   "start": "#8a9bb5",
   "end": "#bec7d5",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1376
 },
 "site-030": {
  "id": "site-030",
  "title": [
   "SLIMTEC",
   "SLIMTEC"
  ],
  "type": [
   "Бренд видеорегистраторов",
   "Dashcam brand"
  ],
  "width": 1400,
  "height": 3227,
  "split": 1443,
  "source": "portfolio/site-030-source-lossless.webp",
  "poster": "portfolio/site-030-poster-brand.webp",
  "palette": {
   "base": "#eff4e6",
   "start": "#e3f0d3",
   "end": "#f1f8e6",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1412
 },
 "site-031": {
  "id": "site-031",
  "title": [
   "MpHub",
   "MpHub"
  ],
  "type": [
   "Продажи на маркетплейсах",
   "Marketplace services"
  ],
  "width": 1400,
  "height": 2298,
  "split": 1176,
  "source": "portfolio/site-031-source-lossless.webp",
  "poster": "portfolio/site-031-poster-brand.webp",
  "palette": {
   "base": "#ccdadd",
   "start": "#87aebc",
   "end": "#bdd2d9",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1193
 },
 "site-032": {
  "id": "site-032",
  "title": [
   "Николай Баранов",
   "Nikolay Baranov"
  ],
  "type": [
   "Психотерапевт и курсы",
   "Therapist & courses"
  ],
  "width": 1400,
  "height": 3965,
  "split": 1702,
  "source": "portfolio/site-032-source-lossless.webp",
  "poster": "portfolio/site-032-poster-brand.webp",
  "palette": {
   "base": "#e8cecf",
   "start": "#d08f97",
   "end": "#e7c0c4",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1581
 },
 "site-033": {
  "id": "site-033",
  "title": [
   "ART GO",
   "ART GO"
  ],
  "type": [
   "Студия рисования",
   "Art studio"
  ],
  "width": 1400,
  "height": 4056,
  "split": 1859,
  "source": "portfolio/site-033-source-lossless.webp",
  "poster": "portfolio/site-033-poster-brand.webp",
  "palette": {
   "base": "#d5e0e4",
   "start": "#9dbdd0",
   "end": "#c9dae4",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1616
 },
 "site-034": {
  "id": "site-034",
  "title": [
   "СК Амарант",
   "Amarant"
  ],
  "type": [
   "Коммерческая недвижимость",
   "Commercial property"
  ],
  "width": 1400,
  "height": 3976,
  "split": 2195,
  "source": "portfolio/site-034-source-lossless.webp",
  "poster": "portfolio/site-034-poster-brand.webp",
  "palette": {
   "base": "#d5dee7",
   "start": "#9db8d5",
   "end": "#cad7e7",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1593
 },
 "site-035": {
  "id": "site-035",
  "title": [
   "ЭКСПОТ",
   "EXPOT"
  ],
  "type": [
   "Охрана труда",
   "Workplace safety"
  ],
  "width": 1400,
  "height": 3730,
  "split": 1982,
  "source": "portfolio/site-035-source-lossless.webp",
  "poster": "portfolio/site-035-poster-brand.webp",
  "palette": {
   "base": "#ccd1d2",
   "start": "#8895a0",
   "end": "#bdc3c9",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1540
 },
 "site-036": {
  "id": "site-036",
  "title": [
   "Чекмейт",
   "Checkmate"
  ],
  "type": [
   "Онлайн-школа шахмат",
   "Online chess school"
  ],
  "width": 1400,
  "height": 3936,
  "split": 2160,
  "source": "portfolio/site-036-source-lossless.webp",
  "poster": "portfolio/site-036-poster-brand.webp",
  "palette": {
   "base": "#40372a",
   "start": "#6a563c",
   "end": "#836947",
   "ink": "#fffaf2"
  },
  "posterWidth": 1600,
  "posterHeight": 1585
 },
 "site-037": {
  "id": "site-037",
  "title": [
   "Mister Glushitel",
   "Mister Glushitel"
  ],
  "type": [
   "Тюнинг выхлопных систем",
   "Exhaust tuning"
  ],
  "width": 1400,
  "height": 3305,
  "split": 1467,
  "source": "portfolio/site-037-source-lossless.webp",
  "poster": "portfolio/site-037-poster-brand.webp",
  "palette": {
   "base": "#c9d4e6",
   "start": "#7f9fd5",
   "end": "#b8c9e7",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1429
 },
 "site-038": {
  "id": "site-038",
  "title": [
   "Система Сервис",
   "Sistema Service"
  ],
  "type": [
   "Карьерный сайт",
   "Careers website"
  ],
  "width": 1400,
  "height": 3673,
  "split": 1920,
  "source": "portfolio/site-038-source-lossless.webp",
  "poster": "portfolio/site-038-poster-brand.webp",
  "palette": {
   "base": "#401a1b",
   "start": "#691d20",
   "end": "#941e24",
   "ink": "#fffaf2"
  },
  "posterWidth": 1600,
  "posterHeight": 1528
 },
 "site-039": {
  "id": "site-039",
  "title": [
   "WEIL",
   "WEIL"
  ],
  "type": [
   "Чат-боты для бизнеса",
   "Business chatbots"
  ],
  "width": 1400,
  "height": 2096,
  "split": 1062,
  "source": "portfolio/site-039-source-lossless.webp",
  "poster": "portfolio/site-039-poster-brand.webp",
  "palette": {
   "base": "#21172d",
   "start": "#2c1643",
   "end": "#35145a",
   "ink": "#fffaf2"
  },
  "posterWidth": 1600,
  "posterHeight": 1144
 },
 "site-040": {
  "id": "site-040",
  "title": [
   "PROFI KAT",
   "PROFI KAT"
  ],
  "type": [
   "Автосервис",
   "Automotive service"
  ],
  "width": 1400,
  "height": 2026,
  "split": 883,
  "source": "portfolio/site-040-source-lossless.webp",
  "poster": "portfolio/site-040-poster-brand.webp",
  "palette": {
   "base": "#394144",
   "start": "#5a6a71",
   "end": "#5e7078",
   "ink": "#fffaf2"
  },
  "posterWidth": 1600,
  "posterHeight": 1119
 },
 "site-041": {
  "id": "site-041",
  "title": [
   "STOMILUX",
   "STOMILUX"
  ],
  "type": [
   "Товары для стоматологий",
   "Dental practice products"
  ],
  "width": 1400,
  "height": 4107,
  "split": 2255,
  "source": "portfolio/site-041-source-lossless.webp",
  "poster": "portfolio/site-041-poster-brand.webp",
  "palette": {
   "base": "#d3ede1",
   "start": "#99dfc6",
   "end": "#c7eedf",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1626
 },
 "site-042": {
  "id": "site-042",
  "title": [
   "LegalTask.me",
   "LegalTask.me"
  ],
  "type": [
   "Юридическая подписка",
   "Legal subscription service"
  ],
  "width": 1400,
  "height": 2436,
  "split": 1401,
  "source": "portfolio/site-042-source-lossless.webp",
  "poster": "portfolio/site-042-poster-brand.webp",
  "palette": {
   "base": "#1a3936",
   "start": "#1d5a56",
   "end": "#1e7d78",
   "ink": "#fffaf2"
  },
  "posterWidth": 1600,
  "posterHeight": 1213
 },
 "site-043": {
  "id": "site-043",
  "title": [
   "MasterKat",
   "MasterKat"
  ],
  "type": [
   "Автосервис",
   "Automotive service"
  ],
  "width": 1400,
  "height": 2981,
  "split": 1382,
  "source": "portfolio/site-043-source-lossless.webp",
  "poster": "portfolio/site-043-poster-brand.webp",
  "palette": {
   "base": "#d1dae9",
   "start": "#93afdb",
   "end": "#c4d2eb",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1356
 },
 "site-044": {
  "id": "site-044",
  "title": [
   "Hapica",
   "Hapica"
  ],
  "type": [
   "Электрические зубные щётки",
   "Electric toothbrushes"
  ],
  "width": 1400,
  "height": 2890,
  "split": 1600,
  "source": "portfolio/site-044-source-lossless.webp",
  "poster": "portfolio/site-044-poster-brand.webp",
  "palette": {
   "base": "#d0e9e1",
   "start": "#92d4c6",
   "end": "#c3e7df",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1330
 },
 "site-045": {
  "id": "site-045",
  "title": [
   "ВЕНТА",
   "VENTA"
  ],
  "type": [
   "Вентиляция и дымоходы",
   "Ventilation services"
  ],
  "width": 1400,
  "height": 2298,
  "split": 1397,
  "source": "portfolio/site-045-source-lossless.webp",
  "poster": "portfolio/site-045-poster-brand.webp",
  "palette": {
   "base": "#cfd5dd",
   "start": "#8f9fbc",
   "end": "#c1c9d9",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1167
 },
 "site-047": {
  "id": "site-047",
  "title": [
   "КАСКАД",
   "KASKAD"
  ],
  "type": [
   "Юридический центр",
   "Legal practice"
  ],
  "width": 1400,
  "height": 2378,
  "split": 1354,
  "source": "portfolio/site-047-source-lossless.webp",
  "poster": "portfolio/site-047-poster-brand.webp",
  "palette": {
   "base": "#d3cfc7",
   "start": "#999082",
   "end": "#c7c1b8",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1202
 },
 "site-048": {
  "id": "site-048",
  "title": [
   "Sales-Report",
   "Sales-Report"
  ],
  "type": [
   "Аналитика маркетплейсов",
   "Marketplace analytics"
  ],
  "width": 1400,
  "height": 2625,
  "split": 1286,
  "source": "portfolio/site-048-source-lossless.webp",
  "poster": "portfolio/site-048-poster-brand.webp",
  "palette": {
   "base": "#d6cbd9",
   "start": "#a187b1",
   "end": "#ccbbd3",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1273
 },
 "site-049": {
  "id": "site-049",
  "title": [
   "Вектор",
   "Vector"
  ],
  "type": [
   "Вебинар по безопасности",
   "Information security webinar"
  ],
  "width": 1400,
  "height": 1261,
  "split": 721,
  "source": "portfolio/site-049-source-lossless.webp",
  "poster": "portfolio/site-049-poster-brand.webp",
  "palette": {
   "base": "#191d17",
   "start": "#1b2218",
   "end": "#1c2717",
   "ink": "#fffaf2"
  },
  "posterWidth": 1600,
  "posterHeight": 933
 },
 "site-050": {
  "id": "site-050",
  "title": [
   "Upside Academy",
   "Upside Academy"
  ],
  "type": [
   "Образовательный клуб",
   "Education club"
  ],
  "width": 1400,
  "height": 2963,
  "split": 1123,
  "source": "portfolio/site-050-source-lossless.webp",
  "poster": "portfolio/site-050-poster-brand.webp",
  "palette": {
   "base": "#e1e9f2",
   "start": "#bdd4f3",
   "end": "#dce8f8",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1313
 },
 "site-051": {
  "id": "site-051",
  "title": [
   "Юридический центр",
   "Legal practice"
  ],
  "type": [
   "Возмещение ущерба",
   "Property damage claims"
  ],
  "width": 1400,
  "height": 2894,
  "split": 1590,
  "source": "portfolio/site-051-source-lossless.webp",
  "poster": "portfolio/site-051-poster-brand.webp",
  "palette": {
   "base": "#d3d4d2",
   "start": "#989ea0",
   "end": "#c6c9c9",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1332
 },
 "site-052": {
  "id": "site-052",
  "title": [
   "Update Clinic",
   "Update Clinic"
  ],
  "type": [
   "Косметология",
   "Aesthetic clinic"
  ],
  "width": 1400,
  "height": 2897,
  "split": 1523,
  "source": "portfolio/site-052-source-lossless.webp",
  "poster": "portfolio/site-052-poster-brand.webp",
  "palette": {
   "base": "#f6ece4",
   "start": "#f3decf",
   "end": "#fbede4",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1338
 },
 "site-053": {
  "id": "site-053",
  "title": [
   "DS Electronics",
   "DS Electronics"
  ],
  "type": [
   "Каталог терморегуляторов",
   "Thermostat catalogue"
  ],
  "width": 1400,
  "height": 2972,
  "split": 1363,
  "source": "portfolio/site-053-source-lossless.webp",
  "poster": "portfolio/site-053-poster-brand.webp",
  "palette": {
   "base": "#f7e9cb",
   "start": "#f6d58c",
   "end": "#fde8bd",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1353
 },
 "site-054": {
  "id": "site-054",
  "title": [
   "Территория роста — Здоровье 2.0",
   "Territory of Growth — Health 2.0"
  ],
  "type": [
   "Сайт конференции",
   "Conference website"
  ],
  "width": 1400,
  "height": 3996,
  "split": 1955,
  "source": "portfolio/site-054-source-lossless.webp",
  "poster": "portfolio/site-054-poster-brand.webp",
  "palette": {
   "base": "#e1ced6",
   "start": "#bc8faa",
   "end": "#dbc0cf",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1608
 },
 "site-056": {
  "id": "site-056",
  "title": [
   "Grava Bau",
   "Grava Bau"
  ],
  "type": [
   "Ремонт и строительство",
   "Renovation & construction"
  ],
  "width": 1400,
  "height": 3558,
  "split": 1748,
  "source": "portfolio/site-056-source-lossless.webp",
  "poster": "portfolio/site-056-poster-brand.webp",
  "palette": {
   "base": "#e0dbd4",
   "start": "#bcb1a4",
   "end": "#dbd3cb",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1501
 },
 "site-057": {
  "id": "site-057",
  "title": [
   "English Papa",
   "English Papa"
  ],
  "type": [
   "Школа английского языка",
   "English language school"
  ],
  "width": 1400,
  "height": 2492,
  "split": 1259,
  "source": "portfolio/site-057-source-lossless.webp",
  "poster": "portfolio/site-057-poster-brand.webp",
  "palette": {
   "base": "#f5efd7",
   "start": "#f1e4ad",
   "end": "#faf1d0",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1241
 },
 "site-058": {
  "id": "site-058",
  "title": [
   "EVOSIZ",
   "EVOSIZ"
  ],
  "type": [
   "Защитная спецодежда",
   "Protective workwear"
  ],
  "width": 1400,
  "height": 2562,
  "split": 1289,
  "source": "portfolio/site-058-source-lossless.webp",
  "poster": "portfolio/site-058-poster-brand.webp",
  "palette": {
   "base": "#d8d4d3",
   "start": "#a69ea2",
   "end": "#cfc8ca",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1258
 },
 "site-059": {
  "id": "site-059",
  "title": [
   "От недоверия к близости",
   "From Distrust to Intimacy"
  ],
  "type": [
   "Психологический марафон",
   "Psychology programme"
  ],
  "width": 1400,
  "height": 2257,
  "split": 1030,
  "source": "portfolio/site-059-source-lossless.webp",
  "poster": "portfolio/site-059-poster-brand.webp",
  "palette": {
   "base": "#d9d1cb",
   "start": "#a9978e",
   "end": "#d1c5be",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1179
 },
 "site-060": {
  "id": "site-060",
  "title": [
   "Невзорова и партнёры",
   "Nevzorova & Partners"
  ],
  "type": [
   "Арбитраж и взыскание долгов",
   "Commercial litigation"
  ],
  "width": 1400,
  "height": 3798,
  "split": 2003,
  "source": "portfolio/site-060-source-lossless.webp",
  "poster": "portfolio/site-060-poster-brand.webp",
  "palette": {
   "base": "#f6ebc8",
   "start": "#f5da86",
   "end": "#fcebba",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1557
 },
 "site-061": {
  "id": "site-061",
  "title": [
   "24 часа",
   "24 Hours"
  ],
  "type": [
   "Финансовый агрегатор",
   "Financial comparison website"
  ],
  "width": 1400,
  "height": 4004,
  "split": 2011,
  "source": "portfolio/site-061-source-lossless.webp",
  "poster": "portfolio/site-061-poster-brand.webp",
  "palette": {
   "base": "#f7eccb",
   "start": "#f6dc8c",
   "end": "#fdecbe",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1610
 },
 "site-062": {
  "id": "site-062",
  "title": [
   "Trust Capital",
   "Trust Capital"
  ],
  "type": [
   "Инвестиционная платформа",
   "Investment platform"
  ],
  "width": 1400,
  "height": 3799,
  "split": 2320,
  "source": "portfolio/site-062-source-lossless.webp",
  "poster": "portfolio/site-062-poster-brand.webp",
  "palette": {
   "base": "#c9ccce",
   "start": "#868d9a",
   "end": "#b8bcc2",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1515
 },
 "site-064": {
  "id": "site-064",
  "title": [
   "Через самовыражение",
   "Through Self-expression"
  ],
  "type": [
   "Психологический марафон",
   "Psychology programme"
  ],
  "width": 1400,
  "height": 3555,
  "split": 1991,
  "source": "portfolio/site-064-source-lossless.webp",
  "poster": "portfolio/site-064-poster-brand.webp",
  "palette": {
   "base": "#c9e5dc",
   "start": "#7fc9b9",
   "end": "#b8e1d7",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1488
 },
 "site-065": {
  "id": "site-065",
  "title": [
   "АРТ ГРУПП",
   "ART GROUP"
  ],
  "type": [
   "Ремонт ворот и рольставен",
   "Gate & shutter repairs"
  ],
  "width": 1400,
  "height": 3931,
  "split": 1951,
  "source": "portfolio/site-065-source-lossless.webp",
  "poster": "portfolio/site-065-poster-brand.webp",
  "palette": {
   "base": "#f6ebc7",
   "start": "#f5db83",
   "end": "#fcebb8",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1592
 },
 "site-066": {
  "id": "site-066",
  "title": [
   "Теория гипноза",
   "Hypnosis Theory"
  ],
  "type": [
   "Образовательный курс",
   "Online course"
  ],
  "width": 1400,
  "height": 3496,
  "split": 1721,
  "source": "portfolio/site-066-source-lossless.webp",
  "poster": "portfolio/site-066-poster-brand.webp",
  "palette": {
   "base": "#c9cbcd",
   "start": "#858b97",
   "end": "#b8bbc1",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1486
 },
 "site-067": {
  "id": "site-067",
  "title": [
   "Театр одного психолога",
   "One Psychologist’s Theatre"
  ],
  "type": [
   "Сайт мероприятия",
   "Event website"
  ],
  "width": 1400,
  "height": 2274,
  "split": 1194,
  "source": "portfolio/site-067-source-lossless.webp",
  "poster": "portfolio/site-067-poster-brand.webp",
  "palette": {
   "base": "#d3d0c9",
   "start": "#989289",
   "end": "#c7c2bc",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1186
 },
 "site-068": {
  "id": "site-068",
  "title": [
   "Лояльность 360",
   "Loyalty 360"
  ],
  "type": [
   "Бизнес-практикум",
   "Business workshop"
  ],
  "width": 1400,
  "height": 2578,
  "split": 915,
  "source": "portfolio/site-068-source-lossless.webp",
  "poster": "portfolio/site-068-poster-brand.webp",
  "palette": {
   "base": "#edd8d2",
   "start": "#dda8a0",
   "end": "#eecec9",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1209
 },
 "site-069": {
  "id": "site-069",
  "title": [
   "Основа",
   "Osnova"
  ],
  "type": [
   "Психологический вебинар",
   "Psychology webinar"
  ],
  "width": 1400,
  "height": 1846,
  "split": 698,
  "source": "portfolio/site-069-source-lossless.webp",
  "poster": "portfolio/site-069-poster-brand.webp",
  "palette": {
   "base": "#d3d0cc",
   "start": "#99938f",
   "end": "#c7c2bf",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1056
 },
 "website-01": {
  "id": "website-01",
  "title": "Memorabilia Market",
  "type": [
   "Сайт-каталог",
   "Catalogue website"
  ],
  "width": 1360,
  "height": 1926,
  "split": 883,
  "source": "portfolio/website-01-source-lossless.webp",
  "poster": "portfolio/website-01-poster-brand.webp",
  "palette": {
   "base": "#cbcdcc",
   "start": "#848c8f",
   "end": "#bbbebf",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1113
 },
 "website-02": {
  "id": "website-02",
  "title": "Andriy.dev",
  "type": [
   "Персональный сайт",
   "Personal website"
  ],
  "width": 1360,
  "height": 5568,
  "split": 2926,
  "source": "portfolio/website-02-source-lossless.webp",
  "poster": "portfolio/website-02-poster-brand.webp",
  "palette": {
   "base": "#e8eff1",
   "start": "#cfe5f2",
   "end": "#e6f1f8",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 2029
 },
 "website-05": {
  "id": "website-05",
  "title": "The Red Phone",
  "type": [
   "Лендинг",
   "Landing page"
  ],
  "width": 1360,
  "height": 8922,
  "split": 4543,
  "source": "portfolio/website-05-source-lossless.webp",
  "poster": "portfolio/website-05-poster-brand.webp",
  "palette": {
   "base": "#d8cac7",
   "start": "#a68482",
   "end": "#ceb9b8",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 2876
 },
 "website-06": {
  "id": "website-06",
  "title": "Raveidea",
  "type": [
   "Сайт цифрового продукта",
   "Digital product website"
  ],
  "width": 1360,
  "height": 5274,
  "split": 2745,
  "source": "portfolio/website-06-source-lossless.webp",
  "poster": "portfolio/website-06-poster-brand.webp",
  "palette": {
   "base": "#c9c9cf",
   "start": "#85889c",
   "end": "#b8b8c4",
   "ink": "#17201e"
  },
  "posterWidth": 1600,
  "posterHeight": 1956
 },
 "site-ilearn": {
  "id": "site-ilearn",
  "title": [
   "ILearn Chinese",
   "ILearn Chinese"
  ],
  "type": [
   "Школа китайского языка",
   "Chinese language school"
  ],
  "source": "portfolio/site-ilearn-restored.webp",
  "width": 945,
  "height": 1664,
  "preformatted": true,
  "poster": "portfolio/site-ilearn-poster.webp",
  "originalSource": "portfolio/site-ilearn-source-lossless.webp",
  "restored": true,
  "posterWidth": 1600,
  "posterHeight": 2817
 }
};
