/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _window$shoptet;
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

// FLAGS and card
var handleFlags = function handleFlags(product) {};
var handleTextLayout = function handleTextLayout(product) {};
var products = document.querySelectorAll(".products-block .product:not(.banner-category)");

// const mmAllProducts = document.querySelectorAll(".products-block .product");
// if (mmAllProducts.length) {
//   mmAllProducts.forEach((product) => {
//     if (!product.classList.contains("banner-category")) {
//       handleFlags(product);
//       handleTextLayout(product);
//     }
//   });
// }

// document.addEventListener("ShoptetDOMContentLoaded", () => {
//   const mmAllProducts = document.querySelectorAll(".products-block .product");
//   if (mmAllProducts.length) {
//     mmAllProducts.forEach((product) => {
//       if (!product.classList.contains("banner-category")) {
//         handleFlags(product);
//         handleTextLayout(product);
//       }
//     });
//   }
// });

// CART
var handleCart = function handleCart() {};
if (document.body.classList.contains("ordering-process")) {
  handleCart();
  document.addEventListener("ShoptetDOMCartContentLoaded", handleCart);
}

// Vytvoří střední část patičky s logy, přesunutou navigací a flexibilním obalem
var handleFooterMiddle = function handleFooterMiddle() {
  var currentLang = window.shoptetLang || "cs";
  var translations = window.projectTranslations[currentLang];
  var footerBottom = document.querySelector(".footer-bottom");
  var footerNav = document.querySelector(".footer-rows .footer-nav");
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
  if (footerNav) {
    flexHolder.appendChild(footerNav);
  }
};
var reshapeSocials = function reshapeSocials() {
  // Najdeme banner podle tvojí třídy
  var socialWrapper = document.querySelector('.socials-footer');
  if (!socialWrapper) return;

  // Najdeme span s daty
  var dataSpan = socialWrapper.querySelector('span[data-ec-promo-id]');
  if (!dataSpan) return;

  // 1. Získáme text a nahradíme &nbsp; mezerami
  var rawContent = dataSpan.innerHTML.replace(/\u00a0/g, " ");

  // 2. Regex [\s\S]+? zajistí, že projdeme i přes konce řádků (<br> nebo \n)
  var items = rawContent.match(/#([\s\S]+?)#/g);
  if (items) {
    var list = document.createElement('div');
    list.className = 'socials-list';
    items.forEach(function (item) {
      // Odstraníme mřížky a VŠECHNY HTML tagy (br, span atd.), pak trimujeme
      var cleanItem = item.replace(/#|<[^>]*>?/gm, "").trim();

      // Rozdělíme na jméno a URL
      var parts = cleanItem.split(';');
      if (parts.length >= 2) {
        var name = parts[0].trim();
        var url = parts[1].trim();
        var a = document.createElement('a');
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = "social-link ".concat(name.toLowerCase());

        // Vytvoření vnitřního spanu
        var span = document.createElement('span');
        span.className = 'sr-only';
        span.textContent = name;
        a.appendChild(span);
        list.appendChild(a);
      }
    });

    // 3. Najdeme .banner a nahradíme celý vnitřek naším novým seznamem
    var banner = socialWrapper.querySelector('.banner');
    if (banner) {
      banner.innerHTML = "";
      banner.appendChild(list);
    }
  }
};

// Přesune platební metody, dopravu, sociální sítě a newsletter do nové spodní sekce patičky
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
  if (payment) {
    flexHolder.appendChild(payment);
  }
  if (shipping) {
    flexHolder.appendChild(shipping);
  }
};

// Vytvoří horní sekci patičky s fotkou, nadpisem, kontakty a přesunutými sociálními sítěmi
var handleFooterUpper = function handleFooterUpper() {
  var currentLang = window.shoptetLang || "cs";
  var translations = window.projectTranslations[currentLang];
  var openingHours = window.projectOpeningHours;
  var footer = document.querySelector("footer");
  if (!footer || !translations) return;
  var footerMiddle = document.querySelector(".footer-middle");
  var footerLower = document.querySelector(".footer-lower");
  var footerBottom = document.querySelector(".footer-bottom");
  var socialFooter = document.querySelector(".footer-rows .socials-footer");
  var footerUpper = document.querySelector(".footer-upper");
  if (!footerUpper) {
    footerUpper = document.createElement("div");
    footerUpper.className = "footer-upper";
    if (footerMiddle) {
      footer.insertBefore(footerUpper, footerMiddle);
    } else if (footerLower) {
      footer.insertBefore(footerUpper, footerLower);
    } else if (footerBottom) {
      footer.insertBefore(footerUpper, footerBottom);
    } else {
      footer.prepend(footerUpper);
    }
  }
  var container = footerUpper.querySelector(".container");
  if (!container) {
    container = document.createElement("div");
    container.className = "container";
    footerUpper.appendChild(container);
  }
  var flexHolder = container.querySelector(".flex-holder");
  if (!flexHolder) {
    flexHolder = document.createElement("div");
    flexHolder.className = "flex-holder";
    container.appendChild(flexHolder);
  } else {
    flexHolder.innerHTML = "";
  }

  // 1. Blok s fotkou a nadpisem
  var contactPersonBlock = document.createElement("div");
  contactPersonBlock.className = "footer-contact-person";
  contactPersonBlock.innerHTML = "\n    <img src=\"".concat(translations.contactPerson.img, "\" alt=\"").concat(translations.contactPerson.title, "\" class=\"contact-img\" loading=\"lazy\">\n    <h3 class=\"contact-title\">").concat(translations.contactPerson.title, "</h3>\n  ");
  flexHolder.appendChild(contactPersonBlock);

  // 2. Blok pro telefon a email
  var contactDetailsBlock = document.createElement("div");
  contactDetailsBlock.className = "footer-contact-details";
  var originalPhone = document.querySelector(".project-phone");
  if (originalPhone) {
    var phoneLink = originalPhone.cloneNode(true);
    var hoursLabel = phoneLink.querySelector(".project-opening-hours");
    if (hoursLabel && openingHours) {
      hoursLabel.textContent = openingHours;
    }
    contactDetailsBlock.appendChild(phoneLink);
  }
  var originalEmail = document.querySelector(".project-email");
  if (originalEmail) {
    var emailLink = originalEmail.cloneNode(true);
    var subText = document.createElement("small");
    subText.className = "email-subtext";
    subText.textContent = translations.emilSubText;
    emailLink.appendChild(subText);
    contactDetailsBlock.appendChild(emailLink);
  }
  flexHolder.appendChild(contactDetailsBlock);

  // 3. Přesun sociálních sítí
  if (socialFooter) {
    flexHolder.appendChild(socialFooter);
  }
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
/******/ })()
;
//# sourceMappingURL=js-script.js.map