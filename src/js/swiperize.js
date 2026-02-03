const swiperize = ({
  containers,
  slide,
  customOptions = {},
  swiperOptions = {},
}) => {
  const scrollbarWidth = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--scrollbar-width"
    )
  );
  const fallbackTimeout = 5000;

  // Ensure that the containers and slides are arrays
  const containerArray = Array.isArray(containers) ? containers : [containers];
  const slideArray = Array.isArray(slide) ? slide : [slide];

  let swiperizedCount = 0;

  const initializeSwiper = (selector, slideClass) => {
    // Create a fragment to hold the new Swiper container until its DOM is ready
    const swiperFragment = document.createDocumentFragment();

    // Create a new container for the Swiper instance
    const swiperContainer = document.createElement("div");
    const swiperClass = "swiper-" + selector.replace(/[#.]/g, "");
    swiperContainer.classList.add("swiper", swiperClass);

    swiperFragment.appendChild(swiperContainer);

    // Clone the original container and modify its structure for Swiper
    const slidesContainer = document.querySelector(selector);
    if (!slidesContainer) {
      console.error(`Element not found for selector: ${selector}`);
      return;
    }
    slidesContainer.classList.add("swiperized");

    const slidesContainerClone = slidesContainer.cloneNode(true);
    slidesContainerClone.classList.add("swiper-wrapper");
    Object.assign(slidesContainerClone.style, {
      display: "flex",
      flexWrap: "nowrap",
    });
    swiperContainer.appendChild(slidesContainerClone);

    // Apply viewport styles to the Swiper container
    if (customOptions.fullscreen) {
      Object.assign(swiperContainer.style, {
        position: "relative",
        width: `calc(100vw - ${scrollbarWidth}px)`,
        maxWidth: `${1920 - scrollbarWidth}px`,
        left: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden",
      });
    } else {
      Object.assign(swiperContainer.style, {
        width: "100%",
        position: "relative",
        overflow: "hidden",
      });
    }

    // Add pagination dots if enabled
    if (customOptions.dots) {
      const pagination = document.createElement("div");
      const paginationClass = `swiper-pagination-${selector.replace(/[#.]/g, "")}`;
      pagination.classList.add("swiper-pagination", paginationClass);
      swiperContainer.insertAdjacentElement("afterend", pagination);
      swiperOptions.pagination = {
        el: `.${paginationClass}`,
        clickable: true,
      };
    }
    
    // Add navigation arrows if enabled
    if (customOptions.arrows) {
      const prevClass = `swiper-button-prev-${selector.replace(/[#.]/g, "")}`;
      const nextClass = `swiper-button-next-${selector.replace(/[#.]/g, "")}`;
    
      const previous = document.createElement("div");
      previous.classList.add("swiper-button-prev", prevClass);
      swiperContainer.appendChild(previous);
    
      const next = document.createElement("div");
      next.classList.add("swiper-button-next", nextClass);
      swiperContainer.appendChild(next);
    
      swiperOptions.navigation = {
        nextEl: `.${nextClass}`,
        prevEl: `.${prevClass}`,
      };
    }
    
    // Add scrollbar if enabled
    if (customOptions.scrollbar) {
      const scrollbarClass = `swiper-scrollbar-${selector.replace(/[#.]/g, "")}`;
      const scrollbar = document.createElement("div");
      scrollbar.classList.add("swiper-scrollbar", scrollbarClass);
      swiperContainer.appendChild(scrollbar);
    
      swiperOptions.scrollbar = {
        el: `.${scrollbarClass}`,
        draggable: true,
      };
    }

    // Enable infinite loop if enabled
    if (customOptions.infinity) {
      swiperOptions.loop = true;
    }

    if (customOptions.lazyPrevNext) {
      swiperOptions.lazy = {
        loadPrevNext: true,
      };
    }

    // Add the swiper-slide class to each slide
    const slides = slidesContainerClone.querySelectorAll(slideClass);
    for (const slide of slides) {
      slide.classList.add("swiper-slide");

      const slideImg = slide.querySelector(".image img");
      if (slideImg && slideImg.getAttribute("data-src")) {
        slideImg.setAttribute("src", slideImg.getAttribute("data-src"));
      }
    }

    // Replace the original container with the new Swiper container
    slidesContainer.before(swiperFragment);
    slidesContainer.remove();

    // Initialize the Swiper instance
    const swiperInstance = new Swiper(`.${swiperClass}`, { ...swiperOptions });

    // Show the Swiper container after it's ready to prevent flickering
    // Set in css opacity: 0 and display: none for swiper .products
    setTimeout(() => {
      slidesContainerClone.style.opacity = 1;
      slidesContainerClone.style.display = "flex";

      slidesContainerClone.style.setProperty(
        "--swiper-height",
        `${slidesContainerClone.clientHeight}px`
      );
    }, 0);

    // Disable navigation buttons if slides are less than slidesPerView
    const disableNavigationButtons = () => {
      const totalSlides =
        slidesContainerClone.querySelectorAll(".swiper-slide").length;
      const slidesPerView =
        swiperInstance.params.slidesPerView === "auto"
          ? swiperInstance.slidesPerViewDynamic()
          : swiperInstance.params.slidesPerView;

      if (totalSlides <= slidesPerView) {
        const prevButton = swiperContainer.querySelector(".swiper-button-prev");
        const nextButton = swiperContainer.querySelector(".swiper-button-next");

        if (prevButton) prevButton.classList.add("disabled");
        if (nextButton) nextButton.classList.add("disabled");
      }
    };

    disableNavigationButtons();
  };

  // Lazy load Swiper instances when they come into view
  const swiperObserver = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const selector = entry.target.getAttribute("data-selector");
          const index = containerArray.indexOf(selector);
          const slideClass = slideArray[Math.min(index, slideArray.length - 1)];
          initializeSwiper(selector, slideClass);
          observer.unobserve(entry.target);
          swiperizedCount++;

          // Disconnect observer if all containers come into view
          if (swiperizedCount === containerArray.length) {
            observer.disconnect();
          }
        }
      }
    },
    {
      rootMargin: "0px 0px 400px 0px",
      threshold: 0.1,
    }
  );

  // Initiate the swiperization process for each container using the observer or a fallback
  for (const selector of containerArray) {
    const slidesContainer = document.querySelector(selector);
    if (slidesContainer) {
      slidesContainer.setAttribute("data-selector", selector);
      swiperObserver.observe(slidesContainer);

      // Fallback for containers that don't trigger the observer
      setTimeout(() => {
        if (!slidesContainer.classList.contains("swiperized")) {
          const index = containerArray.indexOf(selector);
          const slideClass = slideArray[Math.min(index, slideArray.length - 1)];
          initializeSwiper(selector, slideClass);
          swiperObserver.unobserve(slidesContainer);
          swiperizedCount++;

          // Disconnect observer once all containers are loaded through the fallback
          if (swiperizedCount === containerArray.length) {
            swiperObserver.disconnect();
          }
        }
      }, fallbackTimeout);
    }
  }
};

swiperize.setLastVisibleSlide = (swiper) => {
  // Remove the last-visible class from all slides
  for (const slide of swiper.slides) {
    slide.classList.remove("swiper-slide-last-visible");
  }

  // Get slidesPerView, accounting for 'auto'
  let slidesPerView;

  swiper.params.slidesPerView === "auto"
    ? (slidesPerView = swiper.slidesPerViewDynamic())
    : (slidesPerView = Math.round(swiper.params.slidesPerView));

  // Calculate the last visible slide index
  const activeIndex = swiper.activeIndex;
  const lastVisibleIndex = (activeIndex + slidesPerView) % swiper.slides.length;

  // Add the last-visible class to the slide with lastVisibleIndex and all slides afterwards
  for (let i = lastVisibleIndex; i < swiper.slides.length; i++) {
    if (lastVisibleIndex === 0 && i === 0) break;
    swiper.slides[i].classList.add("swiper-slide-last-visible");
  }
};

/**
 * Returns an array of the same length as the selectors array, filled with the slideClass string.
 * @param {*} selectors String array of selectors
 * @param {*} slideClass Target class of the slides
 * @returns
 */
swiperize.spreadClass = (selectors, slideClass) => {
  return Array(selectors.length).fill(slideClass);
};
