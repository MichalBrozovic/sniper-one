//Globalní proměnné
// na kraztší zjištění stránky a jazyka
import {} from "./translate.js";

window.shoptetPage = dataLayer[0].shoptet.pageType;
window.shoptetLang = dataLayer[0].shoptet.language;
window.body = document.querySelector("body");

const fetchData = () => {
  return fetch("/user/documents/upload/shoptet-stock-all.json")
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching the JSON file:", error);
    });
};

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

window.productsSlickSettings = {
  slidesToShow: 5,
  infinite: false,
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

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

const moveRegistrationBannerLogin = async () => {
  if (dataLayer[0].shoptet.customer.registered === false) {
    let registrationBannerLogin = document.querySelector(
      ".registration-banner-login"
    );
    if (!registrationBannerLogin) {
      const storedBanner = sessionStorage.getItem("registrationBannerLogin");
      if (storedBanner) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(storedBanner, "text/html");
        registrationBannerLogin = doc.body.firstChild;
      } else {
        const response = await fetch("/");
        const text = await response.text();
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(text, "text/html");
        registrationBannerLogin = htmlDocument.querySelector(
          ".registration-banner-login"
        );
        if (registrationBannerLogin) {
          sessionStorage.setItem(
            "registrationBannerLogin",
            registrationBannerLogin.outerHTML
          );
        }
      }
    } else {
      sessionStorage.setItem(
        "registrationBannerLogin",
        registrationBannerLogin.outerHTML
      );
    }

    // const userActionLogin = document.querySelector('.user-action-login')
    // const h2 = userActionLogin.querySelector('.popup-widget-inner h2')
    // const popUpLoginText = popUpLogin.find((item) => item.language === shoptetLang)
    // if (popUpLoginText) {
    // 	h2.innerHTML = popUpLoginText.text
    // }
    // const socialLogin = userActionLogin.querySelector('.popup-widget-inner .social-login-buttons-divider span');
    // const otherLogin = otherLogins.find(item => item.language === shoptetLang);
    // if (otherLogin) {
    // 	socialLogin.innerHTML = otherLogin.text;
    // }
    // const perex = userActionLogin.querySelector('.popup-widget-inner p')
    // if (!perex) {
    // 	const loginPerex = document.createElement('p')
    // 	const loginPerexText = loginBeneText.find((item) => item.language === shoptetLang)
    // 	if (loginPerexText) {
    // 		loginPerex.innerHTML = loginPerexText.text
    // 	}
    // 	h2.insertAdjacentElement('afterend', loginPerex)
    // 	if (registrationBannerLogin && userActionLogin) {
    // 		userActionLogin.appendChild(registrationBannerLogin)
    // 	}
    // }

    // const bgClose = userActionLogin.querySelector('.bg-close')
    // if (!bgClose) {
    // 	const bgClose2 = document.createElement('div')
    // 	bgClose2.classList.add('bg-close')
    // 	userActionLogin.appendChild(bgClose2)
    // 	bgClose2.addEventListener('click', () => {
    // 		document.body.classList.remove('login-window-visible')
    // 		document.body.classList.remove('user-action-visible')
    // 	})
    // }

    // const close = userActionLogin.querySelector('.close')
    // if (!close) {
    // 	const close2 = document.createElement('div')
    // 	close2.classList.add('close')
    // 	close2.innerHTML = '<div></div><div></div>'
    // 	userActionLogin.appendChild(close2)
    // 	close2.addEventListener('click', (event) => {
    // 		if (event.target.closest('.close')) {
    // 			document.body.classList.remove('login-window-visible')
    // 			document.body.classList.remove('user-action-visible')
    // 		}
    // 	})
    // }
  }
};

moveRegistrationBannerLogin();
document.addEventListener(
  "ShoptetDOMPageContentLoaded",
  moveRegistrationBannerLogin
);
document.addEventListener(
  "ShoptetDOMContentLoaded",
  moveRegistrationBannerLogin
);

