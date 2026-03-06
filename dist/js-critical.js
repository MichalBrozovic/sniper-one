/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!****************************!*\
  !*** ./src/js/critical.js ***!
  \****************************/
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
window.shoptetPage = dataLayer[0].shoptet.pageType;
window.shoptetLang = dataLayer[0].shoptet.language;
window.body = document.querySelector("body");

// přesunování elementů
function moveElement(elementOrSelector, targetSelectors) {
  // Pokud je to string, najdeme ho, pokud je to objekt, použijeme ho přímo
  var element = typeof elementOrSelector === "string" ? document.querySelector(elementOrSelector) : elementOrSelector;
  var footer = document.querySelector("footer");
  if (!element) {
    console.error("Prvek nebyl nalezen");
    return;
  }
  var moved = false;
  var _iterator = _createForOfIteratorHelper(targetSelectors),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var targetSelector = _step.value;
      var target = document.querySelector(targetSelector);
      // :has() selektor v JS funguje v moderních prohlížečích (Shoptet 2026 už to dá)
      if (target) {
        target.insertAdjacentElement("afterend", element);
        moved = true;
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (!moved && footer) {
    footer.insertAdjacentElement("beforebegin", element);
  }
}

// Přiřazení funkce k objektu window pro globální dostupnost
window.moveElement = moveElement;

//On funkce, na kliknutí a zavolání funkce
function on(eventType, selector, callback) {
  document.addEventListener(eventType, function (e) {
    var targetElement = e.target;
    while (targetElement && targetElement !== document) {
      if (targetElement.matches(selector)) {
        // e.preventDefault(); // ODEBRÁNO - jinak by nefungovaly odkazy v menu
        callback.call(targetElement, e);
        return;
      }
      targetElement = targetElement.parentElement;
    }
  }, {
    passive: true
  }); // Lepší pro výkon (scroll/touch)
}

//z hrefu na další sekci
function scrollToNextSectionOrHref(e) {
  if (this.getAttribute("href") === "#next") {
    e.preventDefault();
    scrollToNextSection.call(this);
  }
}

// window.addEventListener('load', () => document.body.classList.add('hideSpinner'))
var debounce = function debounce(func, delay) {
  var debounceTimer;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      return func.apply(context, args);
    }, delay);
  };
};

// Funkce pro získání šířky scrollbaru

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}
function setScrollbarWidth() {
  var scrollbarWidth = getScrollbarWidth();
  document.documentElement.style.setProperty("--scrollbar-width", "".concat(scrollbarWidth, "px"));
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setScrollbarWidth);
} else {
  setScrollbarWidth();
}
window.addEventListener("resize", setScrollbarWidth);
document.addEventListener("shoptet.content.updated", setScrollbarWidth);

// Funkce pro nastavení výšky headeru jako CSS proměnné
function setHeaderTopHeight() {
  var headerTop = document.querySelector("#header");
  if (headerTop) {
    document.documentElement.style.setProperty("--header-top-height", "".concat(headerTop.clientHeight, "px"));
  }
}
var syncShoptetBodyColor = function syncShoptetBodyColor() {
  if (typeof shoptet !== "undefined" && shoptet.design && shoptet.design.background && shoptet.design.background.color) {
    var bodyColor = shoptet.design.background.color.color;
    document.documentElement.style.setProperty("--color-body-background", bodyColor);
  }
};

// Spustit hned
syncShoptetBodyColor();

// Zavolejte funkci při načtení stránky
document.addEventListener("DOMContentLoaded", setHeaderTopHeight);
window.addEventListener("resize", setHeaderTopHeight);
var currentPath = window.location.pathname;
var links = document.querySelectorAll(".menu-level-1 li a");
links.forEach(function (link) {
  var linkPath = new URL(link.href).pathname;
  if (linkPath === currentPath) {
    link.classList.add("active");
  }
});
var links2 = document.querySelectorAll(".top-navigation-bar-menu li a");
links2.forEach(function (link) {
  var linkPath = new URL(link.href).pathname;
  if (linkPath === currentPath) {
    link.classList.add("active");
  }
});
function fixedHeader() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var header2 = document.querySelector(".user-action-cart");
  var login = document.querySelector(".user-action-login");
  var header = document.querySelector("#header");
  if (scrollTop > 45) {
    if (header) {
      header.classList.add("sticky");
    }
    if (header2) {
      header2.classList.add("sticky");
    }
    if (login) {}
    login.classList.add("sticky");

    // header.classList.remove('scroll-up')
    // header.classList.add('scroll-down')
  } else {
    // header.classList.remove('scroll-down')
    // header.classList.add('scroll-up')

    if (header) {
      header.classList.remove("sticky");
    }
    if (header2) {
      header2.classList.remove("sticky");
    }
    if (login) {}
    login.classList.remove("sticky");
  }
}
document.addEventListener("DOMContentLoaded", fixedHeader);
window.addEventListener("scroll", fixedHeader);

