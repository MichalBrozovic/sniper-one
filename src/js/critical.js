window.shoptetPage = dataLayer[0].shoptet.pageType;
window.shoptetLang = dataLayer[0].shoptet.language;
window.body = document.querySelector("body");

// přesunování elementů
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

// Přiřazení funkce k objektu window pro globální dostupnost
window.moveElement = moveElement;

//On funkce, na kliknutí a zavolání funkce
function on(eventType, selector, callback) {
  document.addEventListener(
    eventType,
    function (e) {
      let targetElement = e.target;
      while (targetElement && targetElement !== document) {
        if (targetElement.matches(selector)) {
          // e.preventDefault(); // ODEBRÁNO - jinak by nefungovaly odkazy v menu
          callback.call(targetElement, e);
          return;
        }
        targetElement = targetElement.parentElement;
      }
    },
    { passive: true },
  ); // Lepší pro výkon (scroll/touch)
}

//z hrefu na další sekci
function scrollToNextSectionOrHref(e) {
  if (this.getAttribute("href") === "#next") {
    e.preventDefault();
    scrollToNextSection.call(this);
  }
}

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

// Funkce pro získání šířky scrollbaru

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

function setScrollbarWidth() {
  const scrollbarWidth = getScrollbarWidth();
  document.documentElement.style.setProperty(
    "--scrollbar-width",
    `${scrollbarWidth}px`,
  );
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setScrollbarWidth);
} else {
  setScrollbarWidth();
}
window.addEventListener("resize", setScrollbarWidth);
document.addEventListener("shoptet.content.updated", setScrollbarWidth);

// Funkce pro nastavení výšky headeru jako CSS proměnné
function setHeaderTopHeight() {
  const headerTop = document.querySelector("#header");
  if (headerTop) {
    document.documentElement.style.setProperty(
      "--header-top-height",
      `${headerTop.clientHeight}px`,
    );
  }
}

const syncShoptetBodyColor = () => {
  if (
    typeof shoptet !== "undefined" &&
    shoptet.design &&
    shoptet.design.background &&
    shoptet.design.background.color
  ) {
    const bodyColor = shoptet.design.background.color.color;
    document.documentElement.style.setProperty(
      "--color-body-background",
      bodyColor,
    );
  }
};

// Spustit hned
syncShoptetBodyColor();

// Zavolejte funkci při načtení stránky
document.addEventListener("DOMContentLoaded", setHeaderTopHeight);
window.addEventListener("resize", setHeaderTopHeight);

const currentPath = window.location.pathname;
const links = document.querySelectorAll(".menu-level-1 li a");
links.forEach((link) => {
  const linkPath = new URL(link.href).pathname;
  if (linkPath === currentPath) {
    link.classList.add("active");
  }
});

const links2 = document.querySelectorAll(".top-navigation-bar-menu li a");
links2.forEach((link) => {
  const linkPath = new URL(link.href).pathname;
  if (linkPath === currentPath) {
    link.classList.add("active");
  }
});

function fixedHeader() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const header2 = document.querySelector(".user-action-cart");
  const login = document.querySelector(".user-action-login");
  const header = document.querySelector("#header");

  if (scrollTop > 45) {
    if (header) {
      header.classList.add("sticky");
    }
    if (header2) {
      header2.classList.add("sticky");
    }
    if (login) {
    }
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
    if (login) {
    }
    login.classList.remove("sticky");
  }
}

document.addEventListener("DOMContentLoaded", fixedHeader);
window.addEventListener("scroll", fixedHeader);

// language menu + currency menu
// přidá aktuální vlajku + upravuje přidání tříd po kliknutí kvůli lepšímu css
const syncLanguageMenu = async () => {
  const langMenu = document.querySelector(".languagesMenu");
  const langBoxSelector = '.languagesMenu__box[data-target="language"]';
  const sourceButton = document.getElementById("topNavigationDropdown");
  const targetHeader = document.querySelector(
    `${langBoxSelector} .languagesMenu__header--actual`,
  );

  if (sourceButton && targetHeader) {
    const activeFlag = sourceButton.querySelector("svg.shp-flag");
    const alreadyHasFlag = targetHeader.querySelector("svg.shp-flag");

    if (activeFlag && !alreadyHasFlag) {
      // Skrytí textu do sr-only pro přístupnost
      const textNodes = Array.from(targetHeader.childNodes).filter(
        (node) => node.nodeType === 3 && node.textContent.trim().length > 0,
      );

      textNodes.forEach((node) => {
        const span = document.createElement("span");
        span.className = "sr-only";
        span.textContent = node.textContent.trim();
        targetHeader.replaceChild(span, node);
      });

      targetHeader.prepend(activeFlag.cloneNode(true));
      sourceButton.style.display = "none";
    }
  }

  if (window.languageMenuInitialized) return;

  document.addEventListener("click", (e) => {
    // Kliknutí na header nebo cokoliv v něm
    const header = e.target.closest(".languagesMenu__header--actual");

    if (header) {
      e.stopPropagation();

      const box = header.closest(".languagesMenu__box");
      const list = box ? box.querySelector(".languagesMenu__list") : null;

      if (list && box) {
        header.classList.toggle("open");
        list.classList.toggle("open");
      }
    } else {
      document
        .querySelectorAll(
          ".languagesMenu__header--actual.open, .languagesMenu__list.open",
        )
        .forEach((el) => {
          el.classList.remove("open");
        });
    }
  });
  langMenu.classList.add("js-loaded");

  window.languageMenuInitialized = true;
};