const handleHeader = async () => {
  const infoMsgText = document.querySelector(".site-msg.information .text");
  if (infoMsgText) {
    const topNavContainer = document.querySelector(
      ".top-navigation-bar .container"
    );
    // Zkontroluj, jestli už .information-wrapper existuje
    let infoWrapper = topNavContainer.querySelector(".information-wrapper");
    if (!infoWrapper) {
      infoWrapper = document.createElement("div");
      infoWrapper.className = "information-wrapper";
      // Přesuň text do wrapperu
      infoWrapper.appendChild(infoMsgText);
      // Vlož wrapper na začátek kontejneru
      topNavContainer.insertBefore(infoWrapper, topNavContainer.firstChild);
    }
    // Přidej klikací logiku pro přepínání třídy "active" na textu
    infoWrapper.addEventListener("click", function () {
      const text = infoWrapper.querySelector(".text");
      if (text) {
        text.classList.toggle("active");
      }
    });
  }

  const projectPhone = document.querySelector(
    ".top-navigation-contacts .project-phone"
  );
  if (
    projectPhone &&
    (!projectPhone.nextElementSibling ||
      !projectPhone.nextElementSibling.classList.contains("holder-phone-time"))
  ) {
    const holder = document.createElement("div");
    holder.className = "holder-phone-time";
    const timeData =
      window.projectPhoneTime.find((item) => item.language === shoptetLang) ||
      window.projectPhoneTime[0];
    holder.innerHTML = timeData.text;
    projectPhone.insertAdjacentElement("afterend", holder);
  }

  if (window.innerWidth > 992) {
    function addCatalogButtonToNavigation() {
      const navIn = document.querySelector("#navigation .navigation-in");
      if (!navIn) return;

      // Zjisti aktuální jazyk
      const lang = window.shoptetLang || "cs";
      const btnData =
        window.catalogButtonLink.find((item) => item.language === lang) ||
        window.catalogButtonLink[0];

      // Zkontroluj, zda už tlačítko neexistuje
      if (navIn.querySelector(".btn.btn-primary.catalog-btn")) return;

      const btn = document.createElement("a");
      btn.className = "btn btn-primary catalog-btn";

      btn.textContent = btnData.text;

      navIn.insertBefore(btn, navIn.firstChild);
    }

    addCatalogButtonToNavigation();
    document.addEventListener("click", function (e) {
      const catalogBtn = e.target.closest(".catalog-btn");
      const menuLevel1 = document.querySelector(".menu-level-1");
      const navigationIn = document.querySelector("#navigation .navigation-in");
      const body = document.querySelector("body");
      if (catalogBtn && menuLevel1 && navigationIn) {
        menuLevel1.classList.toggle("active");
        navigationIn.classList.toggle("active");
        body.classList.toggle("new-navigation-window-visible");
        e.stopPropagation();
      } else if (menuLevel1 && !e.target.closest(".menu-level-1")) {
        menuLevel1.classList.remove("active");
        navigationIn.classList.remove("active");
        body.classList.remove("new-navigation-window-visible");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" || e.key === "Esc") {
        const menuLevel1 = document.querySelector(".menu-level-1");
        const navigationIn = document.querySelector(
          "#navigation .navigation-in"
        );
        const body = document.querySelector("body");
        if (menuLevel1 && navigationIn) {
          menuLevel1.classList.remove("active");
          navigationIn.classList.remove("active");
          body.classList.remove("new-navigation-window-visible");
        }
      }
    });
  }




  // const navigation = document.querySelector('#navigation');
  // if (window.innerWidth <= 767) {
  // 	const headerTop = document.querySelector('.header-top')
  // 	if (search && headerTop) {
  // 		headerTop.insertAdjacentElement('afterend', search)
  // 	}
  // }

  //add links to toolbar at top

  //second loho - tulačik
  const mainLogo = document.querySelector(".site-name-wrapper");

  // const searchBtn = document.querySelector("#formSearchForm button");
  // if (searchBtn) {
  //   searchBtn.textContent = "";
  // }

  const headerTopW = document.querySelector(".header-top");
  const search = document.querySelector(".header-top .search");
  const navigation = document.querySelector("#navigation");
  const header = document.querySelector("#header");
  // if (header && search) {
  //   header.appendChild(search);
  // }

  // if (window.innerWidth > 992) {
  //   headerTopW.appendChild(navigation);
  // }

  const menuHelper = document.querySelector(".menu-helper");
  if (menuHelper && navigation) navigation.appendChild(menuHelper);
  const navigationButtons = document.querySelector(".navigation-buttons");
  const currencyLanguage = document.querySelector(".languagesMenu");
  const navBtns = document.querySelector(".navigation-buttons");

  if (navBtns && currencyLanguage) {
    navBtns.insertBefore(currencyLanguage, navBtns.firstChild);
  }

  const loginButton =
    document.querySelector(".top-nav-button-account") ||
    document.querySelector(".top-nav-button-login");
  if (navigationButtons && loginButton) navigationButtons.prepend(loginButton);

  // loginButton.textContent = '';
  const topNavigationBarMenu = document.querySelector(".top-navigation-menu");
  // const helper = document.createElement('div');
  // helper.classList.add('wrapper');
  const headerCont = document.querySelector("#header .container");
  if (window.innerWidth < 993) {
    if (search) {
      headerCont.appendChild(search);
    }
  }

  // if (!document.querySelector("body").classList.contains("ordering-process")) {
  // 	if (window.innerWidth >= 1100) {

  // 		console.log(window.innerWidth);

  // 		console.log('a');
  // 		navigation.appendChild(navigationButtons);
  // 	}
  // }
  // function logOverflowElementAndParents(el) {
  // 	console.log('Overflow element: ', el);
  // 	let parent = el.parentElement;
  // 	while (parent) {
  // 		console.log('Parent element: ', parent);
  // 		parent = parent.parentElement;
  // 	}
  // }

  // document.querySelectorAll('*').forEach((el) => {
  // 	if (el.offsetWidth > document.documentElement.offsetWidth) {
  // 		logOverflowElementAndParents(el);
  // 	}
  // });
  // helper.appendChild(navigationButtons);

  const siteHeader = document.querySelector("#header");
  const navigationIn = document.querySelector(".navigation-in");
  // if (window.innerWidth <= 900) {
  // 	const lang = document.querySelector('.languagesMenu');
  // 	if (lang && navigationIn) {
  // 		navigationIn.prepend(lang);
  // 	}
  // }
  if (window.innerWidth >= 1100) {
    // if (topNavigationBarMenu && navigation) {
    // 	headerTopW.appendChild(topNavigationBarMenu)
    // }
  }
  // else if (window.innerWidth <= 900) {
  //   navigationIn.appendChild(topNavigationBarMenu);
  // }

  const cartCount = document.querySelector(".cart-count");
  if (cartCount) {
    const icon = cartCount.querySelector("i");
    if (!icon) {
      const cartPrice = document.querySelector(".cart-price");
      if (cartPrice) {
        const k = kosik.find((item) => item.language === shoptetLang);
        if (k) {
          cartPrice.innerHTML = k.text;
        }
      }
    }
  }

  const searchButton = document.querySelector(
    '.toggle-window[data-target="search"]'
  );
  const upperMenu = document.querySelector(".top-navigation-bar-menu");

  // if (upperMenu && searchButton) {
  //   // Zkontroluje, zda již searchButton není v upperMenu
  //   const existingSearchItem = upperMenu.querySelector(
  //     "li .toggle-window[data-target='search']"
  //   );
  //   if (!existingSearchItem) {
  //     const searchListItem = document.createElement("li");
  //     searchListItem.appendChild(searchButton);
  //     upperMenu.appendChild(searchListItem);

  //     const searchBtnText = searchText.find(
  //       (item) => item.language === shoptetLang
  //     );
  //     if (searchBtnText) {
  //       searchButton.classList.add("search-button");
  //       searchButton.textContent = searchBtnText.text;
  //     }
  //   }
  // }
  const navButtons = document.querySelector(".navigation-buttons");
  const menuTrigger = document.querySelector(
    '.toggle-window[data-target="navigation"]'
  );
  if (menuTrigger && navButtons) navButtons.appendChild(menuTrigger);

  if (window.innerWidth > 992) {
    const menuLvl2s = document.querySelectorAll("#navigation .menu-level-2");
    menuLvl2s.forEach((menuLvl2) => {
      const realmenu2 = menuLvl2.querySelector(".menu-level-2-helper");
      if (!realmenu2) {
        const helper = document.createElement("div");
        helper.classList.add("menu-level-2-helper");
        menuLvl2.parentElement.insertBefore(helper, menuLvl2);
        helper.appendChild(menuLvl2);
      }
    });
  }
  // const menuLvL2Li = document.querySelectorAll('.menu-level-2 > li')
  // menuLvL2Li.forEach((li) => {
  // 	const innerImg = li.querySelector('.menu-image > img')
  // 	const toRemove = li.querySelector('.menu-image')
  // 	const targetA = li.querySelector('div > a')
  // 	if (innerImg && toRemove) {
  // 		if (innerImg.getAttribute('data-src'))
  // 			innerImg.setAttribute('data-src', innerImg.getAttribute('data-src').replace('/thumb/', '/orig/'))
  // 		if (innerImg.getAttribute('src')) innerImg.setAttribute('src', innerImg.getAttribute('src').replace('/thumb/', '/orig/'))
  // 		const imgWrap = document.createElement('div')
  // 		imgWrap.classList.add('menu-image')
  // 		imgWrap.appendChild(innerImg)
  // 		targetA.prepend(imgWrap)
  // 		toRemove.remove()
  // 	}
  // })

  const topBanner = document.querySelector(".top-panel-text-wrapper");
  const topNavigation = document.querySelector(
    ".top-navigation-bar .container"
  );
  if (topBanner && topNavigation) {
    topNavigation.appendChild(topBanner);
  }
  // const profeseLi =
  // 	window.innerWidth > 767
  // 		? document.querySelectorAll('.navigation-in a[href="/podle-profese/"] + .menu-level-2-helper .menu-level-3 > li')
  // 		: document.querySelectorAll('.navigation-in .menu-level-3 > li')
  // profeseLi.forEach((li) => {
  // 	const help = li.querySelector('a')
  // 	li.innerHTML = ''
  // 	li.appendChild(help)
  // })

  let initialYScroll = 0;
  const debouncedScroll = debounce(function () {
    const header = document.querySelector("#header");
    const headerOffsetTop = header.offsetTop;
    const windowScrollTop = window.scrollY;
    // const header2 = document.querySelector('.user-action-cart')
    const login = document.querySelector(".user-action-login");
    // if (headerOffsetTop <= windowScrollTop) {
    // 	header.classList.add('sticky')
    // } else {
    // 	header.classList.remove('sticky')
    // }
    // if (window.innerWidth > 1100) {
    if (windowScrollTop > initialYScroll) {
      header.classList.remove("scroll-up");
      header.classList.add("scroll-down");
      // login.classList.add("sticky");
      // header2.classList.add('sticky');
    } else {
      header.classList.remove("scroll-down");
      header.classList.add("scroll-up");
      // login.classList.remove("sticky");
      // header2.classList.remove('sticky');
    }
    // }
    initialYScroll = windowScrollTop;
  }, 100);

  window.addEventListener("scroll", debouncedScroll);

  setTimeout(() => {
    const headerTop = document.querySelector("#header .header-top");
    if (headerTop)
      header.style.setProperty(
        "--header-top-height",
        `${headerTop.clientHeight}px`
      );
  }, 100);

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

  // const headerBanner = document.querySelector('.custom-footer__banner1')
  // if (headerBanner) {
  // 	const allMenuLevel2Helpers = document.querySelectorAll('.menu-level-1 li.ext .menu-level-2-helper')
  // 	allMenuLevel2Helpers.forEach((helper) => {
  // 		const clone = headerBanner.cloneNode(true) // true means it will clone the node and its child nodes
  // 		helper.appendChild(clone)
  // 	})
  // }

  if (window.innerWidth < 768) {
    const siteLogo = document.querySelector(
      ".header-top .site-name-wrapper a img"
    );
    if (siteLogo) {
      siteLogo.src = "/user/documents/upload/Obrazky/mobile-logo.svg";
    }
  }
};
handleHeader();
document.addEventListener("ShoptetDOMPageContentLoaded", handleHeader);
document.addEventListener("ShoptetDOMContentLoaded", handleHeader);

