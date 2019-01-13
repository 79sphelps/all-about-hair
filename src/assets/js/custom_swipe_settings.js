// breakpoint where swiper will be destroyed
// and switches to a dual-column layout
const breakpoint = window.matchMedia("(min-width:31.25em)");
// keep track of swiper instances to destroy later
let mySwiper;
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const breakpointChecker = function() {
  console.log("**** HERE ****");
  // if larger viewport and multi-row layout needed
  if (breakpoint.matches === true) {
    // clean up old instances and inline styles when available
    if (mySwiper !== undefined) mySwiper.destroy(true, true);
    // or/and do nothing
    return;
    // else if a small viewport and single column layout needed
  } else if (breakpoint.matches === false) {
    // fire small viewport version of swiper
    return enableSwiper();
  }
};
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const enableSwiper = function() {
  mySwiper = new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    a11y: true,
    keyboardControl: true,
    grabCursor: true,
    // pagination
    pagination: ".swiper-pagination",
    paginationClickable: true,

    // Default parameters
    slidesPerView: 4,
    spaceBetween: 40,
    // Responsive breakpoints
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is <= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },

      // when window width is <= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
};
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// keep an eye on viewport size changes
breakpoint.addListener(breakpointChecker);
// kickstart
breakpointChecker();
