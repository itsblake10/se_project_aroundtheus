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
function renderer(cardData) {
  const newCard = new Card("#card-template", cardData, handleCardClick);

  const cardElement = newCard.getTemplate();

  homeSection.addItem(cardElement);
}

cardData.forEach((item) => {
  renderer(item);
});

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

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  editProfileFormValidator.toggleButtonState();

  editProfileModal.openPopup();
});

modalEditCloseButton.addEventListener("click", () => {
  editProfileModal.closePopup();
});

editProfileModal.setEventListeners();

/* -------------------------------- ADD MODAL ------------------------------- */
const addProfileModal = new PopupWithForm(
  "#profile-add-modal",
  (inputValues) => {
    console.log(inputValues);
    const newCardData = { name: inputValues.title, link: inputValues.link };
    console.log(inputValues);
    const newCard = new Card("#card-template", newCardData, handleCardClick);
    const cardElement = newCard.getTemplate();
    homeSection.addItem(cardElement);
  }
);

profileAddButton.addEventListener("click", () => {
  addProfileModal.openPopup();
});

modalAddCloseButton.addEventListener("click", () => {
  addProfileModal.closePopup();
});

addProfileModal.setEventListeners();

/* ------------------------------- IMAGE MODAL ------------------------------ */
const imagePreviewModal = new PopupWithImage("#image-modal");

function handleCardClick(name, link) {
  imagePreviewModal.openPopup(name, link);
}

modalImageCloseButton.addEventListener("click", () => {
  imagePreviewModal.closePopup();
});

imagePreviewModal.setEventListeners();

/* ------------------------------------ # ----------------------------------- */
