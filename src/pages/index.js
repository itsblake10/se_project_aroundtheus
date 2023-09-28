/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- CLASSES -------------------------------- */
import Card from "../components/card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

/* ---------------------------------- UTILS --------------------------------- */
import { validationConfig } from "../utils/utils.js";

/* -------------------------------- CARD DATA ------------------------------- */
import { cardData } from "../components/Constants.js";

/* -------------------------------- VARIABLES ------------------------------- */

/* ------------------------------ EDIT PROFILE ------------------------------ */
import {
  profileEditButton,
  profileEditModal,
  modalEditCloseButton,
  profileTitle,
  profileDescription,
  profileTitleInput,
  profileDescriptionInput,
  profileEditForm,
} from "../components/Constants.js";

/* -------------------------------- ADD CARD -------------------------------- */
import {
  modalAddCloseButton,
  profileAddModal,
  profileAddButton,
  profileAddForm,
  cardTitleInput,
  cardUrlInput,
} from "../components/Constants.js";

/* ------------------------------ PREVIEW CARD ------------------------------ */
import { imageModal, modalImageCloseButton } from "../components/Constants.js";

/* ----------------------------------- CARDS ---------------------------------- */
import { galleryListEl } from "../components/Constants.js";

import "../pages/index.css";

/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */

/* --------------------------------- FORM BUTTONS -------------------------------- */

/* EDIT PROFILE */
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

/* ADD CARD */
function handleProfileAddSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderer({ name, link }, galleryListEl);
  profileAddForm.reset();
  addProfileFormValidator.toggleButtonState();

  closePopup(profileAddModal);
}

/* -------------------------------------------------------------------------- */
/*                            INSTANTIATING CLASSES                           */
/* -------------------------------------------------------------------------- */

/* ------------------------------- RENDER CARD ------------------------------ */

cardData.forEach((cardData) => {
  renderer(cardData);
});

function renderer(cardData) {
  const card = new Card(cardData, "#card-template");

  const cardElement = card.getTemplate();

  galleryListEl.prepend(cardElement);
}

/* ----------------------------- FORM VALIDATOR ----------------------------- */

const editProfileFormValidator = new FormValidator(
  validationConfig,
  profileEditModal
);

editProfileFormValidator.enableValidation();

const addProfileFormValidator = new FormValidator(
  validationConfig,
  profileAddModal
);

addProfileFormValidator.enableValidation();

/* --------------------------------- MODALS --------------------------------- */

const editProfileModal = new PopupWithForm("#profile-edit-modal");

const addProfileModal = new PopupWithForm("#profile-add-modal");

//const imageModal = new PopupWithImage("#image-modal");

/*                               EVENT LISTENERS                              */

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

/* ------------------------------ EDIT PROFILE ------------------------------ */

/*profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;

  openPopup(profileEditModal);
});

modalEditCloseButton.addEventListener("click", () =>
  closePopup(profileEditModal)
);

profileEditModal.addEventListener("mousedown", function (event) {
  if (event.target.matches("#profile-edit-modal")) {
    closePopup(profileEditModal);
  }
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
*/

/* -------------------------------- ADD CARD -------------------------------- */

/*modalAddCloseButton.addEventListener("click", () => {
  closePopup(profileAddModal);
});

profileAddButton.addEventListener("click", () => {
  openPopup(profileAddModal);
});

profileAddModal.addEventListener("mousedown", function (event) {
  if (event.target.matches("#profile-add-modal")) {
    closePopup(profileAddModal);
  }
});

profileAddForm.addEventListener("submit", handleProfileAddSubmit);
*/

/* -------------------------------- PREVIEW IMAGE -------------------------------- */
/*modalImageCloseButton.addEventListener("click", () => closePopup(imageModal));

imageModal.addEventListener("mousedown", function (event) {
  if (event.target.matches("#image-modal")) {
    closePopup(imageModal);
  }
});*/
