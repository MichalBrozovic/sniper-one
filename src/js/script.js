const sniperBenchmark = async (name, fn) => {
  const start = performance.now();
  const result = await fn();
  const end = performance.now();
  const duration = (end - start).toFixed(2);

  const color = duration > 50 ? "red" : duration > 10 ? "yellow" : "green";

  console.log(
    `%c[PERF] ${name}: %c${duration}ms`,
    "color: gray; font-weight: bold;",
    `color: ${color}; font-weight: bold;`,
  );

  return result;
};

// window.addEventListener('load', () => document.body.classList.add('hideSpinner'))
// debounce odstraněn - nepoužívá se

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

/**
 * cartWidgetRefactoring
 * Úprava zobrazení produktů a ošetření chování košíku (zastavení nechtěného zavírání).
 */
const cartWidgetRefactoring = () => {
  const shoptetData = dataLayer[0]?.shoptet;
  if (!shoptetData) return;

  const currencyLabel = shoptetData.currencyInfo.symbol;
  const cartItems = document.querySelectorAll(".cart-widget-product");

  // 1. Úprava cen u produktů
  const itemsToUpdate = [];
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
      itemsToUpdate.push({ product, productPrice, productSKU, productUnit });
    }
  });

  itemsToUpdate.forEach(
    ({ product, productPrice, productSKU, productUnit }) => {
      const priceWrapper = document.createElement("div");
      priceWrapper.classList.add("cart-widget-product-price");
      priceWrapper.appendChild(productPrice);
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
      product.appendChild(priceWrapper);
    },
  );

  // 2. Souhrn košíku
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
    const texts = langData.cart;

    summary.innerHTML = `
      <div class="popup-cart-summary-item with_vat">
        <strong class="popup-cart-summary-item-label">${texts.totalProducts}:</strong>
        <strong class="popup-cart-summary-item-value">${priceVAT} ${currencyLabel}</strong>
      </div>
      <div class="popup-cart-summary-item without_vat">
        <span class="popup-cart-summary-item-label">${texts.totalWithoutVat}:</span>
        <span class="popup-cart-summary-item-value">${priceNoVAT} ${currencyLabel}</span>
      </div>`;
    cartProductsWrapper.after(summary);
  }

  // 3. Doprava zdarma
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
      if (strong.innerText.includes("ZDARMA"))
        strong.classList.add("free-shipping-strong");
    });
  }

  // 4. FIX LOGIKY ZAVÍRÁNÍ (Mobile i Desktop)
  const cartWidget = document.querySelector(".cart-widget");
  if (cartWidget) {
    // Zastavení bublání z celého widgetu – nepustí kliknutí na ten obalový odkaz <a>
    cartWidget.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    // Mobilní křížek
    if (window.innerWidth < 768 && !cartWidget.querySelector(".close")) {
      const closeBtn = document.createElement("div");
      closeBtn.classList.add("close", "black");
      cartWidget.prepend(closeBtn);

      closeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        document.body.classList.remove("cart-window-visible");
        cartWidget.setAttribute("aria-hidden", "true");
      });
    }

    // Tlačítko "Pokračovat" – musíme zajistit, aby udělalo redirect a nic jiného
    const continueBtn = document.getElementById("continue-order-button");
    if (continueBtn) {
      continueBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        // Pokud by Shoptet stále blokoval redirect, odkomentuj řádek níže:
        // window.location.href = continueBtn.href;
      });
    }
  }

  // 5. Kliknutí MIMO košík (zavření)
  // Použijeme jednorázový handler, aby se to nekupilo
  const closeOutside = (e) => {
    if (
      cartWidget &&
      !cartWidget.contains(e.target) &&
      document.body.classList.contains("cart-window-visible")
    ) {
      document.body.classList.remove("cart-window-visible");
      cartWidget.setAttribute("aria-hidden", "true");
    }
  };

  // Přidáme na document, aby to fungovalo globálně
  document.removeEventListener("click", closeOutside);
  document.addEventListener("click", closeOutside);
};

document.addEventListener("ShoptetDOMCartContentLoaded", cartWidgetRefactoring);
/**
 * loginWidgetRefactoring
 * Odstrukturuje defaultní login widget popup a přidává uživatelské benefity v B2C/B2B podání.
 */
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
      section.classList.add("favourite-categories");
      const container = document.createElement("div");
      container.classList.add("container", "active");
      section.appendChild(container);

      for (let j = 1; j < blocksRaw.length; j += 2) {
        const titleText = blocksRaw[j].trim();
        const contentText = blocksRaw[j + 1] ? blocksRaw[j + 1].trim() : "";

        if (titleText) {
          const h2 = document.createElement("h2");
          h2.innerHTML = titleText;
          container.appendChild(h2);
        }

        const swiperHelper = document.createElement("div");
        swiperHelper.className = "swiper-helper";

        const swiperDiv = document.createElement("div");
        swiperDiv.className = "swiper swiper-favourite-categories";
        swiperDiv.style.width = "100%";
        swiperDiv.style.overflow = "hidden";

        swiperDiv.innerHTML = `<div class="swiper-wrapper"></div>`;
        swiperHelper.appendChild(swiperDiv);

        swiperHelper.insertAdjacentHTML(
          "beforeend",
          `
      <button class="swiper-button-prev" aria-label="Prev category"><div class="sr-only">Next category</div></button>
      <button class="swiper-button-next" aria-label="Next category"><div class="sr-only">Prev category</div></button>
        `,
        );

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

        container.appendChild(swiperHelper);

        // VYTVOŘENÍ PAGINACE VNĚ SWIPERU
        const paginationDiv = document.createElement("div");
        paginationDiv.className = "swiper-pagination";
        container.appendChild(paginationDiv);
      }

      wrapper.remove();

      // Definujeme cíle pro přesun. Pokud jsme na mobilu, prioritizujeme .benefitBanner
      const isMobile = document.body.classList.contains("mobile");
      const isMultipleColumns = document.body.classList.contains(
        "multiple-columns-body",
      );

      let targets;

      if (isMultipleColumns) {
        // Targety specificky pro více sloupců
        targets = [
          ".benefitBanner",
          ".content-wrapper:has(.benefitBanner)",
          ".before-carousel",
        ];
      } else {
        // Klasický switch mezi mobilem a desktopem
        targets = isMobile
          ? [
              ".benefitBanner",
              ".content-wrapper:has(.benefitBanner)",
              ".before-carousel",
            ]
          : [
              ".content-wrapper:has(.benefitBanner)",
              ".benefitBanner",
              ".before-carousel",
            ];
      }

      // Funkce moveElement se pokusí vložit sekci za první nalezený target ze seznamu
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
    spaceBetween: 16,
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
      768: { slidesPerView: 3, spaceBetween: 16 },
      880: { slidesPerView: 4, spaceBetween: 16 },
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
  const container =
    document.querySelector(".middle-banners-wrapper") ||
    document.querySelector(".body-banners");
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

// Šablona pro ovládání množství
const quantityTemplate = document.createElement("span");
quantityTemplate.className = "quantity";
quantityTemplate.innerHTML = `
  <span class="increase-tooltip js-increase-tooltip" data-trigger="manual" data-container="body" data-original-title="Není možné zakoupit více než 9999 ks." aria-hidden="true" role="tooltip" data-testid="tooltip"></span>
  <span class="decrease-tooltip js-decrease-tooltip" data-trigger="manual" data-container="body" data-original-title="Minimální množství, které lze zakoupit, je 1 ks." aria-hidden="true" role="tooltip" data-testid="tooltip"></span>
  <label>
      <input type="number" name="amount" value="1" class="amount" autocomplete="off" data-decimals="0" step="1" min="1" max="9999" aria-label="Množství" data-testid="cartAmount">
  </label>
  <button class="increase" type="button" aria-label="Zvýšit množství o 1" data-testid="increase">
      <span class="increase__sign">+</span>
  </button>
  <button class="decrease" type="button" aria-label="Snížit množství o 1" data-testid="decrease">
      <span class="decrease__sign">−</span>
  </button>
`;

