(() => {
  'use strict';
  const isRussian = document.documentElement.lang === 'ru';
  const siteRoot = new URL(isRussian ? '../' : './', window.location.href);
  const preferenceKey = 'zefreq-language-v3';
  const previousKey = 'zefreq-language-v2';
  let saved = null;
  try { saved = localStorage.getItem(preferenceKey) || localStorage.getItem(previousKey); } catch (_) {}
  // Visitors who previously chose Russian keep that preference; first visits use English.
  if (!isRussian && saved === 'ru') {
    window.location.replace(new URL('ru/', siteRoot).href);
    return;
  }
  for (const link of document.querySelectorAll('.lang-option')) {
    link.addEventListener('click', () => {
      try { localStorage.setItem(preferenceKey, link.dataset.lang); } catch (_) {}
    });
  }
  const nav = document.getElementById('primary-nav');
  const menu = document.querySelector('.menu-toggle');
  const openLabel = isRussian ? 'Открыть меню' : 'Open menu';
  const closeLabel = isRussian ? 'Закрыть меню' : 'Close menu';
  const closeMenu = (restoreFocus = false) => {
    const wasOpen = nav.classList.contains('open');
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', openLabel);
    if (wasOpen && restoreFocus) menu.focus();
  };
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? closeLabel : openLabel);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu(true);
  });
  document.addEventListener('pointerdown', event => {
    if (!menu.contains(event.target) && !nav.contains(event.target)) closeMenu();
  });
  const viewport = window.matchMedia('(min-width: 761px)');
  if (viewport.addEventListener) viewport.addEventListener('change', () => closeMenu());
  document.getElementById('year').textContent = String(new Date().getFullYear());
})();
