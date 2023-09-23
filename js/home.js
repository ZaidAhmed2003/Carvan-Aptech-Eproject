// Our Teams Swiper

let swiper = new Swiper(".ourteams__cards", {
  slidesPerView: "auto",
  spaceBetween: 30,
  freeMode: true,
  cssMode: true,
  navigation: {
    nextEl: ".rounded-button-next",
    prevEl: ".rounded-button-prev",
  },
  grabCursor: true,
  mousewheel: true,
});
