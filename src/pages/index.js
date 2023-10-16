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
import UserInfo from "../components/UserInfo.js";

/* -------------------------------- #VARIABLES# ------------------------------- */

/* ---------------------------------- UTILS --------------------------------- */
import { validationConfig } from "../utils/utils.js";

/* ---------------------------------- DATA ---------------------------------- */
import { cardData } from "../utils/Constants.js";

/* ------------------------------ EDIT PROFILE ------------------------------ */
import {
  profileEditButton,
  profileEditModal,
  closeButton,
  profileTitle,
  profileDescription,
  profileTitleInput,
  profileDescriptionInput,
} from "../utils/Constants.js";

/* -------------------------------- ADD CARD -------------------------------- */
import {
  modalAddCloseButton,
  profileAddModal,
  profileAddButton,
  profileAddForm,
  cardTitleInput,
  cardUrlInput,
} from "../utils/Constants.js";

/* ------------------------------ PREVIEW CARD ------------------------------ */
import { modalImageCloseButton } from "../utils/Constants.js";

/* ----------------------------------- GRID/CARDS ---------------------------------- */
import { galleryListEl } from "../utils/Constants.js";

/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */
function createCard(items) {
  const newCard = new Card("#card-template", items, handleCardClick);
  const cardElement = newCard.getTemplate();
  return cardElement;
}

/* -------------------------------------------------------------------------- */
/*                            INSTANTIATING CLASSES                           */
/* -------------------------------------------------------------------------- */

/* --------------------------------- SECTION -------------------------------- */
const homeSection = new Section(
  {
    items: cardData,
    renderer: (items) => {
      const cardElement = createCard(items);
      homeSection.addItem(cardElement);
    },
  },
  ".gallery__cards"
);

homeSection.renderItems();

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
  const userInfo = userProfile.getUserInfo();
  profileTitleInput.value = userInfo.userTitle;
  profileDescriptionInput.value = userInfo.userDescription;
  editProfileFormValidator.toggleButtonState();

  editProfileModal.openPopup();
});

/* -------------------------------- ADD MODAL ------------------------------- */
const addProfileModal = new PopupWithForm(
  "#profile-add-modal",
  (inputValues) => {
    const newCardData = { name: inputValues.title, link: inputValues.link };
    const cardElement = createCard(newCardData);
    homeSection.addItem(cardElement);
  }
);

profileAddButton.addEventListener("click", () => {
  addProfileModal.openPopup();
});

addProfileModal.setEventListeners();

/* ------------------------------- IMAGE MODAL ------------------------------ */
const imagePreviewModal = new PopupWithImage("#image-modal");

function handleCardClick(name, link) {
  imagePreviewModal.openPopup(name, link);
}

imagePreviewModal.setEventListeners();

/* ------------------------------------ # ----------------------------------- */
