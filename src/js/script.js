// window.addEventListener('load', () => document.body.classList.add('hideSpinner'))
const debounce = (func, delay) => {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

// -- Split menu -- //
function moveElement(elementOrSelector, targetSelectors) {
  // Pokud je to string, najdeme ho, pokud je to objekt, použijeme ho přímo
  const element =
    typeof elementOrSelector === "string"
      ? document.querySelector(elementOrSelector)
      : elementOrSelector;

  const footer = document.querySelector("footer");

  if (!element) {
    console.error(`Prvek nebyl nalezen`);
    return;
  }

  let moved = false;

  for (const targetSelector of targetSelectors) {
    const target = document.querySelector(targetSelector);
    // :has() selektor v JS funguje v moderních prohlížečích (Shoptet 2026 už to dá)
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
const splitMenu = () => {
  const menuWrapper = document.querySelector("#navigation .navigation-in");
  const menuHelper = document.querySelector(".menu-helper");

  if (!menuWrapper || !menuHelper) return;

  // requestAnimationFrame je pro výpočty layoutu lepší než setTimeout
  window.requestAnimationFrame(() => {
    const menuItems = menuWrapper.querySelectorAll(
      ".menu-level-1 > li:not(.appended-category)",
    );
    const menuWrapperStyle = window.getComputedStyle(menuWrapper);
    const availableWidth =
      menuWrapper.clientWidth - parseFloat(menuWrapperStyle.paddingRight);

    let hasVisibleInHelper = false;

    menuItems.forEach((item) => {
      const offsetRight = item.offsetLeft + item.offsetWidth;

      // Najdeme odpovídající položku v helperu (priorita ID, pak třída)
      const itemInHelper =
        item.id === "nav-manufacturers"
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
    const itemsToDisplayInHelper = menuHelper.querySelector(
      ".menu-level-1 > li:not(.splitted):not(.appended-category)",
    );

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

// úprava user cart, aby zde byla celková cena + cena za jednotlivé položky
const cartWidgetRefactoring = () => {
  const shoptetData = dataLayer[0]?.shoptet;
  if (!shoptetData) return;

  const currencyLabel = shoptetData.currencyInfo.symbol;
  const cartItems = document.querySelectorAll(".cart-widget-product");

  cartItems.forEach((product) => {
    if (product.querySelector(".cart-widget-product-price")) return;

    const productPrice = product.querySelector(
      'span[data-testid="cartWidgetProductPrice"]',
    );
    const productSKU = product.getAttribute("data-micro-sku");
    const productUnit =
      product.querySelector(".cart-widget-product-unit")?.textContent.trim() ||
      "ks";

    if (productPrice) {
      const priceWrapper = document.createElement("div");
      priceWrapper.classList.add("cart-widget-product-price");

      priceWrapper.appendChild(productPrice);
      product.appendChild(priceWrapper);

      if (productSKU) {
        const itemData = shoptetData.cart.find(
          (item) => item.code === productSKU,
        );
        if (itemData) {
          const singlePrice = document.createElement("div");
          singlePrice.classList.add("cart-widget-product-single-price");
          const formattedPrice = itemData.priceWithVat.toLocaleString("cs-CZ");
          singlePrice.innerHTML = `${formattedPrice} ${currencyLabel} / ${productUnit}`;
          priceWrapper.appendChild(singlePrice);
        }
      }
    }
  });
  const cartProductsWrapper = document.querySelector(".cart-widget-products");
  if (cartProductsWrapper && !document.querySelector(".popup-cart-summary")) {
    const cartInfo = shoptetData.cartInfo.getNoBillingShippingPrice;
    const summary = document.createElement("div");
    summary.classList.add("popup-cart-summary");

    const priceVAT = cartInfo.withVat.toLocaleString("cs-CZ");
    const priceNoVAT = Math.round(cartInfo.withoutVat).toLocaleString("cs-CZ");

    const currentLang = window.shoptetLang || "cs";
    const langData =
      window.projectTranslations[currentLang] ||
      window.projectTranslations["cs"];
    const texts = langData.cart; // Přístup do sekce cart

    summary.innerHTML = `
            <div class="popup-cart-summary-item with_vat">
                <strong class="popup-cart-summary-item-label">${texts.totalProducts}:</strong>
                <strong class="popup-cart-summary-item-value">${priceVAT} ${currencyLabel}</strong>
            </div>
            <div class="popup-cart-summary-item without_vat">
                <span class="popup-cart-summary-item-label">${texts.totalWithoutVat}:</span>
                <span class="popup-cart-summary-item-value">${priceNoVAT} ${currencyLabel}</span>
            </div>
        `;
    cartProductsWrapper.after(summary);
  }

  const shippingWidget = document.querySelector(".cart-free-shipping");
  if (shippingWidget) {
    const leftToFree = shoptetData.cartInfo.leftToFreeShipping.priceLeft;
    const totalForFree =
      leftToFree + shoptetData.cartInfo.getNoBillingShippingPrice.withVat;

    if (leftToFree > 0 && !shippingWidget.querySelector(".price-range")) {
      const range = document.createElement("div");
      range.classList.add("price-range");
      const bar = document.createElement("div");

      const percent = Math.min(100, 100 - (100 * leftToFree) / totalForFree);
      bar.style.width = `${percent}%`;

      range.appendChild(bar);
      shippingWidget.appendChild(range);
    }

    shippingWidget.querySelectorAll("strong").forEach((strong) => {
      if (strong.innerText.includes("ZDARMA")) {
        strong.classList.add("free-shipping-strong");
      }
    });
  }

  if (window.innerWidth < 768) {
    const cartWidget = document.querySelector(".cart-widget");
    if (cartWidget && !cartWidget.querySelector(".close")) {
      const closeBtn = document.createElement("div");
      closeBtn.classList.add("close");
      cartWidget.prepend(closeBtn);

      closeBtn.addEventListener("click", () => {
        document.body.classList.remove("cart-window-visible");
        cartWidget.setAttribute("aria-hidden", "true");
      });
    }
  }
};

document.addEventListener("ShoptetDOMCartContentLoaded", cartWidgetRefactoring);

const loginWidgetRefactoring = () => {
  const popupInner = document.querySelector("#login .popup-widget-inner");
  if (!popupInner || popupInner.querySelector(".login-part")) return;

  const currentLang = window.shoptetLang || "cs";
  const langData =
    window.projectTranslations[currentLang] || window.projectTranslations["cs"];
  const texts = langData.login;

  // Vytvoření div.close a přidání eventu pro zavření
  const closeButton = document.createElement("div");
  closeButton.classList.add("close", "black");
  closeButton.addEventListener("click", () => {
    document.body.classList.remove("login-window-visible");
  });
  popupInner.appendChild(closeButton);

  const loginPart = document.createElement("div");
  loginPart.classList.add("login-part");
  while (popupInner.firstChild && popupInner.firstChild !== closeButton) {
    loginPart.appendChild(popupInner.firstChild);
  }
  popupInner.appendChild(loginPart);

  const loginBtn = loginPart.querySelector(".btn-login");
  if (loginBtn) {
    loginBtn.classList.remove("btn-secondary", "btn-text");
    loginBtn.classList.add("btn-primary");
  }

  const registerPart = document.createElement("div");
  registerPart.classList.add("register-part");

  const originalRegisterLink = loginPart.querySelector(
    'a[data-testid="signup"]',
  );

  const benefitsList = texts.benefits
    .map((benefit) => `<li>${benefit}</li>`)
    .join("");

  registerPart.innerHTML = `
        <h3>${texts.noAccountYet}</h3>
        <ul>
            ${benefitsList}
        </ul>
    `;

  if (originalRegisterLink) {
    originalRegisterLink.classList.add("btn", "btn-primary", "secondary");
    originalRegisterLink.textContent = texts.registerButton;
    registerPart.appendChild(originalRegisterLink);
  }

  popupInner.appendChild(registerPart);
};
loginWidgetRefactoring();

const parseBenderContent = async (selector, devMode = false) => {
  const dev = devMode;
  const wrappers = document.querySelectorAll(selector);

  if (wrappers.length === 0) {
    if (dev)
      console.warn(
        `%c[BENDER DEV]%c Žádné elementy pro "${selector}" nebyly nalezeny.`,
        "color: #ff0000; font-weight: bold;",
        "",
      );
    return;
  }

  if (dev) console.time("Bender Performance Test");

  const slugCache = {};
  const slugify = (text) => {
    if (slugCache[text]) return slugCache[text];
    const slug = text
      .toString()
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-");
    slugCache[text] = slug;
    return slug;
  };

  for (let i = 0; i < wrappers.length; i++) {
    const wrapper = wrappers[i];
    const dataSpan = wrapper.querySelector("span[data-ec-promo-id]");
    if (!dataSpan) continue;

    const fullText = dataSpan.innerHTML.replace(/\u00a0/g, " ").trim();

    if (dev)
      console.log(
        `%c[BENDER DEV]%c Banner ${i + 1} vstup:`,
        "color: #00ff00; font-weight: bold;",
        fullText,
      );

    const classMatch = fullText.match(/###([^#]+)###/);
    const customClass = classMatch ? classMatch[1].trim() : null;

    // --- SPECIÁLNÍ PŘÍPAD: FAVOURITE CATEGORIES (SWIPER) ---
    if (customClass === "socials-footer") {
      if (customClass) {
        const topParent = wrapper.closest('[class*="custom-footer__banner"]');
        if (topParent) {
          topParent.classList.add(customClass);
        } else {
          resultContainer.classList.add(customClass);
        }
      }
      continue;
    }
    if (customClass === "favourite-categories" && shoptetPage == "homepage") {
      const textWithoutClass = fullText.replace(/###[^#]+###/g, "").trim();
      const blocksRaw = textWithoutClass.split(/##([^#]+)##/g);

      const section = document.createElement("section");
      section.className = "favourite-categories";
      const container = document.createElement("div");
      container.className = "container";
      section.appendChild(container);

      for (let j = 1; j < blocksRaw.length; j += 2) {
        const titleText = blocksRaw[j].trim();
        const contentText = blocksRaw[j + 1] ? blocksRaw[j + 1].trim() : "";

        if (titleText) {
          const h2 = document.createElement("h2");
          h2.innerHTML = titleText;
          container.appendChild(h2);
        }

        const swiperDiv = document.createElement("div");
        swiperDiv.className = "swiper swiper-favourite-categories";
        // Pagination je odsud pryč
        swiperDiv.innerHTML = `
      <div class="swiper-wrapper"></div>
      <button class="swiper-button-prev primary" aria-label="Prev category"><div class="sr-only">Next category</div></button>
      <button class="swiper-button-next primary" aria-label="Next category"><div class="sr-only">Prev category</div></button>
    `;
        const swiperWrapper = swiperDiv.querySelector(".swiper-wrapper");

        const items = contentText.match(/#([^#]+)#/g);
        if (items) {
          items.forEach((item) => {
            const cleanItem = item.replace(/#/g, "").trim();
            const parts = cleanItem.split(";");

            let label = "",
              url = "",
              imgSrc = "";

            parts.forEach((part) => {
              const p = part.trim();
              if (p.includes("/documents/")) {
                imgSrc = p;
              } else if (p.startsWith("/") || p.startsWith("http")) {
                url = p;
              } else {
                label = p;
              }
            });

            if (!url && label) url = `/${slugify(label)}/`;

            // Vytvoříme kontejner slidu
            const slide = document.createElement("div");
            slide.className = "swiper-slide";

            // Vytvoříme odkaz dovnitř slidu
            const slideLink = document.createElement("a");
            slideLink.href = url;
            // label.replace pro čistý ALT bez HTML tagů
            slideLink.innerHTML = `
      <img src="${imgSrc}" alt="${label.replace(/<[^>]*>?/gm, "")}" loading="lazy" width="165" height="115" />
      <h3 class="tiny">${label}</h3>
    `;

            slide.appendChild(slideLink);
            swiperWrapper.appendChild(slide);
          });
        }

        container.appendChild(swiperDiv);

        // VYTVOŘENÍ PAGINACE VNĚ SWIPERU
        const paginationDiv = document.createElement("div");
        paginationDiv.className = "swiper-pagination";
        container.appendChild(paginationDiv);
      }

      wrapper.remove();
      const targets = [
        ".content-wrapper:has(.benefitBanner)",
        ".before-carousel",
      ];
      moveElement(section, targets);

      continue;
    }

    // --- STANDARDNÍ BENDER MÓD (PATIČKA) ---
    const resultContainer = document.createElement("div");
    resultContainer.className = "bender-parsed-content";

    if (customClass) {
      const topParent = wrapper.closest('[class*="custom-footer__banner"]');
      if (topParent) {
        topParent.classList.add(customClass);
      } else {
        resultContainer.classList.add(customClass);
      }
    }

    const textWithoutClass = fullText.replace(/###[^#]+###/g, "").trim();
    const blocksRaw = textWithoutClass.split(/##([^#]+)##/g);

    for (let j = 1; j < blocksRaw.length; j += 2) {
      const titleText = blocksRaw[j].trim();
      const contentText = blocksRaw[j + 1] ? blocksRaw[j + 1].trim() : "";

      if (!titleText) continue;

      const currentBlock = document.createElement("div");
      currentBlock.className = "block";

      const h2 = document.createElement("h2");
      h2.innerHTML = titleText; // Povoleno HTML
      currentBlock.appendChild(h2);

      const items = contentText.match(/#([^#]+)#/g);
      if (items) {
        let currentUl = null;
        for (let k = 0; k < items.length; k++) {
          const cleanItem = items[k].replace(/#/g, "").trim();
          const parts = cleanItem.split(";");

          if (parts.includes("img")) {
            const img = document.createElement("img");
            img.src = parts[0].trim();
            img.loading = "lazy";
            img.className = "footer-img";
            currentBlock.appendChild(img);
          } else {
            if (!currentUl) {
              currentUl = document.createElement("ul");
              currentBlock.appendChild(currentUl);
            }
            const label = parts[0].trim();
            let url = parts[1] ? parts[1].trim() : `/${slugify(label)}/`;
            if (url && !url.startsWith("/") && !url.startsWith("http"))
              url = "/" + url;

            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = url;
            a.innerHTML = label; // Povoleno HTML
            li.appendChild(a);
            currentUl.appendChild(li);
          }
        }
      }
      resultContainer.appendChild(currentBlock);
    }

    const bannerContainer = wrapper.querySelector(".banner") || wrapper;
    bannerContainer.innerHTML = "";
    bannerContainer.appendChild(resultContainer);
  }

  if (dev) console.timeEnd("Bender Performance Test");
};

// Spuštění na bannery v patičce
(async () => {
  await parseBenderContent(".custom-footer > div", false);
})();

const initFavouriteCategoriesSwiper = () => {
  const selector = ".swiper-favourite-categories";
  const el = document.querySelector(selector);
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
      prevEl: ".swiper-button-prev",
    },

    // Paginace vně swiperu (sourozenec v containeru)
    pagination: {
      el: el.parentElement.querySelector(".swiper-pagination"),
      clickable: true,
      renderBullet: (index, className) => {
        return `<button class="${className}" aria-label="Slide ${index + 1}"></button>`;
      },
    },

    // Breakpointy přesně podle tvého zadání
    breakpoints: {
      768: { slidesPerView: 3, spaceBetween: 14 },
      880: { slidesPerView: 4, spaceBetween: 14 },
      1024: { slidesPerView: 5, spaceBetween: 16 },
      1200: { slidesPerView: 6, spaceBetween: 16 },
      1360: { slidesPerView: 7, spaceBetween: 16 },
    },
  });
};
initFavouriteCategoriesSwiper();
// middle banners HP
const unwrapBanners = () => {
  if (window.shoptetPage !== "homepage") return;
  const container = document.querySelector(".middle-banners-wrapper");
  if (!container) return;
  const wrappers = container.querySelectorAll(
    '.body-banners > [class*="col-sm-"]',
  );

  wrappers.forEach((wrapper) => {
    const banner = wrapper.querySelector(".banner-wrapper");
    if (banner) {
      wrapper.parentNode.insertBefore(banner, wrapper);
      wrapper.remove();
    }
  });

  // console.log('Middle banners unwrapped ');
};

// Spouštíme po načtení DOMu
document.addEventListener("DOMContentLoaded", unwrapBanners);

const fetchArticleDatesAndButtons = async () => {
  // Ověření stránky a existence blogu
  if (shoptetPage == "homepage" && document.querySelector(".blog-wrapper")) {
    const blogWrappers = document.querySelectorAll(".blog-wrapper");

    // Překlady pro tlačítko
    const currentLang = window.shoptetLang || "cs";
    const langData =
      window.projectTranslations[currentLang] ||
      window.projectTranslations["cs"];
    const moreArticlesText = langData.blog.moreArticles;

    blogWrappers.forEach((wrapper) => {
      // --- 1. GENEROVÁNÍ TLAČÍTKA ---
      if (!wrapper.querySelector(".blog-all-articles-wrapper")) {
        const firstLink = wrapper.querySelector(".news-item a");
        if (firstLink) {
          // Parsování URL z prvního odkazu (vezme první část cesty, např. /blog/)
          const urlPath = firstLink.getAttribute("href");
          const pathParts = urlPath.split("/");
          const categoryUrl = pathParts[1] ? `/${pathParts[1]}/` : "/blog/";

          const buttonWrapper = document.createElement("div");
          buttonWrapper.className = "blog-all-articles-wrapper";
          buttonWrapper.innerHTML = `
            <a href="${categoryUrl}" class="btn btn-secondary">
              ${moreArticlesText}
            </a>
          `;
          wrapper.appendChild(buttonWrapper);
        }
      }

      // --- 2. DOTAHování DATUMŮ ---
      const articles = wrapper.querySelectorAll(".news-item");
      articles.forEach(async (article) => {
        // Pokud už datum má (prevence duplicity), skipujeme
        if (article.querySelector(".article-published-date")) return;

        const link = article.querySelector("a").href;

        try {
          const response = await fetch(link);
          const html = await response.text();
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");

          const metaDate = doc.querySelector('meta[itemprop="datePublished"]');

          if (metaDate) {
            const rawDate = metaDate.getAttribute("content");
            const dateObj = new Date(rawDate);

            const formattedDate = dateObj.toLocaleDateString("cs-CZ", {
              day: "numeric",
              month: "numeric",
              year: "numeric",
            });

            const timeEl = document.createElement("time");
            timeEl.className = "article-published-date";
            timeEl.setAttribute("datetime", rawDate);
            timeEl.textContent = formattedDate;

            const textContainer = article.querySelector(".text");
            if (textContainer) {
              textContainer.prepend(timeEl);
            }
          }
        } catch (e) {
          console.warn(`[BENDER] Chyba při načítání data: ${link}`);
        }
      });
    });
  }
};

fetchArticleDatesAndButtons();

// FLAGS and card
const handleFlags = (product) => {};

const handleTextLayout = (product) => {};
const products = document.querySelectorAll(
  ".products-block .product:not(.banner-category)",
);

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
const handleCart = () => {};
if (document.body.classList.contains("ordering-process")) {
  handleCart();
  document.addEventListener("ShoptetDOMCartContentLoaded", handleCart);
}

// Vytvoří střední část patičky s logy, přesunutou navigací a flexibilním obalem
const handleFooterMiddle = () => {
  const currentLang = window.shoptetLang || "cs";
  const translations = window.projectTranslations[currentLang];
  const footerBottom = document.querySelector(".footer-bottom");
  const footerNav = document.querySelector(".footer-rows .footer-nav");

  if (!footerBottom || !translations) return;

  let footerMiddle = document.querySelector(".footer-middle");
  if (!footerMiddle) {
    footerMiddle = document.createElement("div");
    footerMiddle.className = "footer-middle";
    footerBottom.parentNode.insertBefore(footerMiddle, footerBottom);
  }

  let container = footerMiddle.querySelector(".container");
  if (!container) {
    container = document.createElement("div");
    container.className = "container";
    footerMiddle.appendChild(container);
  }

  let flexHolder = container.querySelector(".flex-holder");
  if (!flexHolder) {
    flexHolder = document.createElement("div");
    flexHolder.className = "flex-holder";
    container.appendChild(flexHolder);
  } else {
    flexHolder.innerHTML = "";
  }

  const logoFooter = document.createElement("div");
  logoFooter.className = "logo-footer";

  const originalLogoLink = document.querySelector(".site-name a");
  if (originalLogoLink) {
    const mainLogoLink = originalLogoLink.cloneNode(true);
    const mainLogoImg = mainLogoLink.querySelector("img");

    if (mainLogoImg) {
      mainLogoImg.src = translations.patickaLogo;
      mainLogoImg.removeAttribute("data-src");
    }

    logoFooter.appendChild(mainLogoLink);
  }

  const heurekaLink = document.createElement("a");
  heurekaLink.className = "heureka";
  heurekaLink.href = translations.heureka.href;

  const heurekaImg = document.createElement("img");
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

const reshapeSocials = () => {
  // Najdeme banner podle tvojí třídy
  const socialWrapper = document.querySelector('.socials-footer');
  if (!socialWrapper) return;

  // Najdeme span s daty
  const dataSpan = socialWrapper.querySelector('span[data-ec-promo-id]');
  if (!dataSpan) return;

  // 1. Získáme text a nahradíme &nbsp; mezerami
  const rawContent = dataSpan.innerHTML.replace(/\u00a0/g, " ");

  // 2. Regex [\s\S]+? zajistí, že projdeme i přes konce řádků (<br> nebo \n)
  const items = rawContent.match(/#([\s\S]+?)#/g);

  if (items) {
    const list = document.createElement('div');
    list.className = 'socials-list';

    items.forEach(item => {
      // Odstraníme mřížky a VŠECHNY HTML tagy (br, span atd.), pak trimujeme
      const cleanItem = item.replace(/#|<[^>]*>?/gm, "").trim();
      
      // Rozdělíme na jméno a URL
      const parts = cleanItem.split(';');

      if (parts.length >= 2) {
        const name = parts[0].trim();
        const url = parts[1].trim();

        const a = document.createElement('a');
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = `social-link ${name.toLowerCase()}`;
        
        // Vytvoření vnitřního spanu
        const span = document.createElement('span');
        span.className = 'sr-only';
        span.textContent = name;
        
        a.appendChild(span);
        list.appendChild(a);
      }
    });

    // 3. Najdeme .banner a nahradíme celý vnitřek naším novým seznamem
    const banner = socialWrapper.querySelector('.banner');
    if (banner) {
      banner.innerHTML = "";
      banner.appendChild(list);
    }
  }
};

// Přesune platební metody, dopravu, sociální sítě a newsletter do nové spodní sekce patičky
const handleFooterLower = () => {
  const footer = document.querySelector("footer");
  if (!footer) return;

  const footerBottom = document.querySelector(".footer-bottom");
  const footerMiddle = document.querySelector(".footer-middle");
  const payment = document.querySelector(".footer-payment");
  const shipping = document.querySelector(".footer-shipping");

  let footerLower = document.querySelector(".footer-lower");
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

  let container = footerLower.querySelector(".container");
  if (!container) {
    container = document.createElement("div");
    container.className = "container";
    footerLower.appendChild(container);
  }

  let flexHolder = container.querySelector(".flex-holder");
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
const handleFooterUpper = () => {
  const currentLang = window.shoptetLang || "cs";
  const translations = window.projectTranslations[currentLang];
  const openingHours = window.projectOpeningHours;
  const footer = document.querySelector("footer");

  if (!footer || !translations) return;

  const footerMiddle = document.querySelector(".footer-middle");
  const footerLower = document.querySelector(".footer-lower");
  const footerBottom = document.querySelector(".footer-bottom");
  const socialFooter = document.querySelector(".footer-rows .socials-footer");

  let footerUpper = document.querySelector(".footer-upper");
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

  let container = footerUpper.querySelector(".container");
  if (!container) {
    container = document.createElement("div");
    container.className = "container";
    footerUpper.appendChild(container);
  }

  let flexHolder = container.querySelector(".flex-holder");
  if (!flexHolder) {
    flexHolder = document.createElement("div");
    flexHolder.className = "flex-holder";
    container.appendChild(flexHolder);
  } else {
    flexHolder.innerHTML = "";
  }

  // 1. Blok s fotkou a nadpisem
  const contactPersonBlock = document.createElement("div");
  contactPersonBlock.className = "footer-contact-person";
  contactPersonBlock.innerHTML = `
    <img src="${translations.contactPerson.img}" alt="${translations.contactPerson.title}" class="contact-img" loading="lazy">
    <h3 class="contact-title">${translations.contactPerson.title}</h3>
  `;
  flexHolder.appendChild(contactPersonBlock);

  // 2. Blok pro telefon a email
  const contactDetailsBlock = document.createElement("div");
  contactDetailsBlock.className = "footer-contact-details";

  const originalPhone = document.querySelector(".project-phone");
  if (originalPhone) {
    const phoneLink = originalPhone.cloneNode(true);
    const hoursLabel = phoneLink.querySelector(".project-opening-hours");
    if (hoursLabel && openingHours) {
      hoursLabel.textContent = openingHours;
    }
    contactDetailsBlock.appendChild(phoneLink);
  }

  const originalEmail = document.querySelector(".project-email");
  if (originalEmail) {
    const emailLink = originalEmail.cloneNode(true);
    const subText = document.createElement("small");
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
const handleFooterBottom = () => {
  const footerBottom = document.querySelector(".footer-bottom");
  const copyright = footerBottom?.querySelector(".copyright");
  const signature = document.getElementById("signature");

  if (!footerBottom) return;

  // 1. Schováme původní Shoptet podpis, pokud tam je
  if (signature) {
    signature.style.display = "none";
  }

  // 2. Vytvoříme nový flexibilní obsah lišty
  const bottomFlex = document.createElement("div");
  bottomFlex.className = "footer-bottom-flex";

  // Leva strana: Copyright (očištěný o zbytečné texty, jen rok a název)
  const leftSide = document.createElement("div");
  leftSide.className = "footer-bottom-left";
  if (copyright) {
    const year = new Date().getFullYear();
    // Vytáhneme název shopu ze strong tagu nebo textu
    const shopName = copyright.querySelector("strong")?.textContent || "SNIPER";
    leftSide.innerHTML = `© ${year} ${shopName}`;
  }

  // Pravá strana: Tvůj link + Shoptet info
  const rightSide = document.createElement("div");
  rightSide.className = "footer-bottom-right";
  rightSide.innerHTML = `
    <a href="https://sniperdesign.cz" target="_blank" rel="noopener">sniperdesign.cz</a>
    <span class="separator">•</span>
    <span>Běží na <a href="https://www.shoptet.cz" target="_blank" rel="noopener">Shoptetu</a></span>
    <img src="https://cdn.myshoptet.com/prj/dist/master/cms/img/shoptetPremiumLogo.svg" alt="Shoptet" width="16" height="16">
  `;

  bottomFlex.appendChild(leftSide);
  bottomFlex.appendChild(rightSide);

  // 3. Nahradíme obsah footer-bottom (včetně promazání copyrightu)
  footerBottom.innerHTML = "";
  footerBottom.appendChild(bottomFlex);
};
const handleFooter = async () => {
  handleFooterUpper();
  handleFooterMiddle();
  reshapeSocials();
  handleFooterLower();
  handleFooterBottom();
  
};
handleFooter();


on("click", ".shp-tab-link", function (e) {
  const target = this.getAttribute("href");
  if (document.querySelector(target)) {
    smoothScrollTo(target, 200);
  }
});
