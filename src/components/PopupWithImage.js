import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(modalSelector) {
    super(modalSelector);
    this._modalImage = this._modal.querySelector(".modal__image-preview");
    this._modalImageText = this._modal.querySelector(".modal__image-text");
  }

  openPopup(name, link) {
    this._modalImage.src = link;
    this._modalImage.alt = name;
    this._modalImageText.textContent = name;
    super.openPopup();
  }

  setEventListeners() {
    super.setEventListeners();
  }
}
