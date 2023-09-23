export default class Popup {
  constructor(modalSelector) {
    this._modal = document.querySelector(modalSelector);
  }

  setEventListeners() {
    this._modal
      .querySelector(".modal__close-button")
      .addEventListener("click", () => {
        this.closePopup();
      });

    this._modal
      .querySelector(".modal")
      .addEventListener("mousedown", (event) => {
        if (event.target.matches(this._modal)) {
          this.closePopup();
        }
      });
  }

  openPopup() {
    this._modal.classList.add("modal_opened");
    document.addEventListener("keydown", closeWithEsc);
  }

  closePopup() {
    this._modal.classList.remove("modal_opened");
    document.removeEventListener("keydown", closeWithEsc);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector(".modal_opened");
      closePopup(openedPopup);
    }
  }
}
