export default class Card {
  constructor(
    cardSelector,
    items,
    handleCardClick,
    handleCardDelete,
    handleCardLike
  ) {
    this._name = items.name;
    this._link = items.link;
    this._id = items._id;
    this._isLiked = items.isLiked;
    this._cardSelector = cardSelector;
    this.handleCardClick = handleCardClick;
    this.handleCardDelete = handleCardDelete;
    this.handleCardLike = handleCardLike;
  }

  _handleLikeButton() {
    this._cardElement
      .querySelector(".gallery__like-button")
      .classList.toggle("gallery__like-button_active");
  }

  toggleLike() {
    this._handleLikeButton();
  }

  _handleDeleteButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  deleteCard() {
    this._handleDeleteButton();
  }

  getTemplate() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".gallery__card")
      .cloneNode(true);

    this._cardElement.querySelector(".gallery__title").textContent = this._name;
    this._cardElement.querySelector(".gallery__image").src = this._link;
    this._cardElement.querySelector(".gallery__image").alt = this._name;
    this._cardElement.id = this._id;
    console.log(this.items);

    if (this._isLiked) {
      this._cardElement
        .querySelector(".gallery__like-button")
        .classList.add("gallery__like-button_active");
    }

    this._setEventListeners();

    return this._cardElement;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".gallery__like-button")
      .addEventListener("click", () => {
        this.handleCardLike(this);
      });

    this._cardElement
      .querySelector(".gallery__delete-button")
      .addEventListener("click", () => {
        this.handleCardDelete(this);
      });

    this._cardElement
      .querySelector(".gallery__image")
      .addEventListener("click", () => {
        this.handleCardClick(this._name, this._link);
      });
  }
}
