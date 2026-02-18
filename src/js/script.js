

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



const parseBenderContent = async (selector, devMode = false) => {
    const dev = devMode;
    const wrappers = document.querySelectorAll(selector);

    if (wrappers.length === 0) {
        if (dev) console.warn(`%c[BENDER DEV]%c Žádné elementy pro "${selector}" nebyly nalezeny.`, 'color: #ff0000; font-weight: bold;', '');
        return;
    }

    if (dev) console.time('Bender Performance Test');

    // Cache pro slugify (šetří výkon u duplicitních odkazů)
    const slugCache = {};
    const slugify = (text) => {
        if (slugCache[text]) return slugCache[text];
        const slug = text.toString().toLowerCase().trim()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-');
        slugCache[text] = slug;
        return slug;
    };

    // Rychlá smyčka
    for (let i = 0; i < wrappers.length; i++) {
        const wrapper = wrappers[i];
        const dataSpan = wrapper.querySelector('span[data-ec-promo-id]');
        if (!dataSpan) continue;

        const fullText = (dataSpan.innerText || dataSpan.textContent).replace(/\u00a0/g, ' ').trim();
        
        if (dev) console.log(`%c[BENDER DEV]%c Banner ${i + 1} vstup:`, 'color: #00ff00; font-weight: bold;', fullText);

        const resultContainer = document.createElement('div');
        resultContainer.className = 'bender-parsed-content';

        // 1. TŘÍDA (###)
        const classMatch = fullText.match(/###([^#]+)###/);
        if (classMatch) {
            const customClass = classMatch[1].trim();
            const topParent = wrapper.closest('[class*="custom-footer__banner"]');
            if (topParent) {
                topParent.classList.add(customClass);
                if (dev) console.log(`   -> Probubláno: .${customClass}`);
            } else {
                resultContainer.classList.add(customClass);
                if (dev) console.log(`   -> Fail-safe třída: .${customClass}`);
            }
        }

        const textWithoutClass = fullText.replace(/###[^#]+###/g, '').trim();
        const blocksRaw = textWithoutClass.split(/##([^#]+)##/g);

        for (let j = 1; j < blocksRaw.length; j += 2) {
            const titleText = blocksRaw[j].trim();
            const contentText = blocksRaw[j + 1] ? blocksRaw[j + 1].trim() : '';

            if (!titleText) continue;

            const currentBlock = document.createElement('div');
            currentBlock.className = 'block';

            const h2 = document.createElement('h2');
            h2.textContent = titleText;
            currentBlock.appendChild(h2);

            const items = contentText.match(/#([^#]+)#/g);
            if (items) {
                let currentUl = null;
                for (let k = 0; k < items.length; k++) {
                    const cleanItem = items[k].replace(/#/g, '').trim();
                    const parts = cleanItem.split(';');

                    if (parts.includes('img')) {
                        const img = document.createElement('img');
                        img.src = parts[0].trim();
                        img.loading = 'lazy';
                        img.className = 'footer-img';
                        currentBlock.appendChild(img);
                        if (dev) console.log(`      - Obrázek: ${img.src}`);
                    } else {
                        if (!currentUl) {
                            currentUl = document.createElement('ul');
                            currentBlock.appendChild(currentUl);
                        }
                        const label = parts[0].trim();
                        let url = parts[1] ? parts[1].trim() : `/${slugify(label)}/`;
                        if (url && !url.startsWith('/') && !url.startsWith('http')) url = '/' + url;

                        const li = document.createElement('li');
                        const a = document.createElement('a');
                        a.href = url;
                        a.textContent = label;
                        li.appendChild(a);
                        currentUl.appendChild(li);
                        if (dev) console.log(`      - Odkaz: ${label} (${url})`);
                    }
                }
            }
            resultContainer.appendChild(currentBlock);
        }

        // Zápis do DOMu
        const bannerContainer = wrapper.querySelector('.banner') || wrapper;
        bannerContainer.innerHTML = '';
        bannerContainer.appendChild(resultContainer);
    }

    if (dev) console.timeEnd('Bender Performance Test');
};

// Spuštění na bannery v patičce
(async () => {
    await parseBenderContent('.custom-footer > div', true);
})();



// FLAGS and card
const handleFlags = (product) => {
  
};

const handleTextLayout = (product) => {
  
};
const products = document.querySelectorAll(
  ".products-block .product:not(.banner-category)"
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
const handleCart = () => {
  
};
if (document.body.classList.contains("ordering-process")) {
  handleCart();
  document.addEventListener("ShoptetDOMCartContentLoaded", handleCart);
}




const handleFooter = async () => {

};
handleFooter();





on("click", ".shp-tab-link", function (e) {
  const target = this.getAttribute("href");
  if (document.querySelector(target)) {
    smoothScrollTo(target, 200);
  }
});