function updateHeaderVars() {
  // 1. Výška #header + .top-navigation-bar
  const header = document.querySelector("#header");
  const topNav = document.querySelector(".top-navigation-bar");
  const headerHeight = header ? header.offsetHeight : 0;
  const topNavHeight = topNav ? topNav.offsetHeight : 0;
  const totalHeight = headerHeight + topNavHeight;
  document.documentElement.style.setProperty(
    "--header-total-height",
    `${totalHeight}px`
  );

  const container = document.querySelector("#header .container");

  if (container) {
    const containerWidth = container.offsetWidth;
    const screenWidth = window.innerWidth;
    const margin = (screenWidth - containerWidth) / 2;
    console.log("Šířka kontejneru:", containerWidth);
    console.log("Šířka obrazovky:", screenWidth);
    document.documentElement.style.setProperty(
      "--header-container-margin-left",
      `${margin}px`
    );
    document.documentElement.style.setProperty(
      "--header-container-margin-right",
      `${margin}px`
    );

    console.log("Vypočítaný margin:", margin);
  }
}
setTimeout(() => {
  updateHeaderVars();
}, 1000);
document.addEventListener("load", updateHeaderVars);
// Spuštění po načtení a při změně velikosti okna
document.addEventListener("DOMContentLoaded", updateHeaderVars);
document.addEventListener("resize", updateHeaderVars);
document.addEventListener("ShoptetDOMContentLoaded", updateHeaderVars);
document.addEventListener("ShoptetDOMPageContentLoaded", updateHeaderVars);

document.addEventListener("click", function (event) {
  const navigation = document.querySelector("#navigation");
  if (navigation && !navigation.contains(event.target)) {
    document.body.classList.remove(
      "navigation-window-visible",
      "user-action-visible"
    );
  }
});

// const handleCarouselThumbnails = () => {
// 	const carousel = document.querySelector('#carousel')
// 	if (carousel) {
// 		const carouselItems = carousel.querySelectorAll('.item')
// 		const thumbnails = []
// 		carouselItems.forEach((item) => {
// 			const itemImage = item.querySelector('img')
// 			const itemTitle = itemImage.getAttribute('alt')
// 			const itemThumbnail = document.createElement('div')
// 			itemThumbnail.classList.add('carousel-thumbnail')
// 			itemThumbnail.innerHTML = `
// 				<img src="${itemImage.getAttribute('src') || itemImage.getAttribute('data-src')}" alt="${itemTitle}" />
// 				<span class="carousel-thumbnail-title">${itemTitle}</span>
// 			`
// 			thumbnails.push(itemThumbnail)
// 		})
// 		if (thumbnails.length > 1) {
// 			const carouselThumbnails = document.createElement('div')
// 			carouselThumbnails.classList.add('carousel-thumbnails')
// 			thumbnails.forEach((thumbnail, index) => {
// 				carouselThumbnails.appendChild(thumbnail)
// 				if (index === 0) thumbnail.classList.add('active')
// 				thumbnail.addEventListener('click', (e) => {
// 					e.preventDefault()
// 					document.querySelector('.carousel-inner .item.active').classList.remove('active')
// 					document.querySelector('.carousel-thumbnails .carousel-thumbnail.active').classList.remove('active')
// 					let targetItem = document.querySelectorAll('.carousel-inner .item')[index]
// 					const targetItemImg = targetItem.querySelector('img')
// 					if (!targetItemImg.src) targetItemImg.src = targetItemImg.getAttribute('data-src')
// 					targetItem.classList.add('active')
// 					thumbnail.classList.add('active')
// 				})
// 			})
// 			carousel.parentElement.insertBefore(carouselThumbnails, carousel.nextElementSibling)
// 		}
// 	}
// }
// handleCarouselThumbnails()

// const handleTopCategories = () => {
// 	const topCategories = document.querySelector('.top-categories')
// 	const firstProductsBlock = document.querySelector('.products-block')
// 	if (topCategories && firstProductsBlock)
// 		firstProductsBlock.parentElement.insertBefore(topCategories, firstProductsBlock.nextElementSibling)
// }
// if (shoptetPage === 'homepage') handleTopCategories()

