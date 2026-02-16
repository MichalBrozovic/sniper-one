/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*****************************!*\
  !*** ./src/js/swiperize.js ***!
  \*****************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * Swiperize 4.0 - Full Sniper Edition
 * Zachovává veškerou původní logiku, ale opravuje strukturu pro Shoptet.
 */
var swiperize = function swiperize(_ref) {
  var containers = _ref.containers,
    slide = _ref.slide,
    _ref$customOptions = _ref.customOptions,
    customOptions = _ref$customOptions === void 0 ? {} : _ref$customOptions,
    _ref$swiperOptions = _ref.swiperOptions,
    swiperOptions = _ref$swiperOptions === void 0 ? {} : _ref$swiperOptions;
  var scrollbarWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--scrollbar-width") || 0);
  var fallbackTimeout = 5000;
  var containerArray = Array.isArray(containers) ? containers : [containers];
  var slideArray = Array.isArray(slide) ? slide : [slide];
  window.sniperSwipers = window.sniperSwipers || {};
  var swiperizedCount = 0;
  var initializeSwiper = function initializeSwiper(selector, slideClass) {
    var originalContainer = document.querySelector(selector);
    if (!originalContainer || originalContainer.classList.contains("swiperized")) return;

    // Úklid staré instance před re-init (Shoptet AJAX)
    if (window.sniperSwipers[selector]) {
      window.sniperSwipers[selector].destroy(true, true);
    }
    var safeClass = selector.replace(/[#.]/g, "");
    var swiperClass = "swiper-" + safeClass;

    // 1. STRUKTURA: Wrapper (pro šipky) -> Root (pro overflow) -> Original (pro slides)
    var containerWrapper = document.createElement("div");
    containerWrapper.className = "swiper-container-wrapper swiper-container-wrapper-".concat(safeClass);
    containerWrapper.style.position = "relative";
    var swiperRoot = document.createElement("div");
    swiperRoot.className = "swiper ".concat(swiperClass);

    // Fullscreen logika z původního kódu
    if (customOptions.fullscreen) {
      Object.assign(swiperRoot.style, {
        position: "relative",
        width: "calc(100vw - ".concat(scrollbarWidth, "px)"),
        maxWidth: "".concat(1920 - scrollbarWidth, "px"),
        left: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden"
      });
    } else {
      Object.assign(swiperRoot.style, {
        width: "100%",
        position: "relative",
        overflow: "hidden"
      });
    }

    // 2. TRANSFORMACE PŮVODNÍHO ELEMENTU
    var wrapper = originalContainer;
    wrapper.classList.add("swiper-wrapper", "swiperized");
    Object.assign(wrapper.style, {
      display: "flex",
      flexWrap: "nowrap",
      opacity: "0" // Skrytí před init
    });

    // 3. PŘÍPRAVA SLIDŮ (Včetně tvé data-src logiky)
    var slides = wrapper.querySelectorAll(slideClass);
    var _iterator = _createForOfIteratorHelper(slides),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var s = _step.value;
        s.classList.add("swiper-slide");
        var slideImg = s.querySelector(".image img");
        if (slideImg && slideImg.getAttribute("data-src")) {
          slideImg.setAttribute("src", slideImg.getAttribute("data-src"));
        }
      }

      // 4. SLOŽENÍ DOM
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    wrapper.before(containerWrapper);
    containerWrapper.appendChild(swiperRoot);
    swiperRoot.appendChild(wrapper);

    // 5. DOPLŇKY (Pagination, Arrows, Scrollbar)
    var currentSwiperOptions = _objectSpread({}, swiperOptions);
    if (customOptions.dots) {
      var pagination = document.createElement("div");
      var paginationClass = "swiper-pagination-".concat(safeClass);
      pagination.classList.add("swiper-pagination", paginationClass);
      containerWrapper.appendChild(pagination);
      currentSwiperOptions.pagination = {
        el: ".".concat(paginationClass),
        clickable: true
      };
    }
    if (customOptions.arrows) {
      var prevClass = "swiper-button-prev-".concat(safeClass);
      var nextClass = "swiper-button-next-".concat(safeClass);
      var prev = document.createElement("div");
      var next = document.createElement("div");
      prev.classList.add("swiper-button-prev", prevClass);
      next.classList.add("swiper-button-next", nextClass);
      containerWrapper.append(prev, next);
      currentSwiperOptions.navigation = {
        nextEl: ".".concat(nextClass),
        prevEl: ".".concat(prevClass)
      };
    }
    if (customOptions.scrollbar) {
      var scrollbarClass = "swiper-scrollbar-".concat(safeClass);
      var scrollbar = document.createElement("div");
      scrollbar.classList.add("swiper-scrollbar", scrollbarClass);
      containerWrapper.appendChild(scrollbar);
      currentSwiperOptions.scrollbar = {
        el: ".".concat(scrollbarClass),
        draggable: true
      };
    }
    if (customOptions.infinity) currentSwiperOptions.loop = true;
    if (customOptions.lazyPrevNext) currentSwiperOptions.lazy = {
      loadPrevNext: true
    };

    // 6. START SWIPERU
    var swiperInstance = new Swiper(swiperRoot, currentSwiperOptions);
    window.sniperSwipers[selector] = swiperInstance;

    // Plynulé zobrazení a výška
    setTimeout(function () {
      wrapper.style.opacity = 1;
      wrapper.style.setProperty("--swiper-height", "".concat(wrapper.clientHeight, "px"));
    }, 50);

    // Tvůj disableNavigationButtons
    var disableNavigationButtons = function disableNavigationButtons() {
      var totalSlides = wrapper.querySelectorAll(".swiper-slide").length;
      var slidesPerView = swiperInstance.params.slidesPerView === "auto" ? swiperInstance.slidesPerViewDynamic() : swiperInstance.params.slidesPerView;
      if (totalSlides <= slidesPerView) {
        var pb = containerWrapper.querySelector(".swiper-button-prev");
        var nb = containerWrapper.querySelector(".swiper-button-next");
        if (pb) pb.classList.add("disabled");
        if (nb) nb.classList.add("disabled");
      }
    };
    disableNavigationButtons();
  };

  // 7. OBSERVER & FALLBACK LOGIKA (Tvůj originál)
  var swiperObserver = new IntersectionObserver(function (entries, observer) {
    var _iterator2 = _createForOfIteratorHelper(entries),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var entry = _step2.value;
        if (entry.isIntersecting) {
          var sel = entry.target.getAttribute("data-selector");
          var index = containerArray.indexOf(sel);
          var sClass = slideArray[Math.min(index, slideArray.length - 1)];
          initializeSwiper(sel, sClass);
          observer.unobserve(entry.target);
          swiperizedCount++;
          if (swiperizedCount === containerArray.length) observer.disconnect();
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }, {
    rootMargin: "0px 0px 400px 0px",
    threshold: 0.1
  });
  var run = function run() {
    var _iterator3 = _createForOfIteratorHelper(containerArray),
      _step3;
    try {
      var _loop = function _loop() {
        var selector = _step3.value;
        var slidesContainer = document.querySelector(selector);
        if (slidesContainer && !slidesContainer.classList.contains("swiperized")) {
          slidesContainer.setAttribute("data-selector", selector);
          swiperObserver.observe(slidesContainer);
          setTimeout(function () {
            if (!slidesContainer.classList.contains("swiperized")) {
              var index = containerArray.indexOf(selector);
              var sClass = slideArray[Math.min(index, slideArray.length - 1)];
              initializeSwiper(selector, sClass);
              swiperObserver.unobserve(slidesContainer);
              swiperizedCount++;
            }
          }, fallbackTimeout);
        }
      };
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  };
  run();

  // Klíčové pro Shoptet: Re-run po update obsahu
  document.removeEventListener("shoptet.content.updated", run);
  document.addEventListener("shoptet.content.updated", run);
};

// DOPLŇKOVÉ FUNKCE (Z tvého kódu)
swiperize.setLastVisibleSlide = function (swiper) {
  var _iterator4 = _createForOfIteratorHelper(swiper.slides),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var slide = _step4.value;
      slide.classList.remove("swiper-slide-last-visible");
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  var slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.round(swiper.params.slidesPerView);
  var activeIndex = swiper.activeIndex;
  var lastVisibleIndex = (activeIndex + slidesPerView) % swiper.slides.length;
  for (var i = lastVisibleIndex; i < swiper.slides.length; i++) {
    if (lastVisibleIndex === 0 && i === 0) break;
    swiper.slides[i].classList.add("swiper-slide-last-visible");
  }
};
swiperize.spreadClass = function (selectors, slideClass) {
  return Array(selectors.length).fill(slideClass);
};
/******/ })()
;
//# sourceMappingURL=js-swiperize.js.map