# ZeFREQ — official concept website

Bilingual official website of **ZeFREQ**, an independent electronic duo built around two contrasting voices and one shared story.

- English homepage: https://justsmokeadfly.github.io/ZeFREQ/ (default for new visitors).
- Russian homepage: https://justsmokeadfly.github.io/ZeFREQ/ru/ (indexable, works without JavaScript).
- Locale links in the header remember the visitor's preference.
- HTML/CSS/vanilla JavaScript only; no dependencies or backend.
- The debut single **«Тепло в проводах» / “Warmth in the Wires”** is **in production**. The streaming platforms are planned, not linked to unpublished music.

## Development

Run `node --test tests/*.test.mjs` with Node.js 22+ before updating the site. Tests check site structure, two static languages, relative paths, metadata, and responsive grid rules. The GitHub Pages workflow runs these checks and publishes **only** the public files in `dist/`.

GitHub Pages settings: **Settings → Pages → Build and deployment → GitHub Actions**.

## Updating content

- Edit both `index.html` (English) and `ru/index.html` (Russian). Keep their anchors, canonical and alternate-language URLs in sync.
- `app.js` manages the mobile menu and remembers the language selection. Language switching uses ordinary links and works without JavaScript.
- `assets/og-card.png` is the social-sharing preview (1200×630).
- Artist portraits in `assets/duo.svg`, `assets/male.svg`, `assets/female.svg` remain **temporary original concept illustrations**, not final approved artist photographs. Replace these only with authorized final artwork.
- Do not add real platform or social URLs until they have been verified. Do not present the concept single art as the final release cover.
- `robots.txt` and `sitemap.xml` list both page languages.

Theme: graphite, cyan and amber. © 2026 ZeFREQ.
