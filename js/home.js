// Favorite button
let favouriteIcons = document.querySelectorAll(".fa-heart");

favouriteIcons.forEach((icon) => {
  const numberElement = icon.nextElementSibling; // Get the <p> element next to the icon
  let isFavourite = false;

  icon.addEventListener("click", () => {
    isFavourite = !isFavourite; // Toggle the favorite state
    icon.classList.toggle("favourite-checked");

    // Update the number based on the favorite state
    if (isFavourite) {
      numberElement.textContent = parseInt(numberElement.textContent) + 1;
    } else {
      numberElement.textContent = parseInt(numberElement.textContent) - 1;
    }
  });
});

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
});
