# Shoptet Project: Sniper One

## Overview
Tento projekt slouží k vývoji Shoptet šablon. Využívá vlastní build systém postavený na Webpacku, který spravuje kompilaci Sass, minifikaci JavaScriptu a přípravu HTML fragmentů pro Shoptet.

## Struktura projektu
- `core/`: Obsahuje logiku build systému (Webpack konfigurace a CLI nástroje).
- `src/`: Zdrojové soubory šablony.
  - `hmtl/`: HTML šablony a fragmenty (Pozor: složka je pojmenována `hmtl`).
  - `scss/`: Modulární Sass styly.
    - `style.scss`: Hlavní soubor stylů.
    - `critical.scss`: Kritické CSS (above-the-fold).
    - `_colors.scss`, `_variables.scss`, `_mixins.scss`: Definice design systému a tokenů.
  - `js/`: Zdrojové soubory JavaScriptu (`script.js`, `critical.js`, `swiperize.js` atd.).
- `assets/`: Statické soubory (obrázky, fonty).
- `dist/`: Zkompilovaný výstup připravený pro nahrání na Shoptet.
- `config.json`: Konfigurace projektu (cílová URL Shoptetu, cesty).

## Tech Stack
- **Styling**: SCSS (Sass), Autoprefixer, PostCSS.
- **JavaScript**: Moderní JS, Babel, Swiper.js.
- **Build Tool**: Webpack přes vlastní CLI (`npm run sniper` / `npm run sniper:build`).
- **Platforma**: Shoptet.

## Klíčové soubory
- `config.json`: Hlavní nastavení projektu.
- `package.json`: Závislosti a skripty.
- `src/scss/_colors.scss`: Definice barev.
- `src/scss/_variables.scss`: Globální proměnné šablony.

## Příkazy
- `npm run sniper`: Spustí vývojové prostředí (sledování změn, pravděpodobně BrowserSync).
- `npm run sniper:build`: Vytvoří produkční verzi v adresáři `dist/`.

---
*Vytvořeno AI pro usnadnění analýzy projektu.*
