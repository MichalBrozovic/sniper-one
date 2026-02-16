/**
 * Swiperize 4.0 - Full Sniper Edition
 * Zachovává veškerou původní logiku, ale opravuje strukturu pro Shoptet.
 */
const swiperize = ({
  containers,
  slide,
  customOptions = {},
  swiperOptions = {},
}) => {
  const scrollbarWidth = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--scrollbar-width",
    ) || 0,
  );
  const fallbackTimeout = 5000;

  const containerArray = Array.isArray(containers) ? containers : [containers];
  const slideArray = Array.isArray(slide) ? slide : [slide];

  window.sniperSwipers = window.sniperSwipers || {};
  let swiperizedCount = 0;

  const initializeSwiper = (selector, slideClass) => {
    const originalContainer = document.querySelector(selector);
    if (
      !originalContainer ||
      originalContainer.classList.contains("swiperized")
    )
      return;

    // Úklid staré instance před re-init (Shoptet AJAX)
    if (window.sniperSwipers[selector]) {
      window.sniperSwipers[selector].destroy(true, true);
    }

    const safeClass = selector.replace(/[#.]/g, "");
    const swiperClass = "swiper-" + safeClass;

    // 1. STRUKTURA: Wrapper (pro šipky) -> Root (pro overflow) -> Original (pro slides)
    const containerWrapper = document.createElement("div");
    containerWrapper.className = `swiper-container-wrapper swiper-container-wrapper-${safeClass}`;
    containerWrapper.style.position = "relative";

    const swiperRoot = document.createElement("div");
    swiperRoot.className = `swiper ${swiperClass}`;

    // Fullscreen logika z původního kódu
    if (customOptions.fullscreen) {
      Object.assign(swiperRoot.style, {
        position: "relative",
        width: `calc(100vw - ${scrollbarWidth}px)`,
        maxWidth: `${1920 - scrollbarWidth}px`,
        left: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden",
      });
    } else {
      Object.assign(swiperRoot.style, {
        width: "100%",
        position: "relative",
        overflow: "hidden",
      });
    }

    // 2. TRANSFORMACE PŮVODNÍHO ELEMENTU
    const wrapper = originalContainer;
    wrapper.classList.add("swiper-wrapper", "swiperized");
    Object.assign(wrapper.style, {
      display: "flex",
      flexWrap: "nowrap",
      opacity: "0", // Skrytí před init
    });

    // 3. PŘÍPRAVA SLIDŮ (Včetně tvé data-src logiky)
    const slides = wrapper.querySelectorAll(slideClass);
    for (const s of slides) {
      s.classList.add("swiper-slide");
      const slideImg = s.querySelector(".image img");
      if (slideImg && slideImg.getAttribute("data-src")) {
        slideImg.setAttribute("src", slideImg.getAttribute("data-src"));
      }
    }

    // 4. SLOŽENÍ DOM
    wrapper.before(containerWrapper);
    containerWrapper.appendChild(swiperRoot);
    swiperRoot.appendChild(wrapper);

    // 5. DOPLŇKY (Pagination, Arrows, Scrollbar)
    const currentSwiperOptions = { ...swiperOptions };

    if (customOptions.dots) {
      const pagination = document.createElement("div");
      const paginationClass = `swiper-pagination-${safeClass}`;
      pagination.classList.add("swiper-pagination", paginationClass);
      containerWrapper.appendChild(pagination);
      currentSwiperOptions.pagination = {
        el: `.${paginationClass}`,
        clickable: true,
      };
    }

    if (customOptions.arrows) {
      const prevClass = `swiper-button-prev-${safeClass}`;
      const nextClass = `swiper-button-next-${safeClass}`;
      const prev = document.createElement("div");
      const next = document.createElement("div");
      prev.classList.add("swiper-button-prev", prevClass);
      next.classList.add("swiper-button-next", nextClass);
      containerWrapper.append(prev, next);
      currentSwiperOptions.navigation = {
        nextEl: `.${nextClass}`,
        prevEl: `.${prevClass}`,
      };
    }

    if (customOptions.scrollbar) {
      const scrollbarClass = `swiper-scrollbar-${safeClass}`;
      const scrollbar = document.createElement("div");
      scrollbar.classList.add("swiper-scrollbar", scrollbarClass);
      containerWrapper.appendChild(scrollbar);
      currentSwiperOptions.scrollbar = {
        el: `.${scrollbarClass}`,
        draggable: true,
      };
    }

    if (customOptions.infinity) currentSwiperOptions.loop = true;
    if (customOptions.lazyPrevNext)
      currentSwiperOptions.lazy = { loadPrevNext: true };

    // 6. START SWIPERU
    const swiperInstance = new Swiper(swiperRoot, currentSwiperOptions);
    window.sniperSwipers[selector] = swiperInstance;

    // Plynulé zobrazení a výška
    setTimeout(() => {
      wrapper.style.opacity = 1;
      wrapper.style.setProperty("--swiper-height", `${wrapper.clientHeight}px`);
    }, 50);

    // Tvůj disableNavigationButtons
    const disableNavigationButtons = () => {
      const totalSlides = wrapper.querySelectorAll(".swiper-slide").length;
      const slidesPerView =
        swiperInstance.params.slidesPerView === "auto"
          ? swiperInstance.slidesPerViewDynamic()
          : swiperInstance.params.slidesPerView;

      if (totalSlides <= slidesPerView) {
        const pb = containerWrapper.querySelector(".swiper-button-prev");
        const nb = containerWrapper.querySelector(".swiper-button-next");
        if (pb) pb.classList.add("disabled");
        if (nb) nb.classList.add("disabled");
      }
    };
    disableNavigationButtons();
  };

  // 7. OBSERVER & FALLBACK LOGIKA (Tvůj originál)
  const swiperObserver = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const sel = entry.target.getAttribute("data-selector");
          const index = containerArray.indexOf(sel);
          const sClass = slideArray[Math.min(index, slideArray.length - 1)];
          initializeSwiper(sel, sClass);
          observer.unobserve(entry.target);
          swiperizedCount++;
          if (swiperizedCount === containerArray.length) observer.disconnect();
        }
      }
    },
    { rootMargin: "0px 0px 400px 0px", threshold: 0.1 },
  );

  const run = () => {
    for (const selector of containerArray) {
      const slidesContainer = document.querySelector(selector);
      if (
        slidesContainer &&
        !slidesContainer.classList.contains("swiperized")
      ) {
        slidesContainer.setAttribute("data-selector", selector);
        swiperObserver.observe(slidesContainer);

        setTimeout(() => {
          if (!slidesContainer.classList.contains("swiperized")) {
            const index = containerArray.indexOf(selector);
            const sClass = slideArray[Math.min(index, slideArray.length - 1)];
            initializeSwiper(selector, sClass);
            swiperObserver.unobserve(slidesContainer);
            swiperizedCount++;
          }
        }, fallbackTimeout);
      }
    }
  };

  run();

  // Klíčové pro Shoptet: Re-run po update obsahu
  document.removeEventListener("shoptet.content.updated", run);
  document.addEventListener("shoptet.content.updated", run);
};

// DOPLŇKOVÉ FUNKCE (Z tvého kódu)
swiperize.setLastVisibleSlide = (swiper) => {
  for (const slide of swiper.slides)
    slide.classList.remove("swiper-slide-last-visible");

  let slidesPerView =
    swiper.params.slidesPerView === "auto"
      ? swiper.slidesPerViewDynamic()
      : Math.round(swiper.params.slidesPerView);

  const activeIndex = swiper.activeIndex;
  const lastVisibleIndex = (activeIndex + slidesPerView) % swiper.slides.length;

  for (let i = lastVisibleIndex; i < swiper.slides.length; i++) {
    if (lastVisibleIndex === 0 && i === 0) break;
    swiper.slides[i].classList.add("swiper-slide-last-visible");
  }
};

swiperize.spreadClass = (selectors, slideClass) => {
  return Array(selectors.length).fill(slideClass);
};
