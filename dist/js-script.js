/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _window$shoptet;
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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

// -- Split menu -- //
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

//On funkce, na kliknutí a zavolání funkce
function on(eventType, selector, callback) {
  document.addEventListener(eventType, function (e) {
    var targetElement = e.target;
    while (targetElement && targetElement !== document) {
      if (targetElement.matches(selector)) {
        e.preventDefault();
        callback.call(targetElement, e);
        break;
      }
      targetElement = targetElement.parentElement;
    }
  });
}
function smoothScrollTo(target) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -150;
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 700;
  var targetElement = document.querySelector(target);
  if (targetElement) {
    var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  }
}
var splitMenu = function splitMenu() {
  var menuWrapper = document.querySelector("#navigation .navigation-in");
  var menuHelper = document.querySelector(".menu-helper");
  if (!menuWrapper || !menuHelper) return;

  // requestAnimationFrame je pro výpočty layoutu lepší než setTimeout
  window.requestAnimationFrame(function () {
    var menuItems = menuWrapper.querySelectorAll(".menu-level-1 > li:not(.appended-category)");
    var menuWrapperStyle = window.getComputedStyle(menuWrapper);
    var availableWidth = menuWrapper.clientWidth - parseFloat(menuWrapperStyle.paddingRight);
    var hasVisibleInHelper = false;
    menuItems.forEach(function (item) {
      var offsetRight = item.offsetLeft + item.offsetWidth;

      // Najdeme odpovídající položku v helperu (priorita ID, pak třída)
      var itemInHelper = item.id === "nav-manufacturers" ? menuHelper.querySelector("#nav-manufacturers") : menuHelper.querySelector(".".concat(item.classList[0]));
      if (offsetRight > availableWidth) {
        // Položka se nevejde -> schovat v hlavním menu, ukázat v helperu
        item.classList.add("splitted");
        if (itemInHelper) {
          itemInHelper.classList.remove("splitted");
          hasVisibleInHelper = true; // Máme co zobrazit v "Více..."
        }
      } else {
        // Položka se vejde -> ukázat v hlavním menu, schovat v helperu
        item.classList.remove("splitted");
        if (itemInHelper) itemInHelper.classList.add("splitted");
      }
    });

    // Finální přepnutí stavu "Více..." (menuHelper)
    // Kontrolujeme, jestli v helperu zbyla aspoň jedna položka, co není .splitted
    var itemsToDisplayInHelper = menuHelper.querySelector(".menu-level-1 > li:not(.splitted):not(.appended-category)");
    if (itemsToDisplayInHelper) {
      menuHelper.classList.remove("empty");
      menuWrapper.classList.remove("fitted");
    } else {
      menuHelper.classList.add("empty");
      menuWrapper.classList.add("fitted");
    }
  });
};

// Přepsání Shoptet funkce
if ((_window$shoptet = window.shoptet) !== null && _window$shoptet !== void 0 && _window$shoptet.menu) {
  shoptet.menu.splitMenu = splitMenu;
}

