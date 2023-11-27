import Popup from "./Popup";

export default class PopupConfirm extends Popup {
  constructor(modalSelector) {
    super(modalSelector);
    this._confirmDeleteButton = this._modal.querySelector(
      ".modal-confirm__submit-button"
    );
    this._submitButton = this._modal.querySelector(".modal__submit-button");
    this._submitButtonText = this._submitButton.textContent;
  }

  handleConfirm(action) {
    this._handleConfirmDelete = action;
  }

  handleButtonLoading(isLoading, loadingText = "Saving...") {
    if (isLoading) {
      this._submitButton.textContent = loadingText;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }

  setEventListeners() {
    this._confirmDeleteButton.addEventListener("click", () => {
      this._handleConfirmDelete();
    });

    super.setEventListeners();
  }
}
