import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(modalSelector, cardData) {
    super(modalSelector);
    this._name = cardData.name;
    this._link = cardData.link;
    this._modalImage = this._modal.querySelector(".modal__image-preview");
    this._modalImageText = this._modal.querySelector(".modal__image-text");
  }

  openPopup() {
    this._modalImage.src = this._link;
    this._modalImage.alt = this._name;
    this._modalImageText.textContent = this._name;
    super.openPopup();
  }
}