// language menu + currency menu
// přidá aktuální vlajku + upravuje přidání tříd po kliknutí kvůli lepšímu css
var syncLanguageMenu = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var langMenu, langBoxSelector, sourceButton, targetHeader, activeFlag, alreadyHasFlag, textNodes;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          langMenu = document.querySelector(".languagesMenu");
          langBoxSelector = '.languagesMenu__box[data-target="language"]';
          sourceButton = document.getElementById("topNavigationDropdown");
          targetHeader = document.querySelector("".concat(langBoxSelector, " .languagesMenu__header--actual"));
          if (sourceButton && targetHeader) {
            activeFlag = sourceButton.querySelector("svg.shp-flag");
            alreadyHasFlag = targetHeader.querySelector("svg.shp-flag");
            if (activeFlag && !alreadyHasFlag) {
              // Skrytí textu do sr-only pro přístupnost
              textNodes = Array.from(targetHeader.childNodes).filter(function (node) {
                return node.nodeType === 3 && node.textContent.trim().length > 0;
              });
              textNodes.forEach(function (node) {
                var span = document.createElement("span");
                span.className = "sr-only";
                span.textContent = node.textContent.trim();
                targetHeader.replaceChild(span, node);
              });
              targetHeader.prepend(activeFlag.cloneNode(true));
              sourceButton.style.display = "none";
            }
          }
          if (!window.languageMenuInitialized) {
            _context.n = 1;
            break;
          }
          return _context.a(2);
        case 1:
          document.addEventListener("click", function (e) {
            // Kliknutí na header nebo cokoliv v něm
            var header = e.target.closest(".languagesMenu__header--actual");
            if (header) {
              e.stopPropagation();
              var box = header.closest(".languagesMenu__box");
              var list = box ? box.querySelector(".languagesMenu__list") : null;
              if (list && box) {
                header.classList.toggle("open");
                list.classList.toggle("open");
              }
            } else {
              document.querySelectorAll(".languagesMenu__header--actual.open, .languagesMenu__list.open").forEach(function (el) {
                el.classList.remove("open");
              });
            }
          });
          langMenu.classList.add("js-loaded");
          window.languageMenuInitialized = true;
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return function syncLanguageMenu() {
    return _ref.apply(this, arguments);
  };
}();
var injectOpeningHours = function injectOpeningHours() {
  var openingHours = window.projectOpeningHours;
  if (!openingHours) return;
  var phoneLinks = document.querySelectorAll(".project-phone");
  phoneLinks.forEach(function (link) {
    // Pojistka proti dvojení prvků při AJAXu
    if (!link.querySelector(".project-opening-hours")) {
      var small = document.createElement("small");
      small.className = "project-opening-hours";
      small.textContent = openingHours;
      link.appendChild(small);
    }
  });
};
var removeMenuCommas = function removeMenuCommas() {
  var liElements = document.querySelectorAll(".menu-level-3 li");
  liElements.forEach(function (li) {
    li.childNodes.forEach(function (node) {
      if (node.nodeType === 3 && node.textContent.includes(",")) {
        node.textContent = node.textContent.replace(",", "");
      }
    });
  });
};
var moveNavigation = function moveNavigation() {
  var nav = document.getElementById("navigation");
  var siteNameWrapper = document.querySelector(".header-top .site-name-wrapper");
  var headerTop = document.querySelector(".header-top");
  if (nav && siteNameWrapper && headerTop) {
    // Kontrola, zda už navigace není na správném místě (hned za site-name-wrapper)
    if (siteNameWrapper.nextElementSibling !== nav) {
      // Metoda after() vloží element přesně za vybraný prvek
      siteNameWrapper.after(nav);
    }
  }
};
var menuLevelTwoRefactoring = function menuLevelTwoRefactoring() {
  var menuItems = document.querySelectorAll(".menu-level-2 > li");
  menuItems.forEach(function (li) {
    var imgLink = li.querySelector("a.menu-image");
    var textLink = li.querySelector('div > a[data-testid="headerMenuItem"]');
    var wrapperDiv = li.querySelector("div");
    if (imgLink && textLink) {
      var img = imgLink.querySelector("img");
      if (img) {
        textLink.prepend(img);
      }
      imgLink.remove();
      if (wrapperDiv) {
        li.appendChild(textLink);
        wrapperDiv.remove();
      }
    }
  });
};
var moveLoginButton = function moveLoginButton() {
  var loginButton = document.querySelector(".top-navigation-bar .top-nav-button-login");
  var targetWrapper = document.querySelector("#header .navigation-buttons");
  if (!targetWrapper) return;

  // Pokud už tam tlačítko je (pojistka proti dvojení), nebudeme dělat nic
  if (targetWrapper.querySelector(".top-nav-button-login")) {
    return;
  }
  if (loginButton) {
    // Použijeme cloneNode(true), aby původní zůstalo kde je (pokud chceš kopii)
    // nebo jen targetWrapper.prepend(loginButton), pokud ho chceš fyzicky vyjmout a přesunout
    var loginCopy = loginButton.cloneNode(true);
    targetWrapper.prepend(loginCopy);

    // Pokud chceš ten původní v top baru schovat, aby tam nebyl 2x:
    loginButton.style.display = "none";
  }
};
var userCartHandle = function userCartHandle() {
  var cartWidget = document.getElementById("cart-widget");
  var cartButton = document.querySelector("#header .navigation-buttons .cart-count");
  if (cartWidget && cartButton) {
    if (!cartButton.contains(cartWidget)) {
      cartButton.appendChild(cartWidget);
    }
  } else if (cartWidget && !cartButton) {
    var navButtons = document.querySelector("#header .navigation-buttons");
    if (navButtons && !navButtons.contains(cartWidget)) {
      navButtons.appendChild(cartWidget);
    }
  }
};
var handleHeader = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          syncLanguageMenu();
          removeMenuCommas();
          injectOpeningHours();
          moveNavigation();
          menuLevelTwoRefactoring();
          moveLoginButton();
          userCartHandle();
        case 1:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return function handleHeader() {
    return _ref2.apply(this, arguments);
  };
}();
handleHeader();
document.addEventListener("ShoptetDOMPageContentLoaded", handleHeader);
document.addEventListener("ShoptetDOMContentLoaded", handleHeader);
var initHomepageSwiper = function initHomepageSwiper() {
  var $carousel = document.querySelector("#carousel");
  var $inner = document.querySelector(".carousel-inner");
  if (!$carousel || !$inner) return;
  var $items = $carousel.querySelectorAll(".item");
  if ($items.length === 0) return;

  // 1. ZABIJEME SHOPTET LOGIKU
  $carousel.removeAttribute("data-ride");
  $carousel.removeAttribute("data-interval");
  $carousel.removeAttribute("style");
  $inner.removeAttribute("style");

  // 2. TRANSFORMACE DOMU
  $carousel.classList.add("swiper");
  $inner.classList.replace("carousel-inner", "swiper-wrapper");
  $items.forEach(function (el) {
    el.classList.remove("item", "active");
    el.classList.add("swiper-slide");
    el.removeAttribute("style");
  });

  // 3. VYČISTÍME A VLOŽÍME NOVOU NAVIGACI
  $carousel.querySelectorAll(".carousel-control").forEach(function (el) {
    return el.remove();
  });

  // Vložíme šipky DOVNITŘ swiperu
  if (!$carousel.querySelector(".swiper-button-prev")) {
    $carousel.insertAdjacentHTML("beforeend", "\n      <div class=\"swiper-button-prev\"></div>\n      <div class=\"swiper-button-next\"></div>\n      ");
  }

  // Vložíme paginaci ZA swiper (jako sourozenec)
  var $pagination = $carousel.nextElementSibling;
  if (!$pagination || !$pagination.classList.contains("swiper-pagination")) {
    $carousel.insertAdjacentHTML("afterend", "<div class=\"swiper-pagination\"></div>");
    $pagination = $carousel.nextElementSibling;
  }

  // 4. INICIALIZACE SWIPERU
  new window.Swiper("#carousel", {
    grabCursor: true,
    watchSlidesProgress: true,
    speed: 600,
    breakpointsBase: "container",
    slidesPerView: 1.1,
    spaceBetween: 12,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: $pagination,
      // Použijeme referenci na element za swiperem
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        // Vygeneruje button místo divu
        return '<button class="' + className + '" aria-label="Go to slide ' + (index + 1) + '"></button>';
      }
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 14
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 16
      },
      1360: {
        slidesPerView: 4,
        spaceBetween: 16
      }
    }
  });
};
document.addEventListener("DOMContentLoaded", initHomepageSwiper);