// úprava user cart, aby zde byla celková cena + cena za jednotlivé položky
var cartWidgetRefactoring = function cartWidgetRefactoring() {
  var _dataLayer$;
  var shoptetData = (_dataLayer$ = dataLayer[0]) === null || _dataLayer$ === void 0 ? void 0 : _dataLayer$.shoptet;
  if (!shoptetData) return;
  var currencyLabel = shoptetData.currencyInfo.symbol;
  var cartItems = document.querySelectorAll(".cart-widget-product");
  cartItems.forEach(function (product) {
    var _product$querySelecto;
    if (product.querySelector(".cart-widget-product-price")) return;
    var productPrice = product.querySelector('span[data-testid="cartWidgetProductPrice"]');
    var productSKU = product.getAttribute("data-micro-sku");
    var productUnit = ((_product$querySelecto = product.querySelector(".cart-widget-product-unit")) === null || _product$querySelecto === void 0 ? void 0 : _product$querySelecto.textContent.trim()) || "ks";
    if (productPrice) {
      var priceWrapper = document.createElement("div");
      priceWrapper.classList.add("cart-widget-product-price");
      priceWrapper.appendChild(productPrice);
      product.appendChild(priceWrapper);
      if (productSKU) {
        var itemData = shoptetData.cart.find(function (item) {
          return item.code === productSKU;
        });
        if (itemData) {
          var singlePrice = document.createElement("div");
          singlePrice.classList.add("cart-widget-product-single-price");
          var formattedPrice = itemData.priceWithVat.toLocaleString("cs-CZ");
          singlePrice.innerHTML = "".concat(formattedPrice, " ").concat(currencyLabel, " / ").concat(productUnit);
          priceWrapper.appendChild(singlePrice);
        }
      }
    }
  });
  var cartProductsWrapper = document.querySelector(".cart-widget-products");
  if (cartProductsWrapper && !document.querySelector(".popup-cart-summary")) {
    var cartInfo = shoptetData.cartInfo.getNoBillingShippingPrice;
    var summary = document.createElement("div");
    summary.classList.add("popup-cart-summary");
    var priceVAT = cartInfo.withVat.toLocaleString("cs-CZ");
    var priceNoVAT = Math.round(cartInfo.withoutVat).toLocaleString("cs-CZ");
    var currentLang = window.shoptetLang || "cs";
    var langData = window.projectTranslations[currentLang] || window.projectTranslations["cs"];
    var texts = langData.cart; // Přístup do sekce cart

    summary.innerHTML = "\n            <div class=\"popup-cart-summary-item with_vat\">\n                <strong class=\"popup-cart-summary-item-label\">".concat(texts.totalProducts, ":</strong>\n                <strong class=\"popup-cart-summary-item-value\">").concat(priceVAT, " ").concat(currencyLabel, "</strong>\n            </div>\n            <div class=\"popup-cart-summary-item without_vat\">\n                <span class=\"popup-cart-summary-item-label\">").concat(texts.totalWithoutVat, ":</span>\n                <span class=\"popup-cart-summary-item-value\">").concat(priceNoVAT, " ").concat(currencyLabel, "</span>\n            </div>\n        ");
    cartProductsWrapper.after(summary);
  }
  var shippingWidget = document.querySelector(".cart-free-shipping");
  if (shippingWidget) {
    var leftToFree = shoptetData.cartInfo.leftToFreeShipping.priceLeft;
    var totalForFree = leftToFree + shoptetData.cartInfo.getNoBillingShippingPrice.withVat;
    if (leftToFree > 0 && !shippingWidget.querySelector(".price-range")) {
      var range = document.createElement("div");
      range.classList.add("price-range");
      var bar = document.createElement("div");
      var percent = Math.min(100, 100 - 100 * leftToFree / totalForFree);
      bar.style.width = "".concat(percent, "%");
      range.appendChild(bar);
      shippingWidget.appendChild(range);
    }
    shippingWidget.querySelectorAll("strong").forEach(function (strong) {
      if (strong.innerText.includes("ZDARMA")) {
        strong.classList.add("free-shipping-strong");
      }
    });
  }
  if (window.innerWidth < 768) {
    var cartWidget = document.querySelector(".cart-widget");
    if (cartWidget && !cartWidget.querySelector(".close")) {
      var closeBtn = document.createElement("div");
      closeBtn.classList.add("close");
      cartWidget.prepend(closeBtn);
      closeBtn.addEventListener("click", function () {
        document.body.classList.remove("cart-window-visible");
        cartWidget.setAttribute("aria-hidden", "true");
      });
    }
  }
};
document.addEventListener("ShoptetDOMCartContentLoaded", cartWidgetRefactoring);
var loginWidgetRefactoring = function loginWidgetRefactoring() {
  var popupInner = document.querySelector("#login .popup-widget-inner");
  if (!popupInner || popupInner.querySelector(".login-part")) return;
  var currentLang = window.shoptetLang || "cs";
  var langData = window.projectTranslations[currentLang] || window.projectTranslations["cs"];
  var texts = langData.login;

  // Vytvoření div.close a přidání eventu pro zavření
  var closeButton = document.createElement("div");
  closeButton.classList.add("close", "black");
  closeButton.addEventListener("click", function () {
    document.body.classList.remove("login-window-visible");
  });
  popupInner.appendChild(closeButton);
  var loginPart = document.createElement("div");
  loginPart.classList.add("login-part");
  while (popupInner.firstChild && popupInner.firstChild !== closeButton) {
    loginPart.appendChild(popupInner.firstChild);
  }
  popupInner.appendChild(loginPart);
  var loginBtn = loginPart.querySelector(".btn-login");
  if (loginBtn) {
    loginBtn.classList.remove("btn-secondary", "btn-text");
    loginBtn.classList.add("btn-primary");
  }
  var registerPart = document.createElement("div");
  registerPart.classList.add("register-part");
  var originalRegisterLink = loginPart.querySelector('a[data-testid="signup"]');
  var benefitsList = texts.benefits.map(function (benefit) {
    return "<li>".concat(benefit, "</li>");
  }).join("");
  registerPart.innerHTML = "\n        <h3>".concat(texts.noAccountYet, "</h3>\n        <ul>\n            ").concat(benefitsList, "\n        </ul>\n    ");
  if (originalRegisterLink) {
    originalRegisterLink.classList.add("btn", "btn-primary", "secondary");
    originalRegisterLink.textContent = texts.registerButton;
    registerPart.appendChild(originalRegisterLink);
  }
  popupInner.appendChild(registerPart);
};
loginWidgetRefactoring();
var parseBenderContent = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(selector) {
    var devMode,
      dev,
      wrappers,
      slugCache,
      slugify,
      i,
      wrapper,
      dataSpan,
      fullText,
      classMatch,
      customClass,
      topParent,
      _textWithoutClass,
      _blocksRaw,
      section,
      container,
      _loop,
      j,
      targets,
      resultContainer,
      _topParent,
      textWithoutClass,
      blocksRaw,
      _j,
      titleText,
      contentText,
      currentBlock,
      h2,
      items,
      currentUl,
      k,
      cleanItem,
      parts,
      img,
      label,
      url,
      li,
      a,
      bannerContainer,
      _args2 = arguments;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          devMode = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : false;
          dev = devMode;
          wrappers = document.querySelectorAll(selector);
          if (!(wrappers.length === 0)) {
            _context2.n = 1;
            break;
          }
          if (dev) console.warn("%c[BENDER DEV]%c \u017D\xE1dn\xE9 elementy pro \"".concat(selector, "\" nebyly nalezeny."), "color: #ff0000; font-weight: bold;", "");
          return _context2.a(2);
        case 1:
          if (dev) console.time("Bender Performance Test");
          slugCache = {};
          slugify = function slugify(text) {
            if (slugCache[text]) return slugCache[text];
            var slug = text.toString().toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-");
            slugCache[text] = slug;
            return slug;
          };
          i = 0;
        case 2:
          if (!(i < wrappers.length)) {
            _context2.n = 14;
            break;
          }
          wrapper = wrappers[i];
          dataSpan = wrapper.querySelector("span[data-ec-promo-id]");
          if (dataSpan) {
            _context2.n = 3;
            break;
          }
          return _context2.a(3, 13);
        case 3:
          fullText = dataSpan.innerHTML.replace(/\u00a0/g, " ").trim();
          if (dev) console.log("%c[BENDER DEV]%c Banner ".concat(i + 1, " vstup:"), "color: #00ff00; font-weight: bold;", fullText);
          classMatch = fullText.match(/###([^#]+)###/);
          customClass = classMatch ? classMatch[1].trim() : null; // --- SPECIÁLNÍ PŘÍPAD: FAVOURITE CATEGORIES (SWIPER) ---
          if (!(customClass === "socials-footer")) {
            _context2.n = 4;
            break;
          }
          if (customClass) {
            topParent = wrapper.closest('[class*="custom-footer__banner"]');
            if (topParent) {
              topParent.classList.add(customClass);
            } else {
              resultContainer.classList.add(customClass);
            }
          }
          return _context2.a(3, 13);
        case 4:
          if (!(customClass === "favourite-categories" && shoptetPage == "homepage")) {
            _context2.n = 8;
            break;
          }
          _textWithoutClass = fullText.replace(/###[^#]+###/g, "").trim();
          _blocksRaw = _textWithoutClass.split(/##([^#]+)##/g);
          section = document.createElement("section");
          section.className = "favourite-categories";
          container = document.createElement("div");
          container.className = "container";
          section.appendChild(container);
          _loop = /*#__PURE__*/_regenerator().m(function _loop() {
            var titleText, contentText, h2, swiperDiv, swiperWrapper, items, paginationDiv;
            return _regenerator().w(function (_context) {
              while (1) switch (_context.n) {
                case 0:
                  titleText = _blocksRaw[j].trim();
                  contentText = _blocksRaw[j + 1] ? _blocksRaw[j + 1].trim() : "";
                  if (titleText) {
                    h2 = document.createElement("h2");
                    h2.innerHTML = titleText;
                    container.appendChild(h2);
                  }
                  swiperDiv = document.createElement("div");
                  swiperDiv.className = "swiper swiper-favourite-categories";
                  // Pagination je odsud pryč
                  swiperDiv.innerHTML = "\n      <div class=\"swiper-wrapper\"></div>\n      <button class=\"swiper-button-prev primary\" aria-label=\"Prev category\"><div class=\"sr-only\">Next category</div></button>\n      <button class=\"swiper-button-next primary\" aria-label=\"Next category\"><div class=\"sr-only\">Prev category</div></button>\n    ";
                  swiperWrapper = swiperDiv.querySelector(".swiper-wrapper");
                  items = contentText.match(/#([^#]+)#/g);
                  if (items) {
                    items.forEach(function (item) {
                      var cleanItem = item.replace(/#/g, "").trim();
                      var parts = cleanItem.split(";");
                      var label = "",
                        url = "",
                        imgSrc = "";
                      parts.forEach(function (part) {
                        var p = part.trim();
                        if (p.includes("/documents/")) {
                          imgSrc = p;
                        } else if (p.startsWith("/") || p.startsWith("http")) {
                          url = p;
                        } else {
                          label = p;
                        }
                      });
                      if (!url && label) url = "/".concat(slugify(label), "/");

                      // Vytvoříme kontejner slidu
                      var slide = document.createElement("div");
                      slide.className = "swiper-slide";

                      // Vytvoříme odkaz dovnitř slidu
                      var slideLink = document.createElement("a");
                      slideLink.href = url;
                      // label.replace pro čistý ALT bez HTML tagů
                      slideLink.innerHTML = "\n      <img src=\"".concat(imgSrc, "\" alt=\"").concat(label.replace(/<[^>]*>?/gm, ""), "\" loading=\"lazy\" width=\"165\" height=\"115\" />\n      <h3 class=\"tiny\">").concat(label, "</h3>\n    ");
                      slide.appendChild(slideLink);
                      swiperWrapper.appendChild(slide);
                    });
                  }
                  container.appendChild(swiperDiv);

                  // VYTVOŘENÍ PAGINACE VNĚ SWIPERU
                  paginationDiv = document.createElement("div");
                  paginationDiv.className = "swiper-pagination";
                  container.appendChild(paginationDiv);
                case 1:
                  return _context.a(2);
              }
            }, _loop);
          });
          j = 1;
        case 5:
          if (!(j < _blocksRaw.length)) {
            _context2.n = 7;
            break;
          }
          return _context2.d(_regeneratorValues(_loop()), 6);
        case 6:
          j += 2;
          _context2.n = 5;
          break;
        case 7:
          wrapper.remove();
          targets = [".content-wrapper:has(.benefitBanner)", ".before-carousel"];
          moveElement(section, targets);
          return _context2.a(3, 13);
        case 8:
          // --- STANDARDNÍ BENDER MÓD (PATIČKA) ---
          resultContainer = document.createElement("div");
          resultContainer.className = "bender-parsed-content";
          if (customClass) {
            _topParent = wrapper.closest('[class*="custom-footer__banner"]');
            if (_topParent) {
              _topParent.classList.add(customClass);
            } else {
              resultContainer.classList.add(customClass);
            }
          }
          textWithoutClass = fullText.replace(/###[^#]+###/g, "").trim();
          blocksRaw = textWithoutClass.split(/##([^#]+)##/g);
          _j = 1;
        case 9:
          if (!(_j < blocksRaw.length)) {
            _context2.n = 12;
            break;
          }
          titleText = blocksRaw[_j].trim();
          contentText = blocksRaw[_j + 1] ? blocksRaw[_j + 1].trim() : "";
          if (titleText) {
            _context2.n = 10;
            break;
          }
          return _context2.a(3, 11);
        case 10:
          currentBlock = document.createElement("div");
          currentBlock.className = "block";
          h2 = document.createElement("h2");
          h2.innerHTML = titleText; // Povoleno HTML
          currentBlock.appendChild(h2);
          items = contentText.match(/#([^#]+)#/g);
          if (items) {
            currentUl = null;
            for (k = 0; k < items.length; k++) {
              cleanItem = items[k].replace(/#/g, "").trim();
              parts = cleanItem.split(";");
              if (parts.includes("img")) {
                img = document.createElement("img");
                img.src = parts[0].trim();
                img.loading = "lazy";
                img.className = "footer-img";
                currentBlock.appendChild(img);
              } else {
                if (!currentUl) {
                  currentUl = document.createElement("ul");
                  currentBlock.appendChild(currentUl);
                }
                label = parts[0].trim();
                url = parts[1] ? parts[1].trim() : "/".concat(slugify(label), "/");
                if (url && !url.startsWith("/") && !url.startsWith("http")) url = "/" + url;
                li = document.createElement("li");
                a = document.createElement("a");
                a.href = url;
                a.innerHTML = label; // Povoleno HTML
                li.appendChild(a);
                currentUl.appendChild(li);
              }
            }
          }
          resultContainer.appendChild(currentBlock);
        case 11:
          _j += 2;
          _context2.n = 9;
          break;
        case 12:
          bannerContainer = wrapper.querySelector(".banner") || wrapper;
          bannerContainer.innerHTML = "";
          bannerContainer.appendChild(resultContainer);
        case 13:
          i++;
          _context2.n = 2;
          break;
        case 14:
          if (dev) console.timeEnd("Bender Performance Test");
        case 15:
          return _context2.a(2);
      }
    }, _callee);
  }));
  return function parseBenderContent(_x) {
    return _ref.apply(this, arguments);
  };
}();

// Spuštění na bannery v patičce
_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
  return _regenerator().w(function (_context3) {
    while (1) switch (_context3.n) {
      case 0:
        _context3.n = 1;
        return parseBenderContent(".custom-footer > div", false);
      case 1:
        return _context3.a(2);
    }
  }, _callee2);
}))();
var initFavouriteCategoriesSwiper = function initFavouriteCategoriesSwiper() {
  var selector = ".swiper-favourite-categories";
  var el = document.querySelector(selector);
  console.log(el);
  if (!el) return;
  new window.Swiper(selector, {
    slidesPerView: 2.2,
    spaceBetween: 12,
    speed: 600,
    grabCursor: true,
    watchSlidesProgress: true,
    breakpointsBase: "container",
    // Šipky uvnitř swiperu
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    // Paginace vně swiperu (sourozenec v containeru)
    pagination: {
      el: el.parentElement.querySelector(".swiper-pagination"),
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return "<button class=\"".concat(className, "\" aria-label=\"Slide ").concat(index + 1, "\"></button>");
      }
    },
    // Breakpointy přesně podle tvého zadání
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 14
      },
      880: {
        slidesPerView: 4,
        spaceBetween: 14
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 16
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 16
      },
      1360: {
        slidesPerView: 7,
        spaceBetween: 16
      }
    }
  });
};
initFavouriteCategoriesSwiper();
// middle banners HP
var unwrapBanners = function unwrapBanners() {
  if (window.shoptetPage !== "homepage") return;
  var container = document.querySelector(".middle-banners-wrapper");
  if (!container) return;
  var wrappers = container.querySelectorAll('.body-banners > [class*="col-sm-"]');
  wrappers.forEach(function (wrapper) {
    var banner = wrapper.querySelector(".banner-wrapper");
    if (banner) {
      wrapper.parentNode.insertBefore(banner, wrapper);
      wrapper.remove();
    }
  });

  // console.log('Middle banners unwrapped ');
};

