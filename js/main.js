const navContainer = document.querySelector(".nav__container-mobile");
const hamburger = document.querySelector(".bx-menu");
const closeButton = document.querySelector(".bx-x");

function showMobileMenu() {
  navContainer.classList.add("show");
  closeButton.classList.add("show");
  hamburger.classList.remove("show");
}

hamburger.addEventListener("click", showMobileMenu);

function closeMobileMenu() {
  navContainer.classList.remove("show");
  closeButton.classList.remove("show");
  hamburger.classList.add("show");
}

closeButton.addEventListener("click", closeMobileMenu);

/*=============== SWIPER TESTIMONIALS ===============*/
var swiperTestimonials = new Swiper(".testimonials__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: false,
});

sr.reveal(`.swiper, .section__title, .section__subtitle`);
sr.reveal(`.card__content`, { origin: "left" });
sr.reveal(`.cards, .footer__animate`, { interval: 300 });

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
