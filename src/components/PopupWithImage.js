import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(modalSelector, cardData) {
    super({ modalSelector });
    this._name = cardData.name;
    this._link = cardData.link;
    this.modalImage = this._modal.querySelector(".modal__image-preview");
    this.modalImageText = this._modal.querySelector(".modal__image-text");
  }

  openPopup() {
    this.modalImage.src = this._link;
    this.modalImageText.textContent = this._name;
  }
}
