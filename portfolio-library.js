// Owner-supplied website artwork. Descriptions concern visible layouts, not live launches or results.
// The original neutral montages remain unchanged; reconstructed cases are labelled below.
const neutralPresentationEntries=[
 [29,'MAMMORISK','Медицинская презентация','Healthcare presentation',680,410,'Медицинский проект: постановка задачи, аудитория и подача решения. Розово-белая палитра и ровная сетка слайдов.','A healthcare project: problem, audience and proposed solution. A pink-and-white palette and straight slide grid.'],
 [24,'Realta Systems','Технологическая презентация','Technology presentation',2880,2160,'Робототехника и энергетика: схема продукта, преимущества и дорожная карта.','Robotics and energy: product diagrams, benefits and a roadmap.'],
 [25,'Fortino Ventures','Инвестиционная презентация','Investor presentation',1260,761,'Инвестиционный фонд: позиционирование, портфель, данные и география.','An investment fund: positioning, portfolio, data and geography.'],
 [23,'Komodo Energy','Инвестиционная презентация','Investor presentation',3823,2307,'Энергетический проект: продукт, рынок и финансовые диаграммы. Слайды показаны в ровной сетке.','An energy project: product, market and financial charts, presented in a straight grid.'],
 [26,'UNLOCKLAND','Презентация сервиса','Service presentation',1260,761,'Сервис для недвижимости: рынок, возможности продукта и бизнес-модель.','A property service: market, product capabilities and business model.'],
 [27,'Replaceable','Технологическая презентация','Technology presentation',680,410,'Промышленный AI: продукт, рабочие процессы и команда.','Industrial AI: product, workflows and team.'],
 [28,'Arts & Brain Health','Образовательная презентация','Educational presentation',680,410,'Искусство и работа мозга: изображения, схемы и визуальное объяснение темы.','Art and brain health: imagery, diagrams and visual explanation.'],
 [30,'HealthBook','Презентация продукта','Product presentation',680,410,'Цифровой медицинский продукт: функции, показатели и команда.','A digital healthcare product: features, metrics and team.'],
 [31,'HYRD','Презентация продукта','Product presentation',680,410,'Сервис найма: позиционирование, интерфейс и продвижение продукта.','A hiring service: positioning, interface and go-to-market presentation.'],
 [32,'Philadelphia','Социальная презентация','Social initiative presentation',680,410,'Инициатива экономической мобильности: контекст, данные и направление развития.','An economic mobility initiative: context, data and future direction.']
];
const reconstructedPresentationEntries=[
 [17,'Berachain','Презентация NFT-платформы','NFT platform presentation',1162,'Чёрно-зелёная презентация платформы: продукт, сообщество и визуальная система.','A black-and-green platform presentation: product, community and visual system.'],
 [18,'Oply','Презентация умного дома','Smart-home presentation',1162,'Презентация умного дома: интерфейсы приложения, сценарии работы и инфографика.','A smart-home presentation: app interfaces, workflows and infographics.'],
 [19,'IBU','Презентация университета','University presentation',1162,'Презентация университета: позиционирование, аудитория и коммуникации.','A university presentation: positioning, audience and communications.'],
 [20,'DeFi','Презентация цифрового продукта','Digital product presentation',1162,'Чёрно-золотая презентация цифрового продукта: интерфейсы, диаграммы и структура предложения.','A black-and-gold digital product presentation: interfaces, diagrams and offer structure.'],
 [21,'Genius Ventures','Инвестиционная презентация','Investor presentation',1163,'Технологическая презентация: игровой рынок, AI и визуализация стратегии.','A technology presentation: gaming, AI and strategy visualization.'],
 [22,'Vitaloop','Презентация продукта','Product presentation',1163,'Презентация продукта: предметная съёмка, сценарии использования и сравнительная инфографика.','A product presentation: product imagery, use cases and comparison infographics.']
];
export const presentationLibrary=[
 ...neutralPresentationEntries.map(([n,title,ruType,enType,width,height,ruText,enText])=>({id:'original-'+n,title:[title,title],type:[ruType,enType],text:[ruText,enText],category:'presentation',width,height,image:'portfolio/original-'+n+'-neutral-full.webp',preview:'portfolio/original-'+n+'-neutral-preview.webp'})),
 ...reconstructedPresentationEntries.map(([n,title,ruType,enType,height,ruText,enText])=>({
  id:'original-'+n,title:[title,title],type:[ruType,enType],
  text:[ruText+' Раскладка восстановлена из наклонного коллажа; мелкий текст и детали частично перерисованы. Показан пример оформления, а не подтверждённые показатели проекта.',enText+' Reconstructed from a tilted collage; small text and details are partially redrawn. This is a visual example, not verified project performance.'],
  category:'presentation',width:1353,height,reconstructed:true,
  image:'portfolio/original-'+n+'-reconstructed-full.webp',preview:'portfolio/original-'+n+'-reconstructed-preview.webp'
 }))
];
const entries=[
 ['001','Thai Cooking Class','Thai Cooking Class','Кулинарные мастер-классы','Cooking classes'],
 ['002','DVA BRO','DVA BRO','Барбершоп','Barbershop'],
 ['003','Ремонт инструмента','Tool repair','Сервисный сайт','Repair service'],
 ['004','Daycoffee','Daycoffee','Уличные кофейни','Coffee kiosks'],
 ['005','bizark.ru','bizark.ru','Бизнес-консалтинг','Business consulting'],
 ['006','Mae-d’Agua Professional','Mae-d’Agua Professional','Уход за волосами','Professional haircare'],
 ['007','XBRL Хаб','XBRL Hub','Финансовый B2B-сервис','Financial B2B service'],
 ['008','Хостел на 3000 мест','Staff accommodation','Размещение сотрудников','Staff accommodation'],
 ['009','Pearl River','Pearl River','Международная логистика','International logistics'],
 ['010','Saland','Saland','Бренд бумажных стаканов','Paper cup brand'],
 ['011','NAVAYANA','NAVAYANA','Торговля и логистика','Trade & logistics'],
 ['012','Ruxing Auto','Ruxing Auto','Импорт автомобилей','Car imports'],
 ['013','LT Modular Homes','LT Modular Homes','Модульные дома','Modular homes'],
 ['014','Baby Face','Baby Face','Модельное агентство','Modelling agency'],
 ['015','Toy Rent','Toy Rent','Прокат детских игрушек','Toy rental'],
 ['016','LLM Arena','LLM Arena','AI-интеграция для бизнеса','Business AI integration'],
 ['017','ENETIS','ENETIS','Отопительное оборудование','Heating equipment rental'],
 ['018','Moving','Moving','Школа брейк-данса','Breakdance school'],
 ['019','Gelon Tech','Gelon Tech','Аренда автовышек','Aerial lift rental'],
 ['020','ОДС','ODS','Диспетчерская служба','Dispatch service'],
 ['021','DinoEgg','DinoEgg','Керамические грили','Ceramic grills'],
 ['022','iFabrique — продажи','iFabrique — sales','CRM для продаж','Sales CRM'],
 ['023','Club of Builders','Club of Builders','Сообщество строителей','Builders’ community'],
 ['024','iFabrique — клиники','iFabrique — clinics','Медицинский CRM-сервис','Medical CRM'],
 ['025','SEO миллионер','SEO Millionaire','Онлайн-курс SEO','Online SEO course'],
 ['026','СтройИндустрия','StroyIndustriya','Каркасные дома','Timber-frame homes'],
 ['027','Даниял Шаллаев','Daniyal Shallayev','Тренер по тайскому боксу','Muay Thai coach'],
 ['028','StatFlow','StatFlow','Аналитика маркетплейсов','Marketplace analytics'],
 ['029','95 agency','95 agency','Продвижение в Google Maps','Google Maps promotion'],
 ['030','SLIMTEC','SLIMTEC','Бренд видеорегистраторов','Dashcam brand'],
 ['031','MpHub','MpHub','Продажи на маркетплейсах','Marketplace services'],
 ['032','Николай Баранов','Nikolay Baranov','Психотерапевт и курсы','Therapist & courses'],
 ['033','ART GO','ART GO','Студия рисования','Art studio'],
 ['034','СК Амарант','Amarant','Коммерческая недвижимость','Commercial property'],
 ['035','ЭКСПОТ','EXPOT','Охрана труда','Workplace safety'],
 ['036','Чекмейт','Checkmate','Онлайн-школа шахмат','Online chess school'],
 ['037','Mister Glushitel','Mister Glushitel','Тюнинг выхлопных систем','Exhaust tuning'],
 ['038','Система Сервис','Sistema Service','Карьерный сайт','Careers website'],
 ['039','WEIL','WEIL','Чат-боты для бизнеса','Business chatbots'],
 ['040','PROFI KAT','PROFI KAT','Автосервис','Automotive service'],
 ['041','STOMILUX','STOMILUX','Товары для стоматологий','Dental practice products'],
 ['042','LegalTask.me','LegalTask.me','Юридическая подписка','Legal subscription service'],
 ['043','MasterKat','MasterKat','Автосервис','Automotive service'],
 ['044','Hapica','Hapica','Электрические зубные щётки','Electric toothbrushes'],
 ['045','ВЕНТА','VENTA','Вентиляция и дымоходы','Ventilation services'],
 ['047','КАСКАД','KASKAD','Юридический центр','Legal practice'],
 ['048','Sales-Report','Sales-Report','Аналитика маркетплейсов','Marketplace analytics'],
 ['049','Вектор','Vector','Вебинар по безопасности','Information security webinar'],
 ['050','Upside Academy','Upside Academy','Образовательный клуб','Education club'],
 ['051','Юридический центр','Legal practice','Возмещение ущерба','Property damage claims'],
 ['052','Update Clinic','Update Clinic','Косметология','Aesthetic clinic'],
 ['053','DS Electronics','DS Electronics','Каталог терморегуляторов','Thermostat catalogue'],
 ['054','Территория роста — Здоровье 2.0','Territory of Growth — Health 2.0','Сайт конференции','Conference website'],
 ['056','Grava Bau','Grava Bau','Ремонт и строительство','Renovation & construction'],
 ['057','English Papa','English Papa','Школа английского языка','English language school'],
 ['058','EVOSIZ','EVOSIZ','Защитная спецодежда','Protective workwear'],
 ['059','От недоверия к близости','From Distrust to Intimacy','Психологический марафон','Psychology programme'],
 ['060','Невзорова и партнёры','Nevzorova & Partners','Арбитраж и взыскание долгов','Commercial litigation'],
 ['061','24 часа','24 Hours','Финансовый агрегатор','Financial comparison website'],
 ['062','Trust Capital','Trust Capital','Инвестиционная платформа','Investment platform'],
 ['064','Через самовыражение','Through Self-expression','Психологический марафон','Psychology programme'],
 ['065','АРТ ГРУПП','ART GROUP','Ремонт ворот и рольставен','Gate & shutter repairs'],
 ['066','Теория гипноза','Hypnosis Theory','Образовательный курс','Online course'],
 ['067','Театр одного психолога','One Psychologist’s Theatre','Сайт мероприятия','Event website'],
 ['068','Лояльность 360','Loyalty 360','Бизнес-практикум','Business workshop'],
 ['069','Основа','Osnova','Психологический вебинар','Psychology webinar']
];

export const websiteLibrary=[{
 id:'site-ilearn',title:['ILearn Chinese','ILearn Chinese'],
 type:['Школа китайского языка','Chinese language school'],
 text:['Сайт онлайн-школы китайского языка. Светлая композиция с зелёными акцентами: программы, преподаватели, тарифы, ответы на вопросы и запись на пробный урок. Ниже — полный присланный макет.','An online Chinese language school website. A light composition with green accents brings together courses, teachers, pricing, FAQs and a trial lesson. The complete supplied board is shown below.'],
 image:'portfolio/site-ilearn-full.webp'
},...entries.map(([number,ru,en,kindRu,kindEn])=>({
 id:'site-'+number,title:[ru,en],type:[kindRu,kindEn],
 text:[kindRu+'. Первый экран и фрагменты страницы — в превью. Полный макет ниже показывает структуру и оформление разделов.',kindEn+'. The preview pairs the hero with page details. The full layout below shows the page structure and section design.'],
 image:'portfolio/site-'+number+'-full.webp'
}))];