const injectOpeningHours = () => {
  const openingHours = window.projectOpeningHours;
  if (!openingHours) return;

  const phoneLinks = document.querySelectorAll(".project-phone");

  phoneLinks.forEach((link) => {
    // Pojistka proti dvojení prvků při AJAXu
    if (!link.querySelector(".project-opening-hours")) {
      const small = document.createElement("small");
      small.className = "project-opening-hours";
      small.textContent = openingHours;
      link.appendChild(small);
    }
  });
};

const removeMenuCommas = () => {
  let liElements = document.querySelectorAll(".menu-level-3 li");
  liElements.forEach((li) => {
    li.childNodes.forEach((node) => {
      if (node.nodeType === 3 && node.textContent.includes(",")) {
        node.textContent = node.textContent.replace(",", "");
      }
    });
  });
};

const moveNavigation = () => {
  const nav = document.getElementById("navigation");
  const siteNameWrapper = document.querySelector(
    ".header-top .site-name-wrapper",
  );
  const headerTop = document.querySelector(".header-top");

  if (nav && siteNameWrapper && headerTop) {
    // Kontrola, zda už navigace není na správném místě (hned za site-name-wrapper)
    if (siteNameWrapper.nextElementSibling !== nav) {
      // Metoda after() vloží element přesně za vybraný prvek
      siteNameWrapper.after(nav);
    }
  }
};
const menuLevelTwoRefactoring = () => {
  const menuItems = document.querySelectorAll(".menu-level-2 > li");

  menuItems.forEach((li) => {
    const imgLink = li.querySelector("a.menu-image");
    const textLink = li.querySelector('div > a[data-testid="headerMenuItem"]');
    const wrapperDiv = li.querySelector("div");

    if (imgLink && textLink) {
      const img = imgLink.querySelector("img");
      if (img) {
        textLink.prepend(img);
      }
      imgLink.remove();
      if (wrapperDiv) {
        li.appendChild(textLink);
        wrapperDiv.remove();
      }
    }
  });
};

const moveLoginButton = () => {
  const loginButton = document.querySelector(
    ".top-navigation-bar .top-nav-button-login",
  );
  const targetWrapper = document.querySelector("#header .navigation-buttons");

  if (!targetWrapper) return;

  // Pokud už tam tlačítko je (pojistka proti dvojení), nebudeme dělat nic
  if (targetWrapper.querySelector(".top-nav-button-login")) {
    return;
  }

  if (loginButton) {
    // Použijeme cloneNode(true), aby původní zůstalo kde je (pokud chceš kopii)
    // nebo jen targetWrapper.prepend(loginButton), pokud ho chceš fyzicky vyjmout a přesunout
    const loginCopy = loginButton.cloneNode(true);
    targetWrapper.prepend(loginCopy);

    // Pokud chceš ten původní v top baru schovat, aby tam nebyl 2x:
    loginButton.style.display = "none";
  }
};
const userCartHandle = () => {
  const cartWidget = document.getElementById("cart-widget");
  const cartButton = document.querySelector(
    "#header .navigation-buttons .cart-count",
  );

  if (cartWidget && cartButton) {
    if (!cartButton.contains(cartWidget)) {
      cartButton.appendChild(cartWidget);
    }
  } else if (cartWidget && !cartButton) {
    const navButtons = document.querySelector("#header .navigation-buttons");
    if (navButtons && !navButtons.contains(cartWidget)) {
      navButtons.appendChild(cartWidget);
    }
  }
};

