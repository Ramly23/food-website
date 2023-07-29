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

sr.reveal(`.swiper, .section__title, .section__subtitle, .cards__content`);
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

// Change Images When Click The Appropriate Images
const orderImages = document.getElementById("order-image");
const selectedText = document.getElementById("selectedText");
const selectedLocation = document.getElementById("seletedLocation");
const selectedStars = document.getElementById("selectedStars");

// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const imageUrl = urlParams.get("image");
const text = urlParams.get("text");
const location = urlParams.get("location");
const stars = urlParams.get("stars");

orderImages.src = imageUrl;
selectedText.textContent = text;
selectedLocation.textContent = location;
displayStars(parseFloat(stars));

// Display Stars
function displayStars(stars) {
  selectedStars.innerHTML = "";

  const fullStars = Math.floor(stars);
  const hasHalfStar = stars % 1 !== 0;

  for(let i = 0; i < fullStars; i++) {
    const fullStarIcon = document.createElement('i');
    fullStarIcon.className = 'bx bxs-star';
    selectedStars.appendChild(fullStarIcon);
  }

  if(hasHalfStar) {
    const halfStarIcon = document.createElement('i');
    halfStarIcon.className = 'bx bxs-star-half';
    selectedStars.appendChild(halfStarIcon);
  }
}