export default class Popup {
  constructor(modalSelector) {
    this._modal = document.querySelector(modalSelector);
    this._closeButton = this._modal.querySelector(".modal__close-button");
  }

  openPopup() {
    this._modal.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  closePopup() {
    this._modal.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.closePopup();
    }
  };

  setEventListeners() {
    this._modal.addEventListener("mousedown", (event) => {
      if (event.target === this._modal) {
        this.closePopup();
      }
    });

    this._closeButton.addEventListener("click", () => {
      this.closePopup();
    });
  }
}
