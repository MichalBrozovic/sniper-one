window.shoptetPage = dataLayer[0].shoptet.pageType;
window.shoptetLang = dataLayer[0].shoptet.language;
window.body = document.querySelector("body");

// přesunování elementů
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

// Přiřazení funkce k objektu window pro globální dostupnost
window.moveElement = moveElement;

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

const handleHeader = async () => {
  let liElements = document.querySelectorAll(".menu-level-3 li");

  liElements.forEach((li) => {
    let childNodes = Array.from(li.childNodes);
    childNodes.forEach((node) => {
      if (node.nodeType === 3 && node.textContent.includes(",")) {
        // 3 is a Text node
        node.textContent = node.textContent.replace(",", "");
      }
    });
  });
};
handleHeader();
document.addEventListener("ShoptetDOMPageContentLoaded", handleHeader);
document.addEventListener("ShoptetDOMContentLoaded", handleHeader);

const initHomepageSwiper = () => {
  const $carousel = document.querySelector("#carousel");
  const $inner = document.querySelector(".carousel-inner");
  const $items = document.querySelectorAll(".carousel-inner .item");

  if (!$carousel || !$inner || $items.length === 0) return;

  // Transformace DOMu (stejná jako minule)
  $carousel.classList.add("swiper");
  $inner.classList.replace("carousel-inner", "swiper-wrapper");
  $items.forEach(
    (el) =>
      el.classList.remove("item", "active") || el.classList.add("swiper-slide"),
  );

  // Vyčistíme navigaci
  $carousel.querySelectorAll(".carousel-control").forEach((el) => el.remove());
  $carousel.insertAdjacentHTML(
    "beforeend",
    '<div class="swiper-pagination"></div>',
  );

  // Inicializace
  new window.Swiper("#carousel", {
    grabCursor: true,
    watchSlidesProgress: true,
    speed: 800,
    breakpointsBase: "container",
    slidesPerView: 1.1,
    spaceBetween: 10,

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1360: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
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
