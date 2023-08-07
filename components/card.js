import { openPopup } from "../utils/utils.js";
import { imageModal } from "../pages/index.js";

export default class Card {
  constructor(cardData, cardSelector) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".gallery__like-button")
      .addEventListener("click", () => {
        this._handleLikeButton();
      });

    this._cardElement
      .querySelector(".gallery__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteButton();
      });

    this._cardElement
      .querySelector(".gallery__image")
      .addEventListener("click", () => {
        document.querySelector(".modal__image-preview").src = this._link;
        document.querySelector(".modal__image-preview").alt = this._name;
        document.querySelector(".modal__image-text").textContent = this._name;

        openPopup(imageModal);
      });
  }

  _handleLikeButton() {
    this._cardElement
      .querySelector(".gallery__like-button")
      .classList.toggle("gallery__like-button_active");
  }

  _handleDeleteButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  getTemplate() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".gallery__card")
      .cloneNode(true);

    this._cardElement.querySelector(".gallery__title").textContent = this._name;
    this._cardElement.querySelector(".gallery__image").src = this._link;

    this._setEventListeners();

    return this._cardElement;
  }
}
