const burger = document.querySelector(".burger-menu");
const navContainer = document.querySelector(".navigation-container");
const openModal = document.querySelector(".checkout-btn");
const closeModal = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");

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

openModal.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.add('active');
})

closeModal.addEventListener("click", function () {
        modal.classList.remove("active");
    })