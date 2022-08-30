export class FormValidator {
    constructor(classes, form){
        this._formElement = classes.formElement;
        this._inputElement = classes.inputElement;
        this._submitButton = classes.submitButton;
        this._inactiveButton = classes.inactiveButton;
        this._inputError = classes.inputError;
        this._errorVisibility = classes.errorVisibility;
        this._form = form;
    }

    _showInputError(formElement, formInput, errorMessage) {
        const errorElement = this._form.querySelector(`.${formInput.id}-error`);
        formInput.classList.add(this._inputError );
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorVisibility);
    };

    _hideInputError(formElement, formInput, config) {
        const errorElement = this._form.querySelector(`.${formInput.id}-error`);
        formInput.classList.remove(config.inputError);
        errorElement.classList.remove(config.errorVisibility);
        errorElement.textContent = '';
    };

    _hasInvalidInput = (inputList) => {
        return inputList.some((formInput) => {
            return !formInput.validity.valid;
        })
    };

    _isValid(formElement, formInput, config) {
        if (!formInput.validity.valid) {
            this._showInputError(this._form, formInput, formInput.validationMessage);
        } else {
            this._hideInputError(this._form, formInput, config);
        }
    };

    _toggleButtonState = (inputList, buttonElement, config) => {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(config.inactiveButton);
            buttonElement.setAttribute('disabled', true);
        } else {
            buttonElement.classList.remove(config.inactiveButton);
            buttonElement.removeAttribute('disabled');
        }
    };

    _setEventListeners(formElement, config) {
        const inputList = Array.from(this._form.querySelectorAll(config.inputElement));
        const buttonElement = this._form.querySelector(config.submitButton);
        this._toggleButtonState(inputList, buttonElement, config);
        inputList.forEach((formInput) => {
            formInput.addEventListener('input', () => {
                this._isValid(this._form, formInput, config);
                this._toggleButtonState(inputList, buttonElement, config);
            });
        });
    };

    enableValidation(config) {
        const formList = Array.from(document.querySelectorAll(config.formElement));
        formList.forEach((formElement) => {
            this._setEventListeners(this._form, config);
        });
    };
}