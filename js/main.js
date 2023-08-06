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

// Toggle Cart Menu
const openButton = document.querySelector(".bxs-cart");
const closeCartButton = document.getElementById("close-button");
const cartMenu = document.getElementById("cart-menu");

function openCartMenu() {
  cartMenu.classList.add("show");
}

openButton.addEventListener("click", openCartMenu);

function closeCartMenu() {
  cartMenu.classList.remove("show");
}

closeCartButton.addEventListener("click", closeCartMenu);

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

// Add To Cart

/* ======================= WITH LOCAL STORAGE METHOD ================== */

// Step 1: Attach event listeners to the "Add To Order" buttons
const addToOrderButtons = document.querySelectorAll(
  ".order__cards-description button"
);
addToOrderButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});

let cartItems = {};

// Load cart items from localStorage when the page loads
document.addEventListener("DOMContentLoaded", function () {
  const savedCartItems = localStorage.getItem("cartItems");
  if (savedCartItems) {
    cartItems = JSON.parse(savedCartItems);
    updateCartUI();
  }
});

function updateCartUI() {
  const cartMenu = document.getElementById("cart-menu");
  const cartItemsList = cartMenu.querySelector("#list");
  const cartTotal = cartMenu.querySelector("#cart-total");
  const cartNoItems = cartMenu.querySelector(".nav__cart-menu > p");
  const quantitySpan = document.querySelector(".quantity");

  // Clear the cart items list
  cartItemsList.innerHTML = "";

  // Loop through cartItems and update the cart UI
  Object.entries(cartItems).forEach(([title, item]) => {
    const listItem = document.createElement("li");
    listItem.dataset.title = title;
    listItem.innerHTML = `
      <img src="${item.imageSrc}" alt="${title}" class="selected-item-image">
      <div class="wrapper">
        <span>${title} - RM ${item.price.toFixed(2)}</span>
        <div>
          <button class="decrement-button">-</button>
          <button class="item-quantity">${item.quantity}</button>
          <button class="increment-button">+</button>
        </div>
      </div>
    `;
    cartItemsList.appendChild(listItem);
  });

  // Calculate and update the total quantity of all items in the cart
  const totalQuantity = Object.values(cartItems).reduce((total, item) => total + item.quantity, 0);
  quantitySpan.textContent = totalQuantity;

  // Calculate and update the total price
  const currentTotal = Object.values(cartItems).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  cartTotal.textContent = `Total: RM ${currentTotal.toFixed(2)}`;

  if (totalQuantity === 0) {
    cartNoItems.classList.remove("hide");
  } else {
    cartNoItems.classList.add("hide");
  }
}

function addToCart(event) {
  const clickedButton = event.target;
  const orderCard = clickedButton.closest(".order__cards");
  const title = orderCard.querySelector("h2").textContent;
  const price = parseFloat(orderCard.querySelector("p").textContent.replace("RM ", ""));
  const imageSrc = orderCard.querySelector("img").getAttribute("src");

  // Check if the selected item is already in the cart
  if (cartItems.hasOwnProperty(title)) {
    cartItems[title].quantity += 1; // Increment the quantity
  } else {
    cartItems[title] = {
      price: price,
      quantity: 1,
      imageSrc: imageSrc,
    };
  }

  // Save the updated cartItems to localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Update the cart UI
  updateCartUI();
}

function incrementQuantity(event) {
  const clickedButton = event.target;
  const listItem = clickedButton.closest("li");
  const title = listItem.dataset.title;

  cartItems[title].quantity += 1;

  // Save the updated cartItems to localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Update the cart UI
  updateCartUI();
}

function decrementQuantity(event) {
  const clickedButton = event.target;
  const listItem = clickedButton.closest("li");
  const title = listItem.dataset.title;

  if (cartItems[title].quantity > 1) {
    cartItems[title].quantity -= 1;
  } else {
    // If the quantity is 1 or less, remove the item from the cart
    delete cartItems[title];
    listItem.remove();
  }

  // Save the updated cartItems to localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Update the cart UI
  updateCartUI();
}

// Add event listeners for the increment and decrement buttons
document.addEventListener("click", function (event) {
  if (event.target.matches(".increment-button")) {
    incrementQuantity(event);
  } else if (event.target.matches(".decrement-button")) {
    decrementQuantity(event);
  }
});

/* ============================== WITHOUT LOCAL STORAGE METHOD ======================= */

// Step 1: Create an object to store selected items and their quantities
// const cartItems = {};

// function addToCart(event) {
//   const clickedButton = event.target;
//   const orderCard = clickedButton.closest(".order__cards");
//   const title = orderCard.querySelector("h2").textContent;
//   const price = parseFloat(
//     orderCard.querySelector("p").textContent.replace("RM ", "")
//   );
//   const imageSrc = orderCard.querySelector("img").getAttribute("src");

