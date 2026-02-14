/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
      var _target = document.querySelector(targetSelector);
      if (_target) {
        _target.insertAdjacentElement("afterend", element);
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
var splitMenu = function splitMenu() {
  var menuWrapper = document.querySelector("#navigation .navigation-in");
  if (menuWrapper) {
    setTimeout(function () {
      var menuItems = menuWrapper.querySelectorAll(".menu-level-1>li:not(.appended-category)");
      var menuHelper = document.querySelector(".menu-helper");
      var menuWrapperStyle = window.getComputedStyle(menuWrapper);
      menuItems.forEach(function (item) {
        var offsetRight = item.offsetLeft + item.offsetWidth;
        var itemInHelper = item.id === "nav-manufacturers" ? menuHelper.querySelector("#nav-manufacturers") : menuHelper.querySelector("." + item.classList[0]);
        if (offsetRight > menuWrapper.clientWidth - parseFloat(menuWrapperStyle.paddingRight)) {
          if (itemInHelper) {
            itemInHelper.classList.remove("splitted");
          }
          item.classList.add("splitted");
        } else {
          if (itemInHelper) {
            itemInHelper.classList.add("splitted");
          }
          item.classList.remove("splitted");
        }
      });
      if (menuHelper.querySelector(".menu-level-1 > li:not(.splitted):not(.appended-category)")) {
        menuHelper.classList.remove("empty");
        menuWrapper.classList.remove("fitted");
      } else {
        menuHelper.classList.add("empty");
        menuWrapper.classList.add("fitted");
      }
    }, 200);
  }
};
shoptet.menu.splitMenu = splitMenu;

// CAROUSEL
var handleCarousel = function handleCarousel() {
  var carousel = document.querySelector("#carousel .carousel-inner");
  if (carousel) {
    var _observer = new MutationObserver(function (mutationList) {
      var currentItem;
      mutationList.forEach(function (mutation) {
        if (mutation.target.className === "item active") {
          currentItem = mutation.target;
        }
      });
      if (typeof currentItem == "undefined") return;
      var actualIndex = _toConsumableArray(document.querySelectorAll(".carousel-inner .item")).indexOf(currentItem),
        dotsList = document.querySelectorAll(".carousel-dots li");
      dotsList.forEach(function (dot) {
        dot.classList.remove("dot-active");
      });
      dotsList[actualIndex].classList.add("dot-active");
    });
    var dotsCounter = 0,
      dotsList = document.createElement("ul");
    dotsList.classList.add("carousel-dots");
    carousel.querySelectorAll(".item").forEach(function (item, index) {
      dotsCounter += 1;
      var dotEl = document.createElement("li");
      dotsList.appendChild(dotEl);
      if (index === 0) dotEl.classList.add("dot-active");
      dotEl.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".carousel-inner .item.active").classList.remove("active");
        var targetItem = document.querySelectorAll(".carousel-inner .item")[index];
        var targetItemMedia = targetItem.querySelector("img, video");
        if (targetItemMedia) {
          if (targetItemMedia.tagName.toLowerCase() === "img" && !targetItemMedia.src) {
            targetItemMedia.src = targetItemMedia.getAttribute("data-src");
          } else if (targetItemMedia.tagName.toLowerCase() === "video") {
            var sourceElement = targetItemMedia.querySelector("source");
            if (sourceElement && !sourceElement.src) {
              sourceElement.src = sourceElement.getAttribute("data-src");
              targetItemMedia.load(); // Reload the video to apply the new source
            }
          }
        }
        targetItem.classList.add("active");
      });
      _observer.observe(item, {
        attributes: true,
        attributeFilter: ["class"]
      });
    });
    carousel.appendChild(dotsList);
  }

  // const videoObserver = new IntersectionObserver((entries, observer) => {
  // 	for (const entry of entries) {
  // 		const video = entry.target;
  // 		if (entry.isIntersecting) {
  // 			video.play();
  // 			// Disconnect the observer for this video
  // 			observer.unobserve(video);
  // 		} else {
  // 			video.pause();
  // 		}
  // 	}
  // }, {
  // 	rootMargin: '0px 0px 0px 0px',
  // 	threshold: 0.1 // Adjust threshold as needed
  // });

  // // Select all video elements and observe them
  // document.querySelectorAll('video').forEach((video) => {
  // 	videoObserver.observe(video);
  // });
};
if (shoptetPage == "homepage") {
  handleCarousel();
}

// FLAGS and card
var handleFlags = function handleFlags(product) {
  var flagsDefault = product.querySelector(".flags-default");
  var flagsExtra = product.querySelector(".flags-extra");
  if (flagsDefault && flagsExtra) {
    flagsDefault.appendChild(flagsExtra);
    flagsDefault.classList.add("contains-extra");
  }
};
var handleTextLayout = function handleTextLayout(product) {
  var priceStandard = product.querySelector(".price-standard");
  var prices = product.querySelector(".prices");
  var pDesc = product.querySelector(".p-desc");
  var pInIn = product.querySelector(".p-in-in");
  var availability = product.querySelector(".availability");
  var availabilitySpan = availability === null || availability === void 0 ? void 0 : availability.querySelector("span");
  var pricesFinal = product.querySelector(".prices .price-final");
  var priceAditional = product.querySelector(".price-additional");
  var addToCartButton = product.querySelector(".add-to-cart-button");
  var pCode = product.querySelector(".p-code");
  if (pCode && pInIn) {
    pInIn.insertAdjacentElement("afterbegin", pCode);
  }
  if (priceStandard && prices) {
    prices.appendChild(priceStandard);
  }
  var button = product.querySelector("button");
  if (!button) {
    if (prices) prices.style.visibility = "hidden";
    if (availability) availability.style.visibility = "hidden";
  }
  var image = product.querySelector(".image");
  var starsRating = product.querySelector(".stars-wrapper");
  if (starsRating) {
    image.appendChild(starsRating);
    var ratingValue = starsRating.getAttribute("data-micro-rating-value");
    if (ratingValue) {
      if (parseFloat(ratingValue) === 0) {
        starsRating.remove();
      } else {
        var allStars = starsRating.querySelectorAll(".star");
        // Skryj všechny hvězdy kromě první
        allStars.forEach(function (star, idx) {
          if (idx > 0) {
            star.style.display = "none";
          } else {
            star.style.display = ""; // první hvězda zobrazena
          }
        });

        // Ověř, zda už existuje span s ratingem
        var ratingSpan = starsRating.querySelector(".rating-value");
        if (!ratingSpan) {
          ratingSpan = document.createElement("span");
          ratingSpan.className = "rating-value";
          ratingSpan.textContent = ratingValue;
          starsRating.appendChild(ratingSpan);
        }
      }
    }
  }
  // ...existing code...
};
var products = document.querySelectorAll(".products-block .product:not(.banner-category)");
var mmAllProducts = document.querySelectorAll(".products-block .product");
if (mmAllProducts.length) {
  mmAllProducts.forEach(function (product) {
    if (!product.classList.contains("banner-category")) {
      handleFlags(product);
      handleTextLayout(product);
    }
  });
}
document.addEventListener("ShoptetDOMContentLoaded", function () {
  var mmAllProducts = document.querySelectorAll(".products-block .product");
  if (mmAllProducts.length) {
    mmAllProducts.forEach(function (product) {
      if (!product.classList.contains("banner-category")) {
        handleFlags(product);
        handleTextLayout(product);
      }
    });
  }
});

// FOOTER-BOTTOM
function footerBilling() {
  var footerBottom = document.querySelector(".footer-bottom");
  var footerGlobal = document.querySelector("#footer");
  if (footerBottom && footerGlobal) {
    var footerBottomWrapper = document.createElement("div");
    footerBottomWrapper.classList.add("footer-bottom-wrapper");
    footerBottomWrapper.appendChild(footerBottom);
    footerGlobal.parentElement.insertBefore(footerBottomWrapper, footerGlobal.nextElementSibling);
    var signature = footerBottom.querySelector("#signature");
    if (signature) {
      signature.style.display = "flex";
      var platebniMetodyEl = document.createElement("img");
      platebniMetodyEl.classList.add("platebni-metody");
      platebniMetodyEl.src = "/user/documents/upload/Obrazky/platebni-metody.png";
      platebniMetodyEl.alt = "Platební metody";
      signature.parentElement.insertBefore(platebniMetodyEl, signature.nextElementSibling);
    }
  }
}
footerBilling();

