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
var handleCategory = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
    var reload,
      _args3 = arguments;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          reload = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : false;
        case 1:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return function handleCategory() {
    return _ref3.apply(this, arguments);
  };
}();
var handleCheckedFilters = function handleCheckedFilters() {};
var handleProductDetail = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          return _context4.a(2);
      }
    }, _callee4);
  }));
  return function handleProductDetail() {
    return _ref4.apply(this, arguments);
  };
}();
if (shoptetPage === "productDetail") {
  handleProductDetail();
}
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