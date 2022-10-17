const burger = document.querySelector(".burger-menu");
const navContainer = document.querySelector(".navigation-container");
const openModal = document.querySelector(".checkout-btn");
const closeModal = document.querySelector(".modal-close-button");
const modal = document.querySelector(".modal");
const form = document.querySelector(".order-form");

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

function getFormValue(event) {
    event.preventDefault();

    const elements = event.target.elements;
    const data = {};

    for (let i = 0; i < elements.length; i++) {
        const elem = elements[i];
        const name = elem.name;
        const type = elem.type;

        switch (type) {
            case 'checkbox':
                data[name] = elem.checked;
                break;
            case 'submit':
                break;
            default:
                data[name] = elem.value;
                break;
        }
    }

    console.log(data)
    
    modal.classList.remove("active");
};

document.addEventListener("click", closeMobileMenu);
burger.addEventListener("click", toggleMobileMenu);
form.addEventListener("submit", getFormValue);

openModal.addEventListener("click", function () {
    modal.classList.add('active');
});

closeModal.addEventListener("click", function () {
    modal.classList.remove("active");
});