/**
 * GLOBÁLNÍ PROMĚNNÉ
 * Uchování stavu popisu pro aktuální instanci běhu JS.
 */
var categoryDescriptionCache = null;
var bestSellingCache = null;
// Získání čistého URL pro případný fetch 1. strany
var getCategoryBaseUrl = function getCategoryBaseUrl() {
  return window.location.pathname.replace(/\/strana-[0-9]+\/?/, "/");
};

// Generování unikátního klíče na základě Shoptet ID
var getCategoryCacheKey = function getCategoryCacheKey() {
  var _window$dataLayer;
  var pageId = ((_window$dataLayer = window.dataLayer) === null || _window$dataLayer === void 0 || (_window$dataLayer = _window$dataLayer[0]) === null || _window$dataLayer === void 0 || (_window$dataLayer = _window$dataLayer.shoptet) === null || _window$dataLayer === void 0 ? void 0 : _window$dataLayer.pageId) || "unknown";
  return "perex_".concat(pageId);
};

// Funkce stáhne první stranu kategorie, najde v ní perex a sestaví "upperWrapper" s odděleným obsahem a obrázkem.
var fetchAndBuildCategoryTop = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(categoryTop) {
    var baseUrl, response, text, parser, doc, fetchedPerex, fetchedTitle, secondDesc, _window$projectTransl, lang, readMoreText, upperWrapper, contentDiv, img, newImg, parentP, readMoreBtn, _t;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          baseUrl = getCategoryBaseUrl();
          _context3.n = 1;
          return fetch(baseUrl);
        case 1:
          response = _context3.v;
          _context3.n = 2;
          return response.text();
        case 2:
          text = _context3.v;
          parser = new DOMParser();
          doc = parser.parseFromString(text, "text/html");
          fetchedPerex = doc.querySelector(".category-perex");
          fetchedTitle = doc.querySelector(".category-title");
          secondDesc = doc.querySelector(".category__secondDescription");
          if (!fetchedPerex) {
            _context3.n = 3;
            break;
          }
          lang = document.documentElement.lang || "cs";
          readMoreText = ((_window$projectTransl = window.projectTranslations) === null || _window$projectTransl === void 0 || (_window$projectTransl = _window$projectTransl[lang]) === null || _window$projectTransl === void 0 || (_window$projectTransl = _window$projectTransl.category) === null || _window$projectTransl === void 0 ? void 0 : _window$projectTransl.readMore) || "Přečíst více";
          upperWrapper = document.createElement("div");
          upperWrapper.className = "category-top-upper";
          contentDiv = document.createElement("div");
          contentDiv.className = "category-top-upper--content";
          img = fetchedPerex.querySelector("img") || doc.querySelector(".category-top img");
          if (img) {
            newImg = img.cloneNode(true);
            upperWrapper.append(newImg);
            parentP = img.closest("p");
            if (parentP && !parentP.textContent.trim()) parentP.remove();
          }
          if (fetchedTitle) contentDiv.append(fetchedTitle.cloneNode(true));
          contentDiv.append(fetchedPerex.cloneNode(true));
          if (secondDesc) {
            readMoreBtn = document.createElement("a");
            readMoreBtn.className = "read-more-link";
            readMoreBtn.innerText = readMoreText;
            readMoreBtn.style.cursor = "pointer";
            contentDiv.append(readMoreBtn);
          }
          upperWrapper.prepend(contentDiv);
          return _context3.a(2, upperWrapper);
        case 3:
          _context3.n = 5;
          break;
        case 4:
          _context3.p = 4;
          _t = _context3.v;
          console.error("Nepodařilo se stáhnout data kategorie:", _t);
        case 5:
          return _context3.a(2, null);
      }
    }, _callee3, null, [[0, 4]]);
  }));
  return function fetchAndBuildCategoryTop(_x) {
    return _ref3.apply(this, arguments);
  };
}();

