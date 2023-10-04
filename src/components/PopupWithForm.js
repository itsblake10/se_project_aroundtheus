import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(modalSelector, handleFormSubmit) {
    super(modalSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formEl = this._modal.querySelector(".modal__form");
    this._inputEls = this._formEl.querySelectorAll(".modal__input");
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

    this.profileEditButton.addEventListener("click", () => {});
  }
}

//function handleProfileEditSubmit(e) {
//e.preventDefault();
//profileTitle.textContent = profileTitleInput.value;
//profileDescription.textContent = profileDescriptionInput.value;
//closePopup(profileEditModal);
//}

/* ADD CARD */
//function handleProfileAddSubmit(e) {
//e.preventDefault();
//const name = cardTitleInput.value;
//const link = cardUrlInput.value;
//renderer({ name, link }, galleryListEl);
//profileAddForm.reset();
//addProfileFormValidator.toggleButtonState();
//
//closePopup(profileAddModal);
//}
