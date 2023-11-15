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
import PopupConfirm from "../components/PopupConfirm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

/* -------------------------------- #VARIABLES# ------------------------------- */

/* ---------------------------------- UTILS --------------------------------- */
import { validationConfig } from "../utils/utils.js";

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

const apiUrl = "https://around-api.en.tripleten-services.com";

const newApi = new Api(apiUrl);

const confirmPopup = new PopupConfirm("#confirm-modal");

confirmPopup.setEventListeners();

function createCard(items) {
  const card = new Card("#card-template", items, handleCardClick, function (
    card
  ) {
    confirmPopup.openPopup();
    confirmPopup.handleConfirm(function () {
      const cardId = items._id;
      newApi.deleteApiCard(cardId).then(card);
      card.deleteCard();
    });
  });

  const cardElement = card.getTemplate();

  return cardElement;
}

/* -------------------------------------------------------------------------- */
/*                            INSTANTIATING CLASSES                           */
/* -------------------------------------------------------------------------- */

/* --------------------------------- SECTION -------------------------------- */
const homeSection = new Section(
  {
    renderer: (items) => {
      const cardElement = createCard(items);
      homeSection.addItem(cardElement);
    },
  },
  ".gallery__cards"
);

newApi.getInitialCards().then((data) => {
  homeSection.renderItems(data.reverse());
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
    newApi
      .editProfile(inputValues.name, inputValues.description)
      .then((newProfileData) => {
        userProfile.setUserInfo({
          userTitle: newProfileData.name,
          userDescription: newProfileData.about,
        });
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

newApi.getProfileData().then((data) => {
  profileTitle.textContent = data.name;
  profileDescription.textContent = data.about;
  profilePicture.src = data.avatar;
});

/* -------------------------------- ADD CARD MODAL ------------------------------- */
const addProfileModal = new PopupWithForm(
  "#profile-add-modal",
  (inputValues) => {
    newApi
      .createNewCard(inputValues.title, inputValues.link)
      .then((newCardData) => {
        const cardElement = createCard(newCardData);
        homeSection.addItem(cardElement);
      });
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
    newApi.editProfilePic(inputValues.link).then((data) => {
      profilePicture.src = data.avatar;
    });
  }
);

editProfilePictureModal.setEventListeners();

profileEditPictureButton.addEventListener("click", () => {
  changeProfilePictureFormValidator.toggleButtonState();
  editProfilePictureModal.openPopup();
});

/* ------------------------------------ X ----------------------------------- */
