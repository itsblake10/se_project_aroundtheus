import Popup from "./Popup";

export default class PopupConfirm extends Popup {
  constructor(modalSelector) {
    super(modalSelector);
    this._confirmDeleteButton = this._modal.querySelector(
      ".modal-confirm__submit-button"
    );
  }

  handleConfirm(action) {
    this._handleConfirmDelete = action;
  }

  setEventListeners() {
    this._confirmDeleteButton.addEventListener("click", () => {
      this._handleConfirmDelete();
      this.closePopup();
    });

    super.setEventListeners();
  }
}
