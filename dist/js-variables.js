/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*****************************!*\
  !*** ./src/js/variables.js ***!
  \*****************************/
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var shoptetPage = dataLayer[0].shoptet.pageType;
var shoptetLang = dataLayer[0].shoptet.language;
function moveElement(elementSelector, targetSelectors) {
  var element = document.querySelector(elementSelector);
  var footer = document.querySelector('footer');
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
        target.insertAdjacentElement('afterend', element);
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
    footer.insertAdjacentElement('beforebegin', element);
  }
}
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
function scrollToNextSectionOrHref(e) {
  if (this.getAttribute('href') === '#next') {
    e.preventDefault();
    scrollToNextSection.call(this);
  }
}
/******/ })()
;
//# sourceMappingURL=js-variables.js.map