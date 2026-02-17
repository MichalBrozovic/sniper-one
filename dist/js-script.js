/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
var _window$shoptet;
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
function moveElement(elementSelector, targetSelectors) {
  var element = document.querySelector(elementSelector);
  var footer = document.querySelector("footer");
  if (!element) {
    console.error("Prvek ".concat(elementSelector, " nebyl nalezen"));
    return;
  }
  var moved = false;
  var _iterator = _createForOfIteratorHelper(targetSelectors),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var targetSelector = _step.value;
      var target = document.querySelector(targetSelector);
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
var handleFooter = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          return _context.a(2);
      }
    }, _callee);
  }));
  return function handleFooter() {
    return _ref.apply(this, arguments);
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