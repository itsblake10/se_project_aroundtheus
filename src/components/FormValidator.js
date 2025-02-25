// const validationConfig = {
//   formSelector: ".modal__form",
//   inputSelector: ".modal__input",
//   submitButtonSelector: ".modal__submit-button",
//   inactiveButtonClass: "modal__submit-button_disabled",
//   inputErrorClass: "modal__input_type_error",
//   errorClass: "modal__error",
// };

class FormValidator {
  constructor(validationConfig, formEl) {
    this._formEl = formEl;
    this._inputEl = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
  }

  /* --------------------------- Set Event Listeners -------------------------- */
  _setEventListeners() {
    this._inputEls = Array.from(this._formEl.querySelectorAll(this._inputEl));
    this._submitButton = this._formEl.querySelector(this._submitButtonSelector);
    this._inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", () => {
        this._checkInputValidity(inputEl);
        this.toggleButtonState();
      });
    });
  }

  /* ------------------------------- Show Error ------------------------------- */

  _showInputError(inputEl) {
    const errorMessageEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this._inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(this._errorClass);
  }

  /* ------------------------------- Hide Error ------------------------------- */

  _hideInputError(inputEl) {
    const errorMessageEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(this._inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(this._errorClass);
  }

  /* ----------------------------- Check Validity ----------------------------- */

  _checkInputValidity(inputEl, validationConfig) {
    if (!inputEl.validity.valid) {
      return this._showInputError(inputEl);
    }

    this._hideInputError(inputEl, validationConfig);
  }

  /* ---------------------- Toggle Submit Button Inactive/Active --------------------- */

  toggleButtonState() {
    let foundInvalid = false;
    this._inputEls.forEach((inputEl) => {
      if (!inputEl.validity.valid) {
        foundInvalid = true;
      }
    });

    if (foundInvalid) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      return (this._submitButton.disabled = true);
    }

    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  /* ---------------------------- Enable/Reset Validation --------------------------- */

  enableValidation() {
    this._setEventListeners();
    this._formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }
}

export default FormValidator;
