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

// Přiřazení funkce k objektu window pro globální dostupnost
window.moveElement = moveElement;

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
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setScrollbarWidth);
} else {
  setScrollbarWidth();
}
window.addEventListener('resize', setScrollbarWidth);
document.addEventListener('shoptet.content.updated', setScrollbarWidth);

// Funkce pro nastavení výšky headeru jako CSS proměnné
function setHeaderTopHeight() {
  var headerTop = document.querySelector("#header");
  if (headerTop) {
    document.documentElement.style.setProperty("--header-top-height", "".concat(headerTop.clientHeight, "px"));
  }
}

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
var handleHeader = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var liElements;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          liElements = document.querySelectorAll(".menu-level-3 li");
          liElements.forEach(function (li) {
            var childNodes = Array.from(li.childNodes);
            childNodes.forEach(function (node) {
              if (node.nodeType === 3 && node.textContent.includes(",")) {
                // 3 is a Text node
                node.textContent = node.textContent.replace(",", "");
              }
            });
          });
        case 1:
          return _context.a(2);
      }
    }, _callee);
  }));
  return function handleHeader() {
    return _ref.apply(this, arguments);
  };
}();
handleHeader();
document.addEventListener("ShoptetDOMPageContentLoaded", handleHeader);
document.addEventListener("ShoptetDOMContentLoaded", handleHeader);
var handleCategory = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var reload,
      _args2 = arguments;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          reload = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : false;
        case 1:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return function handleCategory() {
    return _ref2.apply(this, arguments);
  };
}();
var handleCheckedFilters = function handleCheckedFilters() {};
var handleProductDetail = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return function handleProductDetail() {
    return _ref3.apply(this, arguments);
  };
}();
if (shoptetPage === "productDetail") {
  handleProductDetail();
}
var handlePost = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          return _context4.a(2);
      }
    }, _callee4);
  }));
  return function handlePost() {
    return _ref4.apply(this, arguments);
  };
}();
if (document.body.classList.contains("type-post")) handlePost();
/******/ })()
;
//# sourceMappingURL=js-critical.js.map