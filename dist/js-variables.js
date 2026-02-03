/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*****************************!*\
  !*** ./src/js/variables.js ***!
  \*****************************/
const shoptetPage = dataLayer[0].shoptet.pageType;
const shoptetLang = dataLayer[0].shoptet.language;
function moveElement(elementSelector, targetSelectors) {
  const element = document.querySelector(elementSelector);
  const footer = document.querySelector('footer');
  if (!element) {
    console.error(`Prvek ${elementSelector} nebyl nalezen`);
    return;
  }
  let moved = false;
  for (const targetSelector of targetSelectors) {
    const target = document.querySelector(targetSelector);
    if (target) {
      target.insertAdjacentElement('afterend', element);
      moved = true;
      break;
    }
  }
  if (!moved && footer) {
    footer.insertAdjacentElement('beforebegin', element);
  }
}
function on(eventType, selector, callback) {
  document.addEventListener(eventType, function (e) {
    let targetElement = e.target;
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