// const validationConfig = {
//     formElement: '.popup__form',
//     inputElement: '.popup__input',
//     submitButton: '.popup__button',
//     inactiveButton: 'popup__button_disabled',
//     inputError: 'popup__input_type_error',
//     errorVisibility: 'popup__input-error_active',
// };

// Функция, которая добавляет класс с ошибкой
// const showInputError = (formElement, formInput, errorMessage, config) => {
//     const errorElement = formElement.querySelector(`.${formInput.id}-error`);
//     formInput.classList.add(config.inputError);
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add(config.errorVisibility);
// };

// Функция, которая удаляет класс с ошибкой
// const hideInputError = (formElement, formInput, config) => {
//     const errorElement = formElement.querySelector(`.${formInput.id}-error`);
//     formInput.classList.remove(config.inputError);
//     errorElement.classList.remove(config.errorVisibility);
//     errorElement.textContent = '';
// };

// const hasInvalidInput = (inputList) => {
//     return inputList.some((formInput) => {
//         return !formInput.validity.valid;
//     })
// };

// Функция, которая проверяет валидность поля
// const isValid = (formElement, formInput, config) => {
//     if (!formInput.validity.valid) {
//         showInputError(formElement, formInput, formInput.validationMessage, config);
//     } else {
//         hideInputError(formElement, formInput, config);
//     }
// };

// const toggleButtonState = (inputList, buttonElement, config) => {
//     if (hasInvalidInput(inputList)) {
//         buttonElement.classList.add(config.inactiveButton);
//         buttonElement.setAttribute('disabled', true);
//     } else {
//         buttonElement.classList.remove(config.inactiveButton);
//         buttonElement.removeAttribute('disabled');
//     }
// };

// const setEventListeners = (formElement, config) => {
//     const inputList = Array.from(formElement.querySelectorAll(config.inputElement));
//     const buttonElement = formElement.querySelector(config.submitButton);
//     toggleButtonState(inputList, buttonElement, config);
//     inputList.forEach((formInput) => {
//         formInput.addEventListener('input', () => {
//             isValid(formElement, formInput, config);
//             toggleButtonState(inputList, buttonElement, config);
//         });
//     });
// };

// const enableValidation = (config) => {
//     const formList = Array.from(document.querySelectorAll(config.formElement));
//     formList.forEach((formElement) => {
//         setEventListeners(formElement, config);
//     });
// };

// enableValidation(validationConfig);