// PRODUCT DETAIL
var createShpTabLink = function createShpTabLink(text, anchor, id) {
  var shpTabLi = document.createElement("li");
  var shpTabLink = document.createElement("a");
  shpTabLi.classList.add("shp-tab");
  shpTabLi.appendChild(shpTabLink);
  shpTabLink.classList.add("shp-tab-link");
  shpTabLink.href = anchor;
  shpTabLink.innerHTML = text;
  if (id) {
    shpTabLi.id = id;
  }
  return shpTabLi;
};
if (document.body.classList.contains("type-detail")) {
  var pDetailTabs = document.querySelector("#p-detail-tabs");
  var tabContent = document.querySelector("#tab-content");
  var customMobileSlider = document.querySelector(".custom-slider-wrapper");
  setTimeout(function () {
    // console.log(customMobileSlider)
  }, 3000);

  // if (customMobileSlider) {
  // 	$(customMobileSlider).slick({
  // 		infinite: false,
  // 		arrows: false,
  // 		slidesToShow: 1,
  // 		slidesToScroll: 1,
  // 		dots: true,
  // 	})
  // }
  swiperize({
    containers: ".custom-slider-wrapper",
    slide: ".p-main-image",
    customOptions: {
      fullscreen: false,
      infinity: false,
      dots: true,
      arrows: false,
      scrollbar: false,
      lazyPrevNext: true
    },
    swiperOptions: {
      direction: "horizontal",
      speed: 800,
      spaceBetween: 20,
      slidesPerView: 1
    }
  });
  // DLOUHY POPIS + OSTATNI TABY

  var ratingTab = document.querySelector("#ratingTab");
  if (ratingTab) {
    var ratingTabHeading = document.createElement("h3");
    var ratingTitleObj = window.ratingTitle.find(function (item) {
      return item.language === shoptetLang;
    }) || window.ratingTitle[0];
    ratingTabHeading.innerHTML = ratingTitleObj.text;
    ratingTab.prepend(ratingTabHeading);
    var ratingButton = ratingTab.querySelector(".add-comment ");
    if (ratingButton) {
      ratingTab.appendChild(ratingButton);
    }
  }
  var discusionWrapper = document.querySelector("#productDiscussion");
  if (discusionWrapper) {
    var discussionTabHeading = document.createElement("h3");
    var discussionTitleObj = window.discussionTitle.find(function (item) {
      return item.language === shoptetLang;
    }) || window.discussionTitle[0];
    discussionTabHeading.innerHTML = discussionTitleObj.text;
    discusionWrapper.prepend(discussionTabHeading);
  }
  var relatedFiles = document.querySelector("#relatedFiles");
  if (relatedFiles) {
    var relatedFilesHeading = document.createElement("h3");
    var relatedFilesTitleObj = window.relatedFilesTitle.find(function (item) {
      return item.language === shoptetLang;
    }) || window.relatedFilesTitle[0];
    relatedFilesHeading.innerHTML = relatedFilesTitleObj.text;
    relatedFiles.prepend(relatedFilesHeading);
  }
  var relatedProducts = document.querySelector(".products-related");
  var relatedProductsHeading = document.querySelector(".products-related-header");
  var voteWrappers = document.querySelectorAll(".votes-wrap .vote-wrap");
  voteWrappers.forEach(function (voteWrapper) {
    var voteWrapperWrapper = voteWrapper.querySelector(".votes-wrap.discussion");
    if (voteWrapperWrapper) {
      voteWrapper.insertAdjacentElement("afterend", voteWrapperWrapper);
    }
  });
  var addComentButtons = document.querySelectorAll(".add-comment.btn-primary");
  if (addComentButtons.length) {
    addComentButtons.forEach(function (button) {
      button.classList.remove("btn-primary", "btn-sm");
      button.classList.add("link-like");
    });
  }
  var descInner = document.querySelector("#description .description-inner");
  var descH3 = document.querySelector("#description .basic-description >h3");
  console.log(descH3);
  if (descH3) {
    var titleObj = window.detailTitle.find(function (item) {
      return item.language === shoptetLang;
    }) || window.detailTitle[0];
    descH3.innerHTML = titleObj.text;
    descH3.classList.add("detail-title");
    if (descInner) {
      descInner.prepend(descH3);
    }
  }
  if (relatedProducts && relatedProductsHeading) {
    if (relatedProductsHeading) {
      var relatedProductsTitleObj = window.relatedProductsTitle.find(function (item) {
        return item.language === shoptetLang;
      }) || window.relatedProductsTitle[0];
      relatedProductsHeading.innerText = relatedProductsTitleObj.text;
    }
    var titleText = relatedProductsHeading.innerText;
    var relatedProductsCount = relatedProducts.querySelectorAll(".product").length;
    var _tabContent = document.querySelector("#tab-content");

    // if (pDetailTabs.children[2]) {
    // 	pDetailTabs.insertBefore(relatedProductsLink, pDetailTabs.children[2]);
    // } else {
    // pDetailTabs.appendChild(relatedProductsLink);
    // }
    var productContent = document.querySelector("#content");
    relatedProductsHeading.classList.add("homepage-group-title");
    // relatedProductsHeading.innerHTML = `Další produkty z kolekce`
    var relatedProductsTab = document.createElement("div");
    // relatedProductsTab.classList.add('tab-pane')
    relatedProductsTab.id = "relatedProducts";
    relatedProductsTab.appendChild(relatedProductsHeading);
    relatedProductsTab.appendChild(relatedProducts);
    productContent.appendChild(relatedProductsTab);

    // desc.parentNode.insertBefore(relatedProductsTab, desc.nextSibling)

    var shpTabsWrapper = document.querySelector(".shp-tabs-wrapper");
    var wholeProd = document.querySelector("#relatedProducts");
    var descriptionInner = document.querySelector(".basic-description");
    if (shpTabsWrapper && wholeProd) {
      var wrapper = document.querySelector("#relatedProductsWrapper");
      if (!wrapper) {
        wrapper = document.createElement("div");
        wrapper.id = "relatedProductsWrapper";
        wholeProd.parentNode.insertBefore(wrapper, wholeProd);
        wrapper.appendChild(wholeProd);
      }

      // if (descriptionInner) {
      //   descriptionInner.parentNode.insertBefore(
      //     wrapper,
      //     descriptionInner.nextSibling
      //   );
      // }
    }
    swiperize({
      containers: ".products-related",
      slide: ".product",
      customOptions: {
        fullscreen: false,
        infinity: true,
        dots: true,
        arrows: true,
        scrollbar: false,
        lazyPrevNext: true,
        swiperWrapper: true
      },
      swiperOptions: {
        direction: "horizontal",
        speed: 800,
        slidesPerView: 1.4,
        spaceBetween: 16,
        breakpoints: {
          1200: {
            slidesPerView: 5,
            spaceBetween: 24
          },
          1100: {
            slidesPerView: 5,
            spaceBetween: 24
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 16
          }
        }
      }
    });
  }
  var alternativeProductsTabLink = document.querySelector('.shp-tab-link[href="#productsAlternative"]');
  if (alternativeProductsTabLink) alternativeProductsTabLink.parentElement.remove();
  var alternativeProducts = document.querySelector("#productsAlternative");
  if (alternativeProducts) {
    alternativeProducts.classList.remove("tab-pane", "fade");
    var alternativeProductsHeading = document.createElement("h2");
    alternativeProductsHeading.classList.add("homepage-group-title");
    var alternativeNadpisy = alternativeNadpis.find(function (item) {
      return item.language === shoptetLang;
    });
    if (alternativeNadpisy) {
      alternativeProductsHeading.innerHTML = alternativeNadpisy.text;
    }
    var _productContent = document.querySelector("#content");
    // const helpUSP = document.querySelector('#content > .benefitBanner')
    // if (helpUSP) {
    // 	helpUSP.parentElement.insertBefore(alternativeProductsHeading, helpUSP)
    // 	helpUSP.parentElement.insertBefore(alternativeProducts, helpUSP)
    // } else {

    var holder = document.createElement("div");
    holder.classList.add("holder");
    alternativeProducts.insertBefore(alternativeProductsHeading, alternativeProducts.firstChild);
    _productContent.appendChild(alternativeProducts);
    // }
    // $(alternativeProducts.querySelector('.products-block')).slick(productsSlickSettings)

    swiperize({
      containers: ".products-alternative",
      slide: ".product",
      customOptions: {
        fullscreen: false,
        infinity: true,
        dots: true,
        arrows: true,
        scrollbar: false,
        lazyPrevNext: true,
        swiperWrapper: true
      },
      swiperOptions: {
        direction: "horizontal",
        speed: 800,
        slidesPerView: 1.4,
        spaceBetween: 16,
        breakpoints: {
          1200: {
            slidesPerView: 5,
            spaceBetween: 24
          },
          1100: {
            slidesPerView: 5,
            spaceBetween: 24
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 16
          }
        }
      }
    });
  }
  var parametersTabContentH3 = document.querySelector("#description .extended-description >h3");
  if (parametersTabContentH3) {
    var parametersTitleObj = window.parametersTitle.find(function (item) {
      return item.language === shoptetLang;
    }) || window.parametersTitle[0];
    parametersTabContentH3.innerHTML = parametersTitleObj.text;
  }
  var firstRow = document.querySelector(".extended-description .detail-parameters tr:first-of-type");
  if (firstRow) {
    var firstTh = firstRow.querySelector("th span");
    var firstTd = firstRow.querySelector("td span");
    if (firstTh) {
      var paramTitleObj = window.parametersParametr.find(function (item) {
        return item.language === shoptetLang;
      }) || window.parametersParametr[0];
      firstTh.innerHTML = paramTitleObj.text;
    }
    if (firstTd) {
      var paramTextObj = window.parametersParametrText.find(function (item) {
        return item.language === shoptetLang;
      }) || window.parametersParametrText[0];
      firstTd.innerHTML = paramTextObj.text;
    }
  }
  // if (parametersTabContent) {
  //   const specificationText = window.specificationTabText.find(
  //     (item) => item.language === shoptetLang
  //   ).text;
  //   const parametersTab = createShpTabLink(specificationText, "#parameters");
  //   const descriptionTab = document.querySelector(
  //     '.shp-tab[data-testid="tabDescription"]'
  //   );
  //   descriptionTab.after(parametersTab);
  //   parametersTabContent.id = "parameters";
  // }

  var shpTabLinks = document.querySelectorAll(".shp-tab-link");
  if (shpTabLinks.length) {
    shpTabLinks.forEach(function (link) {
      link.removeAttribute("role");
      link.removeAttribute("data-toggle");

      // Odstranění závorek a čísel z textu odkazu
      link.textContent = link.textContent.replace(/\(\d+\)/g, "").trim();
    });
  }
  var targetNode = document.querySelector(".shp-tabs-row");
  if (targetNode) {
    var config = {
      childList: true,
      subtree: true
    };
    var callback = function callback(mutationsList, observer) {
      var _iterator2 = _createForOfIteratorHelper(mutationsList),
        _step2;
      try {
        var _loop = function _loop() {
          var mutation = _step2.value;
          if (mutation.type === "childList") {
            var hiddenLinks = document.querySelector(".shp-tabs-row .hidden-links");
            var shpTabsRow = document.querySelector(".shp-tabs-row .shp-tabs");
            if (hiddenLinks && shpTabsRow) {
              // Přesunout všechny .shp-tab do .shp-tabs-row .shp-tabs
              var shpTabs = hiddenLinks.querySelectorAll(".shp-tab");
              shpTabs.forEach(function (tab) {
                shpTabsRow.appendChild(tab);
              });

              // Odstranit .hidden-links
              hiddenLinks.remove();
            }
          }
        };
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    };
    var _observer2 = new MutationObserver(callback);
    _observer2.observe(targetNode, config);

    // Přidat posluchače událostí pro resize a orientationchange
    window.addEventListener("resize", function () {
      return _observer2.observe(targetNode, config);
    });
    window.addEventListener("orientationchange", function () {
      return _observer2.observe(targetNode, config);
    });
  }
  window.addEventListener("load", function () {
    setTimeout(function () {
      var mmAllProducts = document.querySelectorAll(".products-block .product");
      if (mmAllProducts.length) {
        mmAllProducts.forEach(function (product) {
          return handleFlags(product);
        });
        mmAllProducts.forEach(function (product) {
          return handleTextLayout(product);
        });
        // mmAllProducts.forEach((product) => handleRatings(product))
        // mmAllProducts.forEach((product) => handleProductAvailability(product))
      }
    }, 100);
  });
}

// CART
var handleCart = function handleCart() {
  var pageHeader = document.querySelector("#header");
  var cartHeader = document.querySelector(".cart-content .cart-header");
  var cartHeaderHelper = document.querySelector(".cart-header-wrapper");
  var search = document.querySelector(".search");
  var headerTop = document.querySelector(".header-top");
  // console.log(search)
  // console.log(headerTop)
  // if (search && headerTop) {
  // 	headerTop.appendChild(search)
  // }

  var continueInCart = document.querySelector(".next-step-forward");
  if (continueInCart) {
    var _window$cartContinueB;
    var buttonText = (_window$cartContinueB = window.cartContinueBtn.find(function (item) {
      return item.language === shoptetLang;
    })) === null || _window$cartContinueB === void 0 ? void 0 : _window$cartContinueB.text;
    if (buttonText) {
      continueInCart.innerText = buttonText;
    }
  }
  if (cartHeader && !cartHeaderHelper) {
    var cartHeaderWrapper = document.createElement("div");
    cartHeaderWrapper.classList.add("cart-header-wrapper");
    cartHeaderWrapper.appendChild(cartHeader);
    cartHeader.classList.add("container");
    pageHeader.parentElement.insertBefore(cartHeaderWrapper, pageHeader.nextElementSibling);
  } else if (cartHeader) {
    cartHeader.remove();
  }
  var sidebarCart = document.querySelector(".sidebar-in-cart");
  var backLink = document.querySelector(".back-shopping-link");
  // const sidebarCart = document.querySelector('.sidebar-in-cart .box[data-testid="tableCart"]')
  var extraDelivery = document.querySelector(".extra.delivery");
  if (extraDelivery) {
    if (dataLayer[0].shoptet.cartInfo.leftToFreeShipping.priceLeft <= 0) extraDelivery.classList.add("free-shipping");
    // sidebarCart.prepend(extraDelivery)
  }
  var overallWrapper = document.querySelector(".overall-wrapper");
  var cartFooter = document.createElement("div");
  cartFooter.classList.add("cart-footer");
  if (overallWrapper) overallWrapper.appendChild(cartFooter);
  var cartMail = document.querySelector(".contact-box .mail");
  var cartPhone = document.querySelector(".contact-box .tel");
  var sidebarNextStep = document.querySelector("#checkoutSidebar .next-step");
  var orderSummary = document.querySelector("#summary-box");
  if (sidebarNextStep && orderSummary) orderSummary.appendChild(sidebarNextStep);
  var nextStep = document.querySelector(".next-step-back");
  if (nextStep) {
    var cartRow = document.querySelector(".cart-inner");
    if (cartRow) {
      cartRow.appendChild(nextStep);
    }
  }
  var sidebarConsents = document.querySelectorAll("#checkoutSidebar .consents");
  var summaryItemPrice = document.querySelector("#checkoutSidebar .order-summary-item.price");
  if (sidebarConsents.length && summaryItemPrice) {
    sidebarConsents.forEach(function (consent) {
      summaryItemPrice.parentElement.insertBefore(consent, summaryItemPrice.nextElementSibling);
    });
  }
  if (window.innerWidth <= 1300) {
    var backHolder = document.querySelector(".cart-inner");
    var backHold = document.querySelector(".back-shopping-link");
    if (backHolder && backHold) {
      backHolder.appendChild(backHold);
    }
  }
  // const backToShopButtons = document.querySelectorAll('.back-to-shop')
  // if (backToShopButtons.length) {
  // 	backToShopButtons.forEach((button) => {
  // 		button.innerText = 'ZPĚT K NÁKUPNÍMU KOŠÍKU'
  // 	})
  // }

  // const backToShop = document.querySelector('.back-to-shop')
  // if (backToShop) {
  // 	// console.log(backToShop)
  // 	const backToShopLinks = document.querySelector('.back-shopping-link')
  // 	if (backToShopLinks) {
  // 		// console.log(backToShopLinks)
  // 		backToShopLinks.appendChild(backToShop);
  // 	}
  // }
  var paymentInfoTooltips = document.querySelectorAll(".payment-info .show-tooltip");
  if (paymentInfoTooltips.length) {
    paymentInfoTooltips.forEach(function (tooltip) {
      tooltip.innerText = "i";
    });
  }
  var handleFreeRecapitulation = function handleFreeRecapitulation() {
    setTimeout(function () {
      var recapItemPrices = document.querySelectorAll(".recapitulation-shipping-billing-info > span");
      if (recapItemPrices.length) {
        recapItemPrices.forEach(function (price) {
          if (price.innerText.toUpperCase().includes("ZDARMA")) {
            price.classList.add("for-free");
          } else {
            price.classList.remove("for-free");
          }
        });
      }
    }, 100);
  };
  document.addEventListener("ShoptetShippingMethodUpdated", handleFreeRecapitulation);
  document.addEventListener("ShoptetBillingMethodUpdated", handleFreeRecapitulation);
  var recapItemPrices = document.querySelectorAll('span[data-testid="recapItemPrice"]');
  if (recapItemPrices.length) {
    recapItemPrices.forEach(function (price) {
      if (price.innerText.toUpperCase().includes("ZDARMA")) {
        price.classList.add("for-free");
      } else {
        price.classList.remove("for-free");
      }
    });
  }

  // const continueOrderButton = document.querySelector('#continue-order-button')
  // if (continueOrderButton) {
  //   continueOrderButton.innerText = 'Pokračovat v objednávce' //jazyk
  // }

  // const relatedProductsBuyButton = document.querySelectorAll('.cart-related-product .add-to-cart-button')
  // if (relatedProductsBuyButton.length) {
  // 	relatedProductsBuyButton.forEach((button) => {
  // 		button.innerText = 'Koupit' //jazyk
  // 	})
  // }

  var footerCheck = document.querySelector(".ordering-process-footer");
  if (!footerCheck) {
    var cartProjectMail = document.querySelector(".contact-box .mail");
    var cartProjectPhone = document.querySelector(".contact-box .tel");
    var orderingProcessFooter = document.createElement("footer");
    orderingProcessFooter.classList.add("ordering-process-footer");
    var securePaymentText = "Bezpečná platba";
    var respondTimeText = "Reagujeme do 24 hodin";
    if (shoptetLang === "en") {
      securePaymentText = "Secure Payment";
      respondTimeText = "We respond within 24 hours";
    } else if (shoptetLang === "de") {
      securePaymentText = "Sichere Zahlung";
      respondTimeText = "Wir antworten innerhalb von 24 Stunden";
    }
    var phoneTimeObj = window.projectPhoneTime.find(function (item) {
      return item.language === shoptetLang;
    }) || window.projectPhoneTime[0];
    orderingProcessFooter.innerHTML = "\n      <div class=\"container\">\n        <div class=\"contact-holder\">\n          <div class=\"phone-wrapper\">\n            <div class=\"holder-phone-time\">\n              ".concat(phoneTimeObj.text, "\n            </div>\n          </div>\n          <div class=\"mail-wrapper\">\n          </div>\n        </div>\n        <div class=\"payment-types\">\n          <img\n            src=\"/user/documents/upload/Obrazky/platebni-metody-2.png\"\n            width=\"200\"\n            height=\"20\"\n            alt=\"Visa, MasterCard, Maestro, PayPal\"\n          />\n        </div>\n      </div>\n    ");
    overallWrapper.appendChild(orderingProcessFooter);
    var orderingProcessFooterPhoneWrapper = orderingProcessFooter.querySelector(".phone-wrapper");
    var orderingProcessFooterMailWrapper = orderingProcessFooter.querySelector(".mail-wrapper");
    if (cartProjectPhone) {
      var clonedPhone = cartProjectPhone.cloneNode(true);
      orderingProcessFooterPhoneWrapper.prepend(clonedPhone);
      var phoneElement = orderingProcessFooter.querySelector(".phone-wrapper .tel");
      if (phoneElement) {
        phoneElement.classList.add("project-phone");
        phoneElement.classList.remove("tel"); // Odstranění třídy 'tel'
      }
    }
    if (cartProjectMail) {
      var clonedMail = cartProjectMail.cloneNode(true);
      orderingProcessFooterMailWrapper.prepend(clonedMail);
      var mailElement = orderingProcessFooter.querySelector(".mail-wrapper .mail a");
      if (mailElement) {
        // mailElement.classList.add("project-email");
        mailElement.classList.remove("mail"); // Odstranění třídy 'mail'
      }
    }
  }
  if (shoptetPage === "cart") {
    var productsInCart = document.querySelectorAll('.cart-table tr.removeable[data-micro="cartItem"]');
    productsInCart.forEach(function (product) {
      var productSKU = product.getAttribute("data-micro-sku");
      var productName = product.querySelector(".p-name");
      if (productSKU && productName) {
        var productSKUEl = document.createElement("div");
        productSKUEl.classList.add("product-sku");
        productSKUEl.innerHTML = "K\xF3d: ".concat(productSKU);
        productName.appendChild(productSKUEl);
      }
    });
  }
  var products = document.querySelectorAll('tbody [data-micro="cartItem"]');
  if (products.length) {
    products.forEach(function (product) {
      var pQuantity = product.querySelector(".p-availability ");
      var pName = product.querySelector(".p-name");
      var mainLink = pName.querySelector(".main-link");
      if (pQuantity && pName && mainLink) {
        var quantityHtml = pQuantity.innerHTML;
        mainLink.insertAdjacentHTML("afterend", "<div class=\"availability\">".concat(quantityHtml, "</div>"));
      }
    });
  }
  var cartSummary = document.querySelector(".summary-wrapper");
  if (cartSummary) {
    var box = cartSummary.querySelector(".box");
    var upperSummaryReayl = document.querySelector(".upper-summary");
    if (box) {
      var upperSummary = document.createElement("div");
      upperSummary.classList.add("upper-summary");
      box.prepend(upperSummary);
      var cartContentSummary = document.querySelector(".cart-content .cart-summary");
      if (cartContentSummary) {
        var cartInner = document.querySelector(".cart-inner");
        cartSummary.appendChild(cartContentSummary);
        var h4 = cartContentSummary.querySelector("h4");

        // const discountInput = discountForm.querySelector('input')
        // discountInput.placeholder = 'Vložte kód'
        var discountForm = document.querySelector(".discount-coupon");
        if (h4) {
          var _extraGiftTitles$find;
          upperSummary.prepend(h4);
          h4.innerHTML = (_extraGiftTitles$find = extraGiftTitles.find(function (item) {
            return item.language === shoptetLang;
          })) === null || _extraGiftTitles$find === void 0 ? void 0 : _extraGiftTitles$find.text;
          if (!cartContentSummary.querySelector(".discount-coupon")) {
            h4.style.display = "none";
          }

          // Přesunutí discountForm za h4
          if (discountForm) {
            h4.insertAdjacentElement("afterend", discountForm);
          }
        }
        if (cartContentSummary.querySelector(".discount-coupon .applied-coupon")) {
          var discountCoupon = cartContentSummary.querySelector(".discount-coupon");
          h4.classList.add("active");
          discountCoupon.classList.add("active");
        }
        var button = document.querySelector(".discount-coupon button");
        if (button) {
          button.innerHTML = "Uplatnit"; //jazyk
        }
        var freeGift = cartContentSummary.querySelector(".free-gift");
        if (freeGift) {
          var h4Gift = document.createElement("h4");
          h4Gift.innerHTML = "Dárek";
          box.insertBefore(freeGift, upperSummary);
          freeGift.prepend(h4Gift);
        }
      }
      var priceHolder = document.createElement("div");
      priceHolder.classList.add("price-holder");
      upperSummary.appendChild(priceHolder);

      // if (totalSaved > 0) {
      // 	const saveHolder = document.createElement('span');
      // 	saveHolder.classList.add('save-holder');
      // 	const totalSavedActualCurrency = totalSaved.ShoptetFormatAsCurrency();
      // 	saveHolder.innerHTML = `Ušetříte: ${totalSavedActualCurrency}`;
      // 	priceHolder.appendChild(saveHolder);
      // }

      var priceWrapper = cartSummary.querySelector(".price-wrapper");
      if (priceWrapper) {
        priceHolder.appendChild(priceWrapper);
      }
      var shipping = document.querySelector(".extra.delivery");
      if (shipping) {
        // upperSummary.insertAdjacentElement('afterend', shipping)
        // cartSummary.prepend(shipping)
      }
    }
  }
  // const discountForm = document.querySelector('.discount-coupon')
  // const summaryWrapper = document.querySelector('.upper-summary')
  // if (discountForm && summaryWrapper) {
  // 	summaryWrapper.prepend(discountForm)
  // 	// const discountInput = discountForm.querySelector('input')
  // 	// discountInput.placeholder = 'Vložte kód'
  // }
  var nextStepH = document.querySelector(".next-step");
  if (nextStepH) {
    var _upperSummary = document.querySelector(".upper-summary");
    if (_upperSummary) {
      _upperSummary.appendChild(nextStepH);
    }
  }
  if (document.querySelector("body").classList.contains("id--9")) {
    var cartH2 = document.createElement("h2");
    var h2 = document.querySelector(".cart-row .col-md-8 h2");
    if (cartH2 && !h2) {
      var _itemsCartTitle$find;
      cartH2.innerHTML = (_itemsCartTitle$find = itemsCartTitle.find(function (item) {
        return item.language === shoptetLang;
      })) === null || _itemsCartTitle$find === void 0 ? void 0 : _itemsCartTitle$find.text;
      var row = document.querySelector(".cart-row .col-md-8 .cart-content");
      if (row) {
        row.insertBefore(cartH2, row.firstChild);
      }
    }
  }
  if (document.querySelector("body").classList.contains("id--16")) {
    var stepBack = document.querySelector(".next-step-back");
    var basicInformations = document.querySelector("#select-country-payment");
    if (stepBack) {
      var stepBackTextObj = window.stepBackText.find(function (item) {
        return item.language === shoptetLang;
      }) || window.stepBackText[0];
      stepBack.innerText = stepBackTextObj.text;
      stepBack.classList.add("back-to-cart");
      if (basicInformations) {
        basicInformations.insertAdjacentElement("afterend", stepBack);
      }
    }
    var checkoutContent = document.querySelector("#checkoutContent");
    if (checkoutContent && !document.querySelector(".back-homepage")) {
      var backHomepageObj = window.backHomepageBtn.find(function (item) {
        return item.language === shoptetLang;
      }) || window.backHomepageBtn[0];
      var backHomepageLink = document.createElement("a");
      backHomepageLink.className = "btn next-step-back back-homepage";
      backHomepageLink.href = backHomepageObj.url;
      backHomepageLink.innerText = backHomepageObj.text;
      if (window.innerWidth >= 768) {
        checkoutContent.appendChild(backHomepageLink);
      } else {
        var _cartRow = document.querySelector(".cart-inner .cart-row");
        if (_cartRow) {
          _cartRow.appendChild(backHomepageLink);
        }
      }
    }
    var shippingTitle = document.querySelector(".co-delivery-method > h4");
    if (shippingTitle) {
      var shippingTitleObj = window.shippingTitle.find(function (item) {
        return item.language === shoptetLang;
      }) || window.shippingTitle[0];
      shippingTitle.innerHTML = shippingTitleObj.text;
    }
    var deliveryTitle = document.querySelector(".co-payment-method > h4");
    if (deliveryTitle) {
      var paymentTitleObj = window.paymentTitle.find(function (item) {
        return item.language === shoptetLang;
      }) || window.paymentTitle[0];
      deliveryTitle.innerHTML = paymentTitleObj.text;
    }
  }
  if (document.querySelector("body").classList.contains("id--17")) {
    var coInformation = document.querySelector(".co-contact-information");
    var loginWrapper = document.querySelector(".co-contact-information > .form-group");
    if (loginWrapper && coInformation) {
      loginWrapper.classList.add("login-helper");
      var loginButton = document.querySelector("a.btn.btn-secondary");
      if (loginButton) {
        loginButton.classList.add("btn-primary", "login-button");
        loginButton.classList.remove("btn-secondary");
      } else {
        loginWrapper.classList.add("no-btn");
      }
      var _stepBack = document.querySelector(".next-step-back");
      if (_stepBack) {
        var _stepBackTextObj = window.stepBackToShippingPayment.find(function (item) {
          return item.language === shoptetLang;
        }) || window.stepBackToShippingPayment[0];
        _stepBack.innerText = _stepBackTextObj.text;
        loginWrapper.prepend(_stepBack);
      }
      coInformation.prepend(loginWrapper);
    }
    var _checkoutContent = document.querySelector("#checkoutContent");
    if (_checkoutContent && !document.querySelector(".back-homepage")) {
      var _backHomepageObj = window.backHomepageBtn.find(function (item) {
        return item.language === shoptetLang;
      }) || window.backHomepageBtn[0];
      var _backHomepageLink = document.createElement("a");
      _backHomepageLink.className = "btn next-step-back back-homepage";
      _backHomepageLink.href = _backHomepageObj.url;
      _backHomepageLink.innerText = _backHomepageObj.text;
      if (window.innerWidth >= 768) {
        _checkoutContent.appendChild(_backHomepageLink);
      } else {
        var _cartRow2 = document.querySelector(".cart-inner .cart-row");
        if (_cartRow2) {
          _cartRow2.appendChild(_backHomepageLink);
        }
      }
    }
  }
  // if (document.querySelector("body").classList.contains("id--16")) {
  //   const deliveryMethods = document.querySelector(".co-delivery-method");
  //   if (deliveryMethods) {
  //     const allMethods = deliveryMethods.querySelectorAll(
  //       "[data-testid='shippingMethod']"
  //     );
  //     if (allMethods.length > 6) {
  //       for (let i = 2; i < allMethods.length; i++) {
  //         allMethods[i].classList.add("hidden");
  //       }

  //       const btnHolder = document.createElement("div");
  //       btnHolder.className = "btn-holder";

  //       const showMoreBtn = document.createElement("a");
  //       showMoreBtn.className = "btn btn-secondary";
  //       showMoreBtn.textContent = "Zobraziť viac";
  //       if (shoptetLang === "cz") {
  //         showMoreBtn.textContent = "Zobrazit více";
  //       }
  //       btnHolder.appendChild(showMoreBtn);
  //       deliveryMethods.appendChild(btnHolder);

  //       showMoreBtn.addEventListener("click", () => {
  //         for (let i = 2; i < allMethods.length; i++) {
  //           allMethods[i].classList.remove("hidden");
  //         }
  //         btnHolder.style.display = "none";
  //       });
  //     }
  //     const h4 = deliveryMethods.querySelector("h4");
  //     if (h4) {
  //       const h4Text = cartDeliveryTitle.find(
  //         (item) => item.language === shoptetLang
  //       ).text;
  //       if (h4Text) {
  //         h4.innerHTML = h4Text;
  //       }
  //     }
  //   }
  // }
  // const button = document.querySelector(".show-related"); // Vyberte tlačítko, které chcete upravit

  // if (button) {
  //   // Odstranění závorek a jejich obsahu z textu tlačítka
  //   button.textContent = button.textContent
  //     .replace(/\s*\(.*?\)\s*/g, "")
  //     .trim();
  // }
  var relatedProducts = document.querySelectorAll(".cart-related-product");
  relatedProducts.forEach(function (product) {
    var availability = product.querySelector(".cart-related-availability span");
    var priceFinal = product.querySelector(".cart-related-button .price.price-final");
    if (availability && availability.textContent.trim() === "Momentálně nedostupné") {
      // Schování .cart-related-availability
      availability.parentElement.remove();

      // Schování .cart-related-button .price.price-final
      if (priceFinal) {
        priceFinal.remove();
      }
    }
  });
};
if (document.body.classList.contains("ordering-process")) {
  handleCart();
  document.addEventListener("ShoptetDOMCartContentLoaded", handleCart);
}

// POPUP CART
document.addEventListener("ShoptetDOMCartContentLoaded", function () {
  var currencyLabel = dataLayer[0].shoptet.currencyInfo.symbol;
  var cartWidgetProducts = document.querySelectorAll(".cart-widget-product");
  if (cartWidgetProducts.length) {
    cartWidgetProducts.forEach(function (product) {
      var productPrice = product.querySelector('span[data-testid="cartWidgetProductPrice"]');
      if (productPrice) {
        var priceEl = document.createElement("div");
        priceEl.classList.add("cart-widget-product-price");
        priceEl.appendChild(productPrice);
        product.appendChild(priceEl);
        var productSKU = product.getAttribute("data-micro-sku");
        if (productSKU) {
          var productSinglePrice = dataLayer[0].shoptet.cart.filter(function (item) {
            return item.code === productSKU;
          })[0].priceWithVat;
          var productSinglePriceEl = document.createElement("div");
          productSinglePriceEl.classList.add("cart-widget-product-single-price");
          productSinglePriceEl.innerHTML = "".concat(productSinglePrice, " ").concat(currencyLabel, " / ks"); //jazyk
          priceEl.appendChild(productSinglePriceEl);
        }
      }
    });
  }
  var popupCartSummary = document.querySelector(".popup-cart-summary");
  if (!popupCartSummary) {
    popupCartSummary = document.createElement("div");
    popupCartSummary.classList.add("popup-cart-summary");
  }
  var popupCartSummaryPriveVAT = String(dataLayer[0].shoptet.cartInfo.getNoBillingShippingPrice.withVat);
  if (popupCartSummaryPriveVAT.includes(".")) {
    popupCartSummaryPriveVAT = popupCartSummaryPriveVAT.replace(".", ",");
  }
  var popupCartSummaryPriceNoVAT = String(dataLayer[0].shoptet.cartInfo.getNoBillingShippingPrice.withoutVat);
  if (popupCartSummaryPriceNoVAT.includes(".")) {
    popupCartSummaryPriceNoVAT = popupCartSummaryPriceNoVAT.replace(".", ",");
  }
  // console.log(popupCartSummaryPriceNoVAT)

  // Převod řetězce na číslo
  var popupCartSummaryPriceNoVATNumber = parseFloat(popupCartSummaryPriceNoVAT.replace(",", "."));
  popupCartSummary.innerHTML = "\n\t  <div class=\"popup-cart-summary-item\">\n\t\t  <strong class=\"popup-cart-summary-item-label\">Celkem za zbo\u017E\xED</strong>\n\t\t  <strong class=\"popup-cart-summary-item-value\">".concat(popupCartSummaryPriveVAT, " ").concat(currencyLabel, "</strong>\n\t  </div>\n\t  <div class=\"popup-cart-summary-item\">\n\t\t  <span class=\"popup-cart-summary-item-label\">Celkem bez DPH</span>\n\t\t  <span class=\"popup-cart-summary-item-value\">").concat(Math.round(popupCartSummaryPriceNoVATNumber), " ").concat(currencyLabel, "</span>\n\t  </div>\n  "); //jazyk
  var cartWidgetProductsWrapper = document.querySelector(".cart-widget-products");
  if (cartWidgetProductsWrapper) cartWidgetProductsWrapper.parentElement.insertBefore(popupCartSummary, cartWidgetProductsWrapper.nextElementSibling);
  var cartWidgetButton = document.querySelector(".cart-widget-button");
  var cartWidgetInner = document.querySelector(".cart-widget-inner");
  if (cartWidgetButton && cartWidgetInner) cartWidgetInner.appendChild(cartWidgetButton.cloneNode(true));
  var cartWidgetShipping = document.querySelector(".cart-free-shipping");
  if (cartWidgetShipping) {
    var priceLeftToFreeShipping = dataLayer[0].shoptet.cartInfo.leftToFreeShipping.priceLeft;
    if (priceLeftToFreeShipping > 0) {
      var freeShippingBar = document.createElement("div");
      var freeShippingValue = document.createElement("div");
      freeShippingBar.classList.add("price-range");
      freeShippingBar.appendChild(freeShippingValue);
      popupCartSummaryPriveVAT = Number(popupCartSummaryPriveVAT);
      freeShippingValue.style.width = "".concat(100 - 100 * priceLeftToFreeShipping / (priceLeftToFreeShipping + popupCartSummaryPriveVAT), "%");
      cartWidgetShipping.appendChild(freeShippingBar);
      var shippingWidgetStrongs = cartWidgetShipping.querySelectorAll("strong");
      if (shippingWidgetStrongs.length) {
        shippingWidgetStrongs.forEach(function (strong) {
          if (strong.innerText.includes("ZDARMA")) strong.classList.add("free-shipping-strong"); //jazyk
        });
      }
    }
  }
});
// document.addEventListener('ShoptetCartUpdated', () => {
// 	const popupCartSummary = document.querySelector('.popup-cart-summary')
// 	console.log(popupCartSummary)
// 	// const popupCartSummaryPriveVAT = dataLayer[0].shoptet.cartInfo.getNoBillingShippingPrice.withVat
// 	// const popupCartSummaryPriceNoVAT = dataLayer[0].shoptet.cartInfo.getNoBillingShippingPrice.withoutVat
// 	// const popupCartPriceVAT = popupCartSummary.querySelector('strong.popup-cart-summary-item-value')
// 	// const popupCartPriceNoVAT = popupCartSummary.querySelector('span.popup-cart-summary-item-value')
// 	// popupCartPriceVAT.innerHTML = `${popupCartSummaryPriveVAT} ${currencyLabel}`
// 	// popupCartPriceNoVAT.innerHTML = `${Math.round(popupCartSummaryPriceNoVAT)} ${currencyLabel}`
// })

// ADVANCED ORDER
document.addEventListener("ShoptetDOMAdvancedOrderLoaded", function () {
  var advancedOrder = document.querySelector(".advanced-order");
  var aoTop = document.createElement("div");
  aoTop.classList.add("ao-top");
  advancedOrder.prepend(aoTop);
  var aoTitle = advancedOrder.querySelector(".h1");
  if (aoTitle) aoTop.appendChild(aoTitle);
  var aoProduct = advancedOrder.querySelector(".ao-product") || advancedOrder.querySelector(".h2");
  if (aoProduct) aoTop.appendChild(aoProduct);
  var cboxClose = document.querySelector("#cboxClose");
  if (cboxClose) {
    cboxClose.innerText = "Zavřít"; //jazyk
    cboxClose.id = "cboxClose";
    cboxClose.classList.add("close");
    // aoTop.appendChild(cboxClose)
  }
  var continueShoppingBtn = document.createElement("button");
  continueShoppingBtn.classList.add("btn", "black-border");
  continueShoppingBtn.innerText = "Zavřít"; //jazyk
  continueShoppingBtn.addEventListener("click", function () {
    shoptet.modal.close();
  });
  var extraStep = advancedOrder.querySelector(".extra.step");
  if (extraStep) extraStep.prepend(continueShoppingBtn);
  var deliveryStrongs = advancedOrder.querySelectorAll(".extra.delivery strong");
  if (deliveryStrongs.length) {
    deliveryStrongs.forEach(function (strong) {
      if (strong.innerText === "ZDARMA") strong.classList.add("for-free"); //jazyk
    });
  }
  var suggestion = advancedOrder.querySelector(".advanced-order-suggestion");
  if (suggestion) {
    suggestion.innerHTML = "Můžete ještě přidat ...";
  }
  var img = advancedOrder.querySelector(".ao-product .ao-image img");
  if (img) {
    img.src = img.getAttribute("data-src");
  }
  var advancedOrderProducts = $(".colorbox-html-content #products");
  if (advancedOrderProducts.length) {
    advancedOrderProducts.slick(productsSlickSettings);
  }
});

// EMPTY CART

var handleEmptyCart = function handleEmptyCart() {
  var emptyCart = document.querySelector(".cart-inner.cart-empty");
  if (!emptyCart) return;
  document.body.classList.add("custom-empty-cart");
  var cartHeading = emptyCart.querySelector(".cart-heading");
  var cartText = document.createElement("p");
  cartText.classList.add("narrow-custom", "text-center");
  var prazdnyKosikPerexText = window.prazdnyKosikPerex.find(function (item) {
    return item.language === shoptetLang;
  }).text;
  cartText.innerText = prazdnyKosikPerexText;
  if (cartHeading) {
    var prazdnyKosikNadpisText = window.prazdnyKosikNadpis.find(function (item) {
      return item.language === shoptetLang;
    }).text;
    cartHeading.innerText = prazdnyKosikNadpisText;
    cartHeading.classList.add("homepage-group-title");
    cartHeading.parentElement.insertBefore(cartText, cartHeading.nextElementSibling);
  }
  var cartEmail = emptyCart.querySelector(".mail");
  var cartPhone = emptyCart.querySelector(".tel");
  var cartContact = document.createElement("ul");
  cartContact.classList.add("cart-contact", "contact-box");
  if (cartPhone) {
    cartContact.appendChild(cartPhone.parentElement);
  }
  if (cartEmail) {
    var emailPerexText = window.emailPerexText.find(function (item) {
      return item.language === shoptetLang;
    }).text;
    var emailPerex = document.createElement("span");
    emailPerex.innerText = emailPerexText;
    cartEmail.parentElement.insertBefore(emailPerex, cartEmail.nextElementSibling);
    cartContact.appendChild(cartEmail.parentElement);
  }
  emptyCart.appendChild(cartContact);

  // Přidání btn holder s dvěma odkazy
  var btnHolder = document.createElement("div");
  btnHolder.classList.add("btn-holder", "text-center");
  var primaryButton = window.primaryButtonText.find(function (item) {
    return item.language === shoptetLang;
  });
  var secondaryButton = window.secondaryButtonText.find(function (item) {
    return item.language === shoptetLang;
  });
  btnHolder.innerHTML = "\n\t\t  <a href=\"".concat(primaryButton.url, "\" class=\"btn btn-primary\">").concat(primaryButton.text, "</a>\n\t\t  <a href=\"").concat(secondaryButton.url, "\" class=\"btn secondary\">").concat(secondaryButton.text, "</a>\n\t  ");
  emptyCart.appendChild(btnHolder);
  var emptyCartHeader = document.querySelector(".cart-header-wrapper");
  if (emptyCartHeader) emptyCartHeader.remove();
};
var emptyCart = document.querySelector(".cart-inner.cart-empty");
if (emptyCart) handleEmptyCart();
document.addEventListener("ShoptetDOMCartContentLoaded", function () {
  if (!dataLayer[0].shoptet.cart.length) handleEmptyCart();
});
window.addEventListener("beforeunload", function (event) {
  window.sessionStorage.removeItem("openedFilters");
});

// const backToTop = document.querySelector('#back-to-top')
// if (backToTop) {
// 	backToTop.addEventListener('click', (e) => {
// 		e.preventDefault()
// 		window.scrollTo(0, 0)
// 	})
// }

var handleFooter = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var cookies, signature, mirandaMediaLink, title, footerHeadings, footerCategories, siteName, customFooter, customFooterContact, customFooterContactPlaceholder, footer, instagram, benefitsWrapper, _instagramTitle$find, h4, text, zastupce;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          // const socialIcons = document.querySelector('.footer-links-icons')
          // const contactBanner = document.querySelector('.custom-footer__contact')
          // if (socialIcons && contactBanner) contactBanner.appendChild(socialIcons)
          cookies = document.querySelector(".js-cookies-settings");
          if (cookies) {}
          signature = document.querySelector("#signature");
          if (signature) {
            mirandaMediaLink = "\n\t  <span>Created by </span>\n\t\t\t  <a class=\"company\" href=\"https://www.mirandamedia.cz/shoptetnamiru\" target=\"_blank\">\n\t\t\t\t  <img class=\"company__logo\" src=\"/user/documents/upload/Obrazky/miranda.svg\">\n\t\t\t\t  MirandaMedia Group s.r.o.\n\t\t\t  </a>\n\t\t<span> on the platform </span>\n\t\t  ";
            signature.insertAdjacentHTML("beforeend", mirandaMediaLink);
            title = signature.querySelector(".title");
            if (title) {
              title.innerHTML = '<img class="company__logo" src="/user/documents/upload/Obrazky/shoptet.png">';
            }
          }
          footerHeadings = document.querySelectorAll(".banner-wrapper > span > .block > h4");
          footerHeadings.forEach(function (heading) {
            heading.classList.add("clickable");
            heading.addEventListener("click", function () {
              heading.closest(".banner-wrapper").classList.toggle("active");
            });
          });
          footerCategories = document.querySelector(".custom-footer__categories > h4");
          if (footerCategories) {
            footerCategories.classList.add("clickable");
            footerCategories.addEventListener("click", function () {
              footerCategories.closest(".custom-footer__categories").classList.toggle("active");
            });
          }
          siteName = document.querySelector("#footer .site-name");
          customFooter = document.querySelector("#footer .custom-footer");
          if (customFooter) {
            customFooter.insertBefore(siteName, customFooter.firstChild);
          }
          customFooterContact = document.querySelector("#footer .custom-footer__contact");
          customFooterContactPlaceholder = document.querySelector("#footer .contacts-placeholder");
          if (customFooterContact && customFooterContactPlaceholder) {
            customFooterContactPlaceholder.append(customFooterContact);
          }

          // const footeSiteNameImg = document.querySelector("#footer .site-name img");
          // if (footeSiteNameImg) {
          //   console.log(footeSiteNameImg.src);
          //   setInterval(() => {
          //     footeSiteNameImg.src =
          //       "/user/documents/upload/newDesign/icons/logo-white.png";
          //   }, 1000);
          // }
          // const socialBanner = document.querySelector('.social-wrapper')
          // if (socialBanner) {
          // 	siteName.appendChild(socialBanner)
          // }
          footer = document.querySelector("#footer");
          instagram = document.querySelector(".custom-footer__instagram ");
          benefitsWrapper = document.querySelector(".benefitBanner");
          if (benefitsWrapper) {
            footer.insertAdjacentElement("beforebegin", benefitsWrapper);
          }
          if (instagram) {
            h4 = instagram.querySelector("h4");
            text = (_instagramTitle$find = instagramTitle.find(function (item) {
              return item.language === shoptetLang;
            })) === null || _instagramTitle$find === void 0 ? void 0 : _instagramTitle$find.text;
            if (h4 && text) h4.innerHTML = text;
            footer.insertAdjacentElement("beforebegin", instagram);
          }
          zastupce = document.querySelector(".zastupce");
          if (zastupce && footer) {
            footer.parentNode.insertBefore(zastupce, footer);
          }
        case 1:
          return _context.a(2);
      }
    }, _callee);
  }));
  return function handleFooter() {
    return _ref.apply(this, arguments);
  };
}();
handleFooter();

