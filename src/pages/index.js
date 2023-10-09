/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
import "../pages/index.css";

/* --------------------------------- #CLASSES# -------------------------------- */
import Section from "../components/Section.js";
import Card from "../components/card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/userInfo.js";

/* -------------------------------- #VARIABLES# ------------------------------- */

/* ---------------------------------- UTILS --------------------------------- */
import { validationConfig } from "../utils/utils.js";

/* ---------------------------------- DATA ---------------------------------- */
import { cardData } from "../components/Constants.js";

/* ------------------------------ EDIT PROFILE ------------------------------ */
import {
  profileEditButton,
  profileEditModal,
  modalEditCloseButton,
  profileTitle,
  profileDescription,
  profileTitleInput,
  profileDescriptionInput,
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
import { modalImageCloseButton } from "../components/Constants.js";

/* ----------------------------------- GRID/CARDS ---------------------------------- */
import { galleryListEl } from "../components/Constants.js";

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

/* --------------------------------- SECTION -------------------------------- */
const homeSection = new Section(
  {
    items: cardData,
    renderer: (items) => {
      const newCard = new Card("#card-template", items, handleCardClick);
      const cardElement = newCard.getTemplate();
      homeSection.addItem(cardElement);
    },
  },
  ".gallery__cards"
);

homeSection.renderItems();

/* ------------------------------- RENDER CARD ------------------------------ */
cardData.forEach((item) => {
  renderer(item);
});

function renderer(cardData) {
  const newCard = new Card("#card-template", cardData, handleCardClick);

  const cardElement = newCard.getTemplate();

  homeSection.addItem(cardElement);
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

/* -------------------------------- USER INFO ------------------------------- */
const userProfile = new UserInfo(profileTitle, profileDescription);

/* --------------------------------- #MODALS# --------------------------------- */

/* ------------------------------- EDIT MODAL ------------------------------- */
const editProfileModal = new PopupWithForm(
  "#profile-edit-modal",
  (inputValues) => {
    userProfile.setUserInfo({
      userTitle: inputValues.name,
      userDescription: inputValues.description,
    });
  }
);

editProfileModal.setEventListeners();

profileEditButton.addEventListener("click", () => {
  editProfileModal.openPopup();
});

modalEditCloseButton.addEventListener("click", () => {
  editProfileModal.closePopup();
});

/* -------------------------------- ADD MODAL ------------------------------- */
const addProfileModal = new PopupWithForm(
  "#profile-add-modal",
  (inputValues) => {
    const newCardData = { name: inputValues.name, link: inputValues.link };
    const newCard = new Card("#card-template", newCardData, handleCardClick);
    const cardElement = newCard.getTemplate();
    homeSection.addItem(cardElement);
  }
);

addProfileModal.setEventListeners();

profileAddButton.addEventListener("click", () => {
  addProfileModal.openPopup();
});

modalAddCloseButton.addEventListener("click", () => {
  addProfileModal.closePopup();
});

/* ------------------------------- IMAGE MODAL ------------------------------ */
const imagePreviewModal = new PopupWithImage("#image-modal");

function handleCardClick(name, link) {
  imagePreviewModal.openPopup(name, link);
}

modalImageCloseButton.addEventListener("click", () => {
  imagePreviewModal.closePopup();
});

/* ------------------------------------ # ----------------------------------- */

/*profileEditModal.addEventListener("mousedown", function (event) {
  if (event.target.matches("#profile-edit-modal")) {
    closePopup(profileEditModal);
  }
});*/

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
