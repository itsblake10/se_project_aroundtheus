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
    this._formEl = formEl.querySelector(".modal__form");
    this._inputEl = formEl.querySelector(".modal__input");
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
  }

  /* --------------------------- Set Event Listeners -------------------------- */
  _setEventListeners() {
    this._inputEls = Array.from(this._formEl.querySelectorAll(".modal__input"));
    this._submitButton = this._formEl.querySelector(this._submitButtonSelector);
    console.log(this._formEl);
    this._inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
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
      this._submitButton.classList.add("modal__submit-button_disabled");
      return (this._submitButton.disabled = true);
    }

    this._submitButton.classList.remove("modal__submit-button_disabled");
    this._submitButton.disabled = false;
  }

  /* ---------------------------- Enable/Reset Validation --------------------------- */

  enableValidation() {
    this._formEls = Array.from(document.querySelectorAll(".modal__form"));
    this._formEls.forEach((formEl) => {
      this._setEventListeners(this._formEl);
      formEl.addEventListener("submit", (e) => {
        e.preventDefault();
      });
    });
  }

  //resetValidation() {
  //this._inputEls.forEach((inputEl) => {
  //this._hideInputError(inputEl);
  //});

  //this._toggleButtonState();
  //}
}

export default FormValidator;