// const shoptetPage = dataLayer[0].shoptet.pageType
// const shoptetLang = dataLayer[0].shoptet.language

// const handleHomepageProducts = async () => {
// 	const productBlocks = document.querySelectorAll('.products-block');
// 	if (productBlocks.length > 0) {
// 		$(productBlocks[0]).slick(productsSlickSettings);
// 	}

// }
if (shoptetPage === "homepage") {
  var homePageSections = function homePageSections() {
    var body = document.querySelector("body");
    var insertAfterElement = document.querySelector(".before-carousel");
    var bannersRow = document.querySelector(".banners-row");
    var colBanner = bannersRow === null || bannersRow === void 0 ? void 0 : bannersRow.querySelector(".next-to-carousel-banners");
    var newBanners;
    if (colBanner) {
      newBanners = document.createElement("div");
      newBanners.classList.add("new-banners", "container");
      colBanner.classList.remove("col-sm-4");
      newBanners.appendChild(colBanner);
      if (insertAfterElement) {
        insertAfterElement.insertAdjacentElement("afterend", newBanners);
      } else if (bannersRow) {
        bannersRow.insertAdjacentElement("afterend", newBanners);
      }
    }
    var headingElements = document.querySelectorAll(".homepage-group-title");

    // Najdeme prvek pro 3. sekci (middle body bannery)
    var thirdInsertPoint = document.querySelector(".middle-banners-wrapper") || document.querySelector(".body-banners");
    var sections = [];
    headingElements.forEach(function (heading, index) {
      var splitClass = heading.className.split("homepage-products-heading-");
      if (splitClass.length > 1) {
        var headingNumber = splitClass[1].split(" ")[0];
        var productElement = document.querySelector(".homepage-products-".concat(headingNumber));
        if (productElement) {
          var section = document.createElement("section");
          section.classList.add("product-section", "product-section-".concat(headingNumber));
          if (index === 0) {
            section.classList.add("product-section-bg");
          }
          var container = document.createElement("div");
          container.classList.add("container");
          section.appendChild(container);
          container.appendChild(heading);
          container.appendChild(productElement);
          sections.push(section);
        }
      }
    });

    // Vkládání jednotlivých sekcí podle pravidel
    if (sections.length > 0) {
      var firstInsertPoint = insertAfterElement || bannersRow;

      // 1. sekce
      firstInsertPoint === null || firstInsertPoint === void 0 || firstInsertPoint.insertAdjacentElement("afterend", sections[0]);

      // 2. sekce
      if (sections[1] && newBanners) {
        newBanners.insertAdjacentElement("afterend", sections[1]);
      }

      // 3. sekce
      if (sections[2] && thirdInsertPoint) {
        thirdInsertPoint.insertAdjacentElement("afterend", sections[2]);
      }

      // Další sekce za předchozí
      for (var i = 3; i < sections.length; i++) {
        sections[i - 1].insertAdjacentElement("afterend", sections[i]);
      }
    }

    // Přesun benefit banneru
    var benefitBanner = document.querySelector(".benefitBanner");
    if (benefitBanner) {
      var _window$dataLayer;
      if (((_window$dataLayer = window.dataLayer) === null || _window$dataLayer === void 0 || (_window$dataLayer = _window$dataLayer[0]) === null || _window$dataLayer === void 0 || (_window$dataLayer = _window$dataLayer.shoptet) === null || _window$dataLayer === void 0 ? void 0 : _window$dataLayer.pageType) === "homepage") {
        var firstProductsBlock = document.querySelector(".banners-row");
        if (firstProductsBlock) {
          firstProductsBlock.appendChild(benefitBanner);
        }
      }
    }
  };
  var productsSelectors = function productsSelectors() {
    var allProducts = document.querySelectorAll(".products");
    if (!allProducts) return;
    var productsIDs = [];
    var _iterator3 = _createForOfIteratorHelper(allProducts),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _products = _step3.value;
        // if (index === 0) continue;

        productsIDs.push("#".concat(_products.id));
      }
      // console.log(productsIDs)
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return productsIDs;
  };
  swiperize({
    containers: _toConsumableArray(productsSelectors()),
    slide: [swiperize.spreadClass(productsSelectors(), ".product")],
    customOptions: {
      fullscreen: false,
      infinity: true,
      dots: true,
      arrows: true,
      scrollbar: false,
      lazyPrevNext: true,
      helper: true // Přidána nová možnost
    },
    swiperOptions: {
      direction: "horizontal",
      speed: 800,
      slidesPerView: 1.4,
      spaceBetween: 16,
      breakpoints: {
        1200: {
          slidesPerView: 6,
          spaceBetween: 24
        },
        1100: {
          slidesPerView: 5,
          spaceBetween: 24
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 24
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 16
        }
      }
    }
  });
  homePageSections();
  if (window.innerWidth >= 768) {
    var handleSectionLinks = function handleSectionLinks() {
      var productSections = document.querySelectorAll(".product-section");
      productSections.forEach(function (section, index) {
        var container = section.querySelector(".container");
        var heading = container.querySelector(".homepage-group-title");
        var languageGroup = links.find(function (group) {
          return group.language === shoptetLang;
        });
        if (languageGroup) {
          var link = languageGroup.links.find(function (link) {
            return link.index === index;
          });
          if (link) {
            var button = document.createElement("a");
            button.classList.add("btn", "btn-primary");
            button.href = link.url;
            button.textContent = "".concat(link.name);
            if (heading) {
              // Vytvoření obalovacího divu
              var _wrapper = document.createElement("div");
              _wrapper.classList.add("upper");

              // Přesun nadpisu do wrapperu
              _wrapper.appendChild(heading);
              _wrapper.appendChild(button);

              // Vložení wrapperu na začátek kontejneru
              container.insertAdjacentElement("afterbegin", _wrapper);
            } else {
              // Pokud heading neexistuje, vlož tlačítko rovnou
              container.appendChild(button);
            }
          }
        }
      });
    };

    // Volání funkce
    handleSectionLinks();
  }
  document.addEventListener("click", function (e) {
    var h4 = e.target.closest(".single-faq > h4");
    if (h4) {
      var singleFaq = h4.closest(".single-faq");
      if (singleFaq) {
        singleFaq.classList.toggle("active");
      }
    }
  });
}
function addEmptySlides(selector, rules) {
  var swiperWrapper = document.querySelector("".concat(selector, " .swiper-wrapper"));
  if (swiperWrapper) {
    rules.sort(function (a, b) {
      return b.width - a.width;
    });
    var applicableRule = rules.find(function (rule) {
      return window.innerWidth > rule.width;
    });
    if (applicableRule) {
      for (var i = 0; i < applicableRule.emptySlidesCount; i++) {
        var emptySlide = document.createElement("div");
        emptySlide.classList.add("swiper-slide");
        swiperWrapper.appendChild(emptySlide);
      }
    }
  }
}