// Funkce přesune mobilní nástroje (hledání, login, menu) do hlavního kontejneru navigace.
const moveResponsiveTools = () => {
  const tools = document.querySelector(".responsive-tools");
  const target = document.querySelector("header .navigation-buttons");

  if (tools && target) {
    const searchIcon = tools.querySelector('[data-target="search"]');
    const loginIcon = tools.querySelector('[data-target="login"]');
    const navIcon = tools.querySelector('[data-target="navigation"]');

    if (navIcon) target.prepend(navIcon);
    if (loginIcon) target.prepend(loginIcon);
    if (searchIcon) target.prepend(searchIcon);

    if (tools.children.length === 0) {
      tools.remove();
    }
  }
};
// Funkce pro správu navigace na mobilu, včetně fixace menu a zavíracího tlačítka.
const relocateNavigationForMobile = () => {
  const isMobileWidth = window.innerWidth < 1024;
  const nav = document.getElementById("navigation");
  const navIn = nav?.querySelector(".navigation-in");
  const header = document.querySelector("header");
  const topBar = document.querySelector(".top-navigation-bar");

  if (!nav || !navIn || !header) return;

  // 1. GENEROVÁNÍ CLOSE BUTTONU (pokud ještě neexistuje)

  if (isMobileWidth) {
    if (!nav.querySelector(".close")) {
      const closeBtn = document.createElement("button");
      const lang = window.shoptetLang || "cs";
      const closeLabel =
        lang === "sk" ? "Zatvoriť navigáciu" : "Zavřít navigaci";

      closeBtn.classList.add("close", "black");
      closeBtn.type = "button";
      closeBtn.setAttribute("aria-label", closeLabel);
      closeBtn.innerHTML = `<span class="close-icon"></span>`; // Ikona se doladí v CSS

      // Tlačítko dáváme do navIn nebo přímo do nav, podle toho, kde ho chceš mít fixnuté
      nav.prepend(closeBtn);

      closeBtn.addEventListener("click", () => {
        document.body.classList.remove("navigation-window-visible");
      });
    }
    if (header.contains(nav)) header.after(nav);

    if (topBar) {
      const contacts = topBar.querySelector(".top-navigation-contacts");
      const topMenu = topBar.querySelector(".top-navigation-menu");
      const languages = topBar.querySelector(".top-navigation-tools--language");

      // Stopnutí probublávání kliknutí u Jazyků/Měny, aby nezavíraly body třídu
      if (languages && !languages.dataset.initDone) {
        const dropdowns = languages.querySelectorAll(".js-languagesMenu__box");

        dropdowns.forEach((box) => {
          // 1. Shoptet ignorace
          const originalTarget = box.getAttribute("data-target");
          if (originalTarget) {
            box.setAttribute("data-bender-target", originalTarget);
            box.removeAttribute("data-target");
          }

          // 2. Opravený event listener
          box.addEventListener("click", (e) => {
            // Zjistíme, jestli uživatel klikl na odkaz (nebo cokoli uvnitř odkazu)
            const isClickOnLink = e.target.closest("a");

            if (isClickOnLink) {
              // Pokud je to odkaz, nebudeme stopovat propagaci, aby se stránka mohla reloadnout
              // Ale zavřeme box pro vizuální čistotu (nepovinné)
              box.classList.remove("open");
              return;
            }

            // Pokud to NENÍ odkaz (takže klik na label/header), uděláme toggle
            e.preventDefault();
            e.stopPropagation();

            const isOpen = box.classList.contains("open");

            // Zavřeme ostatní
            dropdowns.forEach((other) => {
              other.classList.remove("open");
              other
                .querySelector(".languagesMenu__list")
                ?.classList.remove("open");
            });

            // Toggle aktuálního
            if (!isOpen) {
              box.classList.add("open");
              box.querySelector(".languagesMenu__list")?.classList.add("open");
            }

            // Vždy držíme navigaci otevřenou
            document.body.classList.add("navigation-window-visible");
          });
        });

        languages.dataset.initDone = "true";
      }

      if (languages) navIn.prepend(languages);
      if (topMenu) navIn.prepend(topMenu);
      if (contacts) navIn.prepend(contacts);
    }
  } else {
    // Desktop: Vrácení prvků zpět
    const navPlace = header.querySelector(".header-inner") || header;
    if (!header.contains(nav)) navPlace.appendChild(nav);

    if (topBar) {
      const container = topBar.querySelector(".container");
      const contacts = navIn.querySelector(".top-navigation-contacts");
      const topMenu = navIn.querySelector(".top-navigation-menu");
      const languages = navIn.querySelector(".top-navigation-tools--language");

      if (container) {
        if (contacts) container.appendChild(contacts);
        if (topMenu) container.appendChild(topMenu);
        if (languages) container.appendChild(languages);
      }
    }
  }
};
const handleHeader = async () => {
  syncLanguageMenu();
  removeMenuCommas();
  injectOpeningHours();
  moveNavigation();
  menuLevelTwoRefactoring();
  moveLoginButton();
  userCartHandle();
  moveResponsiveTools();
  relocateNavigationForMobile();
};
handleHeader();
document.addEventListener("ShoptetDOMPageContentLoaded", handleHeader);
document.addEventListener("ShoptetDOMContentLoaded", handleHeader);
window.addEventListener("resize", relocateNavigationForMobile);

