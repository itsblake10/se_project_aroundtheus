import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(modalSelector, handleFormSubmit) {
    super(modalSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formEl = this._modal.querySelector(".modal__form");
    this._inputEls = this._formEl.querySelectorAll(".modal__input");
    this._closeButton = this._modal.querySelector(".modal__close-button");
  }

  closePopup() {
    this._formEl.reset();
    super.closePopup();
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputEls.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });

    return this._inputValues;
  }

  setEventListeners() {
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.closePopup();
    });

    this._closeButton.addEventListener("click", () => {
      this.closePopup();
    });
  }
}
