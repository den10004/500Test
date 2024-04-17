var swiper = new Swiper(".bannerSlider", {
  loop: true,
  navigation: {
    nextEl: ".bannerSlider-button-next",
    prevEl: ".bannerSlider-button-prev",
  },
});

var swiper1 = new Swiper(".newsSlider", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".newsSlider-button-next",
    prevEl: ".newsSlider-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1.5,
    },
    640: {
      slidesPerView: 2,
    },
  },
});