// Přeskládá prvky v produktové kartě
const handleTextLayout = (product) => {
  const pCode = product.querySelector(".p-code");
  const ratingsWrapper = product.querySelector(".ratings-wrapper");
  const pDesc = product.querySelector(".p-desc");
  const nameLink = product.querySelector(".name");
  const availability = product.querySelector(".availability");

  const flagDiscount = product.querySelector(".flag-discount");
  const priceStandard = flagDiscount
    ? flagDiscount.querySelector(".price-standard")
    : null;

  const pricesWrapper = product.querySelector(".prices");
  const priceFinal = pricesWrapper
    ? pricesWrapper.querySelector(".price-final")
    : null;

  const form = product.querySelector(".p-tools form.pr-action");
  const hiddenAmountInput = form
    ? form.querySelector('input[name="amount"]')
    : null;
  const submitBtn = form ? form.querySelector("button[type='submit']") : null;
  const prListUnit = product.querySelector(".pr-list-unit");

  if (pCode && ratingsWrapper) ratingsWrapper.append(pCode);

  if (pDesc && nameLink) nameLink.after(pDesc);

  if (pricesWrapper && availability) {
    const pricesAvailWrapper = document.createElement("div");
    pricesAvailWrapper.className = "prices-availability-wrapper";

    pricesWrapper.before(pricesAvailWrapper);
    pricesAvailWrapper.append(availability);
    pricesAvailWrapper.append(pricesWrapper);
  }

  if (priceStandard && pricesWrapper) {
    const oldPriceWrapper = document.createElement("div");
    oldPriceWrapper.className = "price-standard-wrapper";

    const prevNode = priceStandard.previousSibling;
    if (
      prevNode &&
      prevNode.nodeType === Node.TEXT_NODE &&
      prevNode.textContent.trim() === "od"
    ) {
      oldPriceWrapper.append(prevNode);
    }

    oldPriceWrapper.append(priceStandard);

    if (priceFinal) priceFinal.before(oldPriceWrapper);
    else pricesWrapper.append(oldPriceWrapper);
  }

  if (form) {
    if (hiddenAmountInput) hiddenAmountInput.remove();

    const quantityWrapper = quantityTemplate.cloneNode(true);

    if (submitBtn) submitBtn.before(quantityWrapper);
    else form.append(quantityWrapper);
  }

  if (prListUnit) {
    prListUnit.innerHTML = prListUnit.innerHTML.replace(/&nbsp;|\u00A0/g, "");
  }
};

// Spouštěč
const initProducts = () => {
  const products = document.querySelectorAll(
    ".products-block .product:not(.banner-category):not(.is-processed)",
  );

  products.forEach((product) => {
    product.classList.add("is-processed");
    if (typeof handleTextLayout === "function") handleTextLayout(product);
  });
};

initProducts();
document.addEventListener("ShoptetDOMContentLoaded", initProducts);

const SHARED_SWIPER_CONFIG = {
  customOptions: {
    dots: true,
    arrows: true,
    helper: true, // Aktivuje .swiper-helper obal
  },
  swiperOptions: {
    slidesPerView: 1.2,
    spaceBetween: 16,
    watchSlidesProgress: true,
    breakpointsBase: "container",
    breakpoints: {
      560: { slidesPerView: 2, spaceBetween: 16 },
      768: { slidesPerView: 3, spaceBetween: 16 },
      1124: { slidesPerView: 4, spaceBetween: 16 },
    },
    on: {
      init: (swiper) => swiperize.setLastVisibleSlide(swiper),
      slideChange: (swiper) => swiperize.setLastVisibleSlide(swiper),
    },
  },
};

/**
 * Restrukturalizuje produktové sekce na úvodní straně: obalí nadpis a produkty do
 * struktury section > .container a nahradí jimi původní elementy na jejich místě.
 */

/**
 * reshapeProductSections
 * Obalí titulky a bloky produktů na domovské stránce do bezpečné sémantické <section>.
 * Využívá "Batched DOM" úpravy pro redukci Layout Thrashingu (fáze čtení oddělena od zápisu).
 */
const reshapeProductSections = () => {
  if (window.shoptetPage !== "homepage") return;

  const headings = document.querySelectorAll(".homepage-group-title");

  // 1. Fáze čtení: sesbíráme všechny uzly
  const targets = [];
  headings.forEach((heading) => {
    const sectionId = heading.className.match(
      /homepage-products-heading-(\d+)/,
    )?.[1];
    if (sectionId) {
      const productEl = document.querySelector(
        `.homepage-products-${sectionId}`,
      );
      if (productEl) targets.push({ heading, productEl, sectionId });
    }
  });

  // 2. Fáze zápisu: upravíme DOM bez prokládání čtením
  targets.forEach(({ heading, productEl, sectionId }) => {
    // Vyčištění tříd
    if (productEl.classList.contains("products-inline")) {
      productEl.classList.remove("products-inline");
    }
    if (!productEl.classList.contains("products-block")) {
      productEl.classList.add("products-block");
    }

    // Vytvoření nového layoutu
    const section = document.createElement("section");
    section.className = `product-section product-section-${sectionId} is-processed`;

    const container = document.createElement("div");
    container.className = "container";

    // Přesun do paměti a následný append
    heading.replaceWith(section);
    container.append(heading, productEl);
    section.append(container);
  });
};

/**
 * Vytvoří Swapper navigaci a přesune první 3 sekce hned za ni.
 * Ovládá viditelnost sekcí pomocí třídy .active.
 */
const initProductSwapper = async () => {
  if (window.shoptetPage !== "homepage") return;

  const sections = Array.from(
    document.querySelectorAll(".product-section"),
  ).slice(0, 3);
  if (sections.length < 3) return;

  const lang = window.shoptetLang || "cs";
  const trans = window.projectTranslations[lang]?.homepage || {
    popularProducts: "Nejoblíbenější produkty",
  };

  // Definujeme kotvu (anchor) dynamicky podle zařízení
  const isMobile = document.body.classList.contains("mobile");

  const anchor = isMobile
    ? document.querySelector(".favourite-categories") ||
      document.querySelector(".benefitBanner") ||
      document.querySelector(".banners-row") ||
      document.querySelector("header")
    : document.querySelector(".favourite-categories") ||
      document.querySelector(".content-wrapper:has(.benefitBanner)") ||
      document.querySelector(".before-carousel") ||
      document.querySelector("header");
  if (!anchor) return;

  const swapperModule = document.createElement("section");
  swapperModule.className = "product-section-swapper is-processed";

  const nav = document.createElement("div");
  nav.className = "product-swapper-nav";

  const frag = document.createDocumentFragment();

  sections.forEach((section, index) => {
    const heading = section.querySelector(".homepage-group-title");
    if (!heading) return;

    const originalText = heading.innerText.trim();
    // Zrychlený ID generátor bez zbytečné normalizace
    const safeId = originalText
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    section.classList.add("swapper-content");
    if (index === 0) section.classList.add("active");
    section.id = `section-${safeId}`;
    heading.style.display = "none";

    const btn = document.createElement("button");
    btn.className = `swapper-btn ${index === 0 ? "active" : ""}`;
    btn.innerText = originalText;

    btn.onclick = () => {
      if (btn.classList.contains("active")) return;
      swapperModule
        .querySelectorAll(".swapper-btn")
        .forEach((b) => b.classList.remove("active"));
      sections.forEach((s) => s.classList.remove("active"));
      btn.classList.add("active");
      section.classList.add("active");
      const sw = section.querySelector(".swiper")?.swiper;
      if (sw) sw.update();
    };

    nav.append(btn);
  });

  const mainTitle = document.createElement("h2");
  mainTitle.className = "homepage-group-title main-swapper-title";
  mainTitle.innerHTML = trans.popularProducts;

  const container = document.createElement("div");
  container.className = "container";
  container.append(mainTitle, nav);
  swapperModule.append(container);

  // Vložení všeho najednou přes fragment šetří reflow
  frag.append(swapperModule);
  sections.forEach((s) => frag.append(s));
  anchor.after(frag);
};
// Funkce restrukturalizuje Welcome text a galerii na homepage do standardního kontejneru.
const handleWelcomeText = () => {
  if (window.shoptetPage !== "homepage") return;

  const welcomeModule = document.querySelector(".homepage-box.welcome-wrapper");
  if (!welcomeModule || welcomeModule.classList.contains("is-processed"))
    return;

  const welcomeInner = welcomeModule.querySelector(".welcome");
  const gallery = welcomeModule.querySelector(".plus-gallery-wrap");

  if (welcomeInner) {
    // 1. PŘESTAVBA STRUKTURY
    const wrapperIn = document.createElement("div");
    wrapperIn.className = "content-wrapper-in";

    const container = document.createElement("div");
    container.className = "container";

    const innerWrapper = document.createElement("div");
    innerWrapper.className = "welcome-wrapper";

    // Vložíme welcome a galerii jako sourozence
    innerWrapper.append(welcomeInner);
    if (gallery) {
      innerWrapper.append(gallery);
    }

    container.append(innerWrapper);
    wrapperIn.append(container);

    welcomeModule.innerHTML = "";
    welcomeModule.append(wrapperIn);

    welcomeModule.classList.add(
      "content-wrapper",
      "processed-welcome-section",
      "is-processed",
    );
  }

  // 2. PŘESUN NA POZICI
  const swapperSections = document.querySelectorAll(".swapper-content");
  const isMobile = document.body.classList.contains("mobile");

  let target = null;

  if (swapperSections.length) {
    target = swapperSections[swapperSections.length - 1];
  } else if (isMobile) {
    target =
      document.querySelector(".product-section") ||
      document.querySelector(".favourite-categories") ||
      document.querySelector(".banners-row") ||
      document.querySelector("header");
  } else {
    target =
      document.querySelector(".product-section") ||
      document.querySelector(".favourite-categories") ||
      document.querySelector(".before-carousel") ||
      document.querySelector("header");
  }

  if (target && welcomeModule) {
    target.after(welcomeModule);
  }
};