const initHomepageSwiper = () => {
  const $carousel = document.querySelector("#carousel");
  const $inner = document.querySelector(".carousel-inner");

  if (!$carousel || !$inner) return;

  const $items = $carousel.querySelectorAll(".item");
  if ($items.length === 0) return;

  // 1. ZABIJEME SHOPTET LOGIKU
  $carousel.removeAttribute("data-ride");
  $carousel.removeAttribute("data-interval");
  $carousel.removeAttribute("style");
  $inner.removeAttribute("style");

  // 2. TRANSFORMACE DOMU
  $carousel.classList.add("swiper");
  $inner.classList.replace("carousel-inner", "swiper-wrapper");

  $items.forEach((el) => {
    el.classList.remove("item", "active");
    el.classList.add("swiper-slide");
    el.removeAttribute("style");
  });

  // 3. VYČISTÍME A VLOŽÍME NOVOU NAVIGACI
  $carousel.querySelectorAll(".carousel-control").forEach((el) => el.remove());

  // Vložíme šipky DOVNITŘ swiperu
  if (!$carousel.querySelector(".swiper-button-prev")) {
    $carousel.insertAdjacentHTML(
      "beforeend",
      `
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      `,
    );
  }

  // Vložíme paginaci ZA swiper (jako sourozenec)
  let $pagination = $carousel.nextElementSibling;
  if (!$pagination || !$pagination.classList.contains("swiper-pagination")) {
    $carousel.insertAdjacentHTML(
      "afterend",
      `<div class="swiper-pagination"></div>`,
    );
    $pagination = $carousel.nextElementSibling;
  }

  // 4. INICIALIZACE SWIPERU
  new window.Swiper("#carousel", {
    grabCursor: true,
    watchSlidesProgress: true,
    speed: 600,
    breakpointsBase: "container",
    slidesPerView: 1.1,
    spaceBetween: 12,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: $pagination, // Použijeme referenci na element za swiperem
      clickable: true,
      renderBullet: function (index, className) {
        // Vygeneruje button místo divu
        return (
          '<button class="' +
          className +
          '" aria-label="Go to slide ' +
          (index + 1) +
          '"></button>'
        );
      },
    },

    breakpoints: {
      600: { slidesPerView: 2, spaceBetween: 14 },
      992: { slidesPerView: 3, spaceBetween: 16 },
      1360: { slidesPerView: 4, spaceBetween: 16 },
    },
  });
};

document.addEventListener("DOMContentLoaded", initHomepageSwiper);

/**
 * GLOBÁLNÍ PROMĚNNÉ
 * Uchování stavu popisu pro aktuální instanci běhu JS.
 */
let categoryDescriptionCache = null;
let bestSellingCache = null;
// Získání čistého URL pro případný fetch 1. strany
const getCategoryBaseUrl = () => {
  return window.location.pathname.replace(/\/strana-[0-9]+\/?/, "/");
};

// Generování unikátního klíče na základě Shoptet ID
const getCategoryCacheKey = () => {
  const pageId = window.dataLayer?.[0]?.shoptet?.pageId || "unknown";
  return `perex_${pageId}`;
};

// Funkce stáhne první stranu kategorie, najde v ní perex a sestaví "upperWrapper" s odděleným obsahem a obrázkem.
const fetchAndBuildCategoryTop = async (categoryTop) => {
  try {
    const baseUrl = getCategoryBaseUrl();
    const response = await fetch(baseUrl);
    const text = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");

    const fetchedPerex = doc.querySelector(".category-perex");
    const fetchedTitle = doc.querySelector(".category-title");
    const secondDesc = doc.querySelector(".category__secondDescription");

    if (fetchedPerex) {
      const lang = document.documentElement.lang || "cs";
      const readMoreText =
        window.projectTranslations?.[lang]?.category?.readMore ||
        "Přečíst více";

      const upperWrapper = document.createElement("div");
      upperWrapper.className = "category-top-upper";

      const contentDiv = document.createElement("div");
      contentDiv.className = "category-top-upper--content";

      const img =
        fetchedPerex.querySelector("img") ||
        doc.querySelector(".category-top img");
      if (img) {
        const newImg = img.cloneNode(true);
        upperWrapper.append(newImg);
        const parentP = img.closest("p");
        if (parentP && !parentP.textContent.trim()) parentP.remove();
      }

      if (fetchedTitle) contentDiv.append(fetchedTitle.cloneNode(true));
      contentDiv.append(fetchedPerex.cloneNode(true));

      if (secondDesc) {
        const readMoreBtn = document.createElement("a");
        readMoreBtn.className = "read-more-link";
        readMoreBtn.innerText = readMoreText;
        readMoreBtn.style.cursor = "pointer";
        contentDiv.append(readMoreBtn);
      }

      upperWrapper.prepend(contentDiv);
      return upperWrapper;
    }
  } catch (error) {
    console.error("Nepodařilo se stáhnout data kategorie:", error);
  }
  return null;
};