// Funkce zajišťuje dostupnost dat o kategorii z DOMu, Cache, nebo přes Fetch a spouští renderování.
var handleCategoryTop = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
    var categoryTop, cacheKey, currentPerex, _window$projectTransl2, title, secondDesc, lang, readMoreText, upperWrapper, contentDiv, img, newImg, parentP, readMoreBtn, savedData, _upperWrapper, fetchedWrapper, hasOurStructure;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          if (!(window.shoptetPage !== "category")) {
            _context4.n = 1;
            break;
          }
          return _context4.a(2);
        case 1:
          categoryTop = document.querySelector(".category-top");
          if (categoryTop) {
            _context4.n = 2;
            break;
          }
          return _context4.a(2);
        case 2:
          cacheKey = getCategoryCacheKey();
          currentPerex = categoryTop.querySelector(".category-perex");
          if (!(currentPerex && !categoryDescriptionCache)) {
            _context4.n = 3;
            break;
          }
          title = categoryTop.querySelector(".category-title");
          secondDesc = document.querySelector(".category__secondDescription");
          lang = document.documentElement.lang || "cs";
          readMoreText = ((_window$projectTransl2 = window.projectTranslations) === null || _window$projectTransl2 === void 0 || (_window$projectTransl2 = _window$projectTransl2[lang]) === null || _window$projectTransl2 === void 0 || (_window$projectTransl2 = _window$projectTransl2.category) === null || _window$projectTransl2 === void 0 ? void 0 : _window$projectTransl2.readMore) || "Přečíst více";
          upperWrapper = document.createElement("div");
          upperWrapper.className = "category-top-upper";
          contentDiv = document.createElement("div");
          contentDiv.className = "category-top-upper--content";
          img = currentPerex.querySelector("img") || categoryTop.querySelector("img");
          if (img) {
            newImg = img.cloneNode(true);
            upperWrapper.append(newImg);
            parentP = img.closest("p");
            if (parentP && !parentP.textContent.trim()) parentP.remove();
          }
          if (title) contentDiv.append(title.cloneNode(true));
          contentDiv.append(currentPerex.cloneNode(true));
          if (secondDesc) {
            readMoreBtn = document.createElement("a");
            readMoreBtn.className = "read-more-link";
            readMoreBtn.innerText = readMoreText;
            readMoreBtn.style.cursor = "pointer";
            contentDiv.append(readMoreBtn);
          }
          upperWrapper.prepend(contentDiv);
          categoryDescriptionCache = upperWrapper.cloneNode(true);
          sessionStorage.setItem(cacheKey, upperWrapper.innerHTML);
          _context4.n = 8;
          break;
        case 3:
          if (categoryDescriptionCache) {
            _context4.n = 8;
            break;
          }
          savedData = sessionStorage.getItem(cacheKey);
          _upperWrapper = document.createElement("div");
          _upperWrapper.className = "category-top-upper";
          if (!savedData) {
            _context4.n = 4;
            break;
          }
          _upperWrapper.innerHTML = savedData;
          _context4.n = 7;
          break;
        case 4:
          _context4.n = 5;
          return fetchAndBuildCategoryTop(categoryTop);
        case 5:
          fetchedWrapper = _context4.v;
          if (!fetchedWrapper) {
            _context4.n = 6;
            break;
          }
          _upperWrapper = fetchedWrapper;
          sessionStorage.setItem(cacheKey, _upperWrapper.innerHTML);
          _context4.n = 7;
          break;
        case 6:
          return _context4.a(2);
        case 7:
          categoryDescriptionCache = _upperWrapper;
        case 8:
          hasOurStructure = categoryTop.querySelector(".category-top-upper");
          if (categoryDescriptionCache && !hasOurStructure) {
            renderCategoryTopStructure(categoryTop);
          }
        case 9:
          return _context4.a(2);
      }
    }, _callee4);
  }));
  return function handleCategoryTop() {
    return _ref4.apply(this, arguments);
  };
}();

