export class FormValidator {
    constructor(classes, form){
        this._formElement = classes.formElement;
        this._inputElement = classes.inputElement;
        this._submitButton = classes.submitButton;
        this._inactiveButton = classes.inactiveButton;
        this._inputError = classes.inputError;
        this._errorVisibility = classes.errorVisibility;
        this._form = form;
        this._inputList = Array.from(this._form.querySelectorAll(this._inputElement));
        this._buttonElement = this._form.querySelector(this._submitButton);
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

    _hasInvalidInput = () => {
        return this._inputList.some((formInput) => {
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

    submitButtonInactive() {
        this._buttonElement.classList.add(this._inactiveButton);
        this._buttonElement.setAttribute('disabled', true);
    };

    _submitButtonActive() {
        this._buttonElement.classList.remove(this._inactiveButton);
        this._buttonElement.removeAttribute('disabled');
    };

    _toggleButtonState = () => {
        if (this._hasInvalidInput()) {
            this.submitButtonInactive();
        } else {
            this._submitButtonActive();
        }
    };

    _setEventListeners(formElement, config) {
        this._toggleButtonState(config);
        this._inputList.forEach((formInput) => {
            formInput.addEventListener('input', () => {
                this._isValid(this._form, formInput, config);
                this._toggleButtonState(config);
            });
        });
    };

    enableValidation(config) {
        this._setEventListeners(this._form, config);
    };
}