// ANIMACE
var target = document.querySelectorAll(".products-block");
var target2 = document.querySelector(".top-categories-grid");
function handleIntersection(entries) {
  entries.map(function (entry, index) {
    entry.target.style.removeProperty("--animation-delay");
    entry.target.setAttribute("style", entry.target.getAttribute("style") ? entry.target.getAttribute("style") + "--animation-delay: ".concat(index) : "--animation-delay: ".concat(index));
    // entry.target.setAttribute('animation-delay', `${index}`)
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}
var observer = new IntersectionObserver(handleIntersection);
var observer2 = new IntersectionObserver(handleIntersection);
if (target.length) {
  target.forEach(function (item) {
    item.classList.add("animation");
    var subtargets = item.querySelectorAll(".product");
    subtargets.forEach(function (subtarget) {
      observer.observe(subtarget);
    });
  });
}
document.addEventListener("ShoptetDOMPageMoreProductsLoaded", function () {
  if (target.length) {
    target.forEach(function (item) {
      item.classList.add("animation");
      var subtargets = item.querySelectorAll(".product");
      subtargets.forEach(function (subtarget) {
        observer.observe(subtarget);
      });
    });
  }
});
if (target2) {
  target2.classList.add("animation");
  var subtargets = target2.querySelectorAll(".category");
  subtargets.forEach(function (subtarget) {
    observer2.observe(subtarget);
  });
}

// const handleCustomDetail = () => {
// 	// Najít .basic-description a obalit obsah divem .content-wrapper
// 	const basicDescription = document.querySelector('.basic-description')
// 	if (basicDescription) {
// 		const contentWrapper = document.createElement('div')
// 		contentWrapper.classList.add('content-wrapper')

// 		while (basicDescription.firstChild) {
// 			contentWrapper.appendChild(basicDescription.firstChild)
// 		}

// 		// Najít předposlední .p-thumbnail img a vytvořit img element
// 		const thumbnails = document.querySelectorAll('.p-thumbnail img')
// 		if (thumbnails.length) {
// 			const img = document.createElement('img')
// 			const imgSrc = thumbnails[thumbnails.length - 2].getAttribute('data-src')
// 			const origSrc = imgSrc.replace('/related/', '/orig/')
// 			img.src = origSrc
// 			img.classList.add('side-detail-img')
// 			basicDescription.appendChild(img)
// 		}

// 		basicDescription.appendChild(contentWrapper)
// 	}

// 	// Najít .extended-description .detail-parameters a přidat třídu .content-wrapper

// 	const detailParameters = document.querySelector('.extended-description')
// 	if (detailParameters) {
// 		const contentWrapper = document.createElement('div')
// 		contentWrapper.classList.add('content-wrapper')

// 		while (detailParameters.firstChild) {
// 			contentWrapper.appendChild(detailParameters.firstChild)
// 		}

// 		// Najít první h3 a přepsat jeho innerHTML
// 		const firstH3 = detailParameters.querySelector('h3')
// 		if (firstH3) {
// 			const specificationText = window.specificationTabText.find(
// 				item => item.language === shoptetLang
// 			).text
// 			firstH3.innerHTML = specificationText
// 		}

// 		// Najít poslední .p-thumbnail img a vytvořit img element
// 		const thumbnails = document.querySelectorAll('.p-thumbnail img')
// 		if (thumbnails.length) {
// 			const img = document.createElement('img')
// 			const imgSrc = thumbnails[thumbnails.length - 1].getAttribute('data-src')
// 			const origSrc = imgSrc.replace('/related/', '/orig/')
// 			img.src = origSrc
// 			img.classList.add('side-detail-img')
// 			detailParameters.appendChild(img)
// 		}

// 		detailParameters.appendChild(contentWrapper)
// 	}
// 	const firstH3 = document.querySelector('.extended-description h3')
// 	if (firstH3) {
// 		const specificationText = window.specificationTabText.find(
// 			item => item.language === shoptetLang
// 		).text
// 		firstH3.innerHTML = specificationText
// 	}
// 	const productVideos = document.querySelector('#productVideos')
// 	if (productVideos) {
// 		const videoText = basicDescription.querySelector('.video-popis')
// 		const heading = productVideos.querySelector('h3') // Předpokládám, že nadpis je h3, upravte podle potřeby
// 		const iframe = productVideos.querySelector('iframe')
// 		if (iframe) {
// 			iframe.classList.add('side-detail-img')
// 		}
// 		if (heading) {
// 			const contentWrapper = document.createElement('div')
// 			contentWrapper.classList.add('content-wrapper')

// 			contentWrapper.appendChild(heading)

// 			if (videoText) {
// 				contentWrapper.appendChild(videoText)
// 			}

// 			productVideos.insertBefore(contentWrapper, productVideos.firstChild)
// 		}
// 	}
// }

// if (shoptetPage === 'productDetail') handleCustomDetail()

if (window.innerWidth < 768) {
  var topNavigationBarMenu = document.querySelector(".top-navigation-bar-menu");
  var navigationIn = document.querySelector("#navigation .navigation-in");
  if (topNavigationBarMenu && navigationIn) {
    navigationIn.appendChild(topNavigationBarMenu);
  }
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

// Přidání event listeneru pomocí vaší funkce `on`
on("click", ".shp-tab-link", function (e) {
  var target = this.getAttribute("href");
  if (document.querySelector(target)) {
    smoothScrollTo(target, 200);
  }
});
if (shoptetPage === "homepage") {
  document.addEventListener("DOMContentLoaded", function () {
    var swiper1 = new Swiper(".swiper-partners", {
      slidesPerView: 1.8,
      spaceBetween: 0,
      speed: 800,
      loop: true,
      watchSlidesProgress: true,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false
      },
      breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween: 24
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 24
        },
        1124: {
          slidesPerView: 5,
          spaceBetween: 24
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 24
        }
      },
      navigation: {
        nextEl: ".partners-next",
        prevEl: ".partners-prev"
      },
      pagination: {
        el: ".partners-pagination",
        clickable: true
      },
      on: {
        init: function init() {
          this.el.style.opacity = "1";
        }
      }
    });
  });
}