// Funkce sestavuje finální HTML z cache a zajišťuje funkčnost eventů a správnost nadpisu.
var renderCategoryTopStructure = function renderCategoryTopStructure(categoryTop) {
  var subcategories = categoryTop.querySelector(".subcategories");
  var newTitle = categoryTop.querySelector(".category-title");
  var container = document.createElement("div");
  container.className = "container active";
  var cachedContent = categoryDescriptionCache.cloneNode(true);
  var setupReadMore = function setupReadMore(el) {
    var btn = el.querySelector(".read-more-link");
    if (btn) {
      btn.onclick = function (e) {
        var _document$getElementB;
        e.preventDefault();
        (_document$getElementB = document.getElementById("category-description-bottom")) === null || _document$getElementB === void 0 || _document$getElementB.scrollIntoView({
          behavior: "smooth"
        });
      };
    }
  };
  setupReadMore(cachedContent);
  if (newTitle) {
    var oldTitle = cachedContent.querySelector(".category-title");
    if (oldTitle) {
      oldTitle.replaceWith(newTitle.cloneNode(true));
    } else {
      var _cachedContent$queryS;
      (_cachedContent$queryS = cachedContent.querySelector(".category-top-upper--content")) === null || _cachedContent$queryS === void 0 || _cachedContent$queryS.prepend(newTitle.cloneNode(true));
    }
  }
  container.append(cachedContent);
  if (subcategories) {
    container.append(subcategories.cloneNode(true));
  }
  categoryTop.innerHTML = "";
  categoryTop.append(container);
  categoryTop.classList.add("is-processed");
  var title = categoryTop.querySelector(".category-title");
  var appendix = (title === null || title === void 0 ? void 0 : title.querySelector(".pagination-appendix")) || document.querySelector(".pagination-appendix");
  if (title && appendix) {
    appendix.textContent = appendix.textContent.replace(",", "").trim();
    if (!title.contains(appendix)) {
      title.append(appendix);
    }
  }
};
/**
 * ZPRACOVÁNÍ NEJPRODÁVANĚJŠÍCH PRODUKTŮ
 */

// Funkce ukládá nejprodávanější produkty do cache a v případě jejich absence v DOMu je vkládá zpět.
var handleBestSellingInjection = function handleBestSellingInjection() {
  if (window.shoptetPage !== "category") return;
  var categoryTop = document.querySelector(".category-top");
  var existingBestSelling = document.querySelector(".products-top-wrapper");
  if (existingBestSelling && !bestSellingCache) {
    existingBestSelling.classList.remove("has-inactive");
    bestSellingCache = existingBestSelling.cloneNode(true);
    if (categoryTop && categoryTop.contains(existingBestSelling)) {
      categoryTop.after(existingBestSelling);
    }
  }
  if (!document.querySelector(".products-top-wrapper") && bestSellingCache && categoryTop) {
    categoryTop.after(bestSellingCache.cloneNode(true));
    handleBestSellingProducts();
  }
};

// Funkce přidává tlačítka "Detail" k nejprodávanějším produktům, řeší jejich persistenci přes cache a opravuje src u obrázků.
var handleBestSellingProducts = function handleBestSellingProducts() {
  var _window$projectTransl3;
  var categoryTop = document.querySelector(".category-top");
  var bestSelling = document.querySelector(".products-top-wrapper");
  var fixImages = function fixImages(container) {
    var images = container.querySelectorAll("img[data-src]");
    images.forEach(function (img) {
      img.setAttribute("src", img.getAttribute("data-src"));
    });
  };
  if (bestSelling && !bestSellingCache) {
    bestSelling.classList.remove("has-inactive");
    fixImages(bestSelling);
    bestSellingCache = bestSelling.cloneNode(true);
  }
  if (!bestSelling && bestSellingCache && categoryTop) {
    var fragment = bestSellingCache.cloneNode(true);
    fixImages(fragment);
    categoryTop.after(fragment);
    bestSelling = document.querySelector(".products-top-wrapper");
  }
  var products = document.querySelectorAll("#productsTop .product");
  if (!products.length) return;
  var lang = document.documentElement.lang || "cs";
  var detailText = ((_window$projectTransl3 = window.projectTranslations) === null || _window$projectTransl3 === void 0 || (_window$projectTransl3 = _window$projectTransl3[lang]) === null || _window$projectTransl3 === void 0 || (_window$projectTransl3 = _window$projectTransl3.category) === null || _window$projectTransl3 === void 0 ? void 0 : _window$projectTransl3.productsTopButton) || "Detail";
  var btnTemplate = "<a href=\"{{url}}\" class=\"btn btn-primary btn-detail-added\">".concat(detailText, "</a>");
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    if (product.querySelector(".btn-detail-added")) continue;
    var productInner = product.querySelector(".p");
    var productNameLink = product.querySelector(".name");
    if (productInner && productNameLink) {
      var productUrl = productNameLink.getAttribute("href");
      productInner.insertAdjacentHTML("beforeend", btnTemplate.replace("{{url}}", productUrl));
    }
  }
};

