const currentPage = window.location.href;
const navLinks = document.querySelectorAll(".navbar__links ul li a");
const navMenuBtn = document.querySelector(".navbar__menu");
const offcanvasMenu = document.querySelector(".navbar__offcanvas");

// Function to toggle the "no-scroll" class on the body
function toggleBodyScroll() {
  document.body.classList.toggle("no-scroll");
}

// Add click event listener to the menu button
navMenuBtn.addEventListener("click", () => {
  if (!navMenuBtn.classList.contains("opened")) {
    offcanvasMenu.style.transform = "translateX(-300px)";
    toggleBodyScroll(); // Add the class to disable body scroll
  } else {
    offcanvasMenu.style.transform = "translateX(0)";
    toggleBodyScroll(); // Remove the class to enable body scroll
  }
});

// Add "active" class to current page link
navLinks.forEach((link) => {
  if (link.href === currentPage) {
    link.classList.add("active");
  }
});
