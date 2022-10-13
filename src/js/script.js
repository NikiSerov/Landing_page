const burger = document.querySelector(".burger-menu");
const navContainer = document.querySelector(".navigation-container");

function toggleMobileMenu() {
    navContainer.classList.toggle("visible");
    burger.classList.toggle("opened");
}

function closeMobileMenu(e) {
    const element = e.target;

    if (!element.closest(".page-header")) {
        burger.classList.remove("opened");
        navContainer.classList.remove("visible");
    }
}

document.addEventListener("click", closeMobileMenu);
burger.addEventListener("click", toggleMobileMenu);