// Funkce zajišťuje dostupnost dat o kategorii z DOMu, Cache, nebo přes Fetch a spouští renderování.
const handleCategoryTop = async () => {
  if (window.shoptetPage !== "category") return;

  const categoryTop = document.querySelector(".category-top");
  if (!categoryTop) return;

  const cacheKey = getCategoryCacheKey();
  const currentPerex = categoryTop.querySelector(".category-perex");

  if (currentPerex && !categoryDescriptionCache) {
    const title = categoryTop.querySelector(".category-title");
    const secondDesc = document.querySelector(".category__secondDescription");
    const lang = document.documentElement.lang || "cs";
    const readMoreText =
      window.projectTranslations?.[lang]?.category?.readMore || "Přečíst více";

    const upperWrapper = document.createElement("div");
    upperWrapper.className = "category-top-upper";

    const contentDiv = document.createElement("div");
    contentDiv.className = "category-top-upper--content";

    const img =
      currentPerex.querySelector("img") || categoryTop.querySelector("img");
    if (img) {
      const newImg = img.cloneNode(true);
      upperWrapper.append(newImg);
      const parentP = img.closest("p");
      if (parentP && !parentP.textContent.trim()) parentP.remove();
    }

    if (title) contentDiv.append(title.cloneNode(true));
    contentDiv.append(currentPerex.cloneNode(true));

    if (secondDesc) {
      const readMoreBtn = document.createElement("a");
      readMoreBtn.className = "read-more-link";
      readMoreBtn.innerText = readMoreText;
      readMoreBtn.style.cursor = "pointer";
      contentDiv.append(readMoreBtn);
    }

    upperWrapper.prepend(contentDiv);
    categoryDescriptionCache = upperWrapper.cloneNode(true);
    sessionStorage.setItem(cacheKey, upperWrapper.innerHTML);
  } else if (!categoryDescriptionCache) {
    let savedData = sessionStorage.getItem(cacheKey);
    let upperWrapper = document.createElement("div");
    upperWrapper.className = "category-top-upper";

    if (savedData) {
      upperWrapper.innerHTML = savedData;
    } else {
      const fetchedWrapper = await fetchAndBuildCategoryTop(categoryTop);
      if (fetchedWrapper) {
        upperWrapper = fetchedWrapper;
        sessionStorage.setItem(cacheKey, upperWrapper.innerHTML);
      } else {
        return;
      }
    }
    categoryDescriptionCache = upperWrapper;
  }

  const hasOurStructure = categoryTop.querySelector(".category-top-upper");
  if (categoryDescriptionCache && !hasOurStructure) {
    renderCategoryTopStructure(categoryTop);
  }
};

// Funkce sestavuje finální HTML z cache a zajišťuje funkčnost eventů a správnost nadpisu.
const renderCategoryTopStructure = (categoryTop) => {
  const subcategories = categoryTop.querySelector(".subcategories");
  const newTitle = categoryTop.querySelector(".category-title");
  const container = document.createElement("div");
  container.className = "container active";

  const cachedContent = categoryDescriptionCache.cloneNode(true);

  const setupReadMore = (el) => {
    const btn = el.querySelector(".read-more-link");
    if (btn) {
      btn.onclick = (e) => {
        e.preventDefault();
        document
          .getElementById("category-description-bottom")
          ?.scrollIntoView({ behavior: "smooth" });
      };
    }
  };

  setupReadMore(cachedContent);

  if (newTitle) {
    const oldTitle = cachedContent.querySelector(".category-title");
    if (oldTitle) {
      oldTitle.replaceWith(newTitle.cloneNode(true));
    } else {
      cachedContent
        .querySelector(".category-top-upper--content")
        ?.prepend(newTitle.cloneNode(true));
    }
  }

  container.append(cachedContent);

  if (subcategories) {
    container.append(subcategories.cloneNode(true));
  }

  categoryTop.innerHTML = "";
  categoryTop.append(container);
  categoryTop.classList.add("is-processed");

  const title = categoryTop.querySelector(".category-title");
  const appendix =
    title?.querySelector(".pagination-appendix") ||
    document.querySelector(".pagination-appendix");

  if (title && appendix) {
    appendix.textContent = appendix.textContent.replace(",", "").trim();
    if (!title.contains(appendix)) {
      title.append(appendix);
    }
  }
};
/**
 * ZPRACOVÁNÍ NEJPRODÁVANĚJŠÍCH PRODUKTŮ
 */

// Funkce ukládá nejprodávanější produkty do cache a v případě jejich absence v DOMu je vkládá zpět.
const handleBestSellingInjection = () => {
  if (window.shoptetPage !== "category") return;

  const categoryTop = document.querySelector(".category-top");
  let existingBestSelling = document.querySelector(".products-top-wrapper");

  if (existingBestSelling && !bestSellingCache) {
    existingBestSelling.classList.remove("has-inactive");
    bestSellingCache = existingBestSelling.cloneNode(true);

    if (categoryTop && categoryTop.contains(existingBestSelling)) {
      categoryTop.after(existingBestSelling);
    }
  }

  if (
    !document.querySelector(".products-top-wrapper") &&
    bestSellingCache &&
    categoryTop
  ) {
    categoryTop.after(bestSellingCache.cloneNode(true));
    handleBestSellingProducts();
  }
};

