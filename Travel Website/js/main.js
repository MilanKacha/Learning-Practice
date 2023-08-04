// Show Menu
const navMenu = document.getElementById("nav__menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Menu-show
// validate if constant exist
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Menu-Hidden
// Validate If Constant Exist
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//  REMOVE MENU MOBILE
const navLink = document.querySelectorAll("nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav__menu");
  //   When we click on each nav__link, we remove the show-menu
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Add Blur To header
const blurHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viweport height, add the blur-header class
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
  window.addEventListener("scroll", blurHeader);
};