/**
 * ZPRACOVÁNÍ FILTRŮ
 */

// Funkce obaluje vnitřní prvky cenového slideru do kontejneru pro lepší vizuální kontrolu.
var wrapPriceSliderInner = function wrapPriceSliderInner(sliderWrapper) {
  var header = sliderWrapper.querySelector(".slider-header");
  var content = sliderWrapper.querySelector(".slider-content");
  if (header && content) {
    var innerContainer = document.createElement("div");
    innerContainer.className = "slider-inner-container";
    header.before(innerContainer);
    innerContainer.append(header, content);
  }
};

// Funkce rozděluje filtry do dvou skupin podle typu, aby umožnila specifický layout (např. boční panel).
var splitFiltersToGroups = function splitFiltersToGroups(filters) {
  var leftWrapper = document.createElement("div");
  leftWrapper.className = "filters-left";
  var rightWrapper = document.createElement("div");
  rightWrapper.className = "filters-right";
  var slider = filters.querySelector(".slider-wrapper");
  var priceForm = filters.querySelector("#price-filter-form");
  var booleanSection = filters.querySelector(".filter-section-boolean");
  var otherSections = filters.querySelectorAll(".filter-section:not(.filter-section-boolean)");
  if (slider) leftWrapper.append(slider);
  if (priceForm) leftWrapper.append(priceForm);
  if (booleanSection) leftWrapper.append(booleanSection);
  for (var i = 0; i < otherSections.length; i++) {
    rightWrapper.append(otherSections[i]);
  }
  filters.innerHTML = "";
  filters.append(leftWrapper, rightWrapper);
};

// Funkce spouští proces restrukturalizace filtrů a označuje je jako zpracované.
var handleCategoryFilters = function handleCategoryFilters() {
  if (window.shoptetPage !== "category") return;
  var filters = document.querySelector("#filters");
  if (!filters || filters.classList.contains("filters-processed")) return;
  var sliderWrapper = filters.querySelector(".slider-wrapper");
  if (sliderWrapper) {
    wrapPriceSliderInner(sliderWrapper);
    splitFiltersToGroups(filters);
    filters.classList.add("filters-processed");
  }
};

/**
 * HLAVNÍ ORCHESTRÁTOR
 */

// Hlavní řídicí funkce pro kategorii, která registruje eventy a spouští všechny dílčí úpravy.
var _handleCategoryCritical = function handleCategoryCritical() {
  if (window.shoptetPage !== "category") return;
  handleBestSellingInjection();
  handleCategoryTop();
  handleBestSellingProducts();
  handleCategoryFilters();
  var events = ["shoptet.contentUpdated", "ShoptetDOMPageContentLoaded"];
  events.forEach(function (eventName) {
    document.removeEventListener(eventName, _handleCategoryCritical);
    document.addEventListener(eventName, function (e) {
      _handleCategoryCritical();
    });
  });
};
_handleCategoryCritical();

