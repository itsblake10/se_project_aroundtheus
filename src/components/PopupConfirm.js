import Popup from "./Popup";

export default class PopupConfirm extends Popup {
  constructor(modalSelector) {
    super(modalSelector);
    this._confirmDeleteButton = this._modal.querySelector(
      ".modal-confirm__submit-button"
    );
    this._submitButton = this._modal.querySelector(".modal__submit-button");
  }

  handleConfirm(action) {
    this._handleConfirmDelete = action;
  }

  handleButtonLoading() {
    this._submitButton.textContent = "Saving...";
    setTimeout(() => {
      this._submitButton.textContent = "Save";
    }, 1000);
  }

  setEventListeners() {
    this._confirmDeleteButton.addEventListener("click", () => {
      this._handleConfirmDelete();
    });

    super.setEventListeners();
  }
}