// Funkce přidává tlačítka "Detail" k nejprodávanějším produktům, řeší jejich persistenci přes cache a opravuje src u obrázků.
const handleBestSellingProducts = () => {
  const categoryTop = document.querySelector(".category-top");
  let bestSelling = document.querySelector(".products-top-wrapper");

  const fixImages = (container) => {
    const images = container.querySelectorAll("img[data-src]");
    images.forEach((img) => {
      img.setAttribute("src", img.getAttribute("data-src"));
    });
  };

  if (bestSelling && !bestSellingCache) {
    bestSelling.classList.remove("has-inactive");
    fixImages(bestSelling);
    bestSellingCache = bestSelling.cloneNode(true);
  }

  if (!bestSelling && bestSellingCache && categoryTop) {
    const fragment = bestSellingCache.cloneNode(true);
    fixImages(fragment);
    categoryTop.after(fragment);
    bestSelling = document.querySelector(".products-top-wrapper");
  }

  const products = document.querySelectorAll("#productsTop .product");
  if (!products.length) return;

  const lang = document.documentElement.lang || "cs";
  const detailText =
    window.projectTranslations?.[lang]?.category?.productsTopButton || "Detail";
  const btnTemplate = `<a href="{{url}}" class="btn btn-primary btn-detail-added">${detailText}</a>`;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (product.querySelector(".btn-detail-added")) continue;

    const productInner = product.querySelector(".p");
    const productNameLink = product.querySelector(".name");

    if (productInner && productNameLink) {
      const productUrl = productNameLink.getAttribute("href");
      productInner.insertAdjacentHTML(
        "beforeend",
        btnTemplate.replace("{{url}}", productUrl),
      );
    }
  }
};

/**
 * ZPRACOVÁNÍ FILTRŮ
 */

// Funkce přeskládá prvky cenového slideru tak, aby samotný slider ležel v DOMu mezi minimální a maximální cenou.
const wrapPriceSliderInner = (sliderWrapper) => {
  const header = sliderWrapper.querySelector(".slider-header");
  const content = sliderWrapper.querySelector(".slider-content");
  const from = header?.querySelector(".from");
  const to = header?.querySelector(".to");

  if (header && content && from && to) {
    const innerContainer = document.createElement("div");
    innerContainer.className = "slider-inner-container";

    // Vložíme kontejner před hlavičku
    header.before(innerContainer);

    // Přeskládáme to do innerContaineru: FROM -> SLIDER -> TO
    innerContainer.append(from);
    innerContainer.append(content);
    innerContainer.append(to);

    // Původní prázdný header můžeme smazat, už v něm nic není
    header.remove();
  }
};

// Funkce rozděluje filtry do dvou skupin podle typu, aby umožnila specifický layout (např. boční panel).
const splitFiltersToGroups = (filters) => {
  const leftWrapper = document.createElement("div");
  leftWrapper.className = "filters-left";
  const rightWrapper = document.createElement("div");
  rightWrapper.className = "filters-right";

  const slider = filters.querySelector(".slider-wrapper");
  const priceForm = filters.querySelector("#price-filter-form");
  const booleanSection = filters.querySelector(".filter-section-boolean");
  const otherSections = filters.querySelectorAll(
    ".filter-section:not(.filter-section-boolean)",
  );

  if (slider) leftWrapper.append(slider);
  if (priceForm) leftWrapper.append(priceForm);
  if (booleanSection) leftWrapper.append(booleanSection);

  for (let i = 0; i < otherSections.length; i++) {
    rightWrapper.append(otherSections[i]);
  }

  filters.innerHTML = "";
  filters.append(leftWrapper, rightWrapper);
};

// Funkce spouští proces restrukturalizace filtrů a označuje je jako zpracované.
const handleCategoryFilters = () => {
  if (window.shoptetPage !== "category") return;

  const filters = document.querySelector("#filters");
  if (!filters || filters.classList.contains("filters-processed")) return;

  const sliderWrapper = filters.querySelector(".slider-wrapper");
  if (sliderWrapper) {
    wrapPriceSliderInner(sliderWrapper);
    splitFiltersToGroups(filters);
    filters.classList.add("filters-processed");
  }
};

/**
 * HLAVNÍ ORCHESTRÁTOR
 */

// Hlavní řídicí funkce pro kategorii, která registruje eventy a spouští všechny dílčí úpravy.
const handleCategoryCritical = () => {
  if (window.shoptetPage !== "category") return;

  handleBestSellingInjection();
  handleCategoryTop();
  handleBestSellingProducts();
  handleCategoryFilters();

  const events = ["shoptet.contentUpdated", "ShoptetDOMPageContentLoaded"];
  events.forEach((eventName) => {
    document.removeEventListener(eventName, handleCategoryCritical);
    document.addEventListener(eventName, (e) => {
      handleCategoryCritical();
    });
  });
};

handleCategoryCritical();