/**
 * Hlavní orchestrátor
 */
/**
 * handleHomePage
 * Centrální orchestrátor pro načítání Homepage prvků.
 * Spouští bezpečně reshaping bloků a logiku sliderů měřenou benchmarkem.
 */
const handleHomePage = async () => {
  if (window.shoptetPage !== "homepage") return;

  // 1. Nejdřív základní reshape všech sekcí (section > container)
  await sniperBenchmark("Reshape Sections", () => {
    reshapeProductSections();
  });

  // 2. Potom vytvoření Swapperu a přesun sekcí (vytvoří .swapper-content a .active)
  await sniperBenchmark("Swapper Creation", () => {
    initProductSwapper();
  });

  // 3. Přesun Welcome textu (teď už uvidí ty swapper sekce)
  await sniperBenchmark("Welcome Text Move", () => {
    handleWelcomeText();
  });

  // 3. Nakonec oživení Swiperem na všech kontejnerech
  if (typeof swiperize === "function") {
    const sections = document.querySelectorAll(".product-section");

    const selectors = Array.from(sections).map((s) => {
      const id = s.className.match(/product-section-(\d+)/)?.[1];
      return `.product-section-${id} .homepage-products-${id}`;
    });

    if (selectors.length) {
      await sniperBenchmark("Swiperize Init", () => {
        swiperize({
          containers: selectors,
          slide: ".product",
          ...SHARED_SWIPER_CONFIG,
        });
      });
    }
  }
};

handleHomePage();

//Category || kategorie

/**
 * POMOCNÉ NÁSTROJE
 */

// Funkce zajišťuje plynulý posun stránky na začátek obsahu s offsetem 100px.
const scrollToContent = () => {
  const content = document.querySelector("#content");
  if (content) {
    // Použijeme RequestAnimationFrame pro synchronizaci s vykreslením prohlížeče
    requestAnimationFrame(() => {
      setTimeout(() => {
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = content.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 50); // Stačí krátký timeout, protože event už hlásí hotový DOM
    });
  }
};

// Vypnutí interního scrollu Shoptetu, aby se nepral s naší logikou.
if (typeof shoptet !== "undefined" && shoptet.scripts) {
  shoptet.scripts.scrollToHeader = () => {
    return false; // Shoptet teď neudělá nic
  };
}

// Reagujeme na moment, kdy Shoptet potvrdí, že je obsah na místě a připraven.
document.addEventListener("ShoptetDOMPageContentLoaded", () => {
  scrollToContent();
});

// Vygeneruje seznam aktivních filtrů pod filtrační lištou. Kliknutím na tag se filtr zruší.
const handleCheckedFilters = () => {
  const filtersWrapper = document.querySelector("#filters-wrapper");
  const activeCheckboxes = document.querySelectorAll(
    '#filters input[type="checkbox"]:checked',
  );

  const oldActive = document.querySelector(".active-filters-container");
  if (oldActive) oldActive.remove();

  if (activeCheckboxes.length > 0 && filtersWrapper) {
    const container = document.createElement("div");
    container.className = "active-filters-container";

    const list = document.createElement("div");
    list.className = "active-filters-list";

    activeCheckboxes.forEach((input) => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (!label) return;

      const tag = document.createElement("div");
      tag.className = "active-filter-tag";
      const cleanText = label.textContent.split("(")[0].trim();
      tag.innerHTML = `${cleanText} <div class="close black small"></div>`;

      tag.addEventListener("click", () => {
        input.click();
      });

      list.appendChild(tag);
    });

    container.appendChild(list);

    const clearBtn = document.querySelector("#clear-filters");
    if (clearBtn) container.appendChild(clearBtn);

    filtersWrapper.after(container);
  }
};

let categoryBottomCache = null;

// Pomocná funkce pro získání klíče k uložení spodního popisu kategorie.
const getCategoryBottomCacheKey = () => {
  const pageId = window.dataLayer?.[0]?.shoptet?.pageId || "unknown";
  return `bottom_desc_${pageId}`;
};

// Funkce stáhne první stranu kategorie, vyjme spodní popis a rovnou do něj přidá H2 nadpis z dataLayeru.
const fetchAndBuildCategoryBottom = async () => {
  try {
    const baseUrl = window.location.pathname.replace(/\/strana-[0-9]+\/?/, "/");
    const response = await fetch(baseUrl);
    const text = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");

    const fetchedDesc = doc.querySelector(".category__secondDescription");

    if (fetchedDesc) {
      fetchedDesc.id = "category-description-bottom";
      const categoryName = window.dataLayer?.[0]?.shoptet?.category?.path || "";

      if (categoryName && !fetchedDesc.querySelector("h2")) {
        const h2 = document.createElement("h2");
        h2.textContent = categoryName;
        fetchedDesc.prepend(h2);
      }
      return fetchedDesc;
    }
  } catch (error) {
    console.error("Chyba při stahování spodního popisu:", error);
  }
  return null;
};

// Funkce zajišťuje persistenci spodního popisu s H2 nadpisem a obaluje ho do sémantické sekce.
const handleCategoryBottomText = async () => {
  if (window.shoptetPage !== "category") return;

  const contentWrapper = document.querySelector("#content-wrapper");
  if (!contentWrapper) return;

  let currentDesc = document.querySelector(".category__secondDescription");
  const cacheKey = getCategoryBottomCacheKey();

  if (currentDesc && !categoryBottomCache) {
    currentDesc.id = "category-description-bottom";
    const categoryName = window.dataLayer?.[0]?.shoptet?.category?.path || "";

    if (categoryName && !currentDesc.querySelector("h2")) {
      const h2 = document.createElement("h2");
      h2.textContent = categoryName;
      currentDesc.prepend(h2);
    }

    // Zabalení do nové struktury section > container
    const section = document.createElement("section");
    section.className = "section-second-description";
    const container = document.createElement("div");
    container.className = "container";

    container.append(currentDesc.cloneNode(true));
    section.append(container);

    categoryBottomCache = section.cloneNode(true);
    sessionStorage.setItem(cacheKey, section.outerHTML);

    // Odstranění původního popisu (aby nebyl duplicitně v content-wrapper) a jeho vložení zpět už v novém obalu
    currentDesc.remove();
  } else if (!categoryBottomCache) {
    const savedData = sessionStorage.getItem(cacheKey);

    if (savedData) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = savedData;
      categoryBottomCache = tempDiv.firstElementChild;
    } else {
      const fetchedDesc = await fetchAndBuildCategoryBottom();
      if (fetchedDesc) {
        const section = document.createElement("section");
        section.className = "section-second-description";
        const container = document.createElement("div");
        container.className = "container";

        container.append(fetchedDesc);
        section.append(container);

        categoryBottomCache = section;
        sessionStorage.setItem(cacheKey, categoryBottomCache.outerHTML);
      }
    }
  }

  const isDescInDom = document.querySelector(".section-second-description");

  if (categoryBottomCache && !isDescInDom) {
    // Vkládáme těsně za #content-wrapper. Pokud za ním budou benefity, posunou se až za tento text.
    contentWrapper.after(categoryBottomCache.cloneNode(true));
  }
};

