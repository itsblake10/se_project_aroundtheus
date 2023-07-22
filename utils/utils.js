/* ---------------------------- OPEN/CLOSE POPUP ---------------------------- */
export { openPopup, closePopup };

function openPopup(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeWithEsc);
  document.addEventListener("click");
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeWithEsc);
}

/* --------------------------- CLOSE WITH ESC KEY --------------------------- */
export { closeWithEsc, openedPopup };

const openedPopup = document.querySelector(".modal_opened");

function closeWithEsc(evt) {
  if (evt.key === "Escape") {
    closePopup(openedPopup);
  }
}
