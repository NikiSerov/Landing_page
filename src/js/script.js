const burger = document.querySelector(".burger-menu")
const navContainer = document.querySelector(".navigation-container")

function toggleMobileMenu() {
    navContainer.classList.toggle("visible");
    burger.classList.toggle("opened");
}

burger.addEventListener("click", toggleMobileMenu)