// Funkce najde benefitní bannery uvnitř obsahového wrapperu, přesune je za něj (případně za spodní popis)
// a obalí je novou sémantickou sekcí s vlastním kontejnerem.
const handleCategoryBenefits = () => {
  if (window.shoptetPage !== "category") return;

  const benefitsBanner = document.querySelector(
    "#content-wrapper .benefitBanner.position--benefitCategory",
  );
  const contentWrapper = document.querySelector("#content-wrapper");

  if (!benefitsBanner || !contentWrapper) return;

  let section = document.querySelector(".section-benefits");

  if (!section) {
    section = document.createElement("section");
    section.className = "section-benefits";

    const container = document.createElement("div");
    container.className = "container";
    section.append(container);

    // Pokud už v DOMu je vložený spodní popis, vložíme benefity až ZA NĚJ.
    const bottomDescSection = document.querySelector(
      ".section-second-description",
    );
    if (bottomDescSection) {
      bottomDescSection.after(section);
    } else {
      contentWrapper.after(section);
    }
  }

  const container = section.querySelector(".container");
  if (container) {
    container.innerHTML = "";
    container.append(benefitsBanner);
  }
};

// Souhrnný orchestrátor pro doplňkové funkce kategorie, které se spouští po hlavní logice.
const handleCategoryNonCritical = async () => {
  if (window.shoptetPage !== "category") return;

  if (typeof handleCheckedFilters === "function") {
    handleCheckedFilters();
  }

  await handleCategoryBottomText();
  handleCategoryBenefits();

  const events = ["shoptet.contentUpdated", "ShoptetDOMPageContentLoaded"];
  events.forEach((eventName) => {
    document.removeEventListener(eventName, handleCategoryNonCritical);
    document.addEventListener(eventName, handleCategoryNonCritical);
  });
};

handleCategoryNonCritical();

//Related & Alternative || související a podobné
// Funkce připraví sekce pro související a podobné produkty a deleguje jejich sestavení na modul swiperize.
const handleRelatedAndAlternativeProducts = () => {
  const mainContent = document.querySelector(
    "#content-wrapper main:has(.p-detail)",
  );
  if (!mainContent) return;

  const relatedHeader = document.querySelector(".products-related-header");
  const relatedGrid = document.querySelector(".products-related");
  const altGrid = document.querySelector(".products-alternative");
  const selectorsToSwiperize = [];

  if (relatedHeader && relatedGrid) {
    const relatedSection = document.createElement("section");
    relatedSection.className = "product-section related-section is-processed";

    relatedHeader.className = "homepage-group-title";
    relatedSection.append(relatedHeader);
    relatedSection.append(relatedGrid);

    mainContent.append(relatedSection);
    selectorsToSwiperize.push(".related-section .products-related");
  }

  if (altGrid) {
    const altTitleText =
      window.projectTranslations?.[window.shoptetLang]?.productDetail
        ?.alternativeProducts || "Podobné produkty";

    const altSection = document.createElement("section");
    altSection.className = "product-section alternative-section is-processed";

    const altHeader = document.createElement("h2");
    altHeader.className = "homepage-group-title";
    altHeader.textContent = altTitleText;

    altSection.append(altHeader);
    altSection.append(altGrid);

    mainContent.append(altSection);
    selectorsToSwiperize.push(".alternative-section .products-alternative");
  }

  document.querySelector("#productsAlternative")?.remove();

  if (typeof window.swiperize === "function" && selectorsToSwiperize.length) {
    window.swiperize({
      containers: selectorsToSwiperize,
      slide: ".product",
      ...SHARED_SWIPER_CONFIG,
    });
  }
};

/**
 * handleProductBenefits
 * Přesune banner s benefity nakonec obsahu produktu pod detailní popisy.
 * Využívá requestAnimationFrame pro render optimizaci a zamezení CLS (posunu textu).
 */
const handleProductBenefits = () => {
  const benefits = document.querySelector(".benefitBanner");
  const mainContent = document.querySelector(
    "#content-wrapper main:has(.p-detail)",
  );

  if (benefits && mainContent) {
    requestAnimationFrame(() => mainContent.append(benefits));
  }
};

/**
 * handleProductFiles
 * Najde soubory ke stažení a přesune je do struktury popisu produktu s vlastním nadpisem a obalem.
 */
const handleProductFiles = () => {
  const files = document.querySelector("#relatedFiles");
  if (!files) return;

  const description = document.querySelector("#description");
  const descriptionInner = description?.querySelector(".description-inner");
  let extendedDescription = description?.querySelector(".extended-description");

  const filesWrapper = document.createElement("div");
  filesWrapper.className = "product-files";

  const title = document.createElement("h3");
  title.textContent =
    window.projectTranslations?.[window.shoptetLang]?.productDetail?.gpsr ||
    "Informace o výrobci";

  filesWrapper.append(title);
  filesWrapper.append(files);

  requestAnimationFrame(() => {
    if (extendedDescription) {
      extendedDescription.append(filesWrapper);
    } else if (descriptionInner) {
      extendedDescription = document.createElement("div");
      extendedDescription.className = "extended-description";
      extendedDescription.append(filesWrapper);
      descriptionInner.append(extendedDescription);
    } else {
      files.parentNode?.insertBefore(filesWrapper, files);
      filesWrapper.append(files);
    }
  });
};

/**
 * handleProductVideos
 * Najde sekci s videem a přesune ji na konec popisu produktu.
 */
const handleProductVideos = () => {
  const videos = document.querySelector("#productVideos");
  if (!videos) return;

  const description = document.querySelector("#description");
  const descriptionInner = description?.querySelector(".description-inner");
  let extendedDescription = description?.querySelector(".extended-description");

  requestAnimationFrame(() => {
    if (extendedDescription) {
      extendedDescription.append(videos);
    } else if (descriptionInner) {
      extendedDescription = document.createElement("div");
      extendedDescription.className = "extended-description";
      extendedDescription.append(videos);
      descriptionInner.append(extendedDescription);
    }
  });
};

// Funkce extrahuje logo a text výrobce, vyčistí balast a přesune výsledek do info panelu produktu.
const handleManufacturer = () => {
  const manufacturer = document.querySelector("#manufacturerDescription");
  const infoWrapper = document.querySelector(".product-top .p-info-wrapper");

  if (!manufacturer || !infoWrapper) return;

  const img = manufacturer.querySelector("img");
  const textWrapper = document.createElement("div");
  textWrapper.className = "text-wrapper";

  const paragraphs = manufacturer.querySelectorAll("p");
  paragraphs.forEach((p) => {
    if (p.querySelector("img")) {
      return;
    }
    textWrapper.append(p);
  });

  manufacturer.innerHTML = "";
  if (img) {
    manufacturer.append(img);
  }
  manufacturer.append(textWrapper);

  infoWrapper.append(manufacturer);
};

// Funkce narovná strukturu grafu hodnocení (univerzální pro detail i samostatnou stránku)
const handleRatingGraph = (container = document) => {
  const rateLists = container.querySelectorAll(".rate-list");
  if (rateLists.length === 0) return;

  rateLists.forEach((list) => {
    const rateBlock = list.querySelector(".rate-block");
    // Hledáme rate-count kdekoli uvnitř .rate-list (může být sourozenec i potomek baru)
    const rateCount = list.querySelector(".rate-count");

    if (rateBlock && rateCount) {
      // Pokud je count schovaný uvnitř baru, vyndáme ho ven a dáme ho za rate-block
      rateBlock.after(rateCount);
    }
  });
};
if (document.querySelector("#ratingWrapper")) {
  handleRatingGraph();
}
// Funkce vyčistí tab hodnocení, narovná odpovědi a přidá hlavní nadpis
const handleProductRating = () => {
  const ratingTab = document.querySelector("#ratingTab");
  if (!ratingTab) return;

  // 1. Voláme samostatnou funkci pro graf
  handleRatingGraph(ratingTab);

  // 2. Narovnání admin odpovědí v seznamu hodnocení
  const ratingsList = ratingTab.querySelector("#ratingsList");
  if (ratingsList) {
    const individualRatings = ratingsList.querySelectorAll(
      ".vote-wrap:not(.admin-response .vote-wrap)",
    );
    individualRatings.forEach((rating) => {
      const adminResponse = rating.querySelector(".admin-response");
      if (adminResponse) {
        rating.after(adminResponse);
      }
    });
  }

  // 3. Generování nadpisu na začátek tabu
  const lang = window.shoptetLang || "cs";
  const ratingTitle =
    window.projectTranslations?.[lang]?.productDetail?.rating || "Hodnocení";

  const starsLabel = ratingTab.querySelector(".stars-label");
  const countMatch = starsLabel?.textContent.match(/\d+/);
  const count = countMatch ? countMatch[0] : 0;

  const existingHeading = ratingTab.querySelector(".rating-main-title");
  if (existingHeading) existingHeading.remove();

  const heading = document.createElement("h3");
  heading.className = "rating-main-title";
  heading.textContent = count > 0 ? `${ratingTitle} (${count})` : ratingTitle;

  ratingTab.prepend(heading);
};

