// Accordian

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

// Our Teams Swiper

let swiper = new Swiper(".ourteams__cards", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: ".rounded-button-next",
    prevEl: ".rounded-button-prev",
  },
  breakpoints: {
    992: {
      centeredSlides: false,
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
  },
  mousewheel: true,
  grabCursor: true,
});