const handleCategory = async (reload = false) => {
  // ...existing code...
  const title = document.querySelector(".category-title");
  const perex = document.querySelector(".category-perex");
  const categoryTop = document.querySelector(".category-top");
  const categoryTopParent = categoryTop ? categoryTop.parentElement : null;

  // Uložení obsahu perexu pro případné další použití
  let perexContent = perex ? perex.innerHTML : "";

  // Skrytí původních elementů
  if (title) title.style.display = "none";
  if (perex) perex.style.display = "none";

  // Kontrola, zda už není vložený nový title nebo perex
  const alreadyHasPerex =
    categoryTop && categoryTop.querySelector(".category-perex.cloned-perex");
  const alreadyHasTitle =
    categoryTop && categoryTop.querySelector(".category-title.cloned-title");

  // Vytvoření a vložení nového title a perexu pouze pokud ještě neexistují
  if (categoryTop && !alreadyHasPerex && !alreadyHasTitle) {
    let newPerex;
    if (perex || perexContent) {
      newPerex = document.createElement("div");
      newPerex.className = "category-perex cloned-perex";
      newPerex.innerHTML = perexContent;
      categoryTop.prepend(newPerex);

      // Přidání toggle odkazu za perex s překlady podle jazyka
      const showTextObj =
        showMoreLessTexts.find((item) => item.language === shoptetLang) ||
        showMoreLessTexts[0];

      const toggle = document.createElement("a");
      toggle.href = "#";
      toggle.className = "toggle";
      toggle.textContent = showTextObj.more;
      newPerex.insertAdjacentElement("afterend", toggle);

      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        newPerex.classList.toggle("active");
        if (newPerex.classList.contains("active")) {
          toggle.textContent = showTextObj.less;
        } else {
          toggle.textContent = showTextObj.more;
        }
      });
    }
    if (title) {
      const newTitle = title.cloneNode(true);
      newTitle.classList.add("cloned-title");
      newTitle.style.display = "";
      categoryTop.prepend(newTitle);
    }
  }
  const subcategories = document.querySelector(".subcategories.with-image");
  if (subcategories) {
    const subcategoriesImages = subcategories.querySelectorAll(".image > img");
    subcategoriesImages.forEach((image) => {
      if (image.src) {
        image.src = image.src.replace("/thumb/", "/orig/");
      }
      if (image.dataset.src) {
        image.dataset.src = image.dataset.src.replace("/thumb/", "/orig/");
      }
    });

    if (window.innerWidth < 1024) {
      const subcategories = document.querySelector(".subcategories.with-image");
      if (subcategories) {
        // Najdi všechny LI v subcategories
        const subcategoryItems = subcategories.querySelectorAll("li");
        let visibleCount = 10;

        if (window.innerWidth < 956) {
          visibleCount = 8;
        }
        if (window.innerWidth < 772) {
          visibleCount = 6;
        }

        // Spouštěj logiku jen pokud je li víc než visibleCount
        if (subcategoryItems.length > visibleCount) {
          // Skryj všechny kromě prvních X
          subcategoryItems.forEach((li, idx) => {
            if (idx >= visibleCount) {
              li.classList.add("hidden");
            } else {
              li.classList.remove("hidden");
            }
          });

          // Překladové proměnné
          const showMoreLessTexts = [
            { language: "cs", more: "Ukázat více", less: "Ukázat méně" },
            { language: "en", more: "Show more", less: "Show less" },
            { language: "de", more: "Mehr anzeigen", less: "Weniger anzeigen" },
          ];
          const showTextObj =
            showMoreLessTexts.find((item) => item.language === shoptetLang) ||
            showMoreLessTexts[0];

          // Vytvoř a vlož tlačítko
          const showCategoriesBtn = document.createElement("a");
          showCategoriesBtn.classList.add("toggle", "show-more-subcategories");
          showCategoriesBtn.innerHTML = showTextObj.more;
          subcategories.insertAdjacentElement("afterend", showCategoriesBtn);

          showCategoriesBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const isExpanded = showCategoriesBtn.classList.toggle("expanded");
            if (isExpanded) {
              showCategoriesBtn.innerHTML = showTextObj.less;
              // Zobraz všechny LI
              subcategoryItems.forEach((li) => li.classList.remove("hidden"));
            } else {
              showCategoriesBtn.innerHTML = showTextObj.more;
              // Skryj podle pravidel
              subcategoryItems.forEach((li, idx) => {
                if (idx >= visibleCount) {
                  li.classList.add("hidden");
                } else {
                  li.classList.remove("hidden");
                }
              });
            }
          });
        }
      }
    }
  }

  const clonedSubCategoriesBottom = document.querySelector(
    ".subcategories-bottom.clone"
  );
  if (!clonedSubCategoriesBottom) {
    const subcategoriesWrapper = document.querySelector(
      ".subcategories.with-image"
    );
    if (subcategoriesWrapper && categoryTopParent) {
      // NOVÁ ČÁST: vytvoření subcategories-bottom
      const subcategoriesBottom = document.createElement("div");
      subcategoriesBottom.classList.add("subcategories-bottom", "clone");

      // Přidání H2 s překladem
      const h2 = document.createElement("h2");
      const anotherSubcategorieText =
        (window.anotherSubcategorie &&
          window.anotherSubcategorie.find(
            (item) => item.language === shoptetLang
          )?.text) ||
        "Příbuzné kategorie";
      h2.textContent = anotherSubcategorieText;
      subcategoriesBottom.appendChild(h2);

      // Klon subkategorií
      const clonedBottomSubcategories = subcategoriesWrapper.cloneNode(true);
      subcategoriesBottom.appendChild(clonedBottomSubcategories);

      // Tlačítko zpět nahoru
      const backBtn = document.createElement("a");
      backBtn.className = "btn btn-secondary";
      backBtn.textContent = "Zpět nahoru";
      backBtn.href = "#";
      backBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      subcategoriesBottom.appendChild(backBtn);

      // Přidej na konec parenta
      categoryTopParent.appendChild(subcategoriesBottom);
    }
  }

  const sidebarH4 = document.querySelector(".box-bg-variant h4");
  if (sidebarH4) {
    const lang = window.shoptetLang || "cs";
    const btnData =
      window.catalogButtonLink.find((item) => item.language === lang) ||
      window.catalogButtonLink[0];
    sidebarH4.innerHTML = btnData.text;
  }

  // dlouhý (spodní) popis
  const secondDescription = document.querySelector(
    ".category__secondDescription"
  );
  if (secondDescription) {
    secondDescription.id = "dlouhy-popis";
    const categoryContent = document.querySelector(
      "#content .category-content-wrapper"
    );
    categoryContent.parentElement.insertBefore(
      secondDescription,
      categoryContent.nextElementSibling
    );
  }
  // banery v kategorii
  const categoryBanners = document.querySelectorAll(".banner-category");
  const firstProductBlock = document.querySelector("#products");
  const secondProductBlock = document.querySelector(
    ".products-block:not(#products)"
  );
  if (secondProductBlock) {
    const secondBlockProducts = secondProductBlock.querySelectorAll(".product");
    secondBlockProducts.forEach((product) => {
      if (firstProductBlock) firstProductBlock.appendChild(product);
    });
    secondProductBlock.remove();
  }
  categoryBanners.forEach((categoryBanner, index) => {
    if (categoryBanner && firstProductBlock) {
      categoryBanner.classList.add("product");
      let whereToAppend = null;
      switch (index) {
        case 0:
          categoryBanner.classList.add("first"); // Add 'first' class to the first banner
          if (window.innerWidth > 767) {
            whereToAppend = firstProductBlock.querySelector(
              ".product:nth-child(7)"
            );
          } else {
            whereToAppend = firstProductBlock.querySelector(
              ".product:nth-child(8)"
            );
          }
          break;
        case 1:
          categoryBanner.classList.add("second"); // Add 'second' class to the second banner
          if (window.innerWidth > 767) {
            whereToAppend = firstProductBlock.querySelector(
              ".product:nth-child(12)"
            );
          } else {
            whereToAppend = firstProductBlock.querySelector(
              ".product:nth-child(13)"
            );
          }
          break;
          break;
        case 2:
          categoryBanner.classList.add("third"); // Add 'third' class to the third banner
          if (window.innerWidth > 767) {
            whereToAppend = firstProductBlock.querySelector(
              ".product:nth-child(19)"
            );
          } else {
            whereToAppend = firstProductBlock.querySelector(
              ".product:nth-child(21)"
            );
          }
          break;
          break;
      }
      if (whereToAppend) {
        whereToAppend.after(categoryBanner);
      } else {
        firstProductBlock.appendChild(categoryBanner);
      }
    }
  });

  // const productsAnchor = document.querySelector('.category-top a[href="#products"]')
  // if (productsAnchor) {
  // 	productsAnchor.addEventListener('click', (e) => {
  // 		e.preventDefault()
  // 		e.stopPropagation()
  // 		const products = document.querySelector('#products')
  // 		products.scrollIntoView({ behavior: 'smooth' })
  // 	})
  // }
  // const dlouhyPopisAnchor = document.querySelector('.category-top a[href="#dlouhy-popis"]')
  // if (dlouhyPopisAnchor) {
  // 	dlouhyPopisAnchor.addEventListener('click', (e) => {
  // 		e.preventDefault()
  // 		e.stopPropagation()
  // 		const dlouhyPopis = document.querySelector('.category__secondDescription')
  // 		dlouhyPopis.scrollIntoView({ behavior: 'smooth' })
  // 	})
  // }

  const unveilFilters = document.querySelector(
    ".filters-unveil-button-wrapper a.btn"
  );
  if (unveilFilters) {
    if (window.innerWidth > 767) {
      const lang = window.shoptetLang || "cs";
      const btnData =
        window.filterBtnText.find((item) => item.language === lang) ||
        window.filterBtnText[0];
      unveilFilters.textContent = btnData.text;
      unveilFilters.setAttribute("data-text", btnData.text);
    }
  }
  // if (unveilFilters && window.innerWidth <= 767) categoryTop.appendChild(unveilFilters)

  // posunutí buttonu zpět nahoru pod spodní popis

  // ...existing code...
  const categoryHeader = document.querySelector("#category-header");
  if (categoryHeader) {
    // Kontrola, jestli už helper existuje
    if (!categoryHeader.querySelector(".helper")) {
      const form = categoryHeader.querySelector("form");
      const filters = document.querySelector("#filters-wrapper");
      filters.insertAdjacentElement("afterend", categoryHeader);

      if (form) {
        // Create .helper div and append it to #category-header
        const helperDiv = document.createElement("div");
        helperDiv.className = "helper";
        categoryHeader.appendChild(helperDiv);
        helperDiv.appendChild(form);

        // Create div inside .helper and append span with class .actual-sorting
        const actualSortingSpan = document.createElement("span");
        actualSortingSpan.className = "actual-sorting";
        helperDiv.appendChild(actualSortingSpan);

        // Find checked radio input
        const checkedRadio = form.querySelector('input[type="radio"]:checked');
        if (checkedRadio) {
          // Find corresponding label using the 'id' of the checked radio
          const label = form.querySelector(`label[for="${checkedRadio.id}"]`);
          if (label) {
            // Set the textContent of .actual-sorting span to the label's text
            actualSortingSpan.innerHTML = `<strong>Řazení</strong> ${label.textContent}`;
          }
        }

        // Add click event listener to .actual-sorting to toggle 'active' class on form
        actualSortingSpan.addEventListener("click", () => {
          form.classList.toggle("active");
        });
      }
    }
  }
  // ...existing code...

  // ...existing code...
  const filtersBoolean = document.querySelector(
    ".filter-section.filter-section-boolean"
  );
  if (filtersBoolean) {
    // Kontrola, zda už filter-section-title existuje
    if (!filtersBoolean.querySelector(".filter-section-title")) {
      const paramFilters = filtersBoolean.querySelector(".param-filter-top");
      const booleanTitle = document.createElement("h4");
      booleanTitle.className = "filter-section-title";
      booleanTitle.textContent =
        window.categoryFilterTitleTags.find(
          (item) => item.language === shoptetLang
        )?.text || "Příznaky";
      filtersBoolean.prepend(booleanTitle);

      // Toggle třídy "hidden" při kliknutí na h4
      booleanTitle.addEventListener("click", function () {
        paramFilters.classList.toggle("hidden");
      });
    }
  }
  // ...existing code...
};
const handleCheckedFilters = () => {
  const activeFilters = document.querySelectorAll(
    '#filters input[type="checkbox"]:checked+label'
  );
  const categoryContent = document.querySelector("#category-header");

  const existingActiveFilters = document.querySelector(".active-filters");
  if (existingActiveFilters) existingActiveFilters.remove();

  if (activeFilters.length && categoryContent) {
    let activeFiltersWrapper = document.createElement("div");
    let activeFiltersList = document.createElement("div");

    activeFiltersWrapper.classList.add("active-filters");
    activeFiltersList.classList.add("active-list");

    // Přidej span s textem "Vybrané filtry" na začátek
    const filtersTitle = document.createElement("span");
    filtersTitle.className = "active-filters-title";
    filtersTitle.textContent = "Vybrané filtry:";
    activeFiltersWrapper.appendChild(filtersTitle);

    activeFiltersWrapper.appendChild(activeFiltersList);

    activeFilters.forEach((item) => {
      activeFiltersList.appendChild(item.cloneNode(true));
    });

    let deleteFilters = document.querySelector("#clear-filters");

    if (deleteFilters) activeFiltersWrapper.appendChild(deleteFilters);

    categoryContent.parentNode.insertBefore(
      activeFiltersWrapper,
      categoryContent.nextSibling
    );
  }
};

