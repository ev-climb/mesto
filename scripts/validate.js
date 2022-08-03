const validationConfig = {
    formElement: '.popup__form',
    inputElement: '.popup__input',
    submitButton: '.popup__button',
    inactiveButton: 'popup__button_disabled',
    inputError: 'popup__input_type_error',
    errorVisibility: 'popup__input-error_active',
};



// Вынесем все необходимые элементы формы в константы
const formElement = document.querySelector(validationConfig.formElement);
const formInput = formElement.querySelector(validationConfig.inputElement);
const formError = formElement.querySelector(`.${formInput.id}-error`);

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, formInput, errorMessage) => {
    const errorElement = formElement.querySelector(`.${formInput.id}-error`);
    formInput.classList.add(validationConfig.inputError);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationConfig.errorVisibility);
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, formInput) => {
    const errorElement = formElement.querySelector(`.${formInput.id}-error`);
    formInput.classList.remove(validationConfig.inputError);
    errorElement.classList.remove(validationConfig.errorVisibility);
    errorElement.textContent = '';
};

const hasInvalidInput = (inputList) => {
    return inputList.some((formInput) => {
        return !formInput.validity.valid;
    })
};

// Функция, которая проверяет валидность поля
const isValid = (formElement, formInput) => {
    if (!formInput.validity.valid) {
        showInputError(formElement, formInput, formInput.validationMessage);
    } else {
        hideInputError(formElement, formInput);
    }
};

// Вызовем функцию isValid на каждый ввод символа
formInput.addEventListener('input', isValid);

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(validationConfig.inactiveButton);
    } else {
        buttonElement.classList.remove(validationConfig.inactiveButton);
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputElement));
    const buttonElement = formElement.querySelector(validationConfig.submitButton);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((formInput) => {
        formInput.addEventListener('input', () => {
            isValid(formElement, formInput);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

const enableValidation = (validationConfig) => {
    const formList = Array.from(document.querySelectorAll(validationConfig.formElement));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement);
    });
};

enableValidation(validationConfig);