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
const handleHeader = async () => {
  syncLanguageMenu();
  removeMenuCommas();
  injectOpeningHours();
  moveNavigation();
  menuLevelTwoRefactoring();
  moveLoginButton();
  userCartHandle();
};
handleHeader();
document.addEventListener("ShoptetDOMPageContentLoaded", handleHeader);
document.addEventListener("ShoptetDOMContentLoaded", handleHeader);

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
      768: { slidesPerView: 2, spaceBetween: 14 },
      1024: { slidesPerView: 3, spaceBetween: 16 },
      1360: { slidesPerView: 4, spaceBetween: 16 },
    },
  });
};

document.addEventListener("DOMContentLoaded", initHomepageSwiper);

const handleCategory = async (reload = false) => {};
const handleCheckedFilters = () => {};

const handleProductDetail = async () => {};
if (shoptetPage === "productDetail") {
  handleProductDetail();
}

const handlePost = async () => {};
if (document.body.classList.contains("type-post")) handlePost();