// Funkce transformuje galerii na Swiper a optimalizuje načítání (LCP).
// Hlavní slider a jeho šipky jsou obaleny do jednoho kontejneru pro snadné centrování.
var handleProductGallery = function handleProductGallery() {
  var _document$querySelect;
  var wrapper = document.querySelector(".p-image-wrapper");
  if (!wrapper) return;
  var thumbAnchors = wrapper.querySelectorAll(".p-thumbnails-inner a.p-thumbnail");
  if (!thumbAnchors.length) return;
  var isDesktop = window.innerWidth >= 768;
  var flags = ((_document$querySelect = document.querySelector(".p-image .flags-extra")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.outerHTML) || "";
  var mainSlides = "";
  var thumbSlides = "";
  for (var i = 0; i < thumbAnchors.length; i++) {
    var _anchor$nextElementSi;
    var anchor = thumbAnchors[i];
    var fullImg = anchor.href;
    var origImg = ((_anchor$nextElementSi = anchor.nextElementSibling) === null || _anchor$nextElementSi === void 0 ? void 0 : _anchor$nextElementSi.getAttribute("href")) || fullImg;
    var imgEl = anchor.querySelector("img");
    var thumbImg = (imgEl === null || imgEl === void 0 ? void 0 : imgEl.getAttribute("data-src")) || (imgEl === null || imgEl === void 0 ? void 0 : imgEl.src) || fullImg;
    var alt = (imgEl === null || imgEl === void 0 ? void 0 : imgEl.alt) || "";
    var loadingAttr = i === 0 ? 'fetchpriority="high" loading="eager"' : 'loading="lazy"';
    mainSlides += "\n            <div class=\"swiper-slide\">\n                <div class=\"p-main-image cloud-zoom\" \n                     data-href=\"".concat(origImg, "\"\n                     style=\"position: relative; display: block; cursor: crosshair;\">\n                    <img src=\"").concat(fullImg, "\" alt=\"").concat(alt, "\" ").concat(loadingAttr, ">\n                </div>\n            </div>");
    if (isDesktop) {
      thumbSlides += "<div class=\"swiper-slide\" style=\"cursor: pointer;\"><img src=\"".concat(thumbImg, "\" alt=\"").concat(alt, "\" loading=\"lazy\"></div>");
    }
  }
  var galleryHtml = "\n        <div class=\"swiper-main-wrapper\">\n            <div class=\"swiper swiper-main-image\">\n                ".concat(flags, "\n                <div class=\"swiper-wrapper\">").concat(mainSlides, "</div>\n            </div>\n            <div class=\"swiper-button-next main-nav-next secondary\"></div>\n            <div class=\"swiper-button-prev main-nav-prev secondary\"></div>\n        </div>\n    ");
  if (isDesktop) {
    galleryHtml += "\n            <div class=\"swiper-thumbnails-wrapper\">\n                <div class=\"swiper swiper-thumbnails\">\n                    <div class=\"swiper-wrapper\">".concat(thumbSlides, "</div>\n                </div>\n                <div class=\"swiper-button-next swiper-thumb-next small\"></div>\n                <div class=\"swiper-button-prev swiper-thumb-prev small\"></div>\n            </div>\n        ");
  }
  wrapper.innerHTML = galleryHtml;
  if (window.Swiper) {
    var swiperOptions = {
      spaceBetween: 16,
      navigation: {
        nextEl: ".main-nav-next",
        prevEl: ".main-nav-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    };
    if (isDesktop) {
      var thumbSwiper = new Swiper(".swiper-thumbnails", {
        spaceBetween: 8,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: ".swiper-thumb-next",
          prevEl: ".swiper-thumb-prev"
        }
      });
      swiperOptions.thumbs = {
        swiper: thumbSwiper
      };
      swiperOptions.pagination = false;
    }
    new Swiper(".swiper-main-image", swiperOptions);
    if (isDesktop && window.jQuery && $.fn.CloudZoom) {
      try {
        $(".swiper-main-image .cloud-zoom").CloudZoom();
      } catch (e) {
        console.warn("CloudZoom neprošel:", e);
      }
    }
  }
};

// Funkce přesouvá hlavičku, hvězdičky a kód produktu na začátek informačního panelu.
// Kód produktu je vložen přímo do obalu s hodnocením pro lepší rozložení prostoru.
var handleProductTop = function handleProductTop() {
  var infoWrapper = document.querySelector(".p-detail .p-info-wrapper");
  var header = document.querySelector(".p-detail-inner-header");
  var stars = document.querySelector(".stars-wrapper");
  var pCode = document.querySelector(".p-code");
  if (!infoWrapper || !header) return;
  infoWrapper.prepend(header);
  if (stars) {
    header.after(stars);
    if (pCode) {
      stars.append(pCode);
    }
  }
};

// Funkce přesouvá příznaky produktu z informačního bloku přímo do hlavního Swiper kontejneru.
var handleProductFlags = function handleProductFlags() {
  var mainSwiper = document.querySelector(".swiper-main-image");
  var flags = document.querySelector(".p-detail-info .flags");
  if (!mainSwiper || !flags) return;

  // Přesuneme příznaky na začátek Swiperu, aby byly vidět nad obrázky
  mainSwiper.prepend(flags);
};

// Funkce sjednotí nákupní blok do jednoho obalu, vypočítá ušetřenou částku
// a upraví text tlačítka košíku podle systémových proměnných Shoptetu.
var handleAddToCartWrapper = function handleAddToCartWrapper() {
  var infoWrapper = document.querySelector(".p-info-wrapper");
  if (!infoWrapper) return;
  var cartWrapper = infoWrapper.querySelector(".add-to-cart-wrapper");
  var addToCartBlock = infoWrapper.querySelector(".add-to-cart");
  var finalPriceWrapper = document.querySelector(".p-final-price-wrapper");
  if (!cartWrapper) {
    cartWrapper = document.createElement("div");
    cartWrapper.className = "add-to-cart-wrapper";
    if (addToCartBlock) {
      addToCartBlock.before(cartWrapper);
    } else {
      infoWrapper.append(cartWrapper);
    }
  }

  // --- 1. Přesun a úprava ceny (Výpočet slevy) ---
  if (finalPriceWrapper) {
    cartWrapper.append(finalPriceWrapper);
    var standardPriceEl = cartWrapper.querySelector(".price-standard");
    var finalPriceEl = cartWrapper.querySelector(".price-final-holder");
    var priceSaveEl = cartWrapper.querySelector(".price-save");
    if (standardPriceEl && finalPriceEl && priceSaveEl && !priceSaveEl.querySelector(".save-amount-text")) {
      var extractValue = function extractValue(el) {
        var clone = el.cloneNode(true);
        var unit = clone.querySelector(".pr-list-unit");
        if (unit) unit.remove();
        var rawText = clone.textContent.replace(/\s/g, "").replace(/\u00A0/g, "");
        var match = rawText.match(/[\d,]+/);
        return match ? parseFloat(match[0].replace(",", ".")) : 0;
      };
      var standardPrice = extractValue(standardPriceEl);
      var finalPrice = extractValue(finalPriceEl);
      if (standardPrice > finalPrice) {
        var _window$dataLayer2;
        var savedAmount = standardPrice - finalPrice;
        var cInfo = ((_window$dataLayer2 = window.dataLayer) === null || _window$dataLayer2 === void 0 || (_window$dataLayer2 = _window$dataLayer2[0]) === null || _window$dataLayer2 === void 0 || (_window$dataLayer2 = _window$dataLayer2.shoptet) === null || _window$dataLayer2 === void 0 ? void 0 : _window$dataLayer2.currencyInfo) || {
          decimalSeparator: ",",
          thousandSeparator: " ",
          symbol: "Kč",
          symbolLeft: 0,
          priceDecimalPlaces: 2
        };
        var formattedNum = parseFloat(savedAmount.toFixed(cInfo.priceDecimalPlaces)).toString();
        var parts = formattedNum.split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, cInfo.thousandSeparator);
        var formattedSave = parts.join(cInfo.decimalSeparator);
        var saveTextString = cInfo.symbolLeft ? "".concat(cInfo.symbol, " ").concat(formattedSave) : "".concat(formattedSave, " ").concat(cInfo.symbol);
        var saveText = document.createElement("span");
        saveText.className = "save-amount-text";
        saveText.textContent = " (".concat(saveTextString, ")");
        priceSaveEl.append(saveText);
      }
    }
  }

  // --- 2. Přesun nákupního bloku a úprava textu tlačítka ---
  if (addToCartBlock) {
    cartWrapper.append(addToCartBlock);
    var addToCartButton = addToCartBlock.querySelector(".add-to-cart-button");
    if (addToCartButton && window.shoptet && window.shoptet.messages && window.shoptet.messages['toCart']) {
      addToCartButton.textContent = window.shoptet.messages['toCart'];
    }
  }
};

// Funkce sjednotí informace o dostupnosti a doručení do jednoho bloku
// a obarví čas doručení stejnou barvou, jakou má hlavní štítek dostupnosti.
var handleAvailabilityProductTop = function handleAvailabilityProductTop() {
  var infoWrapper = document.querySelector(".p-info-wrapper");
  if (!infoWrapper) return;
  var availabilityValue = infoWrapper.querySelector(".availability-value");
  var availabilityLabel = infoWrapper.querySelector(".availability-label");
  var availabilityAmount = infoWrapper.querySelector(".availability-amount");
  var deliveryTimeLabel = infoWrapper.querySelector(".delivery-time-label");
  var deliveryTime = infoWrapper.querySelector(".delivery-time");
  if (!availabilityValue) return;
  var statusColor = availabilityLabel ? availabilityLabel.style.color : "";
  if (availabilityAmount && statusColor) {
    availabilityAmount.style.color = statusColor;
  }
  if (deliveryTimeLabel) {
    if (statusColor) deliveryTimeLabel.style.color = statusColor;
    availabilityValue.append(deliveryTimeLabel);
  }
  if (deliveryTime) {
    if (statusColor) deliveryTime.style.color = statusColor;
    availabilityValue.append(deliveryTime);
  }
};

// Hlavní řídicí funkce pro detail produktu, která registruje eventy a spouští dílčí úpravy.
var _handleProductDetailCritical = function handleProductDetailCritical() {
  if (window.shoptetPage !== "productDetail") return;
  var productDetail = document.querySelector(".p-detail");
  if (!productDetail) return;
  handleProductGallery();
  handleProductTop();
  handleProductFlags();
  handleAddToCartWrapper();
  handleAvailabilityProductTop();
  setTimeout(function () {
    productDetail.classList.add("is-processed");
  }, 40);
  var events = ["shoptet.contentUpdated", "shoptet.variantsUpdated"];
  events.forEach(function (eventName) {
    document.removeEventListener(eventName, _handleProductDetailCritical);
    document.addEventListener(eventName, function (e) {
      _handleProductDetailCritical();
    });
  });
};
_handleProductDetailCritical();
var handlePost = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          return _context5.a(2);
      }
    }, _callee5);
  }));
  return function handlePost() {
    return _ref5.apply(this, arguments);
  };
}();
if (document.body.classList.contains("type-post")) handlePost();
/******/ })()
;
//# sourceMappingURL=js-critical.js.map