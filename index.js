// -------------------- Nvabar --------------------------//

// --------------------------- NavLinks ------------------------- //

const currentPage = window.location.href;

const navLinks = document.querySelectorAll(".navbar-links ul li a");

navLinks.forEach((link) => {
  if (link.href === currentPage) {
    link.classList.add("active");
  }
});

// ------------------------- Offcanvas Menu

let navMenuBtn = document.querySelector(".menu");
let offcanvasMenu = document.querySelector(".navbar-offcanvas");

navMenuBtn.addEventListener("click", () => {
  if (navMenuBtn.classList.contains("opened")) {
    offcanvasMenu.style.transform = "translateX(0)";
    document.querySelector(".overlay").style.opacity = ".5";
  } else {
    offcanvasMenu.style.transform = "translateX(-300px)";
    document.querySelector(".overlay").style.opacity = "0";
  }
});
