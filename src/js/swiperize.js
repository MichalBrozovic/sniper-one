/**
 * Swiperize 4.2 - Lightweight Sniper Edition
 * Osekáno o fullscreen a scrollbar width. Zaměřeno na výkon a .swiper-helper strukturu.
 */
window.swiperize = ({ containers, slide, customOptions = {}, swiperOptions = {} }) => {
  const containerArray = Array.isArray(containers) ? containers : [containers];
  const slideArray = Array.isArray(slide) ? slide : [slide];
  const fallbackTimeout = 4000;

  window.sniperSwipers = window.sniperSwipers || {};
  let swiperizedCount = 0;

  const initializeSwiper = (selector, slideClass) => {
    const originalContainer = document.querySelector(selector);
    if (!originalContainer || originalContainer.classList.contains("swiperized")) return;

    if (window.sniperSwipers[selector]) {
      window.sniperSwipers[selector].destroy(true, true);
    }

   const safeClass = selector
    .replace(/[#.]/g, "")      // Odstraní tečky a mřížky
    .replace(/[^a-zA-Z0-9]/g, "-") // Všechno co není písmeno nebo číslo nahradí pomlčkou
    .replace(/-+/g, "-");

    // 1. STRUKTURA: Wrapper -> Helper (šipky) -> Root (overflow)
    const containerWrapper = document.createElement("div");
    containerWrapper.className = `swiper-container-wrapper swiper-container-wrapper-${safeClass}`;

    const swiperHelper = document.createElement("div");
    swiperHelper.className = "swiper-helper";

    const swiperRoot = document.createElement("div");
    swiperRoot.className = `swiper swiper-${safeClass}`;
    swiperRoot.style.width = "100%";
    swiperRoot.style.overflow = "hidden";

    // 2. TRANSFORMACE PŮVODNÍHO ELEMENTU
    const wrapper = originalContainer;
    wrapper.classList.add("swiper-wrapper", "swiperized");
    wrapper.style.display = "flex";
    wrapper.style.opacity = "0";

    // 3. PŘÍPRAVA SLIDŮ (včetně data-src)
    const slides = wrapper.querySelectorAll(slideClass);
    slides.forEach((s) => {
      s.classList.add("swiper-slide");
      const img = s.querySelector(".image img") || s.querySelector("img");
      if (img?.getAttribute("data-src")) {
        img.setAttribute("src", img.getAttribute("data-src"));
      }
    });

    // 4. SLOŽENÍ DOM
    wrapper.before(containerWrapper);
    containerWrapper.appendChild(swiperHelper);
    swiperHelper.appendChild(swiperRoot);
    swiperRoot.appendChild(wrapper);

    const currentSwiperOptions = { ...swiperOptions };

    // PAGINATION
    if (customOptions.dots) {
      const pag = document.createElement("div");
      const pagClass = `swiper-pagination-${safeClass}`;
      pag.className = `swiper-pagination ${pagClass}`;
      containerWrapper.appendChild(pag);
      currentSwiperOptions.pagination = { el: `.${pagClass}`, clickable: true };
    }

    // ARROWS (do helperu)
    if (customOptions.arrows) {
      const prev = document.createElement("div");
      const next = document.createElement("div");
      const pClass = `swiper-button-prev-${safeClass}`;
      const nClass = `swiper-button-next-${safeClass}`;
      prev.className = `swiper-button-prev ${pClass}`;
      next.className = `swiper-button-next ${nClass}`;
      
      swiperHelper.append(prev, next);
      currentSwiperOptions.navigation = { nextEl: `.${nClass}`, prevEl: `.${pClass}` };
    }

    if (customOptions.infinity) currentSwiperOptions.loop = true;

    // 5. START
    const swiperInstance = new Swiper(swiperRoot, currentSwiperOptions);
    window.sniperSwipers[selector] = swiperInstance;

    setTimeout(() => {
      wrapper.style.opacity = "1";
    }, 50);

    // Schování šipek při malém počtu produktů
    const total = wrapper.querySelectorAll(".swiper-slide").length;
    const visible = swiperInstance.params.slidesPerView === "auto" 
      ? swiperInstance.slidesPerViewDynamic() 
      : swiperInstance.params.slidesPerView;
    
    if (total <= visible) {
      containerWrapper.querySelectorAll(".swiper-button-prev, .swiper-button-next").forEach(b => b.style.display = 'none');
    }
  };

  // 6. OBSERVER
  const swiperObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sel = entry.target.getAttribute("data-selector");
          const index = containerArray.indexOf(sel);
          const sClass = slideArray[Math.min(index, slideArray.length - 1)];
          initializeSwiper(sel, sClass);
          observer.unobserve(entry.target);
          swiperizedCount++;
          if (swiperizedCount === containerArray.length) observer.disconnect();
        }
      });
    },
    { rootMargin: "0px 0px 400px 0px", threshold: 0.1 }
  );

  const run = () => {
    containerArray.forEach((selector) => {
      const el = document.querySelector(selector);
      if (el && !el.classList.contains("swiperized")) {
        el.setAttribute("data-selector", selector);
        swiperObserver.observe(el);
        setTimeout(() => {
          if (!el.classList.contains("swiperized")) {
            const index = containerArray.indexOf(selector);
            initializeSwiper(selector, slideArray[Math.min(index, slideArray.length - 1)]);
          }
        }, fallbackTimeout);
      }
    });
  };

  run();
  document.addEventListener("shoptet.content.updated", run);
};

window.swiperize.setLastVisibleSlide = (swiper) => {
  swiper.slides.forEach(s => s.classList.remove("swiper-slide-last-visible"));
  let perView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.round(swiper.params.slidesPerView);
  const lastIndex = (swiper.activeIndex + perView) % swiper.slides.length;
  for (let i = lastIndex; i < swiper.slides.length; i++) {
    if (lastIndex === 0 && i === 0) break;
    swiper.slides[i].classList.add("swiper-slide-last-visible");
  }
};