// Funkce transformuje galerii na Swiper a optimalizuje načítání (LCP).
// Hlavní slider a jeho šipky jsou obaleny do jednoho kontejneru pro snadné centrování.
const handleProductGallery = () => {
  const wrapper = document.querySelector(".p-image-wrapper");
  if (!wrapper) return;

  const thumbAnchors = wrapper.querySelectorAll(
    ".p-thumbnails-inner a.p-thumbnail",
  );
  if (!thumbAnchors.length) return;

  const isDesktop = window.innerWidth >= 768;
  const flags =
    document.querySelector(".p-image .flags-extra")?.outerHTML || "";

  let mainSlides = "";
  let thumbSlides = "";

  for (let i = 0; i < thumbAnchors.length; i++) {
    const anchor = thumbAnchors[i];
    const fullImg = anchor.href;
    const origImg = anchor.nextElementSibling?.getAttribute("href") || fullImg;
    const imgEl = anchor.querySelector("img");
    const thumbImg = imgEl?.getAttribute("data-src") || imgEl?.src || fullImg;
    const alt = imgEl?.alt || "";

    const loadingAttr =
      i === 0 ? 'fetchpriority="high" loading="eager"' : 'loading="lazy"';

    mainSlides += `
            <div class="swiper-slide">
                <div class="p-main-image cloud-zoom" 
                     data-href="${origImg}"
                     style="position: relative; display: block; cursor: crosshair;">
                    <img src="${fullImg}" alt="${alt}" ${loadingAttr}>
                </div>
            </div>`;

    if (isDesktop) {
      thumbSlides += `<div class="swiper-slide" style="cursor: pointer;"><img src="${thumbImg}" alt="${alt}" loading="lazy"></div>`;
    }
  }

  let galleryHtml = `
        <div class="swiper-main-wrapper">
            <div class="swiper swiper-main-image">
                ${flags}
                <div class="swiper-wrapper">${mainSlides}</div>
            </div>
            <div class="swiper-button-next main-nav-next secondary"></div>
            <div class="swiper-button-prev main-nav-prev secondary"></div>
        </div>
    `;

  if (isDesktop) {
    galleryHtml += `
            <div class="swiper-thumbnails-wrapper">
                <div class="swiper swiper-thumbnails">
                    <div class="swiper-wrapper">${thumbSlides}</div>
                </div>
                <div class="swiper-button-next swiper-thumb-next small"></div>
                <div class="swiper-button-prev swiper-thumb-prev small"></div>
            </div>
        `;
  }

  wrapper.innerHTML = galleryHtml;

  if (window.Swiper) {
    let swiperOptions = {
      spaceBetween: 16,
      navigation: {
        nextEl: ".main-nav-next",
        prevEl: ".main-nav-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    };

    if (isDesktop) {
      const thumbSwiper = new Swiper(".swiper-thumbnails", {
        spaceBetween: 8,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: ".swiper-thumb-next",
          prevEl: ".swiper-thumb-prev",
        },
      });
      swiperOptions.thumbs = { swiper: thumbSwiper };
      swiperOptions.pagination = false;
    }

    new Swiper(".swiper-main-image", swiperOptions);

    if (isDesktop && window.jQuery && $.fn.CloudZoom) {
      try {
        $(".swiper-main-image .cloud-zoom").CloudZoom();
      } catch (e) {
        console.warn("CloudZoom neprošel:", e);
      }
    }
  }
};

// Funkce přesouvá hlavičku, hvězdičky a kód produktu na začátek informačního panelu.
// Kód produktu je vložen přímo do obalu s hodnocením pro lepší rozložení prostoru.
const handleProductTop = () => {
  const infoWrapper = document.querySelector(".p-detail .p-info-wrapper");
  const header = document.querySelector(".p-detail-inner-header");
  const stars = document.querySelector(".stars-wrapper");
  const pCode = document.querySelector(".p-code");

  if (!infoWrapper || !header) return;

  infoWrapper.prepend(header);

  if (stars) {
    header.after(stars);
    if (pCode) {
      stars.append(pCode);
    }
  }
};

// Funkce přesouvá příznaky produktu z informačního bloku přímo do hlavního Swiper kontejneru.
const handleProductFlags = () => {
  const mainSwiper = document.querySelector(".swiper-main-image");
  const flags = document.querySelector(".p-detail-info .flags");

  if (!mainSwiper || !flags) return;

  // Přesuneme příznaky na začátek Swiperu, aby byly vidět nad obrázky
  mainSwiper.prepend(flags);
};

// Funkce sjednotí nákupní blok do jednoho obalu, vypočítá ušetřenou částku
// a upraví text tlačítka košíku podle systémových proměnných Shoptetu.
const handleAddToCartWrapper = () => {
  const infoWrapper = document.querySelector(".p-info-wrapper");
  if (!infoWrapper) return;

  let cartWrapper = infoWrapper.querySelector(".add-to-cart-wrapper");
  const addToCartBlock = infoWrapper.querySelector(".add-to-cart");
  const finalPriceWrapper = document.querySelector(".p-final-price-wrapper");

  if (!cartWrapper) {
    cartWrapper = document.createElement("div");
    cartWrapper.className = "add-to-cart-wrapper";

    if (addToCartBlock) {
      addToCartBlock.before(cartWrapper);
    } else {
      infoWrapper.append(cartWrapper);
    }
  }

  // --- 1. Přesun a úprava ceny (Výpočet slevy) ---
  if (finalPriceWrapper) {
    cartWrapper.append(finalPriceWrapper);

    const priceSaveEl = cartWrapper.querySelector(".price-save");

    // Najdeme aktivní slevu od Shoptetu
    const activeSaveVariant = priceSaveEl?.querySelector(
      ".parameter-dependent:not(.no-display):not(.noDisplay)",
    );
    const isSaveEmpty =
      activeSaveVariant?.classList.contains("empty") ||
      activeSaveVariant?.textContent.trim() === "-" ||
      activeSaveVariant?.textContent.trim() === "–";

    // Pokud je aktivní varianta slevy prázdná, odstraníme náš výpočet a končíme
    if (isSaveEmpty) {
      priceSaveEl.querySelector(".save-amount-text")?.remove();
    } else {
      const standardPriceEl = cartWrapper.querySelector(
        ".price-standard .parameter-dependent:not(.no-display):not(.noDisplay):not(.empty)",
      );
      const finalPriceEl = cartWrapper.querySelector(
        ".price-final-holder:not(.no-display):not(.noDisplay)",
      );

      if (
        standardPriceEl &&
        finalPriceEl &&
        priceSaveEl &&
        !priceSaveEl.querySelector(".save-amount-text")
      ) {
        const extractValue = (el) => {
          const clone = el.cloneNode(true);
          const unit = clone.querySelector(".pr-list-unit");
          if (unit) unit.remove();

          const rawText = clone.textContent
            .replace(/od/g, "")
            .replace(/\s/g, "")
            .replace(/\u00A0/g, "");

          const match = rawText.match(/[\d,]+/);
          return match ? parseFloat(match[0].replace(",", ".")) : 0;
        };

        const standardPrice = extractValue(standardPriceEl);
        const finalPrice = extractValue(finalPriceEl);

        if (standardPrice > 0 && finalPrice > 0 && standardPrice > finalPrice) {
          const savedAmount = standardPrice - finalPrice;

          const cInfo = window.dataLayer?.[0]?.shoptet?.currencyInfo || {
            decimalSeparator: ",",
            thousandSeparator: " ",
            symbol: "Kč",
            symbolLeft: 0,
            priceDecimalPlaces: 2,
          };

          let formattedNum = parseFloat(
            savedAmount.toFixed(cInfo.priceDecimalPlaces),
          ).toString();
          let parts = formattedNum.split(".");
          parts[0] = parts[0].replace(
            /\B(?=(\d{3})+(?!\d))/g,
            cInfo.thousandSeparator,
          );
          let formattedSave = parts.join(cInfo.decimalSeparator);

          const saveTextString = cInfo.symbolLeft
            ? `${cInfo.symbol} ${formattedSave}`
            : `${formattedSave} ${cInfo.symbol}`;

          const saveText = document.createElement("span");
          saveText.className = "save-amount-text";
          saveText.textContent = ` (${saveTextString})`;

          priceSaveEl.append(saveText);
        }
      }
    }
  }

  // --- 2. Přesun nákupního bloku a úprava textu tlačítka ---
  if (addToCartBlock) {
    cartWrapper.append(addToCartBlock);

    const addToCartButton = addToCartBlock.querySelector(".add-to-cart-button");
    if (
      addToCartButton &&
      window.shoptet &&
      window.shoptet.messages &&
      window.shoptet.messages["toCart"]
    ) {
      addToCartButton.textContent = window.shoptet.messages["toCart"];
    }
  }
};

// Funkce sjednotí informace o dostupnosti a doručení do jednoho bloku
// a obarví čas doručení i počty kusů stejnou barvou, jakou má hlavní štítek dostupnosti.
const handleAvailabilityProductTop = () => {
  const infoWrapper = document.querySelector(".p-info-wrapper");
  if (!infoWrapper) return;

  const availabilityValue = infoWrapper.querySelector(".availability-value");
  const availabilityLabel = infoWrapper.querySelector(".availability-label");
  const availabilityAmounts = infoWrapper.querySelectorAll(
    ".availability-amount",
  );
  const deliveryTimeLabel = infoWrapper.querySelector(".delivery-time-label");
  const deliveryTime = infoWrapper.querySelector(".delivery-time");

  if (!availabilityValue) return;

  const statusColor = availabilityLabel ? availabilityLabel.style.color : "";

  // Projdeme všechny nalezené elementy s počtem kusů a obarvíme je
  if (availabilityAmounts.length > 0 && statusColor) {
    availabilityAmounts.forEach((amount) => {
      amount.style.color = statusColor;
    });
  }

  if (deliveryTimeLabel) {
    if (statusColor) deliveryTimeLabel.style.color = statusColor;
    availabilityValue.append(deliveryTimeLabel);
  }

  if (deliveryTime) {
    if (statusColor) deliveryTime.style.color = statusColor;
    availabilityValue.append(deliveryTime);
  }
};

// Hlavní řídicí funkce pro detail produktu, která registruje eventy a spouští dílčí úpravy.
const handleProductDetailCritical = () => {
  if (window.shoptetPage !== "productDetail") return;
  const productDetail = document.querySelector(".p-detail");
  if (!productDetail) return;

  handleProductGallery();
  handleProductTop();
  handleProductFlags();
  handleAddToCartWrapper();
  handleAvailabilityProductTop();
  setTimeout(() => {
    productDetail.classList.add("is-processed");
  }, 40);

  const events = ["shoptet.contentUpdated", "shoptet.variantsUpdated"];
  events.forEach((eventName) => {
    document.removeEventListener(eventName, handleProductDetailCritical);
    document.addEventListener(eventName, (e) => {
      handleProductDetailCritical();
    });
  });
};

handleProductDetailCritical();

const handlePost = async () => {};
if (document.body.classList.contains("type-post")) handlePost();
