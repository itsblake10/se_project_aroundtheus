/* ---------------------------- OPEN/CLOSE POPUP ---------------------------- */

function openPopup(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeWithEsc);
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeWithEsc);
}

/* --------------------------- CLOSE WITH ESC KEY --------------------------- */

const openedPopup = document.querySelector(".modal_opened");

function closeWithEsc(evt) {
  if (evt.key === "Escape") {
    closePopup(openedPopup);
  }
}

export { openPopup, closePopup };

export { closeWithEsc, openedPopup };