//   const cartMenu = document.getElementById("cart-menu");
//   const cartItemsList = cartMenu.querySelector("#list");
//   const cartTotal = cartMenu.querySelector("#cart-total");
//   const cartNoItems = cartMenu.querySelector(".nav__cart-menu > p");
//   const quantitySpan = document.querySelector(".quantity");

//   // Check if the selected item is already in the cart
//   if (cartItems.hasOwnProperty(title)) {
//     cartItems[title].quantity += 1; // Increment the quantity
//   } else {
//     cartItems[title] = {
//       price: price,
//       quantity: 1,
//       imageSrc: imageSrc,
//     };

//     // If the selected item is not in the cart, create a new list item
//     const listItem = document.createElement("li");
//     listItem.dataset.title = title;
//     listItem.innerHTML = `
//       <img src="${imageSrc}" alt="${title}" class="selected-item-image">
//       <div class="wrapper">
//         <span>${title} - RM ${price.toFixed(2)}</span>
//         <div>
//           <button class="decrement-button">-</button>
//           <button class="item-quantity">${cartItems[title].quantity}</button>
//           <button class="increment-button">+</button>
//         </div>
//       </div>
//     `;
//     cartItemsList.appendChild(listItem);
//   }

//   // Update the quantity button for the selected item
//   const quantityButton = cartItemsList.querySelector(
//     `li[data-title="${title}"] .item-quantity`
//   );
//   quantityButton.textContent = cartItems[title].quantity;

//   // Calculate and update the total quantity of all items in the cart
//   const totalQuantity = Object.values(cartItems).reduce(
//     (total, item) => total + item.quantity,
//     0
//   );
//   quantitySpan.textContent = totalQuantity;

//   // Calculate and update the total price
//   const currentTotal = Object.values(cartItems).reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
//   cartTotal.textContent = `Total: RM ${currentTotal.toFixed(2)}`;
//   cartNoItems.classList.add("hide");
// }

// function incrementQuantity(event) {
//   const clickedButton = event.target;
//   const listItem = clickedButton.closest("li");
//   const title = listItem.dataset.title;

//   cartItems[title].quantity += 1;

//   // Update the quantity button for the selected item
//   const quantityButton = listItem.querySelector(".item-quantity");
//   quantityButton.textContent = cartItems[title].quantity;

//   // Calculate the total quantity of all items in the cart
//   const totalQuantity = Object.values(cartItems).reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   // Update the quantity in the cart menu
//   const quantitySpan = document.querySelector(".quantity");
//   quantitySpan.textContent = totalQuantity;

//   // Calculate and update the total price
//   updateTotalPrice();
// }

// function decrementQuantity(event) {
//   const clickedButton = event.target;
//   const listItem = clickedButton.closest("li");
//   const title = listItem.dataset.title;

//   if (cartItems[title].quantity > 1) {
//     cartItems[title].quantity -= 1;

//     // Update the quantity button for the selected item
//     const quantityButton = listItem.querySelector(".item-quantity");
//     quantityButton.textContent = cartItems[title].quantity;

//     // Calculate the total quantity of all items in the cart
//     const totalQuantity = Object.values(cartItems).reduce(
//       (total, item) => total + item.quantity,
//       0
//     );

//     // Update the quantity in the cart menu
//     const quantitySpan = document.querySelector(".quantity");
//     quantitySpan.textContent = totalQuantity;

//     // Calculate and update the total price
//     updateTotalPrice();
//   } else {
//     // If the quantity is 1 or less, remove the item from the cart
//     delete cartItems[title];
//     listItem.remove();

//     // Update the quantity in the cart menu
//     const quantitySpan = document.querySelector(".quantity");
//     const totalQuantity = Object.values(cartItems).reduce(
//       (total, item) => total + item.quantity,
//       0
//     );
//     quantitySpan.textContent = totalQuantity;

//     // Calculate and update the total price
//     updateTotalPrice();
//   }
// }

// function updateTotalPrice() {
//   const cartTotal = document.getElementById("cart-total");
//   const currentTotal = Object.values(cartItems).reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
//   cartTotal.textContent = `Total: RM ${currentTotal.toFixed(2)}`;

//   const cartNoItems = document.querySelector(".nav__cart-menu > p");
//   if (currentTotal === 0) {
//     cartNoItems.classList.remove("hide");
//   } else {
//     cartNoItems.classList.add("hide");
//   }
// }

// // Add event listeners for the increment and decrement buttons
// document.addEventListener("click", function (event) {
//   if (event.target.matches(".increment-button")) {
//     incrementQuantity(event);
//   } else if (event.target.matches(".decrement-button")) {
//     decrementQuantity(event);
//   }
// });