// Spouštíme po načtení DOMu
document.addEventListener("DOMContentLoaded", unwrapBanners);
var fetchArticleDatesAndButtons = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
    var blogWrappers, currentLang, langData, moreArticlesText;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          // Ověření stránky a existence blogu
          if (shoptetPage == "homepage" && document.querySelector(".blog-wrapper")) {
            blogWrappers = document.querySelectorAll(".blog-wrapper"); // Překlady pro tlačítko
            currentLang = window.shoptetLang || "cs";
            langData = window.projectTranslations[currentLang] || window.projectTranslations["cs"];
            moreArticlesText = langData.blog.moreArticles;
            blogWrappers.forEach(function (wrapper) {
              // --- 1. GENEROVÁNÍ TLAČÍTKA ---
              if (!wrapper.querySelector(".blog-all-articles-wrapper")) {
                var firstLink = wrapper.querySelector(".news-item a");
                if (firstLink) {
                  // Parsování URL z prvního odkazu (vezme první část cesty, např. /blog/)
                  var urlPath = firstLink.getAttribute("href");
                  var pathParts = urlPath.split("/");
                  var categoryUrl = pathParts[1] ? "/".concat(pathParts[1], "/") : "/blog/";
                  var buttonWrapper = document.createElement("div");
                  buttonWrapper.className = "blog-all-articles-wrapper";
                  buttonWrapper.innerHTML = "\n            <a href=\"".concat(categoryUrl, "\" class=\"btn btn-secondary\">\n              ").concat(moreArticlesText, "\n            </a>\n          ");
                  wrapper.appendChild(buttonWrapper);
                }
              }

              // --- 2. DOTAHování DATUMŮ ---
              var articles = wrapper.querySelectorAll(".news-item");
              articles.forEach(/*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(article) {
                  var link, response, html, parser, doc, metaDate, rawDate, dateObj, formattedDate, timeEl, textContainer, _t;
                  return _regenerator().w(function (_context4) {
                    while (1) switch (_context4.p = _context4.n) {
                      case 0:
                        if (!article.querySelector(".article-published-date")) {
                          _context4.n = 1;
                          break;
                        }
                        return _context4.a(2);
                      case 1:
                        link = article.querySelector("a").href;
                        _context4.p = 2;
                        _context4.n = 3;
                        return fetch(link);
                      case 3:
                        response = _context4.v;
                        _context4.n = 4;
                        return response.text();
                      case 4:
                        html = _context4.v;
                        parser = new DOMParser();
                        doc = parser.parseFromString(html, "text/html");
                        metaDate = doc.querySelector('meta[itemprop="datePublished"]');
                        if (metaDate) {
                          rawDate = metaDate.getAttribute("content");
                          dateObj = new Date(rawDate);
                          formattedDate = dateObj.toLocaleDateString("cs-CZ", {
                            day: "numeric",
                            month: "numeric",
                            year: "numeric"
                          });
                          timeEl = document.createElement("time");
                          timeEl.className = "article-published-date";
                          timeEl.setAttribute("datetime", rawDate);
                          timeEl.textContent = formattedDate;
                          textContainer = article.querySelector(".text");
                          if (textContainer) {
                            textContainer.prepend(timeEl);
                          }
                        }
                        _context4.n = 6;
                        break;
                      case 5:
                        _context4.p = 5;
                        _t = _context4.v;
                        console.warn("[BENDER] Chyba p\u0159i na\u010D\xEDt\xE1n\xED data: ".concat(link));
                      case 6:
                        return _context4.a(2);
                    }
                  }, _callee3, null, [[2, 5]]);
                }));
                return function (_x2) {
                  return _ref4.apply(this, arguments);
                };
              }());
            });
          }
        case 1:
          return _context5.a(2);
      }
    }, _callee4);
  }));
  return function fetchArticleDatesAndButtons() {
    return _ref3.apply(this, arguments);
  };
}();
fetchArticleDatesAndButtons();

// Šablona pro ovládání množství
var quantityTemplate = document.createElement("span");
quantityTemplate.className = "quantity";
quantityTemplate.innerHTML = "\n  <span class=\"increase-tooltip js-increase-tooltip\" data-trigger=\"manual\" data-container=\"body\" data-original-title=\"Nen\xED mo\u017En\xE9 zakoupit v\xEDce ne\u017E 9999 ks.\" aria-hidden=\"true\" role=\"tooltip\" data-testid=\"tooltip\"></span>\n  <span class=\"decrease-tooltip js-decrease-tooltip\" data-trigger=\"manual\" data-container=\"body\" data-original-title=\"Minim\xE1ln\xED mno\u017Estv\xED, kter\xE9 lze zakoupit, je 1 ks.\" aria-hidden=\"true\" role=\"tooltip\" data-testid=\"tooltip\"></span>\n  <label>\n      <input type=\"number\" name=\"amount\" value=\"1\" class=\"amount\" autocomplete=\"off\" data-decimals=\"0\" step=\"1\" min=\"1\" max=\"9999\" aria-label=\"Mno\u017Estv\xED\" data-testid=\"cartAmount\">\n  </label>\n  <button class=\"increase\" type=\"button\" aria-label=\"Zv\xFD\u0161it mno\u017Estv\xED o 1\" data-testid=\"increase\">\n      <span class=\"increase__sign\">+</span>\n  </button>\n  <button class=\"decrease\" type=\"button\" aria-label=\"Sn\xED\u017Eit mno\u017Estv\xED o 1\" data-testid=\"decrease\">\n      <span class=\"decrease__sign\">\u2212</span>\n  </button>\n";

// Přeskládá prvky v produktové kartě
var handleTextLayout = function handleTextLayout(product) {
  var pCode = product.querySelector(".p-code");
  var ratingsWrapper = product.querySelector(".ratings-wrapper");
  var pDesc = product.querySelector(".p-desc");
  var nameLink = product.querySelector(".name");
  var availability = product.querySelector(".availability");
  var flagDiscount = product.querySelector(".flag-discount");
  var priceStandard = flagDiscount ? flagDiscount.querySelector(".price-standard") : null;
  var pricesWrapper = product.querySelector(".prices");
  var priceFinal = pricesWrapper ? pricesWrapper.querySelector(".price-final") : null;
  var form = product.querySelector(".p-tools form.pr-action");
  var hiddenAmountInput = form ? form.querySelector('input[name="amount"]') : null;
  var submitBtn = form ? form.querySelector("button[type='submit']") : null;
  var prListUnit = product.querySelector(".pr-list-unit");
  // 1. Kód do hodnocení
  if (pCode && ratingsWrapper) ratingsWrapper.append(pCode);

  // 2. Popis za název
  if (pDesc && nameLink) nameLink.after(pDesc);

  // 3. Dostupnost za popis/název
  if (availability) {
    if (pDesc) pDesc.after(availability);else if (nameLink) nameLink.after(availability);
  }

  // 4. Přesun "od" a přeškrtnuté ceny
  if (priceStandard && pricesWrapper) {
    var oldPriceWrapper = document.createElement("div");
    oldPriceWrapper.className = "price-standard-wrapper";

    // Zkontrolujeme textový uzel těsně před cenou (hledáme "od")
    var prevNode = priceStandard.previousSibling;
    if (prevNode && prevNode.nodeType === Node.TEXT_NODE && prevNode.textContent.trim() === "od") {
      oldPriceWrapper.append(prevNode);
    }

    // Přesuneme samotnou přeškrtnutou cenu
    oldPriceWrapper.append(priceStandard);

    // Vložíme nad finální cenu
    if (priceFinal) priceFinal.before(oldPriceWrapper);else pricesWrapper.append(oldPriceWrapper);

    // Zbytek štítku (tj. "až -15 %") záměrně necháváme na původním místě
  }

  // 5. Formulář a množství
  if (form) {
    if (hiddenAmountInput) hiddenAmountInput.remove();
    var quantityWrapper = quantityTemplate.cloneNode(true);
    if (submitBtn) submitBtn.before(quantityWrapper);else form.append(quantityWrapper);
  }
  if (prListUnit) {
    // Odstraní jak HTML entitu, tak fyzický znak pevné mezery
    prListUnit.innerHTML = prListUnit.innerHTML.replace(/&nbsp;|\u00A0/g, "");
  }
};

// Spouštěč
var initProducts = function initProducts() {
  var products = document.querySelectorAll(".products-block .product:not(.banner-category):not(.is-processed)");
  products.forEach(function (product) {
    product.classList.add("is-processed");
    if (typeof handleFlags === "function") handleFlags(product);
    if (typeof handleTextLayout === "function") handleTextLayout(product);
  });
};
initProducts();
document.addEventListener("ShoptetDOMContentLoaded", initProducts);

// CART
var handleCart = function handleCart() {};
if (document.body.classList.contains("ordering-process")) {
  handleCart();
  document.addEventListener("ShoptetDOMCartContentLoaded", handleCart);
}

// Vytvoří střední část patičky s logy a rozdělenou navigací (bloky samostatně)
var handleFooterMiddle = function handleFooterMiddle() {
  var currentLang = window.shoptetLang || "cs";
  var translations = window.projectTranslations[currentLang];
  var footerBottom = document.querySelector(".footer-bottom");
  var footerNav = document.querySelector(".footer-nav"); // Hledáme obecněji

  if (!footerBottom || !translations) return;
  var footerMiddle = document.querySelector(".footer-middle");
  if (!footerMiddle) {
    footerMiddle = document.createElement("div");
    footerMiddle.className = "footer-middle";
    footerBottom.parentNode.insertBefore(footerMiddle, footerBottom);
  }
  var container = footerMiddle.querySelector(".container");
  if (!container) {
    container = document.createElement("div");
    container.className = "container";
    footerMiddle.appendChild(container);
  }
  var flexHolder = container.querySelector(".flex-holder");
  if (!flexHolder) {
    flexHolder = document.createElement("div");
    flexHolder.className = "flex-holder";
    container.appendChild(flexHolder);
  } else {
    flexHolder.innerHTML = "";
  }

  // 1. Logo sekce
  var logoFooter = document.createElement("div");
  logoFooter.className = "logo-footer";
  var originalLogoLink = document.querySelector(".site-name a");
  if (originalLogoLink) {
    var mainLogoLink = originalLogoLink.cloneNode(true);
    var mainLogoImg = mainLogoLink.querySelector("img");
    if (mainLogoImg) {
      mainLogoImg.src = translations.patickaLogo;
      mainLogoImg.removeAttribute("data-src");
    }
    logoFooter.appendChild(mainLogoLink);
  }
  var heurekaLink = document.createElement("a");
  heurekaLink.className = "heureka";
  heurekaLink.href = translations.heureka.href;
  var heurekaImg = document.createElement("img");
  heurekaImg.src = translations.heureka.img;
  heurekaImg.alt = "Heureka";
  heurekaImg.loading = "lazy";
  heurekaLink.appendChild(heurekaImg);
  logoFooter.appendChild(heurekaLink);
  flexHolder.appendChild(logoFooter);

  // 2. Navigace - rozebírání na jednotlivé bloky
  if (footerNav) {
    var navBlocks = footerNav.querySelectorAll(".block");
    navBlocks.forEach(function (block) {
      // Klonujeme každý blok zvlášť, aby mohl být přímým potomkem flex-holderu
      var clonedBlock = block.cloneNode(true);
      flexHolder.appendChild(clonedBlock);
    });
  }
};

// Přebuduje textová data z Shoptet banneru do strukturovaného seznamu odkazů na sociální sítě
var reshapeSocials = function reshapeSocials() {
  var wrapper = document.querySelector(".socials-footer");
  var dataSpan = wrapper === null || wrapper === void 0 ? void 0 : wrapper.querySelector("span[data-ec-promo-id]");
  var banner = wrapper === null || wrapper === void 0 ? void 0 : wrapper.querySelector(".banner");
  if (!dataSpan || !banner) return;
  var rawContent = dataSpan.innerHTML.replace(/\u00a0/g, " ");
  var items = rawContent.match(/#([\s\S]+?)#/g);
  if (!items) return;
  var listContent = items.reduce(function (html, item) {
    var cleanItem = item.replace(/#|<[^>]*>?/gm, "").trim();
    var _cleanItem$split$map = cleanItem.split(";").map(function (str) {
        return str.trim();
      }),
      _cleanItem$split$map2 = _slicedToArray(_cleanItem$split$map, 2),
      name = _cleanItem$split$map2[0],
      url = _cleanItem$split$map2[1];
    if (name && url) {
      html += "<a href=\"".concat(url, "\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"social-link ").concat(name.toLowerCase(), "\"><span class=\"sr-only\">").concat(name, "</span></a>");
    }
    return html;
  }, "");
  if (listContent) {
    banner.innerHTML = "<div class=\"socials-list\">".concat(listContent, "</div>");
  }
};

// Přesune platební a dopravní bloky do footer-lower a vyčistí HTML strukturu
var handleFooterLower = function handleFooterLower() {
  var footer = document.querySelector("footer");
  if (!footer) return;
  var footerBottom = document.querySelector(".footer-bottom");
  var footerMiddle = document.querySelector(".footer-middle");
  var payment = document.querySelector(".footer-payment");
  var shipping = document.querySelector(".footer-shipping");
  var footerLower = document.querySelector(".footer-lower");
  if (!footerLower) {
    footerLower = document.createElement("div");
    footerLower.className = "footer-lower";
    if (footerMiddle) {
      footerMiddle.after(footerLower);
    } else if (footerBottom) {
      footer.insertBefore(footerLower, footerBottom);
    } else {
      footer.appendChild(footerLower);
    }
  }
  var container = footerLower.querySelector(".container");
  if (!container) {
    container = document.createElement("div");
    container.className = "container";
    footerLower.appendChild(container);
  }
  var flexHolder = container.querySelector(".flex-holder");
  if (!flexHolder) {
    flexHolder = document.createElement("div");
    flexHolder.className = "flex-holder";
    container.appendChild(flexHolder);
  } else {
    flexHolder.innerHTML = "";
  }

  // Funkce pro vytažení čistého bloku z Bender balastu
  var injectCleanBlock = function injectCleanBlock(parentEl) {
    if (!parentEl) return;
    var block = parentEl.querySelector(".block");
    if (block) {
      var clonedBlock = block.cloneNode(true);
      flexHolder.appendChild(clonedBlock);
    }
  };
  injectCleanBlock(payment);
  injectCleanBlock(shipping);
};

// Refaktorovaná horní sekce patičky (Pro verze): využití moderních DOM API a ES6+
var handleFooterUpper = function handleFooterUpper() {
  var _window$projectTransl, _document$querySelect, _document$querySelect2;
  var lang = window.shoptetLang || "cs";
  var translations = (_window$projectTransl = window.projectTranslations) === null || _window$projectTransl === void 0 ? void 0 : _window$projectTransl[lang];
  var footer = document.querySelector("footer");
  if (!footer || !translations) return;

  // 1. Bezpečné vytvoření a vložení hlavního wrapperu
  var footerUpper = document.querySelector(".footer-upper");
  if (!footerUpper) {
    footerUpper = document.createElement("div");
    footerUpper.className = "footer-upper";

    // Nalezení první dostupné sekce a vložení PŘED ni (moderní metoda .before)
    var target = footer.querySelector(".footer-middle, .footer-lower, .footer-bottom");
    target ? target.before(footerUpper) : footer.prepend(footerUpper);
  }

  // 2. Sestavení kostry pomocí jediného překreslení DOMu
  footerUpper.innerHTML = "\n    <div class=\"container\">\n      <div class=\"flex-holder\">\n        <div class=\"footer-contact-person\">\n          <img src=\"".concat(translations.contactPerson.img, "\" alt=\"").concat(translations.contactPerson.title, "\" class=\"contact-img\" loading=\"lazy\">\n          <h3 class=\"contact-title\">").concat(translations.contactPerson.title, "</h3>\n        </div>\n        <div class=\"footer-contact-details\"></div>\n      </div>\n    </div>\n  ");
  var flexHolder = footerUpper.querySelector(".flex-holder");
  var detailsBlock = flexHolder.querySelector(".footer-contact-details");

  // 3. Klonování telefonu s využitím optional chaining
  var phone = (_document$querySelect = document.querySelector(".project-phone")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.cloneNode(true);
  if (phone) {
    var hours = phone.querySelector(".project-opening-hours");
    if (hours && window.projectOpeningHours) hours.textContent = window.projectOpeningHours;
    detailsBlock.append(phone);
  }

  // 4. Klonování e-mailu a bezpečné vložení textu
  var email = (_document$querySelect2 = document.querySelector(".project-email")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.cloneNode(true);
  if (email) {
    email.insertAdjacentHTML("beforeend", "<small class=\"email-subtext\">".concat(translations.emilSubText, "</small>"));
    detailsBlock.append(email);
  }

  // 5. Přesun sociálních sítí
  var socials = document.querySelector(".footer-rows .socials-footer");
  if (socials) flexHolder.append(socials);
};
// Upraví spodní lištu patičky na minimalistický design podle předlohy
var handleFooterBottom = function handleFooterBottom() {
  var footerBottom = document.querySelector(".footer-bottom");
  var copyright = footerBottom === null || footerBottom === void 0 ? void 0 : footerBottom.querySelector(".copyright");
  var signature = document.getElementById("signature");
  if (!footerBottom) return;

  // 1. Schováme původní Shoptet podpis, pokud tam je
  if (signature) {
    signature.style.display = "none";
  }

  // 2. Vytvoříme nový flexibilní obsah lišty
  var bottomFlex = document.createElement("div");
  bottomFlex.className = "footer-bottom-flex";

  // Leva strana: Copyright (očištěný o zbytečné texty, jen rok a název)
  var leftSide = document.createElement("div");
  leftSide.className = "footer-bottom-left";
  if (copyright) {
    var _copyright$querySelec;
    var year = new Date().getFullYear();
    // Vytáhneme název shopu ze strong tagu nebo textu
    var shopName = ((_copyright$querySelec = copyright.querySelector("strong")) === null || _copyright$querySelec === void 0 ? void 0 : _copyright$querySelec.textContent) || "SNIPER";
    leftSide.innerHTML = "\xA9 ".concat(year, " ").concat(shopName);
  }

  // Pravá strana: Tvůj link + Shoptet info
  var rightSide = document.createElement("div");
  rightSide.className = "footer-bottom-right";
  rightSide.innerHTML = "\n    <a href=\"https://sniperdesign.cz\" target=\"_blank\" rel=\"noopener\">sniperdesign.cz</a>\n    <span class=\"separator\">\u2022</span>\n    <span>B\u011B\u017E\xED na <a href=\"https://www.shoptet.cz\" target=\"_blank\" rel=\"noopener\">Shoptetu</a></span>\n    <img src=\"https://cdn.myshoptet.com/prj/dist/master/cms/img/shoptetPremiumLogo.svg\" alt=\"Shoptet\" width=\"16\" height=\"16\">\n  ";
  bottomFlex.appendChild(leftSide);
  bottomFlex.appendChild(rightSide);

  // 3. Nahradíme obsah footer-bottom (včetně promazání copyrightu)
  footerBottom.innerHTML = "";
  footerBottom.appendChild(bottomFlex);
};

// Přemění Instagram wrapper na sekci, dynamicky vytáhne link i handle a přesune před patičku
var handleInstagram = function handleInstagram() {
  var _window$projectTransl2, _section$querySelecto;
  var translations = (_window$projectTransl2 = window.projectTranslations) === null || _window$projectTransl2 === void 0 ? void 0 : _window$projectTransl2[window.shoptetLang || "cs"];
  var oldWrapper = document.querySelector(".custom-footer__instagram");
  var footer = document.querySelector("footer");
  if (!oldWrapper || !translations) return;
  var section = document.createElement("section");
  section.className = oldWrapper.className;
  section.append.apply(section, _toConsumableArray(oldWrapper.childNodes));
  var igLink = ((_section$querySelecto = section.querySelector(".instagram-follow-btn a")) === null || _section$querySelecto === void 0 ? void 0 : _section$querySelecto.href) || translations.instagram.link;
  var igHandle = "@".concat(igLink.split("/").filter(Boolean).pop());
  var oldH4 = section.querySelector("h4");
  if (oldH4) oldH4.remove();
  var flexHolder = section.querySelector(".instagram-header-flex");
  if (!flexHolder) {
    flexHolder = document.createElement("div");
    flexHolder.className = "instagram-header-flex container";
    section.prepend(flexHolder);
  }
  flexHolder.innerHTML = "\n    <div class=\"left\">\n      <a href=\"".concat(igLink, "\" target=\"_blank\" rel=\"noopener\">\n        <h4>").concat(translations.instagram.text, "</h4>\n        <small>").concat(igHandle, "</small>\n      </a>\n    </div>\n    <div class=\"right\">\n      <span class=\"fb-label\">").concat(translations.facebook.text, "</span>\n      <a href=\"").concat(translations.facebook.link, "\" target=\"_blank\" rel=\"noopener\" class=\"fb-link-icon\">\n        <span class=\"sr-only\">").concat(translations.facebook.name, "</span>\n      </a>\n    </div>\n  ");
  oldWrapper.replaceWith(section);
  if (footer) footer.before(section);
};

// Přemění newsletter na sekci, obalí obsah, zarovná a ostyluje tlačítko a přesune před patičku
var handleNewsletter = function handleNewsletter() {
  var _window$projectTransl3;
  var translations = (_window$projectTransl3 = window.projectTranslations) === null || _window$projectTransl3 === void 0 ? void 0 : _window$projectTransl3[window.shoptetLang || "cs"];
  var oldNewsletter = document.querySelector(".custom-footer__newsletter");
  var footer = document.querySelector("footer");
  if (!oldNewsletter || !translations) return;
  var section = document.createElement("section");
  section.className = oldNewsletter.className;
  var container = document.createElement("div");
  container.className = "container";
  container.append.apply(container, _toConsumableArray(oldNewsletter.childNodes));
  section.append(container);
  var headerTarget = section.querySelector(".newsletter-header h4 span, .newsletter-header h4");
  if (headerTarget) headerTarget.textContent = translations.newsletter;
  var submitBtn = section.querySelector("button[type='submit']");
  var emailInput = section.querySelector("input[type='email']");
  if (submitBtn && emailInput) {
    var _submitBtn$querySelec;
    submitBtn.className = "btn btn-primary secondary";
    (_submitBtn$querySelec = submitBtn.querySelector("span.sr-only")) === null || _submitBtn$querySelec === void 0 || _submitBtn$querySelec.classList.remove("sr-only");
    emailInput.after(submitBtn);
  }
  oldNewsletter.replaceWith(section);
  if (footer) footer.before(section);
};
var handleFooter = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          handleFooterUpper();
          handleFooterMiddle();
          reshapeSocials();
          handleFooterLower();
          handleFooterBottom();
          handleInstagram();
          handleNewsletter();
        case 1:
          return _context6.a(2);
      }
    }, _callee5);
  }));
  return function handleFooter() {
    return _ref5.apply(this, arguments);
  };
}();
handleFooter();
on("click", ".shp-tab-link", function (e) {
  var target = this.getAttribute("href");
  if (document.querySelector(target)) {
    smoothScrollTo(target, 200);
  }
});

/**
 * Ultimate Optimized Recently Viewed Module for Shoptet
 * Performance + Full Functional Parity + Adjusted Swiper Structure
 */
var RecentlyViewed = function () {
  var CONFIG = {
    storageKey: 'recentlyViewed',
    maxItems: 10,
    revalidateMs: 172800000 // 48h
  };
  var $ = function $(s) {
    var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    return el.querySelector(s);
  };
  var getMsg = function getMsg(key, fallback) {
    return typeof shoptet !== 'undefined' ? shoptet.messages[key] : fallback;
  };
  var quantityFragment = function () {
    var span = document.createElement("span");
    span.className = "quantity";
    span.innerHTML = "\n            <span class=\"increase-tooltip js-increase-tooltip\" data-trigger=\"manual\" data-container=\"body\" data-original-title=\"Nen\xED mo\u017En\xE9 zakoupit v\xEDce ne\u017E 9999 ks.\" aria-hidden=\"true\" role=\"tooltip\"></span>\n            <span class=\"decrease-tooltip js-decrease-tooltip\" data-trigger=\"manual\" data-container=\"body\" data-original-title=\"Minim\xE1ln\xED mno\u017Estv\xED, kter\xE9 lze zakoupit, je 1 ks.\" aria-hidden=\"true\" role=\"tooltip\"></span>\n            <label><input type=\"number\" name=\"amount\" value=\"1\" class=\"amount\" autocomplete=\"off\" step=\"1\" min=\"1\" max=\"9999\" aria-label=\"Mno\u017Estv\xED\"></label>\n            <button class=\"increase\" type=\"button\" aria-label=\"Zv\xFD\u0161it mno\u017Estv\xED o 1\"><span class=\"increase__sign\">+</span></button>\n            <button class=\"decrease\" type=\"button\" aria-label=\"Sn\xED\u017Eit mno\u017Estv\xED o 1\"><span class=\"decrease__sign\">\u2212</span></button>\n        ";
    return span;
  }();
  var handleLayout = function handleLayout(product) {
    var _ref6;
    var refs = {
      pCode: $('.p-code', product),
      ratings: $('.ratings-wrapper', product),
      pDesc: $('.p-desc', product),
      name: $('.name', product),
      avail: $('.availability', product),
      flagDiscount: $('.flag-discount', product),
      pricesWrapper: $('.prices', product),
      form: $('form.pr-action', product),
      unit: $('.pr-list-unit', product)
    };
    if (refs.pCode && refs.ratings) refs.ratings.append(refs.pCode);
    if (refs.pDesc && refs.name) refs.name.after(refs.pDesc);
    if (refs.avail) (_ref6 = refs.pDesc || refs.name) === null || _ref6 === void 0 || _ref6.after(refs.avail);
    var priceStd = refs.flagDiscount ? $('.price-standard', refs.flagDiscount) : null;
    if (priceStd && refs.pricesWrapper) {
      var wrap = document.createElement('div');
      wrap.className = 'price-standard-wrapper';
      var prev = priceStd.previousSibling;
      if ((prev === null || prev === void 0 ? void 0 : prev.nodeType) === 3 && prev.textContent.trim() === 'od') wrap.append(prev);
      wrap.append(priceStd);
      var priceFinal = $('.price-final', refs.pricesWrapper);
      priceFinal ? priceFinal.before(wrap) : refs.pricesWrapper.append(wrap);
    }
    if (refs.form) {
      var _$;
      (_$ = $('input[name="amount"]', refs.form)) === null || _$ === void 0 || _$.remove();
      var btn = $('button[type="submit"]', refs.form);
      var qty = quantityFragment.cloneNode(true);
      btn ? btn.before(qty) : refs.form.append(qty);
    }
    if (refs.unit) refs.unit.innerHTML = refs.unit.innerHTML.replace(/&nbsp;|\u00A0/g, '');
  };
  var getPriceData = function getPriceData(doc) {
    var _$2, _$3, _$4;
    var p = ((_$2 = $('.price-final-holder', doc)) === null || _$2 === void 0 ? void 0 : _$2.innerText.trim()) || ((_$3 = $('.nowrap', doc)) === null || _$3 === void 0 ? void 0 : _$3.innerText.trim()) || '';
    var u = ((_$4 = $('.pr-list-unit', doc)) === null || _$4 === void 0 ? void 0 : _$4.innerText.trim()) || '';
    return {
      price: u ? p.replace(u, '').replace(/\/$/, '').trim() : p,
      unit: u ? "/".concat(u.replace('/', '').trim()) : '/ks'
    };
  };
  var trackProduct = function trackProduct() {
    var _$5, _$6, _$7, _$8, _$9, _$0, _$1, _$10, _$11, _$12, _$13, _$14;
    var form = $('#product-detail-form');
    if (!form) return;
    var _getPriceData = getPriceData(document),
      price = _getPriceData.price,
      unit = _getPriceData.unit;
    var item = {
      id: (_$5 = $('input[name="productId"]', form)) === null || _$5 === void 0 ? void 0 : _$5.value,
      priceId: (_$6 = $('input[name="priceId"]', form)) === null || _$6 === void 0 ? void 0 : _$6.value,
      name: (_$7 = $('.p-detail-inner-header h1')) === null || _$7 === void 0 ? void 0 : _$7.innerText.trim(),
      url: location.pathname,
      imgSrc: (_$8 = $('.p-main-image img')) === null || _$8 === void 0 ? void 0 : _$8.src,
      price: price,
      unit: unit,
      priceVat: ((_$9 = $('.price-additional')) === null || _$9 === void 0 ? void 0 : _$9.innerHTML.trim()) || '',
      availabilityText: (_$0 = $('.availability-label')) === null || _$0 === void 0 ? void 0 : _$0.innerText.trim(),
      availabilityColor: (_$1 = $('.availability-label')) === null || _$1 === void 0 ? void 0 : _$1.style.color,
      codeLabel: ((_$10 = $('.p-code-label')) === null || _$10 === void 0 ? void 0 : _$10.innerText.trim()) || 'Kód:',
      code: ((_$11 = $('.p-code span:not(.p-code-label)')) === null || _$11 === void 0 ? void 0 : _$11.innerText.trim()) || '',
      description: (_$12 = $('.p-short-description')) === null || _$12 === void 0 ? void 0 : _$12.innerText.trim(),
      flagsHtml: ((_$13 = $('.flags-default')) === null || _$13 === void 0 ? void 0 : _$13.innerHTML.trim()) || '',
      starsHtml: ((_$14 = $('.stars-wrapper .star-list')) === null || _$14 === void 0 ? void 0 : _$14.outerHTML.trim()) || '',
      isVariant: !!$('.variant-list'),
      lastVisit: Date.now()
    };
    if (!item.id || !item.name) return;
    var h = JSON.parse(localStorage.getItem(CONFIG.storageKey) || '[]');
    h = [item].concat(_toConsumableArray(h.filter(function (p) {
      return p.id !== item.id;
    }))).slice(0, CONFIG.maxItems);
    localStorage.setItem(CONFIG.storageKey, JSON.stringify(h));
  };
  var revalidate = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var history, now, stale, _iterator2, _step2, item, _$15, _$16, _$17, _$18, _$19, _$20, res, html, doc, _getPriceData2, price, unit, _t2, _t3;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            history = JSON.parse(localStorage.getItem(CONFIG.storageKey) || '[]');
            now = Date.now();
            stale = history.filter(function (i) {
              return now - i.lastVisit > CONFIG.revalidateMs && i.url !== location.pathname;
            });
            if (stale.length) {
              _context7.n = 1;
              break;
            }
            return _context7.a(2);
          case 1:
            _iterator2 = _createForOfIteratorHelper(stale.slice(0, 3));
            _context7.p = 2;
            _iterator2.s();
          case 3:
            if ((_step2 = _iterator2.n()).done) {
              _context7.n = 9;
              break;
            }
            item = _step2.value;
            _context7.p = 4;
            _context7.n = 5;
            return fetch(item.url, {
              priority: 'low'
            });
          case 5:
            res = _context7.v;
            _context7.n = 6;
            return res.text();
          case 6:
            html = _context7.v;
            doc = new DOMParser().parseFromString(html, 'text/html');
            _getPriceData2 = getPriceData(doc), price = _getPriceData2.price, unit = _getPriceData2.unit;
            Object.assign(item, {
              price: price,
              unit: unit,
              priceVat: ((_$15 = $('.price-additional', doc)) === null || _$15 === void 0 ? void 0 : _$15.innerHTML.trim()) || '',
              availabilityText: (_$16 = $('.availability-label', doc)) === null || _$16 === void 0 ? void 0 : _$16.innerText.trim(),
              availabilityColor: (_$17 = $('.availability-label', doc)) === null || _$17 === void 0 ? void 0 : _$17.style.color,
              flagsHtml: ((_$18 = $('.flags-default', doc)) === null || _$18 === void 0 ? void 0 : _$18.innerHTML.trim()) || '',
              starsHtml: ((_$19 = $('.stars-wrapper .star-list', doc)) === null || _$19 === void 0 ? void 0 : _$19.outerHTML.trim()) || '',
              code: ((_$20 = $('.p-code span:not(.p-code-label)', doc)) === null || _$20 === void 0 ? void 0 : _$20.innerText.trim()) || item.code,
              lastVisit: now
            });
            _context7.n = 8;
            break;
          case 7:
            _context7.p = 7;
            _t2 = _context7.v;
          case 8:
            _context7.n = 3;
            break;
          case 9:
            _context7.n = 11;
            break;
          case 10:
            _context7.p = 10;
            _t3 = _context7.v;
            _iterator2.e(_t3);
          case 11:
            _context7.p = 11;
            _iterator2.f();
            return _context7.f(11);
          case 12:
            localStorage.setItem(CONFIG.storageKey, JSON.stringify(history));
          case 13:
            return _context7.a(2);
        }
      }, _callee6, null, [[4, 7], [2, 10, 11, 12]]);
    }));
    return function revalidate() {
      return _ref7.apply(this, arguments);
    };
  }();
  var render = function render() {
    var history = JSON.parse(localStorage.getItem(CONFIG.storageKey) || '[]').filter(function (i) {
      return i.url !== location.pathname;
    });
    if (!history.length || $('.last-visited') || !$('footer')) return;
    var section = document.createElement('section');
    section.className = 'last-visited';
    var cards = history.map(function (item) {
      return "\n            <div class=\"swiper-slide\">\n                <div class=\"product\">\n                    <div class=\"p\" data-micro-product-id=\"".concat(item.id, "\">\n                        <a href=\"").concat(item.url, "\" class=\"image\">\n                            <img src=\"").concat(item.imgSrc, "\" class=\"swap-image\" loading=\"lazy\">\n                            <div class=\"flags flags-default\">").concat(item.flagsHtml, "</div>\n                        </a>\n                        <div class=\"p-in\">\n                            <div class=\"p-in-in\">\n                                <a href=\"").concat(item.url, "\" class=\"name\"><span>").concat(item.name, "</span></a>\n                                <div class=\"ratings-wrapper\">").concat(item.starsHtml, "</div>\n                                <div class=\"availability\"><span style=\"color:").concat(item.availabilityColor, "\">").concat(item.availabilityText, "</span></div>\n                            </div>\n                            <div class=\"p-bottom ").concat(item.isVariant ? 'single-button' : '', "\">\n                                <div data-micro=\"offer\">\n                                    <div class=\"prices\">\n                                        ").concat(item.priceVat ? "<div class=\"price-additional\">".concat(item.priceVat, "</div>") : '', "\n                                        <div class=\"price price-final\"><strong>").concat(item.price, "</strong><span class=\"pr-list-unit\">").concat(item.unit, "</span></div>\n                                    </div>\n                                    <div class=\"p-tools\">\n                                        ").concat(item.isVariant ? "<a href=\"".concat(item.url, "\" class=\"btn btn-primary\">").concat(getMsg('moreInfo', 'Detail'), "</a>") : "\n                                        <form action=\"/action/Cart/addCartItem/\" method=\"post\" class=\"pr-action csrf-enabled\">\n                                            <input type=\"hidden\" name=\"productId\" value=\"".concat(item.id, "\">\n                                            <input type=\"hidden\" name=\"priceId\" value=\"").concat(item.priceId || '', "\">\n                                            <input type=\"hidden\" name=\"amount\" value=\"1\">\n                                            <button type=\"submit\" class=\"btn btn-cart\"><span>").concat(getMsg('toCart', 'Do košíku'), "</span></button>\n                                        </form>"), "\n                                    </div>\n                                </div>\n                                <p class=\"p-desc\">").concat(item.description || '', "</p>\n                            </div>\n                        </div>\n                        <span class=\"p-code\">").concat(item.codeLabel, " <span>").concat(item.code || '', "</span></span>\n                    </div>\n                </div>\n            </div>");
    }).join('');

    // Nová struktura se .swiper-helper
    section.innerHTML = "\n            <div class=\"container\">\n                <h2>Naposledy prohl\xED\u017Een\xE9</h2>\n                <div class=\"swiper-helper\">\n                    <div class=\"swiper swiper-last-visited\">\n                        <div class=\"swiper-wrapper\">".concat(cards, "</div>\n                    </div>\n                    <div class=\"swiper-button-next\"></div>\n                    <div class=\"swiper-button-prev\"></div>\n                </div>\n                <div class=\"swiper-pagination\"></div>\n            </div>");
    $('footer').before(section);
    section.querySelectorAll('.product').forEach(handleLayout);
    if (window.Swiper) {
      new Swiper('.swiper-last-visited', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: '.last-visited .swiper-button-next',
          prevEl: '.last-visited .swiper-button-prev'
        },
        pagination: {
          el: '.last-visited .swiper-pagination',
          clickable: true
        },
        breakpoints: {
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }
      });
    }
  };
  return {
    run: function run() {
      trackProduct();
      var defer = window.requestIdleCallback || function (cb) {
        return setTimeout(cb, 200);
      };
      defer(function () {
        revalidate().then(render);
      });
    }
  };
}();
if (document.readyState === 'complete') {
  RecentlyViewed.run();
} else {
  window.addEventListener('load', RecentlyViewed.run);
}
/******/ })()
;
//# sourceMappingURL=js-script.js.map