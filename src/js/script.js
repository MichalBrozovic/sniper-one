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

