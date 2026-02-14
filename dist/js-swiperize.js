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
var swiperize = function swiperize(_ref) {
  var containers = _ref.containers,
    slide = _ref.slide,
    _ref$customOptions = _ref.customOptions,
    customOptions = _ref$customOptions === void 0 ? {} : _ref$customOptions,
    _ref$swiperOptions = _ref.swiperOptions,
    swiperOptions = _ref$swiperOptions === void 0 ? {} : _ref$swiperOptions;
  var scrollbarWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--scrollbar-width"));
  var fallbackTimeout = 5000;

  // Ensure that the containers and slides are arrays
  var containerArray = Array.isArray(containers) ? containers : [containers];
  var slideArray = Array.isArray(slide) ? slide : [slide];
  var swiperizedCount = 0;
  var initializeSwiper = function initializeSwiper(selector, slideClass) {
    // Create a fragment to hold the new Swiper container until its DOM is ready
    var swiperFragment = document.createDocumentFragment();

    // Create a new container for the Swiper instance
    var swiperContainer = document.createElement("div");
    var swiperClass = "swiper-" + selector.replace(/[#.]/g, "");
    swiperContainer.classList.add("swiper", swiperClass);
    swiperFragment.appendChild(swiperContainer);

    // Clone the original container and modify its structure for Swiper
    var slidesContainer = document.querySelector(selector);
    if (!slidesContainer) {
      console.error("Element not found for selector: ".concat(selector));
      return;
    }
    slidesContainer.classList.add("swiperized");
    var slidesContainerClone = slidesContainer.cloneNode(true);
    slidesContainerClone.classList.add("swiper-wrapper");
    Object.assign(slidesContainerClone.style, {
      display: "flex",
      flexWrap: "nowrap"
    });
    swiperContainer.appendChild(slidesContainerClone);

    // Apply viewport styles to the Swiper container
    if (customOptions.fullscreen) {
      Object.assign(swiperContainer.style, {
        position: "relative",
        width: "calc(100vw - ".concat(scrollbarWidth, "px)"),
        maxWidth: "".concat(1920 - scrollbarWidth, "px"),
        left: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden"
      });
    } else {
      Object.assign(swiperContainer.style, {
        width: "100%",
        position: "relative",
        overflow: "hidden"
      });
    }

    // Add pagination dots if enabled
    if (customOptions.dots) {
      var pagination = document.createElement("div");
      var paginationClass = "swiper-pagination-".concat(selector.replace(/[#.]/g, ""));
      pagination.classList.add("swiper-pagination", paginationClass);
      swiperContainer.insertAdjacentElement("afterend", pagination);
      swiperOptions.pagination = {
        el: ".".concat(paginationClass),
        clickable: true
      };
    }

    // Add navigation arrows if enabled
    if (customOptions.arrows) {
      var prevClass = "swiper-button-prev-".concat(selector.replace(/[#.]/g, ""));
      var nextClass = "swiper-button-next-".concat(selector.replace(/[#.]/g, ""));
      var previous = document.createElement("div");
      previous.classList.add("swiper-button-prev", prevClass);
      swiperContainer.appendChild(previous);
      var next = document.createElement("div");
      next.classList.add("swiper-button-next", nextClass);
      swiperContainer.appendChild(next);
      swiperOptions.navigation = {
        nextEl: ".".concat(nextClass),
        prevEl: ".".concat(prevClass)
      };
    }

    // Add scrollbar if enabled
    if (customOptions.scrollbar) {
      var scrollbarClass = "swiper-scrollbar-".concat(selector.replace(/[#.]/g, ""));
      var scrollbar = document.createElement("div");
      scrollbar.classList.add("swiper-scrollbar", scrollbarClass);
      swiperContainer.appendChild(scrollbar);
      swiperOptions.scrollbar = {
        el: ".".concat(scrollbarClass),
        draggable: true
      };
    }

    // Enable infinite loop if enabled
    if (customOptions.infinity) {
      swiperOptions.loop = true;
    }
    if (customOptions.lazyPrevNext) {
      swiperOptions.lazy = {
        loadPrevNext: true
      };
    }

    // Add the swiper-slide class to each slide
    var slides = slidesContainerClone.querySelectorAll(slideClass);
    var _iterator = _createForOfIteratorHelper(slides),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _slide = _step.value;
        _slide.classList.add("swiper-slide");
        var slideImg = _slide.querySelector(".image img");
        if (slideImg && slideImg.getAttribute("data-src")) {
          slideImg.setAttribute("src", slideImg.getAttribute("data-src"));
        }
      }

      // Replace the original container with the new Swiper container
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    slidesContainer.before(swiperFragment);
    slidesContainer.remove();

    // Initialize the Swiper instance
    var swiperInstance = new Swiper(".".concat(swiperClass), _objectSpread({}, swiperOptions));

    // Show the Swiper container after it's ready to prevent flickering
    // Set in css opacity: 0 and display: none for swiper .products
    setTimeout(function () {
      slidesContainerClone.style.opacity = 1;
      slidesContainerClone.style.display = "flex";
      slidesContainerClone.style.setProperty("--swiper-height", "".concat(slidesContainerClone.clientHeight, "px"));
    }, 0);

    // Disable navigation buttons if slides are less than slidesPerView
    var disableNavigationButtons = function disableNavigationButtons() {
      var totalSlides = slidesContainerClone.querySelectorAll(".swiper-slide").length;
      var slidesPerView = swiperInstance.params.slidesPerView === "auto" ? swiperInstance.slidesPerViewDynamic() : swiperInstance.params.slidesPerView;
      if (totalSlides <= slidesPerView) {
        var prevButton = swiperContainer.querySelector(".swiper-button-prev");
        var nextButton = swiperContainer.querySelector(".swiper-button-next");
        if (prevButton) prevButton.classList.add("disabled");
        if (nextButton) nextButton.classList.add("disabled");
      }
    };
    disableNavigationButtons();
  };

  // Lazy load Swiper instances when they come into view
  var swiperObserver = new IntersectionObserver(function (entries, observer) {
    var _iterator2 = _createForOfIteratorHelper(entries),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var entry = _step2.value;
        if (entry.isIntersecting) {
          var selector = entry.target.getAttribute("data-selector");
          var index = containerArray.indexOf(selector);
          var slideClass = slideArray[Math.min(index, slideArray.length - 1)];
          initializeSwiper(selector, slideClass);
          observer.unobserve(entry.target);
          swiperizedCount++;

          // Disconnect observer if all containers come into view
          if (swiperizedCount === containerArray.length) {
            observer.disconnect();
          }
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

  // Initiate the swiperization process for each container using the observer or a fallback
  var _iterator3 = _createForOfIteratorHelper(containerArray),
    _step3;
  try {
    var _loop = function _loop() {
      var selector = _step3.value;
      var slidesContainer = document.querySelector(selector);
      if (slidesContainer) {
        slidesContainer.setAttribute("data-selector", selector);
        swiperObserver.observe(slidesContainer);

        // Fallback for containers that don't trigger the observer
        setTimeout(function () {
          if (!slidesContainer.classList.contains("swiperized")) {
            var index = containerArray.indexOf(selector);
            var slideClass = slideArray[Math.min(index, slideArray.length - 1)];
            initializeSwiper(selector, slideClass);
            swiperObserver.unobserve(slidesContainer);
            swiperizedCount++;

            // Disconnect observer once all containers are loaded through the fallback
            if (swiperizedCount === containerArray.length) {
              swiperObserver.disconnect();
            }
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
swiperize.setLastVisibleSlide = function (swiper) {
  // Remove the last-visible class from all slides
  var _iterator4 = _createForOfIteratorHelper(swiper.slides),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var slide = _step4.value;
      slide.classList.remove("swiper-slide-last-visible");
    }

    // Get slidesPerView, accounting for 'auto'
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  var slidesPerView;
  swiper.params.slidesPerView === "auto" ? slidesPerView = swiper.slidesPerViewDynamic() : slidesPerView = Math.round(swiper.params.slidesPerView);

  // Calculate the last visible slide index
  var activeIndex = swiper.activeIndex;
  var lastVisibleIndex = (activeIndex + slidesPerView) % swiper.slides.length;

  // Add the last-visible class to the slide with lastVisibleIndex and all slides afterwards
  for (var i = lastVisibleIndex; i < swiper.slides.length; i++) {
    if (lastVisibleIndex === 0 && i === 0) break;
    swiper.slides[i].classList.add("swiper-slide-last-visible");
  }
};

/**
 * Returns an array of the same length as the selectors array, filled with the slideClass string.
 * @param {*} selectors String array of selectors
 * @param {*} slideClass Target class of the slides
 * @returns
 */
swiperize.spreadClass = function (selectors, slideClass) {
  return Array(selectors.length).fill(slideClass);
};
/******/ })()
;
//# sourceMappingURL=js-swiperize.js.map