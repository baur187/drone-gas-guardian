export type Lang = "ru" | "en";

const ru = {
  meta: {
    title: "WES — Интегрированное управление бурением | IPM/IDS",
  },
  nav: {
    items: [
      { id: "problem", label: "Проблема" },
      { id: "market", label: "Рынок" },
      { id: "model", label: "Модель" },
      { id: "digital", label: "Цифра" },
      { id: "rtoc", label: "RTOC" },
      { id: "kpi", label: "KPI" },
      { id: "team", label: "Команда" },
      { id: "roadmap", label: "Roadmap" },
    ],
    cta: "Запросить пилот",
  },
  hero: {
    kicker: "Интегрированное управление бурением · класс IPM/IDS",
    titleLines: ["Цифровое", "строительство скважин", "по модели IPM/IDS"],
    subtitle:
      "WES — единый центр инженерного управления, контроля подрядчиков и снижения NPT.",
    executive:
      "WES берёт на себя функцию интегратора строительства скважины: команда инженеров, цифровая надстройка WES Platform, центр удалённого мониторинга и ответственность за итоговые KPI скважины. Аналог SLB IPM и Baker Hughes IWS — для среднего сегмента операторов СНГ и Ближнего Востока.",
    positioning: [
      { name: "Corva", role: "это инструмент." },
      { name: "SLB IPM", role: "это решение под ключ для супермейджоров." },
      {
        name: "WES",
        role: "это управление бурением класса IPM/IDS для независимых операторов СНГ и Ближнего Востока — с собственной цифровой надстройкой и без зависимости от чужих сервисных линий.",
      },
    ],
    stats: [
      { value: "−50%", label: "NPT на brownfield-проектах" },
      { value: "×1,7", label: "ROP на greenfield Восточной Сибири" },
      { value: "−87%", label: "аварийность с RTOC-контуром" },
      { value: "24/7", label: "инженерный мониторинг" },
    ],
    ctaPrimary: "Запросить пилот",
    ctaSecondary: "Карта рынка",
    scroll: "Листайте",
  },
  marquee: [
    "NPT", "ILT", "ROP", "WOB", "RPM", "ECD", "SPP", "MSE",
    "WITSML 1.3 / 1.4 / 2.0", "WITS0", "MWD/LWD", "mud logging",
    "torque & drag", "очистка ствола", "гидравлика", "flat time",
    "connection time", "tripping", "performance-based", "vendor-neutral",
    "бурение «под ключ»",
  ],
  problem: {
    num: "02",
    kicker: "Боли заказчика",
    title: "Почему 25–30% стоимости скважины уходит в потери",
    subtitle:
      "NPT и скрытые потери времени (ILT) — это не форс-мажор, а следствие разорванной модели управления.",
    items: [
      {
        title: "Нет единого центра ответственности",
        text: "5–10 подрядчиков на скважине, разорванные интерфейсы между ними — и никто не отвечает за итоговый KPI скважины.",
      },
      {
        title: "Данные не становятся решениями",
        text: "Данные с буровой собираются, но не превращаются в управленческие решения в реальном времени.",
      },
      {
        title: "NPT и ILT видны только постфактум",
        text: "Потери выявляются в суточных рапортах и финальном отчёте — когда дни и деньги уже потеряны.",
      },
      {
        title: "Реактивные решения",
        text: "Прихваты, поглощения, газопроявления фиксируются по факту, а не предотвращаются на ранних признаках.",
      },
      {
        title: "Буровой департамент перегружен",
        text: "Оперативка съедает ресурс: на инженерный анализ и работу с подрядчиками времени не остаётся.",
      },
      {
        title: "Уроки скважин не накапливаются",
        text: "Lessons learned не систематизируются — каждая следующая скважина начинается с нуля.",
      },
    ],
    diagramLabel: "Оператор и 8–10 подрядчиков: разорванные интерфейсы, красным — точки потерь NPT / ILT",
    diagramCenter: "Оператор",
    contractors: [
      "Буровой подрядчик", "MWD/LWD", "Буровые растворы", "Цементирование",
      "ННБ", "Mud logging", "Долотный сервис", "Супервайзинг",
    ],
  },
  market: {
    num: "03",
    kicker: "Карта рынка",
    title: "Софт даёт данные. Мейджоры берут строительство под ключ. Между ними — дыра.",
    subtitle: "Три слоя рынка — и незакрытый средний сегмент, в который встаёт WES.",
    layers: [
      {
        tag: "Слой 1",
        title: "Программные платформы аналитики бурения",
        names: "Corva · Pason DataHub · Petrolink · Sekal · Exebenus · Petro.AI · AI Driller · Moblize · ROGII · Energent.ai",
        text: "Данные и дашборды — без ответственности за итоговый KPI скважины.",
      },
      {
        tag: "Слой 2",
        title: "Автоматизация буровой установки",
        names: "NOV NOVOS · Nabors SmartROS / RigCLOUD · Weatherford CENTRO · Kongsberg SiteCom",
        text: "Слой управления буровой, привязанный к конкретной установке.",
      },
      {
        tag: "Слой 3",
        title: "IPM/IDS — класс, в который встаёт WES",
        names: "SLB IPM + DrillOps + DELFI · Baker Hughes IWS + i-Trak · Halliburton PM + DecisionSpace 365 + LOGIX",
        text: "Строительство скважины под ключ — но порог входа по цене и обязательному скоупу непосилен для независимых операторов среднего сегмента.",
      },
    ],
    wesCard: {
      title: "WES = класс IPM/IDS для среднего сегмента",
      text: "Команда + процесс + цифра + ответственность за KPI. Vendor-neutral: не привязан к чужим сервисным линиям — Corva и аналоги остаются соседним слоем рынка, а не конкурентами.",
    },
    matrix: {
      xLabel: "Объём ответственности",
      xMin: "Только данные",
      xMax: "Скважина целиком",
      yLabel: "Ответственность за KPI",
      yMin: "Нет",
      yMax: "Полная",
      softwareGroup: "Софт-платформы",
      rigGroup: "Автоматизация буровой",
      majorsGroup: "IPM/IDS-мейджоры",
      wes: "WES",
      wesNote: "Класс IPM/IDS в среднем ценовом сегменте",
    },
  },
  model: {
    num: "04",
    kicker: "Модель IPM/IDS на базе WES",
    title: "От разрозненного аутсорсинга — к интегрированному управлению",
    subtitle: "Один интегратор. Один SLA по KPI скважины. Единый decision log.",
    before: {
      tag: "Традиционная модель",
      items: [
        "Оператор сам управляет 5–10 подрядчиками",
        "Сам ведёт supervision на буровой",
        "Сам считает и контролирует KPI",
        "Сам несёт все риски NPT и переподрядной координации",
      ],
    },
    after: {
      tag: "Модель WES IPM/IDS",
      lead: "WES — единый интегратор. В зоне ответственности:",
      items: [
        "Инженерное планирование и программа бурения",
        "Поддержка тендеров и оценка подрядчиков",
        "Supervision на буровой и в центре удалённого мониторинга",
        "Контроль качества: буровые растворы, цементирование, направленное бурение",
        "Управление эффективностью подрядчиков по KPI",
        "Интерфейс HSE и накопление уроков скважин",
      ],
    },
    beforeLabel: "Паутина прямых контрактов",
    afterLabel: "WES — единый хаб, один SLA по KPI скважины",
  },
  digital: {
    num: "05",
    kicker: "Цифровая архитектура",
    title: "Цифра как инструмент управления, а не продукт",
    subtitle:
      "Продукт WES — строительство скважины с ответственностью за KPI. Цифровая надстройка WES Platform — инструмент, которым это управление осуществляется.",
    layers: [
      {
        tag: "Edge · Сбор данных",
        text: "Датчики буровой, EDR, mud logging, MWD/LWD, суточные рапорты.",
        chips: ["WITSML 1.3–2.0", "WITS0", "OPC-UA", "Modbus", "OAuth 2.0"],
      },
      {
        tag: "Stream · Транспорт и хранение",
        text: "Потоковая обработка, обновление 1 Гц, микросервисная архитектура на Linux.",
        chips: ["Apache Kafka", "1 Гц", "Микросервисы", "SQL + NoSQL"],
      },
      {
        tag: "Models · Расчётный слой",
        text: "Цифровой двойник скважины с физическими моделями.",
        chips: ["Гидравлика", "Torque & drag", "ECD", "Hookload", "Очистка ствола", "MSE"],
      },
      {
        tag: "UX · Аналитика и доступ",
        text: "Предиктивные оповещения и предписывающие рекомендации по действиям бригады. Веб и мобильные приложения.",
        chips: ["Облако", "On-premise", "Гибрид", "Vendor-agnostic"],
      },
    ],
    analogyTitle: "Параллель, понятная отрасли",
    analogies: [
      { tool: "DrillOps", service: "SLB IPM" },
      { tool: "i-Trak", service: "Baker Hughes IWS" },
      { tool: "LOGIX", service: "Halliburton PM" },
      { tool: "WES Platform", service: "WES", highlight: true },
    ],
    analogyNote:
      "Цифровая надстройка — внутри интегрированного управления бурением, а не вместо него.",
  },
  rtoc: {
    num: "06",
    kicker: "Центр удалённого мониторинга (RTOC)",
    title: "24/7 инженерный контур: от данных к решению за минуты",
    items: [
      "Непрерывный мониторинг ROP, WOB, RPM, расхода, SPP, момента, drag, ECD, hookload, MSE — отклонения от плана детектируются автоматически.",
      "Раннее предупреждение: риск прихвата, поглощения, газопроявления, пакофф, плохая очистка ствола, вибрации, дисфункции бурения.",
      "Ежедневные утренние звонки с заказчиком и подрядчиками, единый журнал решений (decision log).",
      "Прозрачность для руководства: KPI-дашборд в реальном времени, автоматические уведомления при отклонении от плана бурения.",
    ],
    caseTag: "Подтверждённый кейс",
    caseTitle: "Крупный буровой подрядчик, Восточная Европа",
    caseStats: [
      { value: "−87%", label: "аварийность" },
      { value: "−27", label: "дней NPT в год" },
      { value: "8,9% → 3,5%", label: "доля NPT" },
    ],
    dash: {
      title: "WES Platform · RTOC — скважина 214-bis, 3 482 м",
      params: [
        { name: "ROP", value: "24,6", unit: "м/ч", trend: "up" },
        { name: "WOB", value: "12,4", unit: "т", trend: "flat" },
        { name: "RPM", value: "140", unit: "об/мин", trend: "flat" },
        { name: "SPP", value: "182", unit: "атм", trend: "up" },
        { name: "ECD", value: "1,28", unit: "г/см³", trend: "warn" },
        { name: "MSE", value: "38", unit: "кПси", trend: "down" },
      ],
      alertTag: "Оповещение",
      alert: "ECD приближается к границе окна устойчивости — рекомендация: снизить расход на 5%, прокачать вязкую пачку.",
      decisionTag: "Decision log",
      decision: "06:40 — согласовано с буровым подрядчиком, расход снижен. Поглощение предотвращено.",
    },
  },
  predictive: {
    num: "07",
    kicker: "Предиктивная аналитика и цифровой двойник",
    title: "План, факт и опыт соседних скважин — на одной шкале времени",
    items: [
      {
        title: "Прогноз прихватов",
        text: "Разница между поверхностным и эффективным WOB, overpulls при наращивании и tripping, индекс очистки ствола.",
      },
      {
        title: "Оптимизация ROP",
        text: "Анализ MSE и сравнение с опытом соседних скважин на лицензии.",
      },
      {
        title: "Гидравлика и ECD",
        text: "Гидравлическая модель и мониторинг ECD относительно окна устойчивости ствола.",
      },
      {
        title: "Torque & drag",
        text: "Автоматическая калибровка по факту, пересчёт при смене КНБК.",
      },
      {
        title: "Износ долота",
        text: "Прогноз по MSE и истории dull grading — долото меняется по состоянию, а не по аварии.",
      },
      {
        title: "Непрерывный бенчмаркинг",
        text: "Скважина сравнивается с пулом предыдущих на лицензии в каждый момент времени.",
      },
    ],
    chart: {
      plan: "План",
      fact: "Факт",
      forecast: "Прогноз",
      offset: "Соседние скважины",
      xLabel: "Дни строительства скважины",
      yLabel: "Глубина, м",
    },
  },
  kpi: {
    num: "08",
    kicker: "KPI и экономический эффект",
    title: "Как WES конвертируется в P&L заказчика",
    subtitle: "Типичные улучшения по реальным кейсам WES.",
    bars: [
      { label: "NPT, brownfield", before: "8,9%", note: "до −60% при зрелом RTOC", delta: "−50%", pct: 50 },
      { label: "ROP, greenfield Восточная Сибирь", before: "", note: "механическая скорость проходки", delta: "×1,7", pct: 70 },
      { label: "Flat time и connection time", before: "", note: "оптимизация плоского времени и наращиваний", delta: "−10–20%", pct: 20 },
      { label: "Время строительства скважины", before: "", note: "brownfield Волго-Урал", delta: "−15%", pct: 15 },
      { label: "Поглощения", before: "", note: "greenfield Восточная Сибирь", delta: "−57%", pct: 57 },
      { label: "Аварийность", before: "", note: "кейс RTOC у крупного подрядчика", delta: "−87%", pct: 87 },
    ],
    extras: [
      "Оптимизация tripping: меньше overpulls, меньше времени на СПО.",
      "Предотвращение боковых стволов через раннее выявление рисков прихвата.",
    ],
    formulaTitle: "Формула экономического эффекта",
    formula: [
      { sign: "", term: "ΔДни бурения × Стоимость буровой в сутки" },
      { sign: "+", term: "Σ (Предотвращённые аварии × Стоимость аварии)" },
      { sign: "+", term: "Оптимизация сервисов: раствор, цемент, КНБК, долота" },
      { sign: "−", term: "Стоимость услуг WES" },
    ],
    formulaResult: "= Экономия на скважину",
  },
  team: {
    num: "09",
    kicker: "Команда и операционная модель",
    title: "Скамейка инженеров — а не лицензия на софт",
    subtitle: "Роли на проекте WES — каждая с измеримой зоной ответственности.",
    roles: [
      { name: "Drilling Manager", text: "Владелец SLA по итоговым KPI скважины" },
      { name: "Drilling Superintendent", text: "Supervision на буровой" },
      { name: "Drilling Engineer", text: "Программа бурения, дизайн КНБК, обсадные колонны, цементирование" },
      { name: "Real-Time Drilling Engineer", text: "Круглосуточный мониторинг и инженерные расчёты в RTOC" },
      { name: "Mud Engineer", text: "Реология растворов, ECD, управление поглощениями" },
      { name: "Cementing Engineer", text: "Дизайн и supervision цементирования" },
      { name: "Operational Geologist", text: "Геонавигация, geosteering" },
      { name: "Data / Platform Engineer", text: "Сопровождение цифровой надстройки WES Platform" },
      { name: "HSE и QA/QC координатор", text: "Интерфейс HSE, контроль качества" },
    ],
    modesTitle: "Три режима работы — заказчик выбирает уровень вовлечения WES",
    modes: [
      {
        step: "01",
        name: "Advisory Support",
        text: "RTOC и инженерные расчёты. Заказчик сохраняет полный операционный контроль.",
      },
      {
        step: "02",
        name: "Integrated Drilling Management",
        text: "WES берёт supervision, координацию подрядчиков и контроль KPI. Схема бонус/малус.",
      },
      {
        step: "03",
        name: "Full IPM/IDS",
        text: "WES берёт закупки, субподрядчиков и ответственность за NPT и стоимость метра проходки. Возможна fixed-price модель со штрафами за непопадание в KPI.",
      },
    ],
  },
  roadmap: {
    num: "10",
    kicker: "Roadmap внедрения",
    title: "Пилот → масштабирование за 5 фаз",
    phases: [
      {
        phase: "Phase 1",
        time: "2–4 недели",
        name: "Диагностика",
        text: "Аудит процессов, источников данных и контрактов. Retrospective-анализ ранее пробуренных скважин в WES Platform.",
      },
      {
        phase: "Phase 2",
        time: "1–2 месяца",
        name: "Развёртывание",
        text: "WES Gateway на буровой, подключение EDR / MWD / mud logging, запуск дашбордов, обучение персонала заказчика.",
      },
      {
        phase: "Phase 3",
        time: "2–3 месяца",
        name: "Запуск RTOC",
        text: "Круглосуточный мониторинг, ежедневный KPI-tracking, decision log, автоматические уведомления.",
      },
      {
        phase: "Phase 4",
        time: "3–6 месяцев",
        name: "Предиктивный слой",
        text: "Калибровка цифрового двойника, обучение моделей на опыте соседних скважин, предписывающие рекомендации.",
      },
      {
        phase: "Phase 5",
        time: "от 6 месяцев",
        name: "Performance-based IPM/IDS",
        text: "Разделение риска: бонус/малус по NPT, времени строительства скважины и стоимости метра.",
      },
    ],
    cta: {
      title: "Пилот на 1–2 скважинах",
      points: [
        "Срок: 3–6 месяцев",
        "Измеряемые KPI: NPT, ROP, время строительства скважины",
        "Фиксированный скоуп, фиксированная цена",
        "По итогам — прозрачный бизнес-кейс на масштабирование на кампанию",
      ],
      button: "Обсудить пилот",
      email: "ipm@wes.example",
    },
  },
  footer: {
    line: "WES — интегрированное управление бурением с цифровой надстройкой WES Platform внутри.",
    note: "Концептуальная страница. WES — вымышленный бренд для демонстрации позиционирования.",
    lang: "Язык",
  },
};

