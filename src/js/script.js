// -- Split menu -- //
function moveElement(elementSelector, targetSelectors) {
  const element = document.querySelector(elementSelector);
  const footer = document.querySelector("footer");

  if (!element) {
    console.error(`Prvek ${elementSelector} nebyl nalezen`);
    return;
  }

  let moved = false;

  for (const targetSelector of targetSelectors) {
    const target = document.querySelector(targetSelector);
    if (target) {
      target.insertAdjacentElement("afterend", element);
      moved = true;
      break;
    }
  }

  if (!moved && footer) {
    footer.insertAdjacentElement("beforebegin", element);
  }
}

//On funkce, na kliknutí a zavolání funkce
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

const splitMenu = () => {
    const menuWrapper = document.querySelector("#navigation .navigation-in");
    const menuHelper = document.querySelector(".menu-helper");
    
    if (!menuWrapper || !menuHelper) return;

    // requestAnimationFrame je pro výpočty layoutu lepší než setTimeout
    window.requestAnimationFrame(() => {
        const menuItems = menuWrapper.querySelectorAll(".menu-level-1 > li:not(.appended-category)");
        const menuWrapperStyle = window.getComputedStyle(menuWrapper);
        const availableWidth = menuWrapper.clientWidth - parseFloat(menuWrapperStyle.paddingRight);
        
        let hasVisibleInHelper = false;

        menuItems.forEach((item) => {
            const offsetRight = item.offsetLeft + item.offsetWidth;
            
            // Najdeme odpovídající položku v helperu (priorita ID, pak třída)
            const itemInHelper = item.id === "nav-manufacturers"
                ? menuHelper.querySelector("#nav-manufacturers")
                : menuHelper.querySelector(`.${item.classList[0]}`);

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
        const itemsToDisplayInHelper = menuHelper.querySelector(".menu-level-1 > li:not(.splitted):not(.appended-category)");
        
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
if (window.shoptet?.menu) {
    shoptet.menu.splitMenu = splitMenu;
}

// Zajištění, že se menu přepočítá při změně velikosti okna
window.addEventListener('resize', debounce(splitMenu, 150));
// CAROUSEL
const handleCarousel = () => {
  const carousel = document.querySelector("#carousel .carousel-inner");
  if (carousel) {
    let observer = new MutationObserver((mutationList) => {
      let currentItem;
      mutationList.forEach((mutation) => {
        if (mutation.target.className === "item active") {
          currentItem = mutation.target;
        }
      });
      if (typeof currentItem == "undefined") return;
      let actualIndex = [
          ...document.querySelectorAll(".carousel-inner .item"),
        ].indexOf(currentItem),
        dotsList = document.querySelectorAll(".carousel-dots li");
      dotsList.forEach((dot) => {
        dot.classList.remove("dot-active");
      });
      dotsList[actualIndex].classList.add("dot-active");
    });
    let dotsCounter = 0,
      dotsList = document.createElement("ul");
    dotsList.classList.add("carousel-dots");
    carousel.querySelectorAll(".item").forEach((item, index) => {
      dotsCounter += 1;
      let dotEl = document.createElement("li");
      dotsList.appendChild(dotEl);
      if (index === 0) dotEl.classList.add("dot-active");
      dotEl.addEventListener("click", (e) => {
        e.preventDefault();
        document
          .querySelector(".carousel-inner .item.active")
          .classList.remove("active");
        let targetItem = document.querySelectorAll(".carousel-inner .item")[
          index
        ];
        const targetItemMedia = targetItem.querySelector("img, video");
        if (targetItemMedia) {
          if (
            targetItemMedia.tagName.toLowerCase() === "img" &&
            !targetItemMedia.src
          ) {
            targetItemMedia.src = targetItemMedia.getAttribute("data-src");
          } else if (targetItemMedia.tagName.toLowerCase() === "video") {
            const sourceElement = targetItemMedia.querySelector("source");
            if (sourceElement && !sourceElement.src) {
              sourceElement.src = sourceElement.getAttribute("data-src");
              targetItemMedia.load(); // Reload the video to apply the new source
            }
          }
        }
        targetItem.classList.add("active");
      });
      observer.observe(item, {
        attributes: true,
        attributeFilter: ["class"],
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
const handleFlags = (product) => {
  const flagsDefault = product.querySelector(".flags-default");
  const flagsExtra = product.querySelector(".flags-extra");

  if (flagsDefault && flagsExtra) {
    flagsDefault.appendChild(flagsExtra);
    flagsDefault.classList.add("contains-extra");
  }
};

const handleTextLayout = (product) => {
  const priceStandard = product.querySelector(".price-standard");
  const prices = product.querySelector(".prices");
  const pDesc = product.querySelector(".p-desc");
  const pInIn = product.querySelector(".p-in-in");
  const availability = product.querySelector(".availability");

  const availabilitySpan = availability?.querySelector("span");
  const pricesFinal = product.querySelector(".prices .price-final");

  const priceAditional = product.querySelector(".price-additional");
  const addToCartButton = product.querySelector(".add-to-cart-button");

  const pCode = product.querySelector(".p-code");

  if (pCode && pInIn) {
    pInIn.insertAdjacentElement("afterbegin", pCode);
  }

  if (priceStandard && prices) {
    prices.appendChild(priceStandard);
  }

  const button = product.querySelector("button");
  if (!button) {
    if (prices) prices.style.visibility = "hidden";
    if (availability) availability.style.visibility = "hidden";
  }

  const image = product.querySelector(".image");
  const starsRating = product.querySelector(".stars-wrapper");
  if (starsRating) {
    image.appendChild(starsRating);
    const ratingValue = starsRating.getAttribute("data-micro-rating-value");
    if (ratingValue) {
      if (parseFloat(ratingValue) === 0) {
        starsRating.remove();
      } else {
        const allStars = starsRating.querySelectorAll(".star");
        // Skryj všechny hvězdy kromě první
        allStars.forEach((star, idx) => {
          if (idx > 0) {
            star.style.display = "none";
          } else {
            star.style.display = ""; // první hvězda zobrazena
          }
        });

        // Ověř, zda už existuje span s ratingem
        let ratingSpan = starsRating.querySelector(".rating-value");
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
const products = document.querySelectorAll(
  ".products-block .product:not(.banner-category)"
);

const mmAllProducts = document.querySelectorAll(".products-block .product");
if (mmAllProducts.length) {
  mmAllProducts.forEach((product) => {
    if (!product.classList.contains("banner-category")) {
      handleFlags(product);
      handleTextLayout(product);
    }
  });
}

document.addEventListener("ShoptetDOMContentLoaded", () => {
  const mmAllProducts = document.querySelectorAll(".products-block .product");
  if (mmAllProducts.length) {
    mmAllProducts.forEach((product) => {
      if (!product.classList.contains("banner-category")) {
        handleFlags(product);
        handleTextLayout(product);
      }
    });
  }
});

// FOOTER-BOTTOM
function footerBilling() {
  const footerBottom = document.querySelector(".footer-bottom");
  const footerGlobal = document.querySelector("#footer");
  if (footerBottom && footerGlobal) {
    const footerBottomWrapper = document.createElement("div");
    footerBottomWrapper.classList.add("footer-bottom-wrapper");
    footerBottomWrapper.appendChild(footerBottom);
    footerGlobal.parentElement.insertBefore(
      footerBottomWrapper,
      footerGlobal.nextElementSibling
    );
    const signature = footerBottom.querySelector("#signature");
    if (signature) {
      signature.style.display = "flex";
      const platebniMetodyEl = document.createElement("img");
      platebniMetodyEl.classList.add("platebni-metody");
      platebniMetodyEl.src =
        "/user/documents/upload/Obrazky/platebni-metody.png";
      platebniMetodyEl.alt = "Platební metody";
      signature.parentElement.insertBefore(
        platebniMetodyEl,
        signature.nextElementSibling
      );
    }
  }
}

footerBilling();

// PRODUCT DETAIL
const createShpTabLink = (text, anchor, id) => {
  const shpTabLi = document.createElement("li");
  const shpTabLink = document.createElement("a");
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
  const pDetailTabs = document.querySelector("#p-detail-tabs");
  const tabContent = document.querySelector("#tab-content");

  const customMobileSlider = document.querySelector(".custom-slider-wrapper");
  setTimeout(() => {
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
      lazyPrevNext: true,
    },
    swiperOptions: {
      direction: "horizontal",
      speed: 800,
      spaceBetween: 20,
      slidesPerView: 1,
    },
  });
  // DLOUHY POPIS + OSTATNI TABY

  const ratingTab = document.querySelector("#ratingTab");
  if (ratingTab) {
    const ratingTabHeading = document.createElement("h3");
    const ratingTitleObj =
      window.ratingTitle.find((item) => item.language === shoptetLang) ||
      window.ratingTitle[0];
    ratingTabHeading.innerHTML = ratingTitleObj.text;
    ratingTab.prepend(ratingTabHeading);

    const ratingButton = ratingTab.querySelector(".add-comment ");
    if (ratingButton) {
      ratingTab.appendChild(ratingButton);
    }
  }
  const discusionWrapper = document.querySelector("#productDiscussion");
  if (discusionWrapper) {
    const discussionTabHeading = document.createElement("h3");
    const discussionTitleObj =
      window.discussionTitle.find((item) => item.language === shoptetLang) ||
      window.discussionTitle[0];
    discussionTabHeading.innerHTML = discussionTitleObj.text;
    discusionWrapper.prepend(discussionTabHeading);
  }

  const relatedFiles = document.querySelector("#relatedFiles");
  if (relatedFiles) {
    const relatedFilesHeading = document.createElement("h3");
    const relatedFilesTitleObj =
      window.relatedFilesTitle.find((item) => item.language === shoptetLang) ||
      window.relatedFilesTitle[0];
    relatedFilesHeading.innerHTML = relatedFilesTitleObj.text;
    relatedFiles.prepend(relatedFilesHeading);
  }

  const relatedProducts = document.querySelector(".products-related");
  const relatedProductsHeading = document.querySelector(
    ".products-related-header"
  );

  const voteWrappers = document.querySelectorAll(".votes-wrap .vote-wrap");
  voteWrappers.forEach((voteWrapper) => {
    const voteWrapperWrapper = voteWrapper.querySelector(
      ".votes-wrap.discussion"
    );
    if (voteWrapperWrapper) {
      voteWrapper.insertAdjacentElement("afterend", voteWrapperWrapper);
    }
  });
  const addComentButtons = document.querySelectorAll(
    ".add-comment.btn-primary"
  );
  if (addComentButtons.length) {
    addComentButtons.forEach((button) => {
      button.classList.remove("btn-primary", "btn-sm");
      button.classList.add("link-like");
    });
  }
  const descInner = document.querySelector("#description .description-inner");
  const descH3 = document.querySelector("#description .basic-description >h3");
  console.log(descH3);
  if (descH3) {
    const titleObj =
      window.detailTitle.find((item) => item.language === shoptetLang) ||
      window.detailTitle[0];
    descH3.innerHTML = titleObj.text;
    descH3.classList.add("detail-title");
    if (descInner) {
      descInner.prepend(descH3);
    }
  }
  if (relatedProducts && relatedProductsHeading) {
    if (relatedProductsHeading) {
      const relatedProductsTitleObj =
        window.relatedProductsTitle.find(
          (item) => item.language === shoptetLang
        ) || window.relatedProductsTitle[0];
      relatedProductsHeading.innerText = relatedProductsTitleObj.text;
    }
    const titleText = relatedProductsHeading.innerText;

    const relatedProductsCount =
      relatedProducts.querySelectorAll(".product").length;
    const tabContent = document.querySelector("#tab-content");

    // if (pDetailTabs.children[2]) {
    // 	pDetailTabs.insertBefore(relatedProductsLink, pDetailTabs.children[2]);
    // } else {
    // pDetailTabs.appendChild(relatedProductsLink);
    // }
    const productContent = document.querySelector("#content");
    relatedProductsHeading.classList.add("homepage-group-title");
    // relatedProductsHeading.innerHTML = `Další produkty z kolekce`
    const relatedProductsTab = document.createElement("div");
    // relatedProductsTab.classList.add('tab-pane')
    relatedProductsTab.id = "relatedProducts";
    relatedProductsTab.appendChild(relatedProductsHeading);
    relatedProductsTab.appendChild(relatedProducts);
    productContent.appendChild(relatedProductsTab);

    // desc.parentNode.insertBefore(relatedProductsTab, desc.nextSibling)

    const shpTabsWrapper = document.querySelector(".shp-tabs-wrapper");
    const wholeProd = document.querySelector("#relatedProducts");
    const descriptionInner = document.querySelector(".basic-description");

    if (shpTabsWrapper && wholeProd) {
      let wrapper = document.querySelector("#relatedProductsWrapper");
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
        swiperWrapper: true,
      },
      swiperOptions: {
        direction: "horizontal",
        speed: 800,
        slidesPerView: 1.4,
        spaceBetween: 16,
        breakpoints: {
          1200: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
          1100: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
        },
      },
    });
  }

  const alternativeProductsTabLink = document.querySelector(
    '.shp-tab-link[href="#productsAlternative"]'
  );
  if (alternativeProductsTabLink)
    alternativeProductsTabLink.parentElement.remove();
  const alternativeProducts = document.querySelector("#productsAlternative");
  if (alternativeProducts) {
    alternativeProducts.classList.remove("tab-pane", "fade");
    const alternativeProductsHeading = document.createElement("h2");
    alternativeProductsHeading.classList.add("homepage-group-title");
    const alternativeNadpisy = alternativeNadpis.find(
      (item) => item.language === shoptetLang
    );
    if (alternativeNadpisy) {
      alternativeProductsHeading.innerHTML = alternativeNadpisy.text;
    }
    const productContent = document.querySelector("#content");
    // const helpUSP = document.querySelector('#content > .benefitBanner')
    // if (helpUSP) {
    // 	helpUSP.parentElement.insertBefore(alternativeProductsHeading, helpUSP)
    // 	helpUSP.parentElement.insertBefore(alternativeProducts, helpUSP)
    // } else {

    const holder = document.createElement("div");
    holder.classList.add("holder");
    alternativeProducts.insertBefore(
      alternativeProductsHeading,
      alternativeProducts.firstChild
    );
    productContent.appendChild(alternativeProducts);
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
        swiperWrapper: true,
      },
      swiperOptions: {
        direction: "horizontal",
        speed: 800,
        slidesPerView: 1.4,
        spaceBetween: 16,
        breakpoints: {
          1200: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
          1100: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
        },
      },
    });
  }

  const parametersTabContentH3 = document.querySelector(
    "#description .extended-description >h3"
  );
  if (parametersTabContentH3) {
    const parametersTitleObj =
      window.parametersTitle.find((item) => item.language === shoptetLang) ||
      window.parametersTitle[0];
    parametersTabContentH3.innerHTML = parametersTitleObj.text;
  }
  const firstRow = document.querySelector(
    ".extended-description .detail-parameters tr:first-of-type"
  );
  if (firstRow) {
    const firstTh = firstRow.querySelector("th span");
    const firstTd = firstRow.querySelector("td span");

    if (firstTh) {
      const paramTitleObj =
        window.parametersParametr.find(
          (item) => item.language === shoptetLang
        ) || window.parametersParametr[0];
      firstTh.innerHTML = paramTitleObj.text;
    }
    if (firstTd) {
      const paramTextObj =
        window.parametersParametrText.find(
          (item) => item.language === shoptetLang
        ) || window.parametersParametrText[0];
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

  const shpTabLinks = document.querySelectorAll(".shp-tab-link");
  if (shpTabLinks.length) {
    shpTabLinks.forEach((link) => {
      link.removeAttribute("role");
      link.removeAttribute("data-toggle");

      // Odstranění závorek a čísel z textu odkazu
      link.textContent = link.textContent.replace(/\(\d+\)/g, "").trim();
    });
  }
  const targetNode = document.querySelector(".shp-tabs-row");

  if (targetNode) {
    const config = { childList: true, subtree: true };

    const callback = function (mutationsList, observer) {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          const hiddenLinks = document.querySelector(
            ".shp-tabs-row .hidden-links"
          );
          const shpTabsRow = document.querySelector(".shp-tabs-row .shp-tabs");

          if (hiddenLinks && shpTabsRow) {
            // Přesunout všechny .shp-tab do .shp-tabs-row .shp-tabs
            const shpTabs = hiddenLinks.querySelectorAll(".shp-tab");
            shpTabs.forEach((tab) => {
              shpTabsRow.appendChild(tab);
            });

            // Odstranit .hidden-links
            hiddenLinks.remove();
          }
        }
      }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);

    // Přidat posluchače událostí pro resize a orientationchange
    window.addEventListener("resize", () =>
      observer.observe(targetNode, config)
    );
    window.addEventListener("orientationchange", () =>
      observer.observe(targetNode, config)
    );
  }
  window.addEventListener("load", () => {
    setTimeout(() => {
      const mmAllProducts = document.querySelectorAll(
        ".products-block .product"
      );

      if (mmAllProducts.length) {
        mmAllProducts.forEach((product) => handleFlags(product));
        mmAllProducts.forEach((product) => handleTextLayout(product));
        // mmAllProducts.forEach((product) => handleRatings(product))
        // mmAllProducts.forEach((product) => handleProductAvailability(product))
      }
    }, 100);
  });
}

// CART
const handleCart = () => {
  const pageHeader = document.querySelector("#header");
  const cartHeader = document.querySelector(".cart-content .cart-header");
  const cartHeaderHelper = document.querySelector(".cart-header-wrapper");
  const search = document.querySelector(".search");
  const headerTop = document.querySelector(".header-top");
  // console.log(search)
  // console.log(headerTop)
  // if (search && headerTop) {
  // 	headerTop.appendChild(search)
  // }

  const continueInCart = document.querySelector(".next-step-forward");
  if (continueInCart) {
    const buttonText = window.cartContinueBtn.find(
      (item) => item.language === shoptetLang
    )?.text;
    if (buttonText) {
      continueInCart.innerText = buttonText;
    }
  }

  if (cartHeader && !cartHeaderHelper) {
    const cartHeaderWrapper = document.createElement("div");
    cartHeaderWrapper.classList.add("cart-header-wrapper");
    cartHeaderWrapper.appendChild(cartHeader);
    cartHeader.classList.add("container");
    pageHeader.parentElement.insertBefore(
      cartHeaderWrapper,
      pageHeader.nextElementSibling
    );
  } else if (cartHeader) {
    cartHeader.remove();
  }

  const sidebarCart = document.querySelector(".sidebar-in-cart");
  const backLink = document.querySelector(".back-shopping-link");
  // const sidebarCart = document.querySelector('.sidebar-in-cart .box[data-testid="tableCart"]')
  const extraDelivery = document.querySelector(".extra.delivery");
  if (extraDelivery) {
    if (dataLayer[0].shoptet.cartInfo.leftToFreeShipping.priceLeft <= 0)
      extraDelivery.classList.add("free-shipping");
    // sidebarCart.prepend(extraDelivery)
  }

  const overallWrapper = document.querySelector(".overall-wrapper");
  const cartFooter = document.createElement("div");
  cartFooter.classList.add("cart-footer");
  if (overallWrapper) overallWrapper.appendChild(cartFooter);
  const cartMail = document.querySelector(".contact-box .mail");
  const cartPhone = document.querySelector(".contact-box .tel");

  const sidebarNextStep = document.querySelector("#checkoutSidebar .next-step");
  const orderSummary = document.querySelector("#summary-box");
  if (sidebarNextStep && orderSummary)
    orderSummary.appendChild(sidebarNextStep);

  const nextStep = document.querySelector(".next-step-back");
  if (nextStep) {
    const cartRow = document.querySelector(".cart-inner");
    if (cartRow) {
      cartRow.appendChild(nextStep);
    }
  }

  const sidebarConsents = document.querySelectorAll(
    "#checkoutSidebar .consents"
  );
  const summaryItemPrice = document.querySelector(
    "#checkoutSidebar .order-summary-item.price"
  );
  if (sidebarConsents.length && summaryItemPrice) {
    sidebarConsents.forEach((consent) => {
      summaryItemPrice.parentElement.insertBefore(
        consent,
        summaryItemPrice.nextElementSibling
      );
    });
  }
  if (window.innerWidth <= 1300) {
    const backHolder = document.querySelector(".cart-inner");
    const backHold = document.querySelector(".back-shopping-link");
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
  const paymentInfoTooltips = document.querySelectorAll(
    ".payment-info .show-tooltip"
  );
  if (paymentInfoTooltips.length) {
    paymentInfoTooltips.forEach((tooltip) => {
      tooltip.innerText = "i";
    });
  }
  const handleFreeRecapitulation = () => {
    setTimeout(() => {
      const recapItemPrices = document.querySelectorAll(
        ".recapitulation-shipping-billing-info > span"
      );
      if (recapItemPrices.length) {
        recapItemPrices.forEach((price) => {
          if (price.innerText.toUpperCase().includes("ZDARMA")) {
            price.classList.add("for-free");
          } else {
            price.classList.remove("for-free");
          }
        });
      }
    }, 100);
  };
  document.addEventListener(
    "ShoptetShippingMethodUpdated",
    handleFreeRecapitulation
  );
  document.addEventListener(
    "ShoptetBillingMethodUpdated",
    handleFreeRecapitulation
  );

  const recapItemPrices = document.querySelectorAll(
    'span[data-testid="recapItemPrice"]'
  );
  if (recapItemPrices.length) {
    recapItemPrices.forEach((price) => {
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

  const footerCheck = document.querySelector(".ordering-process-footer");
  if (!footerCheck) {
    const cartProjectMail = document.querySelector(".contact-box .mail");
    const cartProjectPhone = document.querySelector(".contact-box .tel");
    const orderingProcessFooter = document.createElement("footer");
    orderingProcessFooter.classList.add("ordering-process-footer");

    let securePaymentText = "Bezpečná platba";
    let respondTimeText = "Reagujeme do 24 hodin";

    if (shoptetLang === "en") {
      securePaymentText = "Secure Payment";
      respondTimeText = "We respond within 24 hours";
    } else if (shoptetLang === "de") {
      securePaymentText = "Sichere Zahlung";
      respondTimeText = "Wir antworten innerhalb von 24 Stunden";
    }

    const phoneTimeObj =
      window.projectPhoneTime.find((item) => item.language === shoptetLang) ||
      window.projectPhoneTime[0];

    orderingProcessFooter.innerHTML = `
      <div class="container">
        <div class="contact-holder">
          <div class="phone-wrapper">
            <div class="holder-phone-time">
              ${phoneTimeObj.text}
            </div>
          </div>
          <div class="mail-wrapper">
          </div>
        </div>
        <div class="payment-types">
          <img
            src="/user/documents/upload/Obrazky/platebni-metody-2.png"
            width="200"
            height="20"
            alt="Visa, MasterCard, Maestro, PayPal"
          />
        </div>
      </div>
    `;
    overallWrapper.appendChild(orderingProcessFooter);
    const orderingProcessFooterPhoneWrapper =
      orderingProcessFooter.querySelector(".phone-wrapper");
    const orderingProcessFooterMailWrapper =
      orderingProcessFooter.querySelector(".mail-wrapper");
    if (cartProjectPhone) {
      const clonedPhone = cartProjectPhone.cloneNode(true);
      orderingProcessFooterPhoneWrapper.prepend(clonedPhone);
      const phoneElement = orderingProcessFooter.querySelector(
        ".phone-wrapper .tel"
      );
      if (phoneElement) {
        phoneElement.classList.add("project-phone");
        phoneElement.classList.remove("tel"); // Odstranění třídy 'tel'
      }
    }

    if (cartProjectMail) {
      const clonedMail = cartProjectMail.cloneNode(true);
      orderingProcessFooterMailWrapper.prepend(clonedMail);
      const mailElement = orderingProcessFooter.querySelector(
        ".mail-wrapper .mail a"
      );
      if (mailElement) {
        // mailElement.classList.add("project-email");
        mailElement.classList.remove("mail"); // Odstranění třídy 'mail'
      }
    }
  }
  if (shoptetPage === "cart") {
    const productsInCart = document.querySelectorAll(
      '.cart-table tr.removeable[data-micro="cartItem"]'
    );
    productsInCart.forEach((product) => {
      const productSKU = product.getAttribute("data-micro-sku");
      const productName = product.querySelector(".p-name");
      if (productSKU && productName) {
        const productSKUEl = document.createElement("div");
        productSKUEl.classList.add("product-sku");
        productSKUEl.innerHTML = `Kód: ${productSKU}`;
        productName.appendChild(productSKUEl);
      }
    });
  }

  const products = document.querySelectorAll('tbody [data-micro="cartItem"]');
  if (products.length) {
    products.forEach((product) => {
      const pQuantity = product.querySelector(".p-availability ");
      const pName = product.querySelector(".p-name");
      const mainLink = pName.querySelector(".main-link");

      if (pQuantity && pName && mainLink) {
        const quantityHtml = pQuantity.innerHTML;
        mainLink.insertAdjacentHTML(
          "afterend",
          `<div class="availability">${quantityHtml}</div>`
        );
      }
    });
  }

  const cartSummary = document.querySelector(".summary-wrapper");
  if (cartSummary) {
    const box = cartSummary.querySelector(".box");
    const upperSummaryReayl = document.querySelector(".upper-summary");
    if (box) {
      const upperSummary = document.createElement("div");
      upperSummary.classList.add("upper-summary");
      box.prepend(upperSummary);

      const cartContentSummary = document.querySelector(
        ".cart-content .cart-summary"
      );
      if (cartContentSummary) {
        const cartInner = document.querySelector(".cart-inner");
        cartSummary.appendChild(cartContentSummary);

        const h4 = cartContentSummary.querySelector("h4");

        // const discountInput = discountForm.querySelector('input')
        // discountInput.placeholder = 'Vložte kód'
        const discountForm = document.querySelector(".discount-coupon");

        if (h4) {
          upperSummary.prepend(h4);

          h4.innerHTML = extraGiftTitles.find(
            (item) => item.language === shoptetLang
          )?.text;

          if (!cartContentSummary.querySelector(".discount-coupon")) {
            h4.style.display = "none";
          }

          // Přesunutí discountForm za h4
          if (discountForm) {
            h4.insertAdjacentElement("afterend", discountForm);
          }
        }
        if (
          cartContentSummary.querySelector(".discount-coupon .applied-coupon")
        ) {
          const discountCoupon =
            cartContentSummary.querySelector(".discount-coupon");
          h4.classList.add("active");
          discountCoupon.classList.add("active");
        }

        const button = document.querySelector(".discount-coupon button");
        if (button) {
          button.innerHTML = "Uplatnit"; //jazyk
        }
        const freeGift = cartContentSummary.querySelector(".free-gift");
        if (freeGift) {
          const h4Gift = document.createElement("h4");
          h4Gift.innerHTML = "Dárek";
          box.insertBefore(freeGift, upperSummary);
          freeGift.prepend(h4Gift);
        }
      }

      const priceHolder = document.createElement("div");
      priceHolder.classList.add("price-holder");
      upperSummary.appendChild(priceHolder);

      // if (totalSaved > 0) {
      // 	const saveHolder = document.createElement('span');
      // 	saveHolder.classList.add('save-holder');
      // 	const totalSavedActualCurrency = totalSaved.ShoptetFormatAsCurrency();
      // 	saveHolder.innerHTML = `Ušetříte: ${totalSavedActualCurrency}`;
      // 	priceHolder.appendChild(saveHolder);
      // }

      const priceWrapper = cartSummary.querySelector(".price-wrapper");
      if (priceWrapper) {
        priceHolder.appendChild(priceWrapper);
      }

      const shipping = document.querySelector(".extra.delivery");
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
  const nextStepH = document.querySelector(".next-step");
  if (nextStepH) {
    const upperSummary = document.querySelector(".upper-summary");
    if (upperSummary) {
      upperSummary.appendChild(nextStepH);
    }
  }

  if (document.querySelector("body").classList.contains("id--9")) {
    const cartH2 = document.createElement("h2");
    const h2 = document.querySelector(".cart-row .col-md-8 h2");
    if (cartH2 && !h2) {
      cartH2.innerHTML = itemsCartTitle.find(
        (item) => item.language === shoptetLang
      )?.text;
      const row = document.querySelector(".cart-row .col-md-8 .cart-content");
      if (row) {
        row.insertBefore(cartH2, row.firstChild);
      }
    }
  }
  if (document.querySelector("body").classList.contains("id--16")) {
    const stepBack = document.querySelector(".next-step-back");
    const basicInformations = document.querySelector("#select-country-payment");
    if (stepBack) {
      const stepBackTextObj =
        window.stepBackText.find((item) => item.language === shoptetLang) ||
        window.stepBackText[0];
      stepBack.innerText = stepBackTextObj.text;
      stepBack.classList.add("back-to-cart");
      if (basicInformations) {
        basicInformations.insertAdjacentElement("afterend", stepBack);
      }
    }
    const checkoutContent = document.querySelector("#checkoutContent");
    if (checkoutContent && !document.querySelector(".back-homepage")) {
      const backHomepageObj =
        window.backHomepageBtn.find((item) => item.language === shoptetLang) ||
        window.backHomepageBtn[0];
      const backHomepageLink = document.createElement("a");
      backHomepageLink.className = "btn next-step-back back-homepage";
      backHomepageLink.href = backHomepageObj.url;
      backHomepageLink.innerText = backHomepageObj.text;
      if (window.innerWidth >= 768) {
        checkoutContent.appendChild(backHomepageLink);
      } else {
        const cartRow = document.querySelector(".cart-inner .cart-row");
        if (cartRow) {
          cartRow.appendChild(backHomepageLink);
        }
      }
    }
    const shippingTitle = document.querySelector(".co-delivery-method > h4");
    if (shippingTitle) {
      const shippingTitleObj =
        window.shippingTitle.find((item) => item.language === shoptetLang) ||
        window.shippingTitle[0];
      shippingTitle.innerHTML = shippingTitleObj.text;
    }

    const deliveryTitle = document.querySelector(".co-payment-method > h4");
    if (deliveryTitle) {
      const paymentTitleObj =
        window.paymentTitle.find((item) => item.language === shoptetLang) ||
        window.paymentTitle[0];
      deliveryTitle.innerHTML = paymentTitleObj.text;
    }
  }
  if (document.querySelector("body").classList.contains("id--17")) {
    const coInformation = document.querySelector(".co-contact-information");
    const loginWrapper = document.querySelector(
      ".co-contact-information > .form-group"
    );
    if (loginWrapper && coInformation) {
      loginWrapper.classList.add("login-helper");
      const loginButton = document.querySelector("a.btn.btn-secondary");
      if (loginButton) {
        loginButton.classList.add("btn-primary", "login-button");
        loginButton.classList.remove("btn-secondary");
      } else {
        loginWrapper.classList.add("no-btn");
      }
      const stepBack = document.querySelector(".next-step-back");
      if (stepBack) {
        const stepBackTextObj =
          window.stepBackToShippingPayment.find(
            (item) => item.language === shoptetLang
          ) || window.stepBackToShippingPayment[0];
        stepBack.innerText = stepBackTextObj.text;
        loginWrapper.prepend(stepBack);
      }
      coInformation.prepend(loginWrapper);
    }
    const checkoutContent = document.querySelector("#checkoutContent");
    if (checkoutContent && !document.querySelector(".back-homepage")) {
      const backHomepageObj =
        window.backHomepageBtn.find((item) => item.language === shoptetLang) ||
        window.backHomepageBtn[0];
      const backHomepageLink = document.createElement("a");
      backHomepageLink.className = "btn next-step-back back-homepage";
      backHomepageLink.href = backHomepageObj.url;
      backHomepageLink.innerText = backHomepageObj.text;
      if (window.innerWidth >= 768) {
        checkoutContent.appendChild(backHomepageLink);
      } else {
        const cartRow = document.querySelector(".cart-inner .cart-row");
        if (cartRow) {
          cartRow.appendChild(backHomepageLink);
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
  const relatedProducts = document.querySelectorAll(".cart-related-product");

  relatedProducts.forEach((product) => {
    const availability = product.querySelector(
      ".cart-related-availability span"
    );
    const priceFinal = product.querySelector(
      ".cart-related-button .price.price-final"
    );

    if (
      availability &&
      availability.textContent.trim() === "Momentálně nedostupné"
    ) {
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
document.addEventListener("ShoptetDOMCartContentLoaded", () => {
  const currencyLabel = dataLayer[0].shoptet.currencyInfo.symbol;
  const cartWidgetProducts = document.querySelectorAll(".cart-widget-product");
  if (cartWidgetProducts.length) {
    cartWidgetProducts.forEach((product) => {
      const productPrice = product.querySelector(
        'span[data-testid="cartWidgetProductPrice"]'
      );
      if (productPrice) {
        const priceEl = document.createElement("div");
        priceEl.classList.add("cart-widget-product-price");
        priceEl.appendChild(productPrice);
        product.appendChild(priceEl);
        const productSKU = product.getAttribute("data-micro-sku");
        if (productSKU) {
          const productSinglePrice = dataLayer[0].shoptet.cart.filter(
            (item) => item.code === productSKU
          )[0].priceWithVat;
          const productSinglePriceEl = document.createElement("div");
          productSinglePriceEl.classList.add(
            "cart-widget-product-single-price"
          );
          productSinglePriceEl.innerHTML = `${productSinglePrice} ${currencyLabel} / ks`; //jazyk
          priceEl.appendChild(productSinglePriceEl);
        }
      }
    });
  }

  let popupCartSummary = document.querySelector(".popup-cart-summary");
  if (!popupCartSummary) {
    popupCartSummary = document.createElement("div");
    popupCartSummary.classList.add("popup-cart-summary");
  }
  let popupCartSummaryPriveVAT = String(
    dataLayer[0].shoptet.cartInfo.getNoBillingShippingPrice.withVat
  );
  if (popupCartSummaryPriveVAT.includes(".")) {
    popupCartSummaryPriveVAT = popupCartSummaryPriveVAT.replace(".", ",");
  }

  let popupCartSummaryPriceNoVAT = String(
    dataLayer[0].shoptet.cartInfo.getNoBillingShippingPrice.withoutVat
  );
  if (popupCartSummaryPriceNoVAT.includes(".")) {
    popupCartSummaryPriceNoVAT = popupCartSummaryPriceNoVAT.replace(".", ",");
  }
  // console.log(popupCartSummaryPriceNoVAT)

  // Převod řetězce na číslo
  let popupCartSummaryPriceNoVATNumber = parseFloat(
    popupCartSummaryPriceNoVAT.replace(",", ".")
  );

  popupCartSummary.innerHTML = `
	  <div class="popup-cart-summary-item">
		  <strong class="popup-cart-summary-item-label">Celkem za zboží</strong>
		  <strong class="popup-cart-summary-item-value">${popupCartSummaryPriveVAT} ${currencyLabel}</strong>
	  </div>
	  <div class="popup-cart-summary-item">
		  <span class="popup-cart-summary-item-label">Celkem bez DPH</span>
		  <span class="popup-cart-summary-item-value">${Math.round(
        popupCartSummaryPriceNoVATNumber
      )} ${currencyLabel}</span>
	  </div>
  `; //jazyk
  const cartWidgetProductsWrapper = document.querySelector(
    ".cart-widget-products"
  );
  if (cartWidgetProductsWrapper)
    cartWidgetProductsWrapper.parentElement.insertBefore(
      popupCartSummary,
      cartWidgetProductsWrapper.nextElementSibling
    );

  const cartWidgetButton = document.querySelector(".cart-widget-button");
  const cartWidgetInner = document.querySelector(".cart-widget-inner");
  if (cartWidgetButton && cartWidgetInner)
    cartWidgetInner.appendChild(cartWidgetButton.cloneNode(true));

  const cartWidgetShipping = document.querySelector(".cart-free-shipping");
  if (cartWidgetShipping) {
    const priceLeftToFreeShipping =
      dataLayer[0].shoptet.cartInfo.leftToFreeShipping.priceLeft;
    if (priceLeftToFreeShipping > 0) {
      const freeShippingBar = document.createElement("div");
      const freeShippingValue = document.createElement("div");
      freeShippingBar.classList.add("price-range");
      freeShippingBar.appendChild(freeShippingValue);

      popupCartSummaryPriveVAT = Number(popupCartSummaryPriveVAT);

      freeShippingValue.style.width = `${
        100 -
        (100 * priceLeftToFreeShipping) /
          (priceLeftToFreeShipping + popupCartSummaryPriveVAT)
      }%`;
      cartWidgetShipping.appendChild(freeShippingBar);
      const shippingWidgetStrongs =
        cartWidgetShipping.querySelectorAll("strong");
      if (shippingWidgetStrongs.length) {
        shippingWidgetStrongs.forEach((strong) => {
          if (strong.innerText.includes("ZDARMA"))
            strong.classList.add("free-shipping-strong"); //jazyk
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
document.addEventListener("ShoptetDOMAdvancedOrderLoaded", () => {
  const advancedOrder = document.querySelector(".advanced-order");
  const aoTop = document.createElement("div");
  aoTop.classList.add("ao-top");
  advancedOrder.prepend(aoTop);
  const aoTitle = advancedOrder.querySelector(".h1");
  if (aoTitle) aoTop.appendChild(aoTitle);
  const aoProduct =
    advancedOrder.querySelector(".ao-product") ||
    advancedOrder.querySelector(".h2");
  if (aoProduct) aoTop.appendChild(aoProduct);
  const cboxClose = document.querySelector("#cboxClose");
  if (cboxClose) {
    cboxClose.innerText = "Zavřít"; //jazyk
    cboxClose.id = "cboxClose";
    cboxClose.classList.add("close");
    // aoTop.appendChild(cboxClose)
  }
  const continueShoppingBtn = document.createElement("button");
  continueShoppingBtn.classList.add("btn", "black-border");
  continueShoppingBtn.innerText = "Zavřít"; //jazyk
  continueShoppingBtn.addEventListener("click", () => {
    shoptet.modal.close();
  });
  const extraStep = advancedOrder.querySelector(".extra.step");
  if (extraStep) extraStep.prepend(continueShoppingBtn);

  const deliveryStrongs = advancedOrder.querySelectorAll(
    ".extra.delivery strong"
  );
  if (deliveryStrongs.length) {
    deliveryStrongs.forEach((strong) => {
      if (strong.innerText === "ZDARMA") strong.classList.add("for-free"); //jazyk
    });
  }
  const suggestion = advancedOrder.querySelector(".advanced-order-suggestion");
  if (suggestion) {
    suggestion.innerHTML = "Můžete ještě přidat ...";
  }
  const img = advancedOrder.querySelector(".ao-product .ao-image img");
  if (img) {
    img.src = img.getAttribute("data-src");
  }

  const advancedOrderProducts = $(".colorbox-html-content #products");
  if (advancedOrderProducts.length) {
    advancedOrderProducts.slick(productsSlickSettings);
  }
});

// EMPTY CART

const handleEmptyCart = () => {
  const emptyCart = document.querySelector(".cart-inner.cart-empty");
  if (!emptyCart) return;
  document.body.classList.add("custom-empty-cart");
  const cartHeading = emptyCart.querySelector(".cart-heading");
  const cartText = document.createElement("p");
  cartText.classList.add("narrow-custom", "text-center");
  const prazdnyKosikPerexText = window.prazdnyKosikPerex.find(
    (item) => item.language === shoptetLang
  ).text;
  cartText.innerText = prazdnyKosikPerexText;
  if (cartHeading) {
    const prazdnyKosikNadpisText = window.prazdnyKosikNadpis.find(
      (item) => item.language === shoptetLang
    ).text;
    cartHeading.innerText = prazdnyKosikNadpisText;
    cartHeading.classList.add("homepage-group-title");
    cartHeading.parentElement.insertBefore(
      cartText,
      cartHeading.nextElementSibling
    );
  }
  const cartEmail = emptyCart.querySelector(".mail");
  const cartPhone = emptyCart.querySelector(".tel");
  const cartContact = document.createElement("ul");
  cartContact.classList.add("cart-contact", "contact-box");
  if (cartPhone) {
    cartContact.appendChild(cartPhone.parentElement);
  }
  if (cartEmail) {
    const emailPerexText = window.emailPerexText.find(
      (item) => item.language === shoptetLang
    ).text;
    const emailPerex = document.createElement("span");
    emailPerex.innerText = emailPerexText;
    cartEmail.parentElement.insertBefore(
      emailPerex,
      cartEmail.nextElementSibling
    );
    cartContact.appendChild(cartEmail.parentElement);
  }
  emptyCart.appendChild(cartContact);

  // Přidání btn holder s dvěma odkazy
  const btnHolder = document.createElement("div");
  btnHolder.classList.add("btn-holder", "text-center");

  const primaryButton = window.primaryButtonText.find(
    (item) => item.language === shoptetLang
  );
  const secondaryButton = window.secondaryButtonText.find(
    (item) => item.language === shoptetLang
  );

  btnHolder.innerHTML = `
		  <a href="${primaryButton.url}" class="btn btn-primary">${primaryButton.text}</a>
		  <a href="${secondaryButton.url}" class="btn secondary">${secondaryButton.text}</a>
	  `;

  emptyCart.appendChild(btnHolder);

  const emptyCartHeader = document.querySelector(".cart-header-wrapper");
  if (emptyCartHeader) emptyCartHeader.remove();
};

const emptyCart = document.querySelector(".cart-inner.cart-empty");
if (emptyCart) handleEmptyCart();

document.addEventListener("ShoptetDOMCartContentLoaded", () => {
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

const handleFooter = async () => {
  // const socialIcons = document.querySelector('.footer-links-icons')
  // const contactBanner = document.querySelector('.custom-footer__contact')
  // if (socialIcons && contactBanner) contactBanner.appendChild(socialIcons)
  const cookies = document.querySelector(".js-cookies-settings");
  if (cookies) {
  }
  const signature = document.querySelector("#signature");
  if (signature) {
    const mirandaMediaLink = `
	  <span>Created by </span>
			  <a class="company" href="https://www.mirandamedia.cz/shoptetnamiru" target="_blank">
				  <img class="company__logo" src="/user/documents/upload/Obrazky/miranda.svg">
				  MirandaMedia Group s.r.o.
			  </a>
		<span> on the platform </span>
		  `;
    signature.insertAdjacentHTML("beforeend", mirandaMediaLink);

    const title = signature.querySelector(".title");
    if (title) {
      title.innerHTML =
        '<img class="company__logo" src="/user/documents/upload/Obrazky/shoptet.png">';
    }
  }
  const footerHeadings = document.querySelectorAll(
    ".banner-wrapper > span > .block > h4"
  );
  footerHeadings.forEach((heading) => {
    heading.classList.add("clickable");
    heading.addEventListener("click", () => {
      heading.closest(".banner-wrapper").classList.toggle("active");
    });
  });
  const footerCategories = document.querySelector(
    ".custom-footer__categories > h4"
  );
  if (footerCategories) {
    footerCategories.classList.add("clickable");
    footerCategories.addEventListener("click", () => {
      footerCategories
        .closest(".custom-footer__categories")
        .classList.toggle("active");
    });
  }

  const siteName = document.querySelector("#footer .site-name");
  const customFooter = document.querySelector("#footer .custom-footer");
  if (customFooter) {
    customFooter.insertBefore(siteName, customFooter.firstChild);
  }
  const customFooterContact = document.querySelector(
    "#footer .custom-footer__contact"
  );
  const customFooterContactPlaceholder = document.querySelector(
    "#footer .contacts-placeholder"
  );
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
  const footer = document.querySelector("#footer");
  const instagram = document.querySelector(".custom-footer__instagram ");

  const benefitsWrapper = document.querySelector(".benefitBanner");
  if (benefitsWrapper) {
    footer.insertAdjacentElement("beforebegin", benefitsWrapper);
  }
  if (instagram) {
    const h4 = instagram.querySelector("h4");
    const text = instagramTitle.find(
      (item) => item.language === shoptetLang
    )?.text;
    if (h4 && text) h4.innerHTML = text;
    footer.insertAdjacentElement("beforebegin", instagram);
  }

  const zastupce = document.querySelector(".zastupce");
  if (zastupce && footer) {
    footer.parentNode.insertBefore(zastupce, footer);
  }
};
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
  const productsSelectors = () => {
    const allProducts = document.querySelectorAll(".products");

    if (!allProducts) return;

    const productsIDs = [];

    for (const products of allProducts) {
      // if (index === 0) continue;

      productsIDs.push(`#${products.id}`);
    }
    // console.log(productsIDs)
    return productsIDs;
  };

  swiperize({
    containers: [...productsSelectors()],
    slide: [swiperize.spreadClass(productsSelectors(), ".product")],
    customOptions: {
      fullscreen: false,
      infinity: true,
      dots: true,
      arrows: true,
      scrollbar: false,
      lazyPrevNext: true,
      helper: true, // Přidána nová možnost
    },

    swiperOptions: {
      direction: "horizontal",
      speed: 800,
      slidesPerView: 1.4,
      spaceBetween: 16,
      breakpoints: {
        1200: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
        1100: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
      },
    },
  });

  function homePageSections() {
    const body = document.querySelector("body");
    let insertAfterElement = document.querySelector(".before-carousel");
    const bannersRow = document.querySelector(".banners-row");
    const colBanner = bannersRow?.querySelector(".next-to-carousel-banners");

    let newBanners;
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

    const headingElements = document.querySelectorAll(".homepage-group-title");

    // Najdeme prvek pro 3. sekci (middle body bannery)
    const thirdInsertPoint =
      document.querySelector(".middle-banners-wrapper") ||
      document.querySelector(".body-banners");

    const sections = [];

    headingElements.forEach((heading, index) => {
      const splitClass = heading.className.split("homepage-products-heading-");
      if (splitClass.length > 1) {
        const headingNumber = splitClass[1].split(" ")[0];
        const productElement = document.querySelector(
          `.homepage-products-${headingNumber}`
        );

        if (productElement) {
          const section = document.createElement("section");
          section.classList.add(
            "product-section",
            `product-section-${headingNumber}`
          );

          if (index === 0) {
            section.classList.add("product-section-bg");
          }

          const container = document.createElement("div");
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
      const firstInsertPoint = insertAfterElement || bannersRow;

      // 1. sekce
      firstInsertPoint?.insertAdjacentElement("afterend", sections[0]);

      // 2. sekce
      if (sections[1] && newBanners) {
        newBanners.insertAdjacentElement("afterend", sections[1]);
      }

      // 3. sekce
      if (sections[2] && thirdInsertPoint) {
        thirdInsertPoint.insertAdjacentElement("afterend", sections[2]);
      }

      // Další sekce za předchozí
      for (let i = 3; i < sections.length; i++) {
        sections[i - 1].insertAdjacentElement("afterend", sections[i]);
      }
    }

    // Přesun benefit banneru
    const benefitBanner = document.querySelector(".benefitBanner");
    if (benefitBanner) {
      if (window.dataLayer?.[0]?.shoptet?.pageType === "homepage") {
        const firstProductsBlock = document.querySelector(".banners-row");
        if (firstProductsBlock) {
          firstProductsBlock.appendChild(benefitBanner);
        }
      }
    }
  }

  homePageSections();

  if (window.innerWidth >= 768) {
    const handleSectionLinks = () => {
      const productSections = document.querySelectorAll(".product-section");

      productSections.forEach((section, index) => {
        const container = section.querySelector(".container");
        const heading = container.querySelector(".homepage-group-title");

        const languageGroup = links.find(
          (group) => group.language === shoptetLang
        );

        if (languageGroup) {
          const link = languageGroup.links.find((link) => link.index === index);
          if (link) {
            const button = document.createElement("a");
            button.classList.add("btn", "btn-primary");
            button.href = link.url;
            button.textContent = `${link.name}`;

            if (heading) {
              // Vytvoření obalovacího divu
              const wrapper = document.createElement("div");
              wrapper.classList.add("upper");

              // Přesun nadpisu do wrapperu
              wrapper.appendChild(heading);
              wrapper.appendChild(button);

              // Vložení wrapperu na začátek kontejneru
              container.insertAdjacentElement("afterbegin", wrapper);
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
    const h4 = e.target.closest(".single-faq > h4");
    if (h4) {
      const singleFaq = h4.closest(".single-faq");
      if (singleFaq) {
        singleFaq.classList.toggle("active");
      }
    }
  });
}

function addEmptySlides(selector, rules) {
  const swiperWrapper = document.querySelector(`${selector} .swiper-wrapper`);
  if (swiperWrapper) {
    rules.sort((a, b) => b.width - a.width);
    const applicableRule = rules.find((rule) => window.innerWidth > rule.width);

    if (applicableRule) {
      for (let i = 0; i < applicableRule.emptySlidesCount; i++) {
        const emptySlide = document.createElement("div");
        emptySlide.classList.add("swiper-slide");
        swiperWrapper.appendChild(emptySlide);
      }
    }
  }
}

// ANIMACE
let target = document.querySelectorAll(".products-block");
const target2 = document.querySelector(".top-categories-grid");
function handleIntersection(entries) {
  entries.map((entry, index) => {
    entry.target.style.removeProperty("--animation-delay");
    entry.target.setAttribute(
      "style",
      entry.target.getAttribute("style")
        ? entry.target.getAttribute("style") + `--animation-delay: ${index}`
        : `--animation-delay: ${index}`
    );
    // entry.target.setAttribute('animation-delay', `${index}`)
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}
const observer = new IntersectionObserver(handleIntersection);
const observer2 = new IntersectionObserver(handleIntersection);
if (target.length) {
  target.forEach((item) => {
    item.classList.add("animation");
    const subtargets = item.querySelectorAll(".product");
    subtargets.forEach((subtarget) => {
      observer.observe(subtarget);
    });
  });
}
document.addEventListener("ShoptetDOMPageMoreProductsLoaded", () => {
  if (target.length) {
    target.forEach((item) => {
      item.classList.add("animation");
      const subtargets = item.querySelectorAll(".product");
      subtargets.forEach((subtarget) => {
        observer.observe(subtarget);
      });
    });
  }
});
if (target2) {
  target2.classList.add("animation");
  const subtargets = target2.querySelectorAll(".category");
  subtargets.forEach((subtarget) => {
    observer2.observe(subtarget);
  });
}



if (window.innerWidth < 768) {
  const topNavigationBarMenu = document.querySelector(
    ".top-navigation-bar-menu"
  );
  const navigationIn = document.querySelector("#navigation .navigation-in");

  if (topNavigationBarMenu && navigationIn) {
    navigationIn.appendChild(topNavigationBarMenu);
  }
}

function smoothScrollTo(target, offset = -150, duration = 700) {
  const targetElement = document.querySelector(target);
  if (targetElement) {
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}

// Přidání event listeneru pomocí vaší funkce `on`
on("click", ".shp-tab-link", function (e) {
  const target = this.getAttribute("href");
  if (document.querySelector(target)) {
    smoothScrollTo(target, 200);
  }
});


// document.addEventListener('DOMContentLoaded', function () {
//   const amountInput = document.querySelector('input[name="amount"]');
//   if (amountInput) {
//     amountInput.step = '0.01';
//     amountInput.min = '0.01';
//     amountInput.setAttribute("data-decimals", "2");
//   }
//   shoptet.config.documentPriceDecimalPlaces = "2";
// });