// Funkce vyčistí strukturu diskuze a přidá hlavní nadpis na začátek sekce bez ohledu na to, zda již obsahuje příspěvky.
const handleProductDiscussion = () => {
  const discussionTab = document.querySelector("#productDiscussion");
  if (!discussionTab) return;

  const discussionList = discussionTab.querySelector("#discussionsList");

  if (discussionList) {
    const allVotes = discussionList.querySelectorAll(".vote-wrap");

    allVotes.forEach((vote) => {
      const ratingWrap = vote.querySelector(".vote-rating");
      if (ratingWrap) {
        const emptySpan = ratingWrap.querySelector("span:not([class])");
        if (emptySpan) emptySpan.remove();
      }

      const replyBtn = vote.querySelector(
        "button[data-testid='buttonAddReply']",
      );
      if (replyBtn) {
        replyBtn.classList.remove("btn", "btn-sm", "btn-primary");
      }

      const nestedVotesWrap = vote.querySelector(".votes-wrap");
      if (nestedVotesWrap) {
        vote.after(nestedVotesWrap);
      }
    });
  }

  const lang = window.shoptetLang || "cs";
  const discussionTitle =
    window.projectTranslations?.[lang]?.productDetail?.discussion || "Diskuze";
  const count = discussionList
    ? discussionList.querySelectorAll(".vote-wrap[data-testid='wrapComment']")
        .length
    : 0;

  const existingHeading = discussionTab.querySelector(".discussion-main-title");
  if (existingHeading) existingHeading.remove();

  const heading = document.createElement("h3");
  heading.className = "discussion-main-title";
  heading.textContent =
    count > 0 ? `${discussionTitle} (${count})` : discussionTitle;

  discussionTab.prepend(heading);
};

// Funkce najde bezpečnostní informace GPSR a přesune je do struktury popisu produktu s vlastním nadpisem a obalem.
const handleProductGPSR = () => {
  const gpsr = document.querySelector("#otherInformation");
  if (!gpsr) return;

  const description = document.querySelector("#description");
  const descriptionInner = description?.querySelector(".description-inner");
  let extendedDescription = description?.querySelector(".extended-description");

  const gpsrWrapper = document.createElement("div");
  gpsrWrapper.className = "product-gpsr";

  const title = document.createElement("h3");
  const lang = window.shoptetLang || "cs";
  title.textContent =
    window.projectTranslations?.[lang]?.productDetail?.gpsr ||
    "Informace o výrobci";

  gpsrWrapper.append(title);
  gpsrWrapper.append(gpsr);

  if (extendedDescription) {
    extendedDescription.append(gpsrWrapper);
  } else if (descriptionInner) {
    extendedDescription = document.createElement("div");
    extendedDescription.className = "extended-description";
    extendedDescription.append(gpsrWrapper);
    descriptionInner.append(extendedDescription);
  } else {
    gpsr.parentNode?.insertBefore(gpsrWrapper, gpsr);
    gpsrWrapper.append(gpsr);
  }
};

const handleProductDetailNonCritical = () => {
  if (window.shoptetPage !== "productDetail") return;
  handleRelatedAndAlternativeProducts();
  handleProductBenefits();
  handleProductFiles();
  handleProductVideos();
  handleManufacturer();
  handleProductRating();
  handleProductDiscussion();
  handleProductGPSR();
  const events = ["shoptet.contentUpdated", "shoptet.variantsUpdated"];
  events.forEach((eventName) => {
    document.removeEventListener(eventName, handleProductDetailNonCritical);
    document.addEventListener(eventName, (e) => {
      handleProductDetailNonCritical();
    });
  });
};

handleProductDetailNonCritical();

// Vytvoří střední část patičky s logy a rozdělenou navigací (bloky samostatně)
/**
 * handleFooterMiddle
 * Přeskládává obsah prostřední patičky, zejména logo a Heureka certifikát.
 * Vkládá modifikované elementy do DOMu až nakonec pro optimalizaci renderování.
 */
const handleFooterMiddle = () => {
  const currentLang = window.shoptetLang || "cs";
  const translations = window.projectTranslations[currentLang];
  const footerBottom = document.querySelector(".footer-bottom");
  const footerNav = document.querySelector(".footer-nav");

  if (!footerBottom || !translations) return;

  const isNew = !document.querySelector(".footer-middle");
  const footerMiddle =
    document.querySelector(".footer-middle") || document.createElement("div");
  if (isNew) footerMiddle.className = "footer-middle";

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

  // 1. Logo sekce
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

  // 2. Navigace - rozebírání na jednotlivé bloky
  if (footerNav) {
    const navBlocks = footerNav.querySelectorAll(".block");
    navBlocks.forEach((block) => {
      // Klonujeme každý blok zvlášť, aby mohl být přímým potomkem flex-holderu
      const clonedBlock = block.cloneNode(true);
      flexHolder.appendChild(clonedBlock);
    });
  }

  // Až nyní vložíme celou složenou strukturu do DOMu (pokud je nově vytvořená)
  if (isNew) {
    footerBottom.parentNode.insertBefore(footerMiddle, footerBottom);
  }
};

/**
 * reshapeSocials
 * Přebuduje textová data z Shoptet banneru do strukturovaného seznamu odkazů na sociální sítě.
 */
