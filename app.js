(() => {
  const translations = {
    en: {
  "skip": "Skip to content",
  "navSound": "Sound",
  "navDuo": "The duo",
  "navRelease": "Release",
  "navAbout": "About",
  "heroEyebrow": "INDEPENDENT ELECTRONIC PROJECT / 2026",
  "heroTiny": "TWO VOICES. ONE FREQUENCY.",
  "heroLead": "The warmth of human voices. The cold of mechanical rhythms. Electronic music between emotion and technology.",
  "discover": "Debut single",
  "explore": "Explore the sound",
  "soundLabel": "OUR SOUND",
  "soundTitle": "Three worlds.<br><span class='muted'>One energy.</span>",
  "soundIntro": "ZeFREQ lives in contrast: warm soul melodies meet industrial guitars and fast electronic breaks.",
  "soulDesc": "Real emotion, velvet vocals, warm Rhodes piano and deep melody.",
  "industrialDesc": "Mechanical guitar riffs, metal and controlled aggression.",
  "bassDesc": "174 BPM, rapid breakbeats, huge sub-bass and neurofunk.",
  "duoLabel": "TWO VOICES",
  "duoTitle": "Machine rhythm.<br><span class='muted'>Human voice.</span>",
  "duoIntro": "Two contrasting timbres working as one. One brings tension; the other brings warmth.",
  "maleRole": "Power and rhythm",
  "maleDesc": "Raspy baritone · Clean singing · Aggressive accents",
  "femaleRole": "Soul and melody",
  "femaleDesc": "Warm mezzo-soprano · Soul phrasing · Emotional choruses",
  "releaseLabel": "THE FIRST SIGNAL",
  "inProduction": "IN PRODUCTION",
  "releaseTitle": "Warmth<br>in the Wires",
  "releaseText": "Our debut single brings together tender soul duet vocals, heavy mechanical guitars and high-energy Drum & Bass. Release in development; date and streaming links will appear once officially published.",
  "releaseFormat": "FORMAT",
  "releaseTempo": "TEMPO",
  "releaseStatus": "STATUS",
  "soon": "SOON",
  "planned": "PLANNED PLATFORMS",
  "aboutLabel": "PHILOSOPHY",
  "aboutTitle": "Not a genre.<br><span class='muted'>A feeling.</span>",
  "aboutP1": "ZeFREQ is an independent electronic project with two distinct vocal personalities. We fuse unlikely worlds: soulful vulnerability, industrial impact and Drum & Bass speed.",
  "aboutP2": "Technology sets the rhythm. Human voices give it meaning. Here, silence can be louder than a drop, and a melody heavier than a guitar.",
  "endEyebrow": "THE SIGNAL IS NEAR",
  "endText": "ZeFREQ is just beginning. New music and official artist profiles will appear here after launch.",
  "backTop": "Back to top"
},
    ru: {
  "skip": "К основному содержимому",
  "navSound": "Звук",
  "navDuo": "Дуэт",
  "navRelease": "Релиз",
  "navAbout": "О группе",
  "heroEyebrow": "НЕЗАВИСИМЫЙ ЭЛЕКТРОННЫЙ ПРОЕКТ / 2026",
  "heroTiny": "ДВА ГОЛОСА. ОДНА ЧАСТОТА.",
  "heroLead": "Тепло человеческих голосов. Холод механических ритмов. Электронная музыка на грани чувств и технологий.",
  "discover": "Первый релиз",
  "explore": "Узнать звучание",
  "soundLabel": "НАШ ЗВУК",
  "soundTitle": "Три мира.<br><span class=\"muted\">Одна энергия.</span>",
  "soundIntro": "Музыка ZeFREQ живёт на контрасте: тёплая соул-мелодика встречается с индустриальными гитарами и быстрыми электронными брейками.",
  "soulDesc": "Живые эмоции, бархатный вокал, тёплый Rhodes и глубокая мелодия.",
  "industrialDesc": "Механические гитарные риффы, металл и контролируемая агрессия.",
  "bassDesc": "174 BPM, скоростные брейкбиты, массивный саб-бас и нейрофанк.",
  "duoLabel": "ДВА ГОЛОСА",
  "duoTitle": "Машинный ритм.<br><span class=\"muted\">Человеческий голос.</span>",
  "duoIntro": "Два контрастных тембра работают как единый инструмент. Один добавляет напряжение, другой — тепло.",
  "maleRole": "Сила и ритм",
  "maleDesc": "Хрипловатый баритон · Чистое пение · Агрессивные акценты",
  "femaleRole": "Душа и мелодия",
  "femaleDesc": "Тёплое меццо-сопрано · Соул-фразировка · Эмоциональные припевы",
  "releaseLabel": "ПЕРВЫЙ СИГНАЛ",
  "inProduction": "В РАБОТЕ",
  "releaseTitle": "Тепло<br>в проводах",
  "releaseText": "Наш первый сингл — столкновение нежного соул-дуэта, тяжёлых механических гитар и энергичного Drum & Bass. Релиз готовится. Дата выхода и ссылки на стриминги появятся здесь после официальной публикации.",
  "releaseFormat": "ФОРМАТ",
  "releaseTempo": "ТЕМП",
  "releaseStatus": "СТАТУС",
  "soon": "СКОРО",
  "planned": "ПЛАНИРУЕМЫЕ ПЛОЩАДКИ",
  "aboutLabel": "ФИЛОСОФИЯ",
  "aboutTitle": "Не жанр.<br><span class=\"muted\">Состояние.</span>",
  "aboutP1": "ZeFREQ — независимый электронный проект с двумя вокальными характерами. Мы соединяем несовместимое: соуловую уязвимость, индустриальный напор и скорость Drum & Bass.",
  "aboutP2": "Технологии задают ритм. Человеческие голоса придают ему смысл. Здесь тишина может быть громче дропа, а мелодия — тяжелее гитары.",
  "endEyebrow": "СИГНАЛ УЖЕ РЯДОМ",
  "endText": "ZeFREQ только начинает свою историю. Новая музыка и официальные страницы появятся здесь после запуска.",
  "backTop": "Наверх"
}
  };
  const nodes = [...document.querySelectorAll('[data-i18n]')];
  const switches = [...document.querySelectorAll('.lang-option')];
  const nav = document.getElementById('primary-nav');
  const menu = document.querySelector('.menu-toggle');
  let language = 'en';
  try { language = localStorage.getItem('zefreq-language-v2') === 'ru' ? 'ru' : 'en'; } catch (_) {}

  function applyLanguage(next) {
    language = next === 'ru' ? 'ru' : 'en';
    document.documentElement.lang = language;
    nodes.forEach(el => {
      const translated = translations[language][el.dataset.i18n];
      if (translated !== undefined) el.innerHTML = translated;
    });
    switches.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
    nav.setAttribute('aria-label', language === 'ru' ? 'Главная навигация' : 'Main navigation');
    menu.setAttribute('aria-label', language === 'ru' ? 'Открыть меню' : 'Open menu');
    document.querySelector('.brand').setAttribute('aria-label', language === 'ru' ? 'ZeFREQ — наверх' : 'ZeFREQ — back to top');
    document.querySelector('.hero-image').setAttribute('aria-label', language === 'ru' ? 'Вокалисты ZeFREQ в современной электронной студийной эстетике' : 'ZeFREQ vocalists in a contemporary electronic music setting');
    document.querySelector('meta[name="description"]').setAttribute('content', language === 'ru' ? 'ZeFREQ — электронный дуэт. Два голоса. Одна частота. Soul, industrial и drum & bass.' : 'ZeFREQ — an electronic duo. Two voices. One frequency. Soul, industrial and drum & bass.');
    try { localStorage.setItem('zefreq-language-v2', language); } catch (_) {}
  }

  switches.forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.lang)));
  menu.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    menu.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    }
  });
  document.getElementById('year').textContent = new Date().getFullYear();
  applyLanguage(language);
})();