// document.addEventListener('DOMContentLoaded', function () {
//   const amountInput = document.querySelector('input[name="amount"]');
//   if (amountInput) {
//     amountInput.step = '0.01';
//     amountInput.min = '0.01';
//     amountInput.setAttribute("data-decimals", "2");
//   }
//   shoptet.config.documentPriceDecimalPlaces = "2";
// });

// setTimeout(() => {
document.addEventListener("DOMContentLoaded", function () {
  var productsSmallNew = document.querySelectorAll(".product");
  if (productsSmallNew.length > 0) {
    productsSmallNew.forEach(function (product) {
      var addToCartButton = product.querySelector(".add-to-cart-button");
      if (addToCartButton) {
        var form = product.querySelector("form.pr-action");
        var alreadyExists = form === null || form === void 0 ? void 0 : form.querySelector(".quantity");
        if (form && !alreadyExists) {
          var updateHiddenInputValue = function updateHiddenInputValue(value) {
            var hiddenInput = form.querySelector('input[type="hidden"][name="amount"]');
            if (hiddenInput) {
              hiddenInput.value = value;
            }
          };
          var valueWrapper = document.createElement("div");
          valueWrapper.classList.add("quantity");
          form.insertBefore(valueWrapper, form.firstChild);
          var decrease = document.createElement("div");
          decrease.classList.add("decrease-2");
          var input = document.createElement("input");
          input.setAttribute("type", "number");
          input.setAttribute("value", "1");
          input.classList.add("amount");
          input.setAttribute("min", "1");
          input.setAttribute("autocomplete", "off");
          input.classList.add("amount-input");
          var increase = document.createElement("div");
          increase.classList.add("increase-2");
          valueWrapper.appendChild(decrease);
          valueWrapper.appendChild(input);
          valueWrapper.appendChild(increase);

          // Vložit na úplně první místo ve formu

          // Přidání posluchačů pro konkrétní tlačítka tohoto produktu
          increase.addEventListener("click", function (e) {
            console.log("Increase clicked");
            e.preventDefault();
            input.value = parseInt(input.value) + 1;
            updateHiddenInputValue(input.value);
          });
          decrease.addEventListener("click", function (e) {
            e.preventDefault();
            input.value = parseInt(input.value) - 1;
            if (parseInt(input.value) < 1) {
              input.value = 1;
            }
            updateHiddenInputValue(input.value);
          });
        }
      }
    });
  }
});
// }, 1000);

