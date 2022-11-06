const burger = document.querySelector(".burger-menu");
const navContainer = document.querySelector(".navigation-container");
const openModal = document.querySelector(".checkout-btn");
const closeModal = document.querySelector(".modal-close-button");
const modal = document.querySelector(".modal");
const form = document.querySelector(".order-form");
const popUp = document.querySelector(".pop-up");
const popUpCloseButton = document.querySelector(".pop-up-close-button");
const body = document.body;
const inputErrorClass = 'input-error';

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

    console.log(data);
};

function handleSubmit(e) {
    e.preventDefault();

    const nameElement = e.target.querySelector("input[name='name']");
    const telElement = e.target.querySelector("input[name='tel']");

    const validatedFields = [{
        element: nameElement,
        validationFunc: validateName
    }, {
        element: telElement,
        validationFunc: validateTel
    }];

    const errorInputs = validateForm(validatedFields)

    if (!errorInputs.length) {
        getFormValue(e);
        modal.classList.remove("active");
        body.classList.remove('no-scroll');
        popUpOpen();
        resetForm(e.target, inputErrorClass);
    } else {
        clearErrors(e.target, inputErrorClass);
        displayErrors(errorInputs);
    }
}

function validateName(value) {
    const restrictedSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '"', "'", '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let isCorrect = true;
    const trimmedValue = value.trim();

    if (trimmedValue === '') {
        return false;
    }

    for (let i = 0; i < trimmedValue.length; i++) {
        if (restrictedSymbols.includes(trimmedValue[i])) {
            isCorrect = false;
            break;
        }
    }

    return isCorrect;
}

function validateTel(value) {
    const trimmedValue = value.trim();
    const restrictedSymbols = ['e', '-', ',', '.'];

    if (trimmedValue === '') {
        return false;
    }

    if (restrictedSymbols.includes(trimmedValue[0])) {
        return false;
    }

    if (trimmedValue[0] === '+') {
        return isInt(trimmedValue.slice(1).replaceAll('.', ','));
    }

    return isInt(trimmedValue.replaceAll('.', ','));
}

function isInt(value) {
    return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
}

function validateForm(validatedFields) {
    const errorInputs = [];

    for (let i = 0; i < validatedFields.length; i++) {
        if (!validatedFields[i].validationFunc(validatedFields[i].element.value)) {
            errorInputs.push(validatedFields[i].element);
        }
    }

    return errorInputs;
}

function displayErrors(errorInputs) {
    errorInputs.forEach((item) => {
        item.parentElement.classList.add(inputErrorClass);
    })
}

function clearErrors(form, errorClass) {
    const errorElems = form.querySelectorAll(`.${errorClass}`);
    
    errorElems.forEach((item) => {
        item.classList.remove(inputErrorClass);
    })
}

function resetForm(form, errorClass) {
    clearErrors(form, errorClass);
    form.reset();
}

function popUpOpen() {
    popUp.classList.add("pop-up-visible");

    setTimeout(() => {
        popUp.classList.remove("pop-up-visible");
    }, 2500);
}

function popUpClose() {
    popUp.classList.remove("pop-up-visible");
}

document.addEventListener("click", closeMobileMenu);
burger.addEventListener("click", toggleMobileMenu);
form.addEventListener("submit", handleSubmit);
popUpCloseButton.addEventListener("click", popUpClose);

openModal.addEventListener("click", function () {
    modal.classList.add('active');
    body.classList.add('no-scroll');

});

closeModal.addEventListener("click", function () {
    modal.classList.remove("active");
    body.classList.remove('no-scroll');
});