handleCheckedFilters();
document.addEventListener("ShoptetDOMContentLoaded", handleCheckedFilters);
if (shoptetPage === "category") {
  handleCategory();
  document.addEventListener("ShoptetDOMContentLoaded", () =>
    handleCategory(true)
  );

  const addSubcategoryClass = () => {
    const subcategories = document.querySelector(".subcategories");
    const categoryTopWrapper = document.querySelector(".category-top-wrapper");

    if (subcategories && categoryTopWrapper && window.innerWidth >= 900) {
      categoryTopWrapper.classList.add("with-subcategory");
      categoryTopWrapper.appendChild(subcategories);
    }
  };

  addSubcategoryClass();
  document.addEventListener("ShoptetDOMContentLoaded", addSubcategoryClass);

  const setFilterSectionsZIndex = async () => {
    const filterSections = document.querySelectorAll(".filter-section");
    // console.log(filterSections);
    if (filterSections.length > 0) {
      filterSections.forEach((section, index) => {
        section.style.zIndex = 20 - index;
      });
    }
  };

  setTimeout(() => {
    setFilterSectionsZIndex();
    document.addEventListener(
      "ShoptetDOMContentLoaded",
      setFilterSectionsZIndex
    );
    document.addEventListener(
      "ShoptetDOMPageContentLoaded",
      setFilterSectionsZIndex
    );
  }, 100);

  const createSwitcher = () => {
    const products = document.querySelector("#products");
    if (products && !document.querySelector(".display-switcher")) {
      const categoryHeader = document.querySelector("#category-header");

      const displaySwitcher = document.createElement("div");
      const displaySwitcherText = document.createElement("span");
      const displaySwitcherButtons = document.createElement("div");
      const display = document.createElement("span");
      const tilesButton = document.createElement("button");
      const listButton = document.createElement("button");
      const productInputs = document.querySelectorAll(
        '.product input[name="amount"]'
      );

      displaySwitcher.classList.add("display-switcher");
      displaySwitcherButtons.classList.add("display-switcher__buttons");

      displaySwitcher.append(
        displaySwitcherText,
        display,
        displaySwitcherButtons
      );
      displaySwitcherButtons.append(tilesButton, listButton);
      displaySwitcherText.innerText = "Zobrazení: ";
      if (categoryHeader) categoryHeader.appendChild(displaySwitcher);

      tilesButton.classList.add("tiles");
      listButton.classList.add("list");

      tilesButton.innerText = "Dlaždice";
      listButton.innerText = "Řádky";

      // Výchozí stav nebo načtení ze sessionStorage
      if (sessionStorage.getItem("displayProducts")) {
        const displayProducts = JSON.parse(
          sessionStorage.getItem("displayProducts")
        );
        display.innerText = displayProducts[0].name;
        display.classList.add(displayProducts[0].class, "selected");
        if (displayProducts[0].productClass)
          products.classList.add(displayProducts[0].productClass);
      } else {
        display.innerText = "Dlaždice";
        display.classList.add("tiles", "selected");
      }

      display.addEventListener("click", () => {
        displaySwitcherButtons.classList.toggle("visible");
      });

      tilesButton.addEventListener("click", () => {
        display.innerText = tilesButton.innerText;
        display.classList.add("tiles");
        display.classList.remove("list");
        products.classList.remove("products-inline");
        displaySwitcherButtons.classList.remove("visible");
        sessionStorage.setItem(
          "displayProducts",
          JSON.stringify([
            { class: "tiles", name: "Dlaždice", productClass: "" },
          ])
        );
        if (productInputs) {
          productInputs.forEach((input) => {
            if (input.value == 0) input.value = 1;
          });
        }
      });

      listButton.addEventListener("click", () => {
        display.innerText = listButton.innerText;
        display.classList.add("list");
        display.classList.remove("tiles");
        products.classList.add("products-inline");
        displaySwitcherButtons.classList.remove("visible");
        sessionStorage.setItem(
          "displayProducts",
          JSON.stringify([
            { class: "list", name: "Řádky", productClass: "products-inline" },
          ])
        );
        if (productInputs) {
          productInputs.forEach((input) => {
            if (input.value == 0) input.value = 1;
          });
        }
      });
    }
  };
  createSwitcher();
  document.addEventListener("ShoptetDOMContentLoaded", createSwitcher);
  document.addEventListener("ShoptetDOMPageContentLoaded", createSwitcher);
}
const handleFilterEvents = () => {
  const bindFilterEvents = () => {
    const filterSections = document.querySelectorAll(".filter-section");
    if (filterSections.length) {
      filterSections.forEach((section) => {
        let heading = section.querySelector("h4");
        if (heading && !heading.dataset.clickBound) {
          // Check if the event is already bound
          heading.dataset.clickBound = true; // Mark that the click event is bound
          heading.addEventListener("click", (e) => {
            console.log("yes");
            e.preventDefault();
            e.stopPropagation();
            section.classList.toggle("filter-form-visible");
            let cache =
                JSON.parse(window.sessionStorage.getItem("openedFilters")) ||
                [],
              parentClass = e.currentTarget.parentElement.className;
            parentClass = parentClass.replace("filter-form-visible", "").trim();
            if (cache.includes(parentClass)) {
              cache = cache.filter((item) => item !== parentClass);
            } else {
              cache.push(parentClass);
            }
            window.sessionStorage.setItem(
              "openedFilters",
              JSON.stringify(cache)
            );
          });
        }
      });
    }

    let helperCache = window.sessionStorage.getItem("openedFilters");
    if (helperCache && helperCache.length) {
      helperCache = JSON.parse(helperCache);
      helperCache.forEach((item) => {
        item = item.replaceAll(" ", ".");
        item = document.querySelector(`.${item}`);
        if (item && !item.classList.contains("filter-form-visible")) {
          item.classList.add("filter-form-visible");
        }
      });
    }
  };

  // Initial binding
  bindFilterEvents();

  // Use MutationObserver to watch for changes in the DOM
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
        bindFilterEvents();
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
};