if (shoptetPage === "productDetail") {
  var endpoint = function endpoint(baseURL, params) {
    var url = new URL(baseURL);
    for (var i = 0; i < params.length; i += 2) {
      url.searchParams.append(params[i], params[i + 1]);
    }
    return url.toString();
  };
  var createVariant = function createVariant(data) {
    var variant = document.createElement("a");
    variant.classList.add("variant");
    variant.href = data.url;

    // Nastav barvu dostupnosti pokud je "Skladem"
    var availabilityStyle = "";
    if (data.availability && data.availability.trim().toLowerCase() === "skladem") {
      availabilityStyle = 'style="color: #39c09f"';
    }
    variant.innerHTML = "\n          <div class=\"variant-image\">\n              <img src=\"".concat(data.image, "\">\n          </div>\n          <span class=\"variant-name\">").concat(data.name, "</span>\n          <span class=\"variant-availability\" ").concat(availabilityStyle, ">").concat(data.availability, "</span>\n          <span class=\"variant-price\">").concat(data.price, "</span>\n      ");
    return variant;
  };
  var fetchVariants = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var variantsEndpoint, response, data, variantsWrapper, variantsBlockFragment, _iterator4, _step4, variantData, variant, infoWrapper, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            variantsEndpoint = endpoint("https://renomag-stage.axfone.eu/variants", ["guid", getShoptetDataLayer("product").guid]);
            _context2.n = 1;
            return fetch(variantsEndpoint);
          case 1:
            response = _context2.v;
            if (response.ok) {
              _context2.n = 2;
              break;
            }
            throw new Error("Failed to fetch variants");
          case 2:
            _context2.n = 3;
            return response.json();
          case 3:
            data = _context2.v;
            variantsWrapper = document.createElement("div");
            variantsWrapper.classList.add("variants-wrapper");
            variantsBlockFragment = document.createDocumentFragment();
            _iterator4 = _createForOfIteratorHelper(data.data);
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                variantData = _step4.value;
                variant = createVariant({
                  url: variantData.url,
                  image: variantData.image,
                  name: variantData.name,
                  // ← přidej tento řádek
                  availability: variantData.availability,
                  price: variantData.price_with_vat
                });
                variantsBlockFragment.appendChild(variant);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
            variantsWrapper.appendChild(variantsBlockFragment);
            infoWrapper = document.querySelector(".p-info-wrapper");
            infoWrapper.appendChild(variantsWrapper);
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t = _context2.v;
            console.error("Error fetching product variants:", _t);
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 4]]);
    }));
    return function fetchVariants() {
      return _ref2.apply(this, arguments);
    };
  }();
  fetchVariants();
}
/******/ })()
;
//# sourceMappingURL=js-script.js.map