const reshapeSocials = () => {
  const wrapper = document.querySelector(".socials-footer");
  const dataSpan = wrapper?.querySelector("span[data-ec-promo-id]");
  const banner = wrapper?.querySelector(".banner");

  if (!dataSpan || !banner) return;

  const rawContent = dataSpan.innerHTML.replace(/\u00a0/g, " ");
  const items = rawContent.match(/#([\s\S]+?)#/g);

  if (!items) return;

  const listContent = items.reduce((html, item) => {
    const cleanItem = item.replace(/#|<[^>]*>?/gm, "").trim();
    const [name, url] = cleanItem.split(";").map((str) => str.trim());

    if (name && url) {
      html += `<a href="${url}" target="_blank" rel="noopener noreferrer" class="social-link ${name.toLowerCase()}"><span class="sr-only">${name}</span></a>`;
    }
    return html;
  }, "");

  if (listContent) {
    banner.innerHTML = `<div class="socials-list">${listContent}</div>`;
  }
};

/**
 * handleFooterLower
 * Přesune platební a dopravní bloky do footer-lower a vyčistí HTML strukturu.
 * Omezuje the Layout Thrashing tím, že dom-append běží jako poslední operace.
 */
const handleFooterLower = () => {
  const footer = document.querySelector("footer");
  if (!footer) return;

  const footerBottom = document.querySelector(".footer-bottom");
  const footerMiddle = document.querySelector(".footer-middle");
  const payment = document.querySelector(".footer-payment");
  const shipping = document.querySelector(".footer-shipping");

  const isNew = !document.querySelector(".footer-lower");
  const footerLower =
    document.querySelector(".footer-lower") || document.createElement("div");
  if (isNew) footerLower.className = "footer-lower";

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

  // Funkce pro vytažení čistého bloku z Bender balastu
  const injectCleanBlock = (parentEl) => {
    if (!parentEl) return;
    const block = parentEl.querySelector(".block");
    if (block) {
      const clonedBlock = block.cloneNode(true);
      flexHolder.appendChild(clonedBlock);
    }
  };

  injectCleanBlock(payment);
  injectCleanBlock(shipping);

  if (isNew) {
    if (footerMiddle) {
      footerMiddle.after(footerLower);
    } else if (footerBottom) {
      footer.insertBefore(footerLower, footerBottom);
    } else {
      footer.appendChild(footerLower);
    }
  }
};

// Refaktorovaná horní sekce patičky (Pro verze): využití moderních DOM API a ES6+
const handleFooterUpper = () => {
  const lang = window.shoptetLang || "cs";
  const translations = window.projectTranslations?.[lang];
  const footer = document.querySelector("footer");

  if (!footer || !translations) return;

  // 1. Bezpečné vytvoření a vložení hlavního wrapperu
  let footerUpper = document.querySelector(".footer-upper");
  if (!footerUpper) {
    footerUpper = document.createElement("div");
    footerUpper.className = "footer-upper";

    // Nalezení první dostupné sekce a vložení PŘED ni (moderní metoda .before)
    const target = footer.querySelector(
      ".footer-middle, .footer-lower, .footer-bottom",
    );
    target ? target.before(footerUpper) : footer.prepend(footerUpper);
  }

  // 2. Sestavení kostry pomocí jediného překreslení DOMu
  footerUpper.innerHTML = `
    <div class="container">
      <div class="flex-holder">
        <div class="footer-contact-person">
          <img src="${translations.contactPerson.img}" alt="${translations.contactPerson.title}" class="contact-img" loading="lazy">
          <h3 class="contact-title">${translations.contactPerson.title}</h3>
        </div>
        <div class="footer-contact-details"></div>
      </div>
    </div>
  `;

  const flexHolder = footerUpper.querySelector(".flex-holder");
  const detailsBlock = flexHolder.querySelector(".footer-contact-details");

  // 3. Klonování telefonu s využitím optional chaining
  const phone = document.querySelector(".project-phone")?.cloneNode(true);
  if (phone) {
    const hours = phone.querySelector(".project-opening-hours");
    if (hours && window.projectOpeningHours)
      hours.textContent = window.projectOpeningHours;
    detailsBlock.append(phone);
  }

  // 4. Klonování e-mailu a bezpečné vložení textu
  const email = document.querySelector(".project-email")?.cloneNode(true);
  if (email) {
    email.insertAdjacentHTML(
      "beforeend",
      `<small class="email-subtext">${translations.emilSubText}</small>`,
    );
    detailsBlock.append(email);
  }

  // 5. Přesun sociálních sítí
  const socials = document.querySelector(".footer-rows .socials-footer");
  if (socials) flexHolder.append(socials);
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

// Přemění Instagram wrapper na sekci, dynamicky vytáhne link i handle a přesune před patičku
const handleInstagram = () => {
  const translations = window.projectTranslations?.[window.shoptetLang || "cs"];
  const oldWrapper = document.querySelector(".custom-footer__instagram");
  const footer = document.querySelector("footer");

  if (!oldWrapper || !translations) return;

  const section = document.createElement("section");
  section.className = oldWrapper.className;
  section.append(...oldWrapper.childNodes);

  const igLink =
    section.querySelector(".instagram-follow-btn a")?.href ||
    translations.instagram.link;
  const igHandle = `@${igLink.split("/").filter(Boolean).pop()}`;

  const oldH4 = section.querySelector("h4");
  if (oldH4) oldH4.remove();

  let flexHolder = section.querySelector(".instagram-header-flex");
  if (!flexHolder) {
    flexHolder = document.createElement("div");
    flexHolder.className = "instagram-header-flex container";
    section.prepend(flexHolder);
  }

  flexHolder.innerHTML = `
    <div class="left">
      <a href="${igLink}" target="_blank" rel="noopener">
        <h4>${translations.instagram.text}</h4>
        <small>${igHandle}</small>
      </a>
    </div>
    <div class="right">
      <span class="fb-label">${translations.facebook.text}</span>
      <a href="${translations.facebook.link}" target="_blank" rel="noopener" class="fb-link-icon">
        <span class="sr-only">${translations.facebook.name}</span>
      </a>
    </div>
  `;

  oldWrapper.replaceWith(section);
  if (footer) footer.before(section);
};

// Přemění newsletter na sekci, obalí obsah, zarovná a ostyluje tlačítko a přesune před patičku
const handleNewsletter = () => {
  const translations = window.projectTranslations?.[window.shoptetLang || "cs"];
  const oldNewsletter = document.querySelector(".custom-footer__newsletter");
  const footer = document.querySelector("footer");

  if (!oldNewsletter || !translations) return;

  const section = document.createElement("section");
  section.className = oldNewsletter.className;

  const container = document.createElement("div");
  container.className = "container";
  container.append(...oldNewsletter.childNodes);
  section.append(container);

  const headerTarget = section.querySelector(
    ".newsletter-header h4 span, .newsletter-header h4",
  );
  if (headerTarget) headerTarget.textContent = translations.newsletter;

  const submitBtn = section.querySelector("button[type='submit']");
  const emailInput = section.querySelector("input[type='email']");

  if (submitBtn && emailInput) {
    submitBtn.className = "btn btn-primary secondary";
    submitBtn.querySelector("span.sr-only")?.classList.remove("sr-only");
    emailInput.after(submitBtn);
  }

  oldNewsletter.replaceWith(section);
  if (footer) footer.before(section);
};

const handleFooter = async () => {
  handleFooterUpper();
  handleFooterMiddle();
  reshapeSocials();
  handleFooterLower();
  handleFooterBottom();

  if (!document.body.classList.contains("ordering-process")) {
    handleInstagram();
    handleNewsletter();
  }
};
handleFooter();

on("click", ".shp-tab-link", function (e) {
  const target = this.getAttribute("href");
  if (document.querySelector(target)) {
    smoothScrollTo(target, 200);
  }
});

//Košík / nákupní proces

// Funkce zajistí vložení patičky do košíku a kompletní reinicializaci všech skriptů, které ji formátují.
const handleCartFooter = async () => {
  const contentWrapper = document.querySelector("#content-wrapper");
  if (!contentWrapper || document.querySelector(".cart-custom-footer")) return;

  const cachedFooter = sessionStorage.getItem("project_footer_html");

  if (cachedFooter) {
    const footerContainer = document.createElement("div");
    footerContainer.className = "cart-custom-footer";
    footerContainer.innerHTML = cachedFooter;
    contentWrapper.after(footerContainer);

    // U cache předpokládáme, že už je Benderem zpracovaná, ale handleFooter pustíme pro eventy
    if (typeof handleFooter === "function") {
      await handleFooter();
    }
  } else {
    try {
      const response = await fetch("/");
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const mainFooter = doc.querySelector("footer");

      if (mainFooter) {
        const footerContainer = document.createElement("div");
        footerContainer.className = "cart-custom-footer";
        footerContainer.append(mainFooter);
        contentWrapper.after(footerContainer);

        // 1. Nejdříve musíme pustit Bendera, aby rozparsoval texty v bannerech na HTML
        if (typeof parseBenderContent === "function") {
          // Cílíme na divy uvnitř vložené patičky v košíku
          await parseBenderContent(
            ".cart-custom-footer .custom-footer > div",
            false,
          );
        }

        // 2. Poté pustíme tvůj handleFooter, který učeše zbytek
        if (typeof handleFooter === "function") {
          await handleFooter();
        }
      }
    } catch (error) {
      console.error("Chyba při dotažení patičky pro košík:", error);
    }
  }
};

// Funkce sjednotí patičku košíku, rekapitulaci ceny a přidá interaktivní přepínač pro slevový kupon.
const handleCartBottom = () => {
  const cartWrapper = document.querySelector("#cart-wrapper");
  if (!cartWrapper) return;

  const cartSummary = cartWrapper.querySelector(".cart-content .cart-summary");
  const sidebarSummary = document.querySelector(
    ".sidebar-in-cart .summary-wrapper",
  );

  // 1. Logika pro slevový kupon (Checkbox toggle)
  const discountCoupon = cartWrapper.querySelector(".discount-coupon");
  if (
    discountCoupon &&
    !discountCoupon.querySelector(".coupon-toggle-wrapper")
  ) {
    const couponForm = discountCoupon.querySelector("form");
    const couponTitle =
      window.projectTranslations?.[window.shoptetLang]?.cart?.discountCoupon ||
      "Mám slevový kupón";

    const toggleWrapper = document.createElement("div");
    toggleWrapper.className = "coupon-toggle-wrapper";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "coupon-toggle-checkbox";
    checkbox.className = "coupon-toggle-checkbox";

    const label = document.createElement("label");
    label.htmlFor = "coupon-toggle-checkbox";
    label.className = "coupon-toggle-label";
    label.textContent = couponTitle;

    toggleWrapper.append(checkbox, label);
    discountCoupon.prepend(toggleWrapper);

    checkbox.addEventListener("change", () => {
      if (couponForm) {
        couponForm.classList.toggle("active", checkbox.checked);
      }
    });
  }

  // 2. Sjednocení do .cart-bottom
  if (cartSummary) {
    if (!document.querySelector(".cart-bottom")) {
      const cartBottom = document.createElement("div");
      cartBottom.className = "cart-bottom";
      cartSummary.before(cartBottom);
      cartBottom.append(cartSummary);
    }

    const cartBottom = document.querySelector(".cart-bottom");

    if (sidebarSummary && cartBottom) {
      const priceWrapper = sidebarSummary.querySelector(".price-wrapper");
      if (priceWrapper) {
        const labels = priceWrapper.querySelectorAll(".price-label");
        labels.forEach((label) => {
          if (label.parentElement.classList.contains("price-row")) return;

          const row = document.createElement("div");
          row.className = "price-row";
          if (label.classList.contains("price-primary")) {
            row.classList.add("price-row--primary");
          }

          const price = label.nextElementSibling;
          if (
            price &&
            (price.tagName === "STRONG" || price.classList.contains("price"))
          ) {
            label.before(row);
            row.append(label, price);
          }
        });
      }
      cartBottom.append(sidebarSummary);
    }
  }
};

// Funkce zajistí, že v pokladně (krok 2 a 3) bude hlavička s kroky přes celou šířku nad oběma sloupci.
const handleCartHeader = () => {
  const checkoutContent = document.querySelector("#checkoutContent");
  const checkoutSidebar = document.querySelector("#checkoutSidebar");
  const cartHeader = document.querySelector(".cart-header");
  const main = document.querySelector("body.ordering-process main");

  if (checkoutContent && checkoutSidebar && cartHeader && main) {
    main.prepend(cartHeader);
  }
};

// Funkce pro správu náhledů produktů a úklid cenových řádků v rekapitulaci.
const handleCartSummaryThumbnails = async () => {
  const isFirstStep = document.body.classList.contains("in-kosik");
  const summaryBox = document.querySelector(".order-summary");

  const getImgUrl = (row) => {
    const img = row.querySelector(".cart-p-image img");
    if (!img) return null;
    return img.getAttribute("data-src") || img.getAttribute("src");
  };

  // --- 1. FÁZE: SBĚR DAT (v prvním kroku) ---
  if (isFirstStep) {
    const rows = document.querySelectorAll(".cart-table tr.removeable");
    if (rows.length > 0) {
      const imagesMap = {};
      rows.forEach((row) => {
        const link = row.querySelector(".p-name a")?.getAttribute("href");
        const imgSrc = getImgUrl(row);
        if (link && imgSrc) imagesMap[link] = imgSrc;
      });
      sessionStorage.setItem("project_cart_images", JSON.stringify(imagesMap));
    }
  }

  // --- 2. FÁZE: VÝPIS DAT A ÚKLID CEN (v summary) ---
  if (summaryBox) {
    // A. Logika pro obrázky
    let imagesMap = JSON.parse(
      sessionStorage.getItem("project_cart_images") || "{}",
    );

    if (Object.keys(imagesMap).length === 0) {
      try {
        const response = await fetch("/kosik/");
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");
        const rows = doc.querySelectorAll(".cart-table tr.removeable");

        if (rows.length > 0) {
          rows.forEach((row) => {
            const link = row.querySelector(".p-name a")?.getAttribute("href");
            const imgSrc = getImgUrl(row);
            if (link && imgSrc) imagesMap[link] = imgSrc;
          });
          sessionStorage.setItem(
            "project_cart_images",
            JSON.stringify(imagesMap),
          );
        }
      } catch (err) {
        console.error("Bender Error: Fetch náhledů selhal.", err);
      }
    }

    const summaryItems = summaryBox.querySelectorAll(".cart-items .cart-item");
    summaryItems.forEach((item) => {
      if (item.querySelector(".recap-img-wrapper")) return;
      const link = item
        .querySelector(".cart-item-name a")
        ?.getAttribute("href");
      const imageUrl = imagesMap[link];

      if (imageUrl) {
        const imgWrapper = document.createElement("div");
        imgWrapper.className = "recap-img-wrapper";
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Produkt";
        img.removeAttribute("loading");
        imgWrapper.append(img);
        item.prepend(imgWrapper);
      }
    });

    // B. Logika pro obalení cenových řádků (price-row)
    const priceWrapper = summaryBox.querySelector(".price-wrapper");
    if (priceWrapper) {
      const labels = priceWrapper.querySelectorAll(".price-label");
      labels.forEach((label) => {
        // Pokud už je label obalený v price-row, neřešíme
        if (label.parentElement.classList.contains("price-row")) return;

        const row = document.createElement("div");
        row.className = "price-row";
        if (label.classList.contains("price-primary")) {
          row.classList.add("price-row--primary");
        }

        // Cena je hned další element (strong)
        const price = label.nextElementSibling;
        if (
          price &&
          (price.tagName === "STRONG" || price.classList.contains("price"))
        ) {
          label.before(row);
          row.append(label, price);
        }
      });
    }
  }
};

// Hlavní orchestrátor pro košík a objednávkový proces.
const handleCartNonCritical = async () => {
  if (!document.body.classList.contains("ordering-process")) return;

  // 1. Nejdřív vyřešíme patičku
  await handleCartFooter();
  handleCartBottom();
  handleCartHeader();
  handleCartSummaryThumbnails();
  // 2. Tady pak budou další funkce košíku (např. dárky, doprava atd.)
  // handleCartGifts();
  const main = document.querySelector("body.ordering-process main");
  main.classList.add("is-processed");

  const events = ["ShoptetDOMCartContentLoaded", "shoptet.contentUpdated"];
  events.forEach((eventName) => {
    document.removeEventListener(eventName, handleCartNonCritical);
    document.addEventListener(eventName, handleCartNonCritical);
  });
};

handleCartNonCritical();

// Funkce pro úpravu děkovací stránky po objednávce.
// Seskupuje nadpis a číslo objednávky do jednoho společného obalu.
const handleThyPage = () => {
  if (window.shoptetPage !== "thankYou") return;

  const heading = document.querySelector(".order-summary-heading");
  const orderNumber = document.querySelector(".reca-number");

  if (heading && orderNumber) {
    const holder = document.createElement("div");
    holder.className = "thy-order-title-holder";

    // Vložíme holder přesně tam, kde byl původně nadpis
    heading.before(holder);

    // Přesuneme oba elementy dovnitř holderu
    holder.append(heading);
    holder.append(orderNumber);
  }
};
document.addEventListener("DOMContentLoaded", () => {
  handleThyPage();
});

// Modul pro zobrazení naposledy prohlížených produktů.
// Na kategorii se vkládá před benefity, jinak před Instagram/Footer.
const RecentlyViewed = (() => {
  const CONFIG = {
    storageKey: "recentlyViewed",
    maxItems: 10,
    revalidateMs: 172800000,
  };

  const $ = (s, el = document) => el.querySelector(s);

  const getMsg = (key, fallback) =>
    typeof shoptet !== "undefined" ? shoptet.messages[key] : fallback;

  const quantityFragment = (() => {
    const span = document.createElement("span");
    span.className = "quantity";
    span.innerHTML = `
            <span class="increase-tooltip js-increase-tooltip" data-trigger="manual" data-container="body" data-original-title="Není možné zakoupit více než 9999 ks." aria-hidden="true" role="tooltip"></span>
            <span class="decrease-tooltip js-decrease-tooltip" data-trigger="manual" data-container="body" data-original-title="Minimální množství, které lze zakoupit, je 1 ks." aria-hidden="true" role="tooltip"></span>
            <label><input type="number" name="amount" value="1" class="amount" autocomplete="off" step="1" min="1" max="9999" aria-label="Množství"></label>
            <button class="increase" type="button" aria-label="Zvýšit množství o 1"><span class="increase__sign">+</span></button>
            <button class="decrease" type="button" aria-label="Snížit množství o 1"><span class="decrease__sign">−</span></button>
        `;
    return span;
  })();

  const handleLayout = (product) => {
    const refs = {
      pCode: $(".p-code", product),
      ratings: $(".ratings-wrapper", product),
      pDesc: $(".p-desc", product),
      name: $(".name", product),
      avail: $(".availability", product),
      flagDiscount: $(".flag-discount", product),
      pricesWrapper: $(".prices", product),
      form: $("form.pr-action", product),
      unit: $(".pr-list-unit", product),
    };

    if (refs.pCode && refs.ratings) refs.ratings.append(refs.pCode);
    if (refs.pDesc && refs.name) refs.name.after(refs.pDesc);

    // Obalí ceny a dostupnost do společného divu
    if (refs.pricesWrapper && refs.avail) {
      const pricesAvailWrapper = document.createElement("div");
      pricesAvailWrapper.className = "prices-availability-wrapper";
      refs.pricesWrapper.before(pricesAvailWrapper);
      pricesAvailWrapper.append(refs.avail);
      pricesAvailWrapper.append(refs.pricesWrapper);
    } else if (refs.avail) {
      (refs.pDesc || refs.name)?.after(refs.avail);
    }

    const priceStd = refs.flagDiscount
      ? $(".price-standard", refs.flagDiscount)
      : null;
    if (priceStd && refs.pricesWrapper) {
      const wrap = document.createElement("div");
      wrap.className = "price-standard-wrapper";
      const prev = priceStd.previousSibling;
      if (prev?.nodeType === 3 && prev.textContent.trim() === "od")
        wrap.append(prev);
      wrap.append(priceStd);
      const priceFinal = $(".price-final", refs.pricesWrapper);
      priceFinal ? priceFinal.before(wrap) : refs.pricesWrapper.append(wrap);
    }

    if (refs.form) {
      $('input[name="amount"]', refs.form)?.remove();
      const btn = $('button[type="submit"]', refs.form);
      const qty = quantityFragment.cloneNode(true);
      btn ? btn.before(qty) : refs.form.append(qty);
    }

    if (refs.unit)
      refs.unit.innerHTML = refs.unit.innerHTML.replace(/&nbsp;|\u00A0/g, "");
  };

  const getPriceData = (doc) => {
    const p =
      $(".price-final-holder", doc)?.innerText.trim() ||
      $(".nowrap", doc)?.innerText.trim() ||
      "";
    const u = $(".pr-list-unit", doc)?.innerText.trim() || "";
    return {
      price: u ? p.replace(u, "").replace(/\/$/, "").trim() : p,
      unit: u ? `/${u.replace("/", "").trim()}` : "/ks",
    };
  };

  const trackProduct = () => {
    const form = $("#product-detail-form");
    if (!form) return;

    const { price, unit } = getPriceData(document);
    const item = {
      id: $('input[name="productId"]', form)?.value,
      priceId: $('input[name="priceId"]', form)?.value,
      name: $(".p-detail-inner-header h1")?.innerText.trim(),
      url: location.pathname,
      imgSrc: $(".p-main-image img")?.src,
      price,
      unit,
      priceVat: $(".price-additional")?.innerHTML.trim() || "",
      availabilityText: $(".availability-label")?.innerText.trim(),
      availabilityColor: $(".availability-label")?.style.color,
      codeLabel: $(".p-code-label")?.innerText.trim() || "Kód:",
      code: $(".p-code span:not(.p-code-label)")?.innerText.trim() || "",
      description: $(".p-short-description")?.innerText.trim(),
      flagsHtml: $(".flags-default")?.innerHTML.trim() || "",
      starsHtml: $(".stars-wrapper .star-list")?.outerHTML.trim() || "",
      isVariant: !!$(".variant-list"),
      lastVisit: Date.now(),
    };

    if (!item.id || !item.name) return;

    let h = JSON.parse(localStorage.getItem(CONFIG.storageKey) || "[]");
    h = [item, ...h.filter((p) => p.id !== item.id)].slice(0, CONFIG.maxItems);
    localStorage.setItem(CONFIG.storageKey, JSON.stringify(h));
  };

  const revalidate = async () => {
    const history = JSON.parse(localStorage.getItem(CONFIG.storageKey) || "[]");
    const now = Date.now();
    const stale = history.filter(
      (i) =>
        now - i.lastVisit > CONFIG.revalidateMs && i.url !== location.pathname,
    );

    if (!stale.length) return;

    for (const item of stale.slice(0, 3)) {
      try {
        const res = await fetch(item.url, { priority: "low" });
        const html = await res.text();
        const doc = new DOMParser().parseFromString(html, "text/html");
        const { price, unit } = getPriceData(doc);

        Object.assign(item, {
          price,
          unit,
          priceVat: $(".price-additional", doc)?.innerHTML.trim() || "",
          availabilityText: $(".availability-label", doc)?.innerText.trim(),
          availabilityColor: $(".availability-label", doc)?.style.color,
          flagsHtml: $(".flags-default", doc)?.innerHTML.trim() || "",
          starsHtml:
            $(".stars-wrapper .star-list", doc)?.outerHTML.trim() || "",
          code:
            $(".p-code span:not(.p-code-label)", doc)?.innerText.trim() ||
            item.code,
          lastVisit: now,
        });
      } catch (e) {}
    }
    localStorage.setItem(CONFIG.storageKey, JSON.stringify(history));
  };

  const render = () => {
    const history = JSON.parse(
      localStorage.getItem(CONFIG.storageKey) || "[]",
    ).filter((i) => i.url !== location.pathname);

    if (!history.length || $(".last-visited")) return;

    const instagramBlock = $(".custom-footer__instagram");
    const footer = $("footer");

    const benefitsSection = $(".section-benefits");
    const secondDescription = $(".section-second-description");

    let targetElement = instagramBlock || footer;

    if (window.shoptetPage === "category") {
      if (secondDescription) {
        targetElement = secondDescription;
      } else if (benefitsSection) {
        targetElement = benefitsSection;
      }
    }

    if (!targetElement) return;

    const section = document.createElement("section");
    section.className = "last-visited";

    const cards = history
      .map(
        (item) => `
            <div class="swiper-slide">
                <div class="product">
                    <div class="p" data-micro-product-id="${item.id}">
                        <a href="${item.url}" class="image">
                            <img src="${item.imgSrc}" class="swap-image" loading="lazy">
                            <div class="flags flags-default">${item.flagsHtml}</div>
                        </a>
                        <div class="p-in">
                            <div class="p-in-in">
                                <a href="${item.url}" class="name"><span>${item.name}</span></a>
                                <div class="ratings-wrapper">${item.starsHtml}</div>
                                <div class="availability"><span style="color:${item.availabilityColor}">${item.availabilityText}</span></div>
                            </div>
                            <div class="p-bottom ${item.isVariant ? "single-button" : ""}">
                                <div data-micro="offer">
                                    <div class="prices">
                                        ${item.priceVat ? `<div class="price-additional">${item.priceVat}</div>` : ""}
                                        <div class="price price-final"><strong>${item.price}</strong><span class="pr-list-unit">${item.unit}</span></div>
                                    </div>
                                    <div class="p-tools">
                                        ${
                                          item.isVariant
                                            ? `<a href="${item.url}" class="btn btn-primary">${getMsg("moreInfo", "Detail")}</a>`
                                            : `
                                        <form action="/action/Cart/addCartItem/" method="post" class="pr-action csrf-enabled">
                                            <input type="hidden" name="productId" value="${item.id}">
                                            <input type="hidden" name="priceId" value="${item.priceId || ""}">
                                            <input type="hidden" name="amount" value="1">
                                            <button type="submit" class="btn btn-cart"><span>${getMsg("toCart", "Do košíku")}</span></button>
                                        </form>`
                                        }
                                    </div>
                                </div>
                                <p class="p-desc">${item.description || ""}</p>
                            </div>
                        </div>
                        <span class="p-code">${item.codeLabel} <span>${item.code || ""}</span></span>
                    </div>
                </div>
            </div>`,
      )
      .join("");

    section.innerHTML = `
            <div class="container">
                <h2>Naposledy prohlížené</h2>
                <div class="swiper-helper">
                    <div class="swiper swiper-last-visited">
                        <div class="swiper-wrapper">${cards}</div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>`;

    targetElement.before(section);

    section.querySelectorAll(".product").forEach(handleLayout);

    if (window.Swiper) {
      new Swiper(".swiper-last-visited", {
        slidesPerView: 1.2,
        spaceBetween: 16,
        watchSlidesProgress: true,
        breakpointsBase: "container",
        breakpoints: {
          560: { slidesPerView: 2, spaceBetween: 16 },
          768: { slidesPerView: 3, spaceBetween: 16 },
          1124: { slidesPerView: 4, spaceBetween: 16 },
        },

        navigation: {
          nextEl: ".last-visited .swiper-button-next",
          prevEl: ".last-visited .swiper-button-prev",
        },
        pagination: {
          el: ".last-visited .swiper-pagination",
          clickable: true,
        },
      });
    }
  };

  return {
    run: () => {
      const excludedPages = [
        "id-29",
        "id--51",
        "id--7",
        "id--8",
        "id--12",
        "id--13",
        "id--18",
        "id--57",
        "id--43",
        "id--61",
        "id--62",
        "id--63",
        "id--64",
        "id--44",
        "id--45",
        "id--46",
        "id--2",
        "id--3",
      ];
      const isExcluded = excludedPages.some((cls) =>
        document.body.classList.contains(cls),
      );

      if (isExcluded) return;

      trackProduct();
      const defer = window.requestIdleCallback || ((cb) => setTimeout(cb, 200));
      defer(() => {
        revalidate().then(render);
      });
    },
  };
})();

if (document.readyState === "complete") {
  RecentlyViewed.run();
} else {
  window.addEventListener("load", RecentlyViewed.run);
}