// Call the function to initialize
handleFilterEvents();

if (shoptetPage === "category") {
  handleFilterEvents();
  document.addEventListener("ShoptetDOMContentLoaded", handleFilterEvents);
}
document.addEventListener("click", (event) => {
  const filterSections = document.querySelectorAll(".filter-section");
  if (!event.target.closest(".filter-section")) {
    filterSections.forEach((section) => {
      section.classList.remove("filter-form-visible");
    });
  }
});
const handleProductDetail = async () => {
  const pInfoWrapper = document.querySelector(".p-info-wrapper");

  const pInnerHeader = document.querySelector(".p-detail-inner-header");
  const pDetailInfo = document.querySelector(".p-detail-info");
  const pImage = document.querySelector(".p-image-wrapper .p-image");
  const flagsDefault = document.querySelector(
    ".p-detail .product-top .flags-default"
  );
  const flagsExtra = document.querySelector(
    ".p-detail .product-top .flags-extra"
  );

  const pCodeLabel = document.querySelector(".p-code .p-code-label");

  if (flagsDefault && flagsExtra) {
    flagsDefault.appendChild(flagsExtra);
    flagsDefault.classList.add("contains-extra");
  }
  if (flagsDefault && pInfoWrapper) {
    pInfoWrapper.prepend(flagsDefault); // vloží na první místo
  }
  if (flagsExtra && !flagsDefault && pInfoWrapper) {
    pInfoWrapper.prepend(flagsExtra); // vloží na první místo
  }

  // const favoutites = pDetailInfo.querySelector('#dkLabFavouriteDiv .dkLabFavDetailSpan');
  // console.log(favoutites)
  // if (favoutites) {
  // 	const span = favoutites.querySelector('.dkLabFavDetailSpan');
  // 	const text = favoutites.querySelector('span');
  // 	text.innerHTML = productDetailFavourite.find(item => item.language === shoptetLang)?.text;
  // 	if (span.classList.contains('dkLabFavouriteDetailLinkRemove')) {
  // 		text.innerHTML = productDetailFavourite.find(item => item.language === shoptetLang)?.remove;
  // 	}
  // }
  const targetNode = document.body;

  if (targetNode) {
    const config = { childList: true, subtree: true };

    const callback = function (mutationsList, observer) {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          const favourites = document.querySelector(
            "#dkLabFavouriteDiv .dkLabFavDetailSpan"
          );
          if (favourites) {
            // Disconnect the observer before making changes in the DOM
            observer.disconnect();

            const text = favourites.querySelector("span");
            text.innerHTML = productDetailFavourite.find(
              (item) => item.language === shoptetLang
            )?.text;
            if (
              favourites.classList.contains("dkLabFavouriteDetailLinkRemove")
            ) {
              text.innerHTML = productDetailFavourite.find(
                (item) => item.language === shoptetLang
              )?.remove;
            }

            // Find .social-buttons-wrapper and move #dkLabFavouriteDiv into it
            const socialButtonsWrapper = document.querySelector(
              ".social-buttons-wrapper .link-icons"
            );
            const dkLabFavouriteDiv =
              document.querySelector("#dkLabFavouriteDiv");
            if (socialButtonsWrapper && dkLabFavouriteDiv) {
              socialButtonsWrapper.appendChild(dkLabFavouriteDiv);
            }

            // Reconnect the observer after making changes in the DOM
            observer.observe(targetNode, config);
          }
        }
      }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  }

  // if (flagsDefault && pImage) pImage.appendChild(flagsDefault)
  if (pInnerHeader && pDetailInfo) pInnerHeader.appendChild(pDetailInfo);
  if (pInfoWrapper && pInnerHeader) pInfoWrapper.prepend(pInnerHeader);

  // const pThumbnails = document.querySelector('.p-thumbnails')
  // if (pThumbnails) {
  // 	const thumbnailsTrack = pThumbnails.querySelector('.p-thumbnails-inner > div')
  // 	setTimeout(() => {
  // 		if (thumbnailsTrack && pThumbnails.clientWidth < thumbnailsTrack.clientWidth) {
  // 			pThumbnails.classList.add('overflow-next')
  // 		}
  // 	}, 500)
  // }
  const customAddToCartClass = "add-to-cart-wrapper";
  let customAddToCart = document.querySelector("." + customAddToCartClass);

  if (!customAddToCart) {
    customAddToCart = document.createElement("div");
    customAddToCart.classList.add(customAddToCartClass);

    const pCode = document.querySelector(".p-info-wrapper .p-code");
    const pHeader = document.querySelector(".p-detail-inner-header");
    const availability = document.querySelector(
      ".product-top .availability-value"
    );
    if (availability) {
      customAddToCart.prepend(availability);
    }
    const productPrices = document.querySelector(".p-final-price-wrapper");
    if (productPrices) customAddToCart.prepend(productPrices);
    const mark = pHeader.querySelector(".p-detail-info");
    if (mark) {
      const divElement = mark.querySelector("div:not([class])"); // select div without a class
      if (divElement) {
        const linkElement = divElement.querySelector("a");
        const textNode = divElement.childNodes[0];

        const spanElement = document.createElement("span");
        spanElement.className = "brand-label";
        spanElement.textContent = textNode.textContent.trim();

        // Remove the original text node
        divElement.removeChild(textNode);

        // Insert the new span element at the beginning of the div
        divElement.insertBefore(spanElement, divElement.firstChild);
      }
    }

    const saleNumber = document.querySelector(".price-standard");
    const finalNumber = document.querySelector(
      ".price-final .price-final-holder"
    );

    const productQuantity = document.querySelector(".add-to-cart .quantity");
    if (productQuantity) customAddToCart.appendChild(productQuantity);
    const addToCart = document.querySelector(".add-to-cart");
    if (addToCart) customAddToCart.appendChild(addToCart);

    const pInfoWrapper = document.querySelector(".p-info-wrapper");
    if (pInfoWrapper) {
      pInfoWrapper.appendChild(customAddToCart);
    }
  }

  if (window.innerWidth <= 767) {
    let wrapRemoved = false;

    const handleWrap = () => {
      if (!wrapRemoved) {
        const wrap = document.querySelector("#wrap");
        if (wrap) {
          const link = wrap.querySelector("a");
          if (link) {
            wrap.parentNode.insertBefore(link, wrap);
          }
          wrap.parentNode.removeChild(wrap);
          wrapRemoved = true;

          clearInterval(checkInterval);
        }
      }
    };

    const checkInterval = setInterval(handleWrap, 500);

    const thumbnails = document.querySelectorAll(".p-thumbnail");

    // thumbnails na mobilu přetvořené na obrázky vedle sebe se sliderem
    if (thumbnails.length) {
      let mainImage = document.querySelector(".p-image > .p-main-image"),
        productImage = document.querySelector(".product-top .p-image-wrapper"),
        sliderWrapper = document.createElement("div");

      sliderWrapper.classList.add("custom-slider-wrapper");
      sliderWrapper.appendChild(mainImage);

      thumbnails.forEach((thumb, index) => {
        if (index > 0) {
          let imgUrl = thumb.getAttribute("href"),
            aEl = document.createElement("a"),
            imgEl = document.createElement("img");
          aEl.classList.add("p-main-image");
          aEl.href = imgUrl;
          aEl.appendChild(imgEl);
          imgEl.src = imgUrl;
          sliderWrapper.appendChild(aEl);
        }
      });

      productImage.querySelector(".p-image").appendChild(sliderWrapper);
      // console.log(sliderWrapper);

      // $(sliderWrapper).slick({
      // 	infinite: false,
      // 	arrows: false,
      // 	slidesToShow: 1.2,
      // 	slidesToScroll: 1,
      // 	dots: true,
      // })

      // swiperize({
      // 	containers: sliderWrapper,
      // 	slide: '.p-main-image',
      // 	customOptions: {
      // 		fullscreen: false,
      // 		infinity: false,
      // 		dots: true,
      // 		arrows: false,
      // 		scrollbar: false,
      // 		lazyPrevNext: true
      // 	},
      // 	swiperOptions: {
      // 		direction: 'horizontal',
      // 		speed: 800,
      // 		spaceBetween: 12,
      // 		slidesPerView: 1.2,

      // 	},
      // });
    }

    // let flags = document.querySelector('.p-info-wrapper .flags')
    // let imageWrapper = document.querySelector('.p-image-wrapper')
    // if (imageWrapper && flags) {
    // 	imageWrapper.before(flags)
    // }
  }
  const pDetailInnerHeader = document.querySelector(".p-info-wrapper");
  const productBanner = document.querySelector(".product-detail-contact");
  if (productBanner) {
    if (pDetailInnerHeader) pDetailInnerHeader.appendChild(productBanner);

    const linkIconChat = document.querySelector(
      ".social-buttons-wrapper .link-icon.chat"
    );
    if (linkIconChat) {
      const link = linkIconChat.href;
      const btn = document.querySelector(
        ".product-detail-contact .btn.chat.link-icon"
      );
      if (btn && link) {
        btn.href = link;
      }
    }
  }

  const preowned = pDetailInnerHeader.querySelector(".flag-preowned");
  const unworn = pDetailInnerHeader.querySelector(".flag-unworn");
  const yearFlags = Array.from(
    pDetailInnerHeader.querySelectorAll(".flag")
  ).filter((flag) => {
    return /\bflag-\d{4}\b/.test(flag.className);
  });
  const pBottom = document.querySelector(".p-info-wrapper");

  // const specialHolder = document.createElement('div');
  // specialHolder.classList.add('special-holder');
  // if (specialHolder && pBottom) {
  // 	pBottom.appendChild(specialHolder);
  // 	if (preowned) specialHolder.appendChild(preowned);
  // 	if (unworn) specialHolder.appendChild(unworn);
  // 	if (yearFlags.length) yearFlags.forEach(flag => specialHolder.appendChild(flag));
  // }

  const table = document.querySelector(
    ".description-inner .detail-parameters tbody"
  );

  if (table) {
    const newRow = document.createElement("tr");
    const th = document.createElement("th");
    const td = document.createElement("td");

    const thSpan = document.createElement("span");
    thSpan.classList.add("row-header-label");

    const tdSpan = document.createElement("span");

    if (shoptetLang === "cz") {
      thSpan.textContent = "Parametry";
      tdSpan.textContent = "Specifikace";
    } else if (shoptetLang === "en") {
      thSpan.textContent = "Parameters";
      tdSpan.textContent = "Specification";
    } else if (shoptetLang === "de") {
      thSpan.textContent = "Parameter";
      tdSpan.textContent = "Spezifikation";
    }

    th.appendChild(thSpan);
    td.appendChild(tdSpan);
    newRow.appendChild(th);
    newRow.appendChild(td);

    table.insertBefore(newRow, table.firstChild);
  }

  const poboBlockImgUpdate = document.querySelector(
    ".widget-image-right-two-column"
  );
  const poboBlockImgUpdate2 = document.querySelector(
    ".widget-image-left-two-column"
  );
  if (poboBlockImgUpdate) {
    const poboImg = poboBlockImgUpdate.querySelector("img");
    const poboTextHolder = poboBlockImgUpdate.querySelector(
      ".rc-image-right-two-column__text-wrap > div"
    );
    console.log(poboImg, poboTextHolder);
    if (poboImg && poboTextHolder) {
      poboTextHolder.appendChild(poboImg);
    }
  }
  if (poboBlockImgUpdate2) {
    const poboImg = poboBlockImgUpdate2.querySelector("img");
    const poboTextHolder = poboBlockImgUpdate2.querySelector(
      ".rc-image-left-two-column__text-wrap div:last-of-type"
    );
    console.log(poboImg, poboTextHolder);
    if (poboImg && poboTextHolder) {
      poboTextHolder.appendChild(poboImg);
    }
  }

  const amount = document.querySelector(
    ".p-detail-inner .product-top .quantity input.amount"
  );
  if (amount) {
    const decimals = amount.getAttribute("data-decimals");
    if (decimals === "1" || decimals === "2" || decimals === "3") {
      // Ověř, zda už span neexistuje
      if (
        !amount.nextElementSibling ||
        amount.nextElementSibling.textContent !== "m"
      ) {
        const span = document.createElement("span");
        span.textContent = "m";
        span.style.marginLeft = "4px";
        amount.insertAdjacentElement("afterend", span);
      }
    }
  }
};
if (shoptetPage === "productDetail") {
  handleProductDetail();
}

