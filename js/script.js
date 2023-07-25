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