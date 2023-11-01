/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
import "../pages/index.css";

/* --------------------------------- #CLASSES# -------------------------------- */
import Section from "../components/Section.js";
import Card from "../components/card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupConfirm from "../components/PopupConfirm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

/* -------------------------------- #VARIABLES# ------------------------------- */

/* ---------------------------------- UTILS --------------------------------- */
import { validationConfig } from "../utils/utils.js";

/* ---------------------------------- DATA ---------------------------------- */
import { cardData } from "../utils/Constants.js";

/* ------------------------------ EDIT PROFILE ------------------------------ */
import {
  profileEditButton,
  profileEditModal,
  profileTitle,
  profileDescription,
  profileTitleInput,
  profileDescriptionInput,
  profilePicture,
} from "../utils/Constants.js";

/* -------------------------------- ADD CARD -------------------------------- */
import { profileAddModal, profileAddButton } from "../utils/Constants.js";

/* ------------------------------ PREVIEW CARD ------------------------------ */
//import { modalImageCloseButton } from "../utils/Constants.js";

/* ------------------------- CHANGE PROFILE PICTURE ------------------------- */
import {
  profilePictureModal,
  profileEditPictureButton,
} from "../utils/Constants.js";

/* ----------------------------------- GRID/CARDS ---------------------------------- */
import { cardDeleteButton, confirmDeleteButton } from "../utils/Constants.js";

/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */
const confirmPopup = new PopupConfirm("#confirm-modal");

confirmPopup.setEventListeners();

//function handleCardDelete(card) {
//confirmPopup.openPopup();
//}

// function handleConfirmDelete(card) {
//   card.deleteCard();
// }

function createCard(items) {
  const newCard = new Card("#card-template", items, handleCardClick, function (
    card
  ) {
    confirmPopup.openPopup();
    confirmPopup.handleConfirm(function () {
      card.deleteCard();
    });
  });
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

const changeProfilePictureFormValidator = new FormValidator(
  validationConfig,
  profilePictureModal
);

changeProfilePictureFormValidator.enableValidation();

/* -------------------------------- USER INFO ------------------------------- */
const userProfile = new UserInfo(profileTitle, profileDescription);

/* --------------------------------- #MODALS# --------------------------------- */

/* ------------------------------- EDIT PROFILE MODAL------------------------------- */
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

/* -------------------------------- ADD CARD MODAL ------------------------------- */
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

/* ------------------------------- IMAGE PREVIEW MODAL ------------------------------ */
const imagePreviewModal = new PopupWithImage("#image-modal");

function handleCardClick(name, link) {
  imagePreviewModal.openPopup(name, link);
}

imagePreviewModal.setEventListeners();

/* ----------------------- EDIT PROFILE PICTURE MODAL ----------------------- */
const editProfilePictureModal = new PopupWithForm(
  "#profile-picture-modal",
  (inputValues) => {
    const newProfilePicture = { link: inputValues.link };
    profilePicture.src = newProfilePicture.link;
  }
);

editProfilePictureModal.setEventListeners();

profileEditPictureButton.addEventListener("click", () => {
  changeProfilePictureFormValidator.toggleButtonState();
  editProfilePictureModal.openPopup();
});

/* -------------------------- COMFIRM DELETE MODAL -------------------------- */
//const confirmPopup = new PopupConfirm("#confirm-modal", handleConfirmDelete);

//confirmPopup.setEventListeners();

//function handleCardDelete() {
//confirmPopup.openPopup();
//}

//function handleConfirmDelete(card) {
//card.remove();
//card = null;
//}

/* ------------------------------------ x ----------------------------------- */

// 74d9af6b-378b-4926-b030-13bc7ddfd7d9

fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
  method: "GET",
  headers: {
    authorization: "74d9af6b-378b-4926-b030-13bc7ddfd7d9",
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const newApi = new Api("https://around-api.en.tripleten-services.com/v1");

newApi.getInitialCards();
