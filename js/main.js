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
const menuOrderElements = [
  document.getElementById("menu-1"),
  document.getElementById("menu-2"),
  document.getElementById("menu-3"),
  document.getElementById("menu-4"),
  document.getElementById("menu-5"),
  document.getElementById("menu-6"),
  document.getElementById("menu-7"),
  document.getElementById("menu-8"),
  document.getElementById("menu-9"),
];

const titleElements = [
  document.getElementById("title-1"),
  document.getElementById("title-2"),
  document.getElementById("title-3"),
  document.getElementById("title-4"),
  document.getElementById("title-5"),
  document.getElementById("title-6"),
  document.getElementById("title-7"),
  document.getElementById("title-8"),
  document.getElementById("title-9"),
];

const priceElements = [
  document.getElementById("price-1"),
  document.getElementById("price-2"),
  document.getElementById("price-3"),
  document.getElementById("price-4"),
  document.getElementById("price-5"),
  document.getElementById("price-6"),
  document.getElementById("price-7"),
  document.getElementById("price-8"),
  document.getElementById("price-9"),
];

//  Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);

if (urlParams.has("image")) {
  const imageUrl = urlParams.get("image");
  const text = urlParams.get("text");
  const location = urlParams.get("location");
  const stars = parseFloat(urlParams.get("stars"));
  const menusArray = JSON.parse(urlParams.get("menus"));
  const titles = JSON.parse(urlParams.get("titles"));
  const prices = JSON.parse(urlParams.get("prices"));

  orderImages.src = imageUrl;
  selectedText.textContent = text;
  selectedLocation.textContent = location;

  menusArray.forEach((menu, index) => {
    menuOrderElements[index].src = menu;
  });

  titles.forEach((text, index) => {
    titleElements[index].textContent = text;
  });

  prices.forEach((text, index) => {
    priceElements[index].textContent = text;
  });

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
      const menusArray = JSON.parse(this.dataset.menus);
      const titles = JSON.parse(this.dataset.titles);
      const prices = JSON.parse(this.dataset.prices);

      openOrderPage(
        imageUrl,
        text,
        location,
        stars,
        menusArray,
        titles,
        prices
      );
    });
  });
}

function openOrderPage(
  imageUrl,
  text,
  location,
  stars,
  menusArray,
  titles,
  prices
) {
  const url = new URL("order.html", window.location.origin);
  const params = new URLSearchParams();
  params.set("image", imageUrl);
  params.set("text", text);
  params.set("location", location);
  params.set("stars", stars);
  params.set("menus", JSON.stringify(menusArray));
  params.set("titles", JSON.stringify(titles));
  params.set("prices", JSON.stringify(prices));
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
