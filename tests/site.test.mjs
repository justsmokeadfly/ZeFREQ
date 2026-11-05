import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const html = {
  en: readFileSync(resolve(root, 'index.html'), 'utf8'),
  ru: readFileSync(resolve(root, 'ru/index.html'), 'utf8'),
};
const css = readFileSync(resolve(root, 'styles.css'), 'utf8');
const js = readFileSync(resolve(root, 'app.js'), 'utf8');
const url = 'https://justsmokeadfly.github.io/ZeFREQ/';

for (const [lang, page] of Object.entries(html)) {
  test(lang + ': SEO, language, and semantic structure', () => {
    assert.match(page, new RegExp('<html lang="' + lang + '"'));
    assert.match(page, /<main id="content">/);
    assert.match(page, /<h1 id="hero-title">/);
    assert.match(page, /<link rel="canonical" href="https:\/\//);
    assert.match(page, /hreflang="en"/);
    assert.match(page, /hreflang="ru"/);
    assert.match(page, /<meta name="twitter:card" content="summary_large_image">/);
    assert.match(page, /og:image" content="https:\/\//);
    assert.match(page, /"@type":"MusicGroup"/);
    assert.match(page, /<a class="skip-link" href="#content"/);
    assert.match(page, /<a class="lang-option"/);
    assert.doesNotMatch(page, /aria-pressed=/);
    const anchors = new Set([...page.matchAll(/\bid="([^"]+)"/g)].map(x => x[1]));
    for (const href of page.matchAll(/\bhref="#([^"]+)"/g)) {
      assert.ok(anchors.has(href[1]), lang + ': missing #' + href[1]);
    }
  });
  test(lang + ': local paths and image alternatives', () => {
    for (const match of page.matchAll(/(?:src|href)="([^"]+)"/g)) {
      const value = match[1];
      if (!value || value.startsWith('#') || /^https?:/.test(value)) continue;
      assert.ok(existsSync(resolve(dirname(resolve(root, lang === 'ru' ? 'ru/index.html' : 'index.html')), value)), lang + ': missing ' + value);
    }
    for (const img of page.matchAll(/<img\b[^>]*>/g)) {
      assert.match(img[0], /alt="[^"]+"/);
      assert.match(img[0], /width="\d+"/);
      assert.match(img[0], /height="\d+"/);
    }
  });
}
test('static English is default and Russian is fully rendered', () => {
  assert.match(html.en, /HUMAN<br><em>FREQUENCY/);
  assert.match(html.ru, /ЖИВАЯ<br><em>ЧАСТОТА/);
  assert.match(html.ru, /<h3>СВЯЗЬ<\/h3>/);
  assert.match(html.ru, /<h3>ДВОЙСТВЕННОСТЬ<\/h3>/);
  assert.match(html.ru, /<h3>ОТКРЫТИЕ<\/h3>/);
  assert.match(html.ru, /<h2>ОСТАВАЙСЯ/);
  assert.ok(!html.en.includes('ЯНДЕКС МУЗЫКА'));
  assert.ok(html.ru.includes('ЯНДЕКС МУЗЫКА'));
  assert.match(js, /localStorage/);
  assert.match(js, /aria-expanded/);
});
test('responsive grid cannot exceed available width', () => {
  assert.match(css, /grid-template-columns:minmax\(0,47fr\) minmax\(0,53fr\)/);
  assert.match(css, /grid-template-columns:minmax\(0,46fr\) minmax\(0,54fr\)/);
  assert.match(css, /prefers-reduced-motion/);
});
test('robots and sitemap include both languages', () => {
  assert.match(readFileSync(resolve(root, 'robots.txt'), 'utf8'), /Sitemap: /);
  const sitemap = readFileSync(resolve(root, 'sitemap.xml'), 'utf8');
  assert.ok(sitemap.includes('<loc>' + url + '</loc>'));
  assert.ok(sitemap.includes('<loc>' + url + 'ru/</loc>'));
});