const handlePost = async () => {
  const postHeaderWrapper = document.createElement("div");
  postHeaderWrapper.classList.add("post-header-wrapper");
  const postHeader = document.createElement("div");
  postHeader.classList.add("columns", "col-2", "align-center", "container");
  postHeaderWrapper.appendChild(postHeader);
  const postHeaderTexts = document.createElement("div");
  postHeaderTexts.classList.add("post-header-texts", "column");
  const postHeaderImage = document.createElement("div");
  postHeaderImage.classList.add("post-header-image", "column");
  postHeader.appendChild(postHeaderTexts);
  postHeader.appendChild(postHeaderImage);
  const postDate = document.querySelector(
    '.news-item-detail meta[itemprop="datePublished"]'
  );
  if (postDate) {
    const postDateEl = document.createElement("div");
    postDateEl.classList.add("post-date");
    postDateEl.innerHTML = new Date(
      postDate.getAttribute("content")
    ).toLocaleString("cs-CZ", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    postHeaderTexts.appendChild(postDateEl);
  }
  const postTitle = document.querySelector(
    '.news-item-detail h1[itemprop="headline"]'
  );
  if (postTitle) postHeaderTexts.appendChild(postTitle);
  const postDescriptionContent = document.querySelector(
    '.news-item-detail meta[itemprop="description"]'
  );
  if (postDescriptionContent) {
    const postDescription = document.createElement("p");
    postDescription.classList.add("post-description");
    postDescription.innerHTML = postDescriptionContent.getAttribute("content");
    postHeaderTexts.appendChild(postDescription);
  }
  const contentWrapper = document.querySelector("#content-wrapper");
  contentWrapper.parentElement.insertBefore(postHeaderWrapper, contentWrapper);

  const postImageURL = document.querySelector(
    '.news-item-detail span[itemprop="image"] meta[itemprop="url"]'
  );
  const postImageWidth = document.querySelector(
    '.news-item-detail span[itemprop="image"] meta[itemprop="width"]'
  );
  const postImageHeight = document.querySelector(
    '.news-item-detail span[itemprop="image"] meta[itemprop="height"]'
  );
  if (postImageURL) {
    const postImage = document.createElement("img");
    postImage.src = postImageURL.getAttribute("content");
    postImage.width = postImageWidth.getAttribute("content");
    postImage.height = postImageHeight.getAttribute("content");
    postHeaderImage.appendChild(postImage);
  }
  // else {
  // 	const urlArray = []
  // 	urlArray.push(window.location.pathname.replaceAll('/blog/', '').replaceAll('/archiv/', '').replaceAll('/', ''))
  // 	const imageData = await fetchBlogImages(urlArray)
  // 	if (imageData) {
  // 		imageData.forEach((img) => {
  // 			if (window.location.pathname.includes(img.url)) {
  // 				const postImage = document.createElement('img')
  // 				postImage.src = img.image
  // 				postHeaderImage.appendChild(postImage)
  // 			}
  // 		})
  // 	}
  // }

  // vytvoří sidebar v blogu a fetchne tam podrubriky
  const postSidebar = document.createElement("div");
  postSidebar.classList.add("type-posts-listing", "blog-title-holder");
  const postContent = document.querySelector("#content");
  const header = document.querySelector(".post-header-wrapper");

  // const blogTitle2 = document.createElement('h4');
  // postSidebar.appendChild(blogTitle2);
  // const blogNadpis = blogTitle.find(item => item.language === shoptetLang);
  // if (blogNadpis) {
  // 	blogTitle2.innerHTML = blogNadpis.text;
  // }

  // if (header) {
  // 	header.insertAdjacentElement('beforebegin', postSidebar);
  // }
};
if (document.body.classList.contains("type-post")) handlePost();

function handleBlogPage() {
  // if (document.querySelector("body.type-posts-listing")) {
  //   const h1 = document.querySelector("h1");
  //   if (h1) {
  //     const titleWrapper = document.createElement("div");
  //     titleWrapper.className = "title-wrapper";
  //     const newH1 = document.createElement("h1");
  //     newH1.className = "tlapky-title";
  //     newH1.textContent = "Společne sme záchranili";
  //     titleWrapper.appendChild(newH1);
  //     h1.replaceWith(titleWrapper);
  //   }
  // }
  // const handleReadBtn = (post) => {
  //   const text = post.querySelector(".text");
  //   const read = post.querySelector(".read-article");
  //   if (text && !read) {
  //     const readArticle = document.createElement("a");
  //     readArticle.className = "read-article";
  //     const link = post.querySelector(".title");
  //     readArticle.href = link.href;
  //     const newsBtnText = window.newsBtnText.find(
  //       (item) => item.language === shoptetLang
  //     );
  //     if (newsBtnText) {
  //       readArticle.innerHTML = newsBtnText.text;
  //     }
  //     text.appendChild(readArticle);
  //   }
  // };
  // const allPosts = document.querySelectorAll("#newsWrapper .news-item");
  // if (allPosts.length) {
  //   allPosts.forEach((post) => handleReadBtn(post));
  //   // mmAllProducts.forEach((product) => handleRatings(product))
  //   // mmAllProducts.forEach((product) => handleProductAvailability(product))
  // }
}

document.addEventListener("ShoptetDOMContentLoaded", handleBlogPage);
handleBlogPage();
function getScrollbarWidth() {
  const div = document.createElement("div");
  div.style.overflowY = "scroll";
  div.style.width = "50px";
  div.style.height = "50px";
  div.style.visibility = "hidden";
  document.body.appendChild(div);
  const scrollbarWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return scrollbarWidth;
}

document.documentElement.style.setProperty(
  "--scrollbar-width",
  `${getScrollbarWidth()}px`
);

// const addCartTitle = () => {
// 	const cartWrapper = document.querySelector("#cart-wrapper");
// 	if (cartWrapper) {
// 		const cartTable = cartWrapper.querySelector(".col-md-8 .cart-content .cart-table tbody");
// 		if (cartTable) {
// 			if (!cartTable.parentNode.querySelector('h2')) {
// 				const cartTitle = document.createElement("h2");
// 				const cartTitleText = cartTitleTexts.find(item => item.language === shoptetLang);
// 				if (cartTitleText) {
// 					cartTitle.innerHTML = cartTitleText.text;
// 				}
// 				cartTable.parentNode.insertBefore(cartTitle, cartTable);
// 			}
// 		}
// 	}
// };

// addCartTitle();
// document.addEventListener('ShoptetDOMCartContentLoaded', addCartTitle);
// document.addEventListener('ShoptetDOMContentLoaded', addCartTitle);
// document.addEventListener('ShoptetDOMCartCountUpdated', addCartTitle);
// document.addEventListener('ShoptetCartUpdated', addCartTitle);

const allProducts = document.querySelectorAll(".product");
if (allProducts.length) {
  allProducts.forEach((product) => {
    const productWidgets = product.querySelectorAll(
      ".widget-parameter-wrapper .widget-parameter-list .widget-parameter-value"
    );

    if (productWidgets.length > 0) {
      productWidgets.forEach((widget, index) => {
        if (index >= 3) {
          widget.style.display = "none";
        }
      });
    }
  });
}
const footer = document.querySelector("#footer .custom-footer");
// if (footer) {
// 	const oldSiteName = document.querySelector('#footer .site-name')
// 	const elements7BannerWrapper = footer.querySelector('.custom-footer .custom-footer__banner9 .banner-wrapper')

// 	// If the old site name exists, remove it
// 	// if (oldSiteName) {
// 	// 	oldSiteName.remove()
// 	// }

// 	// If elements7BannerWrapper exists, create and insert the new site name element before it
// 	if (elements7BannerWrapper) {
// 		const newSiteNameHTML = `<div class="site-name"><a href="/" data-testid="linkWebsiteLogo"><img src="/user/documents/upload/logo-white.svg" alt="SPECTRUM CZ s.r.o."></a></div>`
// 		// Convert the HTML string into a document fragment
// 		const range = document.createRange()
// 		const documentFragment = range.createContextualFragment(newSiteNameHTML)
// 		elements7BannerWrapper.parentNode.insertBefore(documentFragment, elements7BannerWrapper)
// 	}
// }

const sliderWrapper = document.querySelector(".slider-wrapper");
if (sliderWrapper) {
  const content = sliderWrapper.querySelector(".slider-content");
  const header = sliderWrapper.querySelector(".slider-header .from");
  header.insertAdjacentElement("afterend", content);
}
function rearrangeSliderContent() {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  if (sliderWrapper) {
    const content = sliderWrapper.querySelector(".slider-content");
    const header = sliderWrapper.querySelector(".slider-header .from");
    if (header && content) {
      header.insertAdjacentElement("afterend", content);
    }
  }
}
rearrangeSliderContent();
document.addEventListener(
  "ShoptetDOMPageContentLoaded",
  rearrangeSliderContent
);
document.addEventListener("ShoptetDOMContentLoaded", rearrangeSliderContent);
