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

// Change Images When Click The Appropriate Images
const orderImages = document.getElementById("order-image");
const selectedText = document.getElementById("selectedText");
const selectedLocation = document.getElementById("seletedLocation");
const selectedStars = document.querySelectorAll("#selectedStars");
const MenuOrder1 = document.getElementById("menu-1");
const MenuOrder2 = document.getElementById("menu-2");
const MenuOrder3 = document.getElementById("menu-3");
const MenuOrder4 = document.getElementById("menu-4");
const MenuOrder5 = document.getElementById("menu-5");
const MenuOrder6 = document.getElementById("menu-6");
const MenuOrder7 = document.getElementById("menu-7");
const MenuOrder8 = document.getElementById("menu-8");
const MenuOrder9 = document.getElementById("menu-9");

//  Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);

if (urlParams.has("image")) {
  const imageUrl = urlParams.get("image");
  const text = urlParams.get("text");
  const location = urlParams.get("location");
  const stars = parseFloat(urlParams.get("stars"));
  const menuOrder1 = urlParams.get("menu1");
  const menuOrder2 = urlParams.get("menu2");
  const menuOrder3 = urlParams.get("menu3");
  const menuOrder4 = urlParams.get("menu4");
  const menuOrder5 = urlParams.get("menu5");
  const menuOrder6 = urlParams.get("menu6");
  const menuOrder7 = urlParams.get("menu7");
  const menuOrder8 = urlParams.get("menu8");
  const menuOrder9 = urlParams.get("menu9");

  orderImages.src = imageUrl;
  selectedText.textContent = text;
  selectedLocation.textContent = location;
  MenuOrder1.src = menuOrder1;
  MenuOrder2.src = menuOrder2;
  MenuOrder3.src = menuOrder3;
  MenuOrder4.src = menuOrder4;
  MenuOrder5.src = menuOrder5;
  MenuOrder6.src = menuOrder6;
  MenuOrder7.src = menuOrder7;
  MenuOrder8.src = menuOrder8;
  MenuOrder9.src = menuOrder9;

  selectedStars.forEach((container) => {
    displayStars(stars, container);
  });
} else {
  const imageLinks = document.querySelectorAll(".imageLink");

  imageLinks.forEach((imageLink) => {
    imageLink.addEventListener("click", function (event) {
      event.preventDefault();

      const imageUrl = this.dataset.image;
      const text = this.dataset.text;
      const location = this.dataset.location;
      const stars = parseFloat(this.dataset.stars);
      const menuOrder1 = this.dataset.menu1;
      const menuOrder2 = this.dataset.menu2;
      const menuOrder3 = this.dataset.menu3;
      const menuOrder4 = this.dataset.menu4;
      const menuOrder5 = this.dataset.menu5;
      const menuOrder6 = this.dataset.menu6;
      const menuOrder7 = this.dataset.menu7;
      const menuOrder8 = this.dataset.menu8;
      const menuOrder9 = this.dataset.menu9;

      openOrderPage(
        imageUrl,
        text,
        location,
        stars,
        menuOrder1,
        menuOrder2,
        menuOrder3,
        menuOrder4,
        menuOrder5,
        menuOrder6,
        menuOrder7,
        menuOrder8,
        menuOrder9
      );
    });
  });
}

function openOrderPage(
  imageUrl,
  text,
  location,
  stars,
  menuOrder1,
  menuOrder2,
  menuOrder3,
  menuOrder4,
  menuOrder5,
  menuOrder6,
  menuOrder7,
  menuOrder8,
  menuOrder9
) {
  const url = new URL("order.html", window.location.origin);
  const params = new URLSearchParams();
  params.set("image", imageUrl);
  params.set("text", text);
  params.set("location", location);
  params.set("stars", stars);
  params.set("menu1", menuOrder1);
  params.set("menu2", menuOrder2);
  params.set("menu3", menuOrder3);
  params.set("menu4", menuOrder4);
  params.set("menu5", menuOrder5);
  params.set("menu6", menuOrder6);
  params.set("menu7", menuOrder7);
  params.set("menu8", menuOrder8);
  params.set("menu9", menuOrder9);
  url.search = params.toString();

  window.location.href = url.href;
}

// Display Stars
function displayStars(stars, selectedStars) {
  selectedStars.innerHTML = "";

  const fullStars = Math.floor(stars);
  const hasHalfStar = stars % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    const fullStarIcon = document.createElement("i");
    fullStarIcon.className = "bx bxs-star";
    selectedStars.appendChild(fullStarIcon);
  }

  if (hasHalfStar) {
    const halfStarIcon = document.createElement("i");
    halfStarIcon.className = "bx bxs-star-half";
    selectedStars.appendChild(halfStarIcon);
  }
}

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

/*=============== SWIPER ORDER ===============*/
var orderTestimonials = new Swiper(".order__menu-container", {
  spaceBetween: 50,
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
