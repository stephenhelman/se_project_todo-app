class FormValidator {
  constructor(config) {
    this._inputSelector = config.inputSelector;
    this._errorClass = config.errorClass;
    this._inputErrorClass = config.inputErrorClass;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._formSelector = config.formSelector;
    this._submitButtonSelector = config.submitButtonSelector;
  }

  _getErrorElement() {
    const errorElementId = `#${this._inputElement.id}-error`;
    this._errorElement = this._formElement.querySelector(errorElementId);
  }

  _showInputError() {
    this._getErrorElement();
    this._inputElement.classList.add(this._inputErrorClass);
    this._errorElement.textContent = this._inputElement.validationMessage;
    this._errorElement.classList.add(this._errorClass);
  }

  _hideInputError() {
    this._getErrorElement;
    this._inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._errorClass);
    this._errorElement.textContent = "";
  }

  _checkInputValidity() {
    if (!this._inputElement.validity.valid) {
      this._showInputError();
    } else {
      this._hideInputError();
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _disableSubmitButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  _enableSubmitButton() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  }

  _setEventListeners = () => {
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._submitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", (e) => {
        this._inputElement = e.target;
        this._checkInputValidity();
        this._toggleButtonState();
      });
    });
  };

  enableValidation() {
    this._formElement = document.querySelector(this._formSelector);
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }

  resetValidation() {
    this._formElement.reset();
    this._disableSubmitButton();
  }
}

export default FormValidator;
