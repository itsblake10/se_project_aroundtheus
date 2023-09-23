/* ---------------------------------- DATA ---------------------------------- */
const validationConfig = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-button",
  inactiveButtonClass: "modal__submit-button_disabled",
  inputErrorClass: "modal__error_visible",
  errorClass: "modal__error",
};

/* ---------------------------- OPEN/CLOSE POPUP ---------------------------- */

/*function openPopup(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeWithEsc);
}*/

/*
function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeWithEsc);
}
*/

/* --------------------------- CLOSE WITH ESC KEY --------------------------- */

/*
function closeWithEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".modal_opened");
    closePopup(openedPopup);
  }
}
*/

export { validationConfig };
