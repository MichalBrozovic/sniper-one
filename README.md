# Sniper Bender

## Úvod

**Sniper Bender** vychází z nástroje Shoptet Bender vyvinutého společností Shoptet. Slouží jako proxy, která přesměruje vzdálený e‑shop na localhost a zároveň do něj vkládá a obsluhuje lokální styly a skripty.

Díky tomu umožňuje vývoj vizuálních úprav bez zásahu do produkčního e‑shopu. Nástroj je vhodný také pro vývoj **Premium e‑shopů**, přičemž je možné emulovat režim **Blank mode**.

---

## Instalace

### Požadavky

* Node.js **>= 20**

### Instalace balíčku

Pomocí Yarn:

```bash
yarn add sniper-bender
```

Nebo pomocí npm:

```bash
npm install sniper-bender
```

---

## Použití

### Základní postup spuštění

1. Vytvoř soubor `config.json` a nastav `defaultUrl` na URL svého e‑shopu:

```json
{
  "defaultUrl": "https://classic.shoptet.cz/",
  "sourceFolder": "./src",
  "outputFolder": "./dist",
  "blankModeScript": false,
  "blankModeStyle": false
}
```

2. Ujisti se, že `package.json` obsahuje položky:

   * `name`
   * `description`
   * `version`

3. Vytvoř složku `src` a v ní podsložky:

```
src/
├── scss/
└── js/
```

4. Struktura vstupních souborů:

* `src/scss/`

  * `critical.scss`
  * `style.scss`

* `src/js/`

  * `critical.js`
  * `script.js`

5. Spusť nástroj v režimu vývoje:

```bash
npx sniper-bender start
```

### Produkční build

Pro vytvoření produkční verze spusť:

```bash
npx sniper-bender build
```

Tento příkaz:

* vytvoří minifikované skripty a styly
* nespouští BrowserSync
* nespouští watcher souborů

---

## CLI nápověda

Pro zobrazení všech dostupných příkazů:

```bash
npx sniper-bender -h
```

---

© CPU s.r.o.