const en: typeof ru = {
  meta: {
    title: "WES — Integrated Well Delivery | IPM/IDS",
  },
  nav: {
    items: [
      { id: "problem", label: "Problem" },
      { id: "market", label: "Market" },
      { id: "model", label: "Model" },
      { id: "digital", label: "Digital" },
      { id: "rtoc", label: "RTOC" },
      { id: "kpi", label: "KPI" },
      { id: "team", label: "Team" },
      { id: "roadmap", label: "Roadmap" },
    ],
    cta: "Request a pilot",
  },
  hero: {
    kicker: "Integrated drilling management · IPM/IDS class",
    titleLines: ["Digital", "well construction", "the IPM/IDS way"],
    subtitle:
      "WES is a single center of engineering control, contractor management and NPT reduction.",
    executive:
      "WES acts as the integrator of well construction: an engineering team, the WES Platform digital layer, a real-time operations center and accountability for the final well KPIs. An analogue of SLB IPM and Baker Hughes IWS — built for mid-segment independent operators across the CIS and the Middle East.",
    positioning: [
      { name: "Corva", role: "is a tool." },
      { name: "SLB IPM", role: "is a turnkey solution for supermajors." },
      {
        name: "WES",
        role: "is IPM/IDS-class drilling management for independent operators in the CIS and the Middle East — with its own digital layer and no dependence on third-party service lines.",
      },
    ],
    stats: [
      { value: "−50%", label: "NPT on brownfield projects" },
      { value: "×1.7", label: "ROP on East Siberia greenfield" },
      { value: "−87%", label: "incident rate with the RTOC loop" },
      { value: "24/7", label: "engineering surveillance" },
    ],
    ctaPrimary: "Request a pilot",
    ctaSecondary: "Market map",
    scroll: "Scroll",
  },
  marquee: [
    "NPT", "ILT", "ROP", "WOB", "RPM", "ECD", "SPP", "MSE",
    "WITSML 1.3 / 1.4 / 2.0", "WITS0", "MWD/LWD", "mud logging",
    "torque & drag", "hole cleaning", "hydraulics", "flat time",
    "connection time", "tripping", "performance-based", "vendor-neutral",
    "turnkey drilling",
  ],
  problem: {
    num: "02",
    kicker: "Operator pain points",
    title: "Why 25–30% of well cost leaks into losses",
    subtitle:
      "NPT and invisible lost time (ILT) are not force majeure — they are the product of a fragmented management model.",
    items: [
      {
        title: "No single point of accountability",
        text: "5–10 contractors per well with broken interfaces between them — and nobody owns the final well KPI.",
      },
      {
        title: "Data never becomes decisions",
        text: "Rig data gets collected but is not converted into management decisions in real time.",
      },
      {
        title: "NPT and ILT surface after the fact",
        text: "Losses show up in daily reports and the end-of-well report — when the days and the money are already gone.",
      },
      {
        title: "Reactive decision-making",
        text: "Stuck pipe, losses and kicks are recorded after they happen instead of being prevented on early signals.",
      },
      {
        title: "The drilling department is overloaded",
        text: "Day-to-day firefighting consumes the team: no capacity is left for engineering analysis and contractor management.",
      },
      {
        title: "Lessons learned don't accumulate",
        text: "Well lessons are not captured systematically — every next well starts from scratch.",
      },
    ],
    diagramLabel: "Operator and 8–10 contractors: broken interfaces; NPT / ILT loss points marked in red",
    diagramCenter: "Operator",
    contractors: [
      "Drilling contractor", "MWD/LWD", "Drilling fluids", "Cementing",
      "Directional drilling", "Mud logging", "Bit service", "Supervision",
    ],
  },
  market: {
    num: "03",
    kicker: "Market map",
    title: "Software delivers data. Majors deliver turnkey wells. In between — a gap.",
    subtitle: "Three market layers — and an unserved mid segment where WES fits.",
    layers: [
      {
        tag: "Layer 1",
        title: "Drilling analytics software platforms",
        names: "Corva · Pason DataHub · Petrolink · Sekal · Exebenus · Petro.AI · AI Driller · Moblize · ROGII · Energent.ai",
        text: "Data and dashboards — without accountability for the final well KPI.",
      },
      {
        tag: "Layer 2",
        title: "Rig automation",
        names: "NOV NOVOS · Nabors SmartROS / RigCLOUD · Weatherford CENTRO · Kongsberg SiteCom",
        text: "A rig control layer tied to a specific drilling unit.",
      },
      {
        tag: "Layer 3",
        title: "IPM/IDS — the class WES enters",
        names: "SLB IPM + DrillOps + DELFI · Baker Hughes IWS + i-Trak · Halliburton PM + DecisionSpace 365 + LOGIX",
        text: "Turnkey well delivery — but the price of entry and the mandatory scope are out of reach for mid-segment independent operators.",
      },
    ],
    wesCard: {
      title: "WES = IPM/IDS class for the mid segment",
      text: "Team + process + digital + KPI accountability. Vendor-neutral: not tied to anyone's service lines — Corva and its peers remain an adjacent market layer, not competitors.",
    },
    matrix: {
      xLabel: "Scope of responsibility",
      xMin: "Data only",
      xMax: "Entire well",
      yLabel: "KPI accountability",
      yMin: "None",
      yMax: "Full",
      softwareGroup: "Software platforms",
      rigGroup: "Rig automation",
      majorsGroup: "IPM/IDS majors",
      wes: "WES",
      wesNote: "IPM/IDS class at mid-segment economics",
    },
  },
  model: {
    num: "04",
    kicker: "The WES IPM/IDS model",
    title: "From fragmented outsourcing to integrated management",
    subtitle: "One integrator. One SLA on well KPIs. One decision log.",
    before: {
      tag: "Traditional model",
      items: [
        "The operator manages 5–10 contractors itself",
        "Runs wellsite supervision itself",
        "Calculates and polices KPIs itself",
        "Carries all NPT and coordination risk itself",
      ],
    },
    after: {
      tag: "WES IPM/IDS model",
      lead: "WES is the single integrator, accountable for:",
      items: [
        "Well engineering and the drilling program",
        "Tender support and contractor evaluation",
        "Supervision at the rig and in the real-time operations center",
        "QA/QC across drilling fluids, cementing, directional drilling",
        "Contractor performance management against KPIs",
        "The HSE interface and systematic lessons learned",
      ],
    },
    beforeLabel: "A web of direct contracts",
    afterLabel: "WES as the single hub — one SLA on well KPIs",
  },
  digital: {
    num: "05",
    kicker: "Digital architecture",
    title: "Digital as a management tool, not a product",
    subtitle:
      "The WES product is well construction with KPI accountability. The WES Platform digital layer is the instrument that management runs on.",
    layers: [
      {
        tag: "Edge · Data acquisition",
        text: "Rig sensors, EDR, mud logging, MWD/LWD, daily reports.",
        chips: ["WITSML 1.3–2.0", "WITS0", "OPC-UA", "Modbus", "OAuth 2.0"],
      },
      {
        tag: "Stream · Transport & storage",
        text: "Stream processing at 1 Hz refresh, microservice architecture on Linux.",
        chips: ["Apache Kafka", "1 Hz", "Microservices", "SQL + NoSQL"],
      },
      {
        tag: "Models · Computation layer",
        text: "A digital twin of the well built on physical models.",
        chips: ["Hydraulics", "Torque & drag", "ECD", "Hookload", "Hole cleaning", "MSE"],
      },
      {
        tag: "UX · Analytics & access",
        text: "Predictive alerts and prescriptive crew recommendations. Web and mobile apps.",
        chips: ["Cloud", "On-premise", "Hybrid", "Vendor-agnostic"],
      },
    ],
    analogyTitle: "A parallel the industry understands",
    analogies: [
      { tool: "DrillOps", service: "SLB IPM" },
      { tool: "i-Trak", service: "Baker Hughes IWS" },
      { tool: "LOGIX", service: "Halliburton PM" },
      { tool: "WES Platform", service: "WES", highlight: true },
    ],
    analogyNote:
      "The digital layer sits inside integrated drilling management — never instead of it.",
  },
  rtoc: {
    num: "06",
    kicker: "Real-Time Operations Center (RTOC)",
    title: "A 24/7 engineering loop: from data to decision in minutes",
    items: [
      "Continuous surveillance of ROP, WOB, RPM, flow rate, SPP, torque, drag, ECD, hookload and MSE — deviations from plan are detected automatically.",
      "Early warning: stuck-pipe risk, losses, kicks, pack-off, poor hole cleaning, vibrations, drilling dysfunctions.",
      "Daily morning calls with the operator and contractors, one shared decision log.",
      "Transparency for management: a real-time KPI dashboard with automatic alerts on deviation from the drilling plan.",
    ],
    caseTag: "Verified case",
    caseTitle: "Major drilling contractor, Eastern Europe",
    caseStats: [
      { value: "−87%", label: "incident rate" },
      { value: "−27", label: "days of NPT per year" },
      { value: "8.9% → 3.5%", label: "NPT share" },
    ],
    dash: {
      title: "WES Platform · RTOC — well 214-bis, 3,482 m",
      params: [
        { name: "ROP", value: "24.6", unit: "m/h", trend: "up" },
        { name: "WOB", value: "12.4", unit: "t", trend: "flat" },
        { name: "RPM", value: "140", unit: "rpm", trend: "flat" },
        { name: "SPP", value: "182", unit: "atm", trend: "up" },
        { name: "ECD", value: "1.28", unit: "g/cm³", trend: "warn" },
        { name: "MSE", value: "38", unit: "kpsi", trend: "down" },
      ],
      alertTag: "Alert",
      alert: "ECD is approaching the stability-window boundary — recommendation: cut flow rate by 5%, pump a hi-vis sweep.",
      decisionTag: "Decision log",
      decision: "06:40 — agreed with the drilling contractor, flow rate reduced. Losses prevented.",
    },
  },
  predictive: {
    num: "07",
    kicker: "Predictive analytics & the digital twin",
    title: "Plan, actual and offset-well experience — on one timeline",
    items: [
      {
        title: "Stuck-pipe prediction",
        text: "Surface vs. downhole effective WOB divergence, overpulls on connections and tripping, a hole-cleaning index.",
      },
      {
        title: "ROP optimization",
        text: "MSE analysis benchmarked against offset wells on the license.",
      },
      {
        title: "Hydraulics & ECD",
        text: "A hydraulic model with ECD monitored against the wellbore stability window.",
      },
      {
        title: "Torque & drag",
        text: "Automatic calibration to actuals, recalculated on every BHA change.",
      },
      {
        title: "Bit wear forecast",
        text: "Driven by MSE and dull-grading history — bits are pulled on condition, not on failure.",
      },
      {
        title: "Continuous benchmarking",
        text: "The well is compared against the pool of previous wells on the license at every moment.",
      },
    ],
    chart: {
      plan: "Plan",
      fact: "Actual",
      forecast: "Forecast",
      offset: "Offset wells",
      xLabel: "Days of well construction",
      yLabel: "Depth, m",
    },
  },
  kpi: {
    num: "08",
    kicker: "KPIs & economics",
    title: "How WES converts into the operator's P&L",
    subtitle: "Typical improvements from real WES cases.",
    bars: [
      { label: "NPT, brownfield", before: "8.9%", note: "up to −60% with a mature RTOC", delta: "−50%", pct: 50 },
      { label: "ROP, East Siberia greenfield", before: "", note: "rate of penetration", delta: "×1.7", pct: 70 },
      { label: "Flat time & connection time", before: "", note: "flat-time and connection optimization", delta: "−10–20%", pct: 20 },
      { label: "Well construction time", before: "", note: "Volga-Urals brownfield", delta: "−15%", pct: 15 },
      { label: "Mud losses", before: "", note: "East Siberia greenfield", delta: "−57%", pct: 57 },
      { label: "Incident rate", before: "", note: "the RTOC case at a major contractor", delta: "−87%", pct: 87 },
    ],
    extras: [
      "Tripping optimization: fewer overpulls, less time per round trip.",
      "Sidetracks avoided through early detection of stuck-pipe risk.",
    ],
    formulaTitle: "The economics formula",
    formula: [
      { sign: "", term: "Δ Drilling days × Daily rig spread rate" },
      { sign: "+", term: "Σ (Prevented incidents × Cost per incident)" },
      { sign: "+", term: "Service optimization: mud, cement, BHA, bits" },
      { sign: "−", term: "Cost of WES services" },
    ],
    formulaResult: "= Savings per well",
  },
  team: {
    num: "09",
    kicker: "Team & operating model",
    title: "A bench of engineers — not a software license",
    subtitle: "Roles on a WES project — each with a measurable zone of accountability.",
    roles: [
      { name: "Drilling Manager", text: "Owner of the SLA on final well KPIs" },
      { name: "Drilling Superintendent", text: "Wellsite supervision" },
      { name: "Drilling Engineer", text: "Drilling program, BHA design, casing, cementing" },
      { name: "Real-Time Drilling Engineer", text: "Round-the-clock surveillance and engineering in the RTOC" },
      { name: "Mud Engineer", text: "Fluid rheology, ECD, loss management" },
      { name: "Cementing Engineer", text: "Cementing design and supervision" },
      { name: "Operational Geologist", text: "Geonavigation, geosteering" },
      { name: "Data / Platform Engineer", text: "Running the WES Platform digital layer" },
      { name: "HSE & QA/QC Coordinator", text: "The HSE interface, quality control" },
    ],
    modesTitle: "Three engagement modes — the operator chooses the level of WES involvement",
    modes: [
      {
        step: "01",
        name: "Advisory Support",
        text: "RTOC and engineering analysis. The operator keeps full operational control.",
      },
      {
        step: "02",
        name: "Integrated Drilling Management",
        text: "WES takes supervision, contractor coordination and KPI control. Bonus/malus scheme.",
      },
      {
        step: "03",
        name: "Full IPM/IDS",
        text: "WES takes procurement, subcontractors and accountability for NPT and cost per meter drilled. A fixed-price model with penalties for missed KPIs is available.",
      },
    ],
  },
  roadmap: {
    num: "10",
    kicker: "Implementation roadmap",
    title: "Pilot → scale-up in 5 phases",
    phases: [
      {
        phase: "Phase 1",
        time: "2–4 weeks",
        name: "Diagnostics",
        text: "Audit of processes, data sources and contracts. Retrospective analysis of previously drilled wells in WES Platform.",
      },
      {
        phase: "Phase 2",
        time: "1–2 months",
        name: "Deployment",
        text: "WES Gateway at the rig, EDR / MWD / mud logging hook-up, dashboards live, operator staff training.",
      },
      {
        phase: "Phase 3",
        time: "2–3 months",
        name: "RTOC launch",
        text: "24/7 surveillance, daily KPI tracking, decision log, automatic alerts.",
      },
      {
        phase: "Phase 4",
        time: "3–6 months",
        name: "Predictive layer",
        text: "Digital-twin calibration, models trained on offset-well experience, prescriptive recommendations.",
      },
      {
        phase: "Phase 5",
        time: "6+ months",
        name: "Performance-based IPM/IDS",
        text: "Shared risk: bonus/malus on NPT, well construction time and cost per meter.",
      },
    ],
    cta: {
      title: "A pilot on 1–2 wells",
      points: [
        "Duration: 3–6 months",
        "Measured KPIs: NPT, ROP, well construction time",
        "Fixed scope, fixed price",
        "Outcome: a transparent business case for scaling to the campaign",
      ],
      button: "Discuss a pilot",
      email: "ipm@wes.example",
    },
  },
  footer: {
    line: "WES — integrated drilling management with the WES Platform digital layer inside.",
    note: "Concept page. WES is a fictional brand created to demonstrate positioning.",
    lang: "Language",
  },
};

export const content: Record<Lang, typeof ru> = { ru, en };
