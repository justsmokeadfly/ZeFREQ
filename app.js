(() => {
  const translations = {
    en: {
  "skip": "Skip to content",
  "navSound": "Concept",
  "navDuo": "The duo",
  "navRelease": "Release",
  "navAbout": "About",
  "heroEyebrow": "INDEPENDENT ELECTRONIC PROJECT / 2026",
  "heroTiny": "TWO VOICES. ONE FREQUENCY.",
  "heroLead": "Two voices on one wavelength. Stories of connection, collision and everything we struggle to say.",
  "discover": "Debut single",
  "explore": "Explore the concept",
  "soundLabel": "THE CONCEPT",
  "soundTitle": "Beyond the noise.<br><span class='muted'>Find the meaning.</span>",
  "soundIntro": "ZeFREQ is a world told through signals: two voices, one connection and the stories that travel between them.",
  "soulDesc": "Two voices search for each other through the static. Every story begins with a connection.",
  "industrialDesc": "Tenderness and tension can exist in the same moment. That's where the unexpected happens.",
  "bassDesc": "The first transmission is only the beginning. New songs will reveal new parts of this world.",
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
  "releaseText": "The first transmission is taking shape: two voices trying to reach each other through a city of noise and light. The release date and streaming links will appear here when the song is officially published.",
  "releaseFormat": "FORMAT",
  "releaseTempo": "VOICES",
  "releaseStatus": "STATUS",
  "soon": "SOON",
  "planned": "PLANNED PLATFORMS",
  "aboutLabel": "OUR STORY",
  "aboutTitle": "Two voices.<br><span class='muted'>One story.</span>",
  "aboutP1": "ZeFREQ is an independent electronic duo built around two contrasting voices and a shared imaginary world. Each song is a new piece of their conversation.",
  "aboutP2": "We tell stories about distance, connection, memory and the feeling that someone is still listening on the other end. Beyond the noise, something human always remains.",
  "endEyebrow": "THE SIGNAL IS NEAR",
  "endText": "ZeFREQ is just beginning. New music and official artist profiles will appear here after launch.",
  "backTop": "Back to top"
},
    ru: {
  "skip": "К основному содержимому",
  "navSound": "Концепция",
  "navDuo": "Дуэт",
  "navRelease": "Релиз",
  "navAbout": "О группе",
  "heroEyebrow": "НЕЗАВИСИМЫЙ ЭЛЕКТРОННЫЙ ПРОЕКТ / 2026",
  "heroTiny": "ДВА ГОЛОСА. ОДНА ЧАСТОТА.",
  "heroLead": "Два голоса на одной волне. Истории о близости, столкновении характеров и чувствах, которым трудно найти слова.",
  "discover": "Первый релиз",
  "explore": "Открыть концепцию",
  "soundLabel": "ИДЕЯ ПРОЕКТА",
  "soundTitle": "За пределами шума.<br><span class='muted'>Найди смысл.</span>",
  "soundIntro": "ZeFREQ — это мир сигналов: два голоса, одна связь и истории, которые рождаются между ними.",
  "soulDesc": "Два голоса ищут друг друга сквозь помехи. Каждая история начинается с контакта.",
  "industrialDesc": "Нежность и напряжение могут существовать одновременно. Именно тогда рождается неожиданное.",
  "bassDesc": "Первый сигнал — только начало. Новые песни постепенно раскроют этот мир.",
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
  "releaseText": "Первый сигнал обретает форму: два голоса пытаются найти друг друга среди городского шума и огней. Дата выхода и ссылки на стриминги появятся здесь после официальной публикации.",
  "releaseFormat": "ФОРМАТ",
  "releaseTempo": "ГОЛОСА",
  "releaseStatus": "СТАТУС",
  "soon": "СКОРО",
  "planned": "ПЛАНИРУЕМЫЕ ПЛОЩАДКИ",
  "aboutLabel": "НАША ИСТОРИЯ",
  "aboutTitle": "Два голоса.<br><span class='muted'>Одна история.</span>",
  "aboutP1": "ZeFREQ — независимый электронный дуэт, построенный вокруг двух непохожих голосов и одного вымышленного мира. Каждая песня — новая часть их разговора.",
  "aboutP2": "Мы рассказываем истории о расстоянии, близости, памяти и надежде, что на другом конце всё ещё кто-то слышит. За любым шумом остаётся что-то человеческое.",
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
    document.querySelector('meta[name="description"]').setAttribute('content', language === 'ru' ? 'ZeFREQ — электронный дуэт. Два голоса. Одна частота. Истории связи и эмоций за пределами шума.' : 'ZeFREQ — an independent electronic duo. Two voices. One frequency. Beyond the noise, find the meaning.');
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
