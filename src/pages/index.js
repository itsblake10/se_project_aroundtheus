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

/* ---------------------------------- Modal --------------------------------- */
import { submitButton } from "../utils/Constants.js";

/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */

const newApi = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com",
  headers: {
    authorization: "177c16b7-240f-4206-a2e5-5bd359c96b1d",
    "Content-Type": "application/json",
  },
});

const confirmPopup = new PopupConfirm("#confirm-modal");

confirmPopup.setEventListeners();

function createCard(items) {
  const card = new Card(
    "#card-template",
    items,
    handleCardClick,
    function (card) {
      confirmPopup.openPopup();
      confirmPopup.handleConfirm(function () {
        confirmPopup.handleButtonLoading();
        const cardId = items._id;
        newApi
          .deleteApiCard(cardId)
          .then(card)
          .then(() => {
            card.deleteCard();
            confirmPopup.closePopup(); //this in a different then() block??//
          })
          .catch((error) => {
            console.error("An error occured:", error);
            return Promise.reject(error);
          });
      });
    },
    function (card) {
      const cardId = items._id;
      if (items.isLiked === false) {
        newApi
          .addLike(cardId)
          .then(card)
          .then(() => {
            card.toggleLike();
            items.isLiked = true;
          })
          .catch((error) => {
            console.error("An error occured:", error);
            return Promise.reject(error);
          });
      } else {
        newApi
          .removeLike(cardId)
          .then(card)
          .then(() => {
            card.toggleLike();
            items.isLiked = false;
          })
          .catch((error) => {
            console.error("An error occured:", error);
            return Promise.reject(error);
          });
      }
    }
  );

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

newApi
  .getInitialCards()
  .then((data) => {
    homeSection.renderItems(data.reverse());
  })
  .catch((error) => {
    console.error("An error occured:", error);
    return Promise.reject(error);
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
// function buttonLoading() {
//   submitButton.textContent = "Saving...";
//   setTimeout(() => {
//     submitButton.textContent = "Save";
//   }, 1000);
// }

/* ------------------------------- EDIT PROFILE MODAL------------------------------- */
const editProfileModal = new PopupWithForm(
  "#profile-edit-modal",
  (inputValues) => {
    editProfileModal.handleButtonLoading();
    newApi
      .editProfile(inputValues.name, inputValues.description)
      .then((newProfileData) => {
        userProfile.setUserInfo({
          userTitle: newProfileData.name,
          userDescription: newProfileData.about,
        });
        editProfileModal.closePopup();
      })
      .catch((error) => {
        console.error("An error occured:", error);
        return Promise.reject(error);
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

newApi
  .getProfileData()
  .then((data) => {
    profileTitle.textContent = data.name;
    profileDescription.textContent = data.about;
    profilePicture.src = data.avatar;
  })
  .catch((error) => {
    console.error("An error occured:", error);
    return Promise.reject(error);
  });

/* -------------------------------- ADD CARD MODAL ------------------------------- */
const addProfileModal = new PopupWithForm(
  "#profile-add-modal",
  (inputValues) => {
    addProfileModal.handleButtonLoading();
    newApi
      .createNewCard(inputValues.title, inputValues.link)
      .then((newCardData) => {
        const cardElement = createCard(newCardData);
        homeSection.addItem(cardElement);
        addProfileModal.closePopup();
      })
      .catch((error) => {
        console.error("An error occured:", error);
        return Promise.reject(error);
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
    editProfilePictureModal.handleButtonLoading();
    newApi
      .editProfilePic(inputValues.link)
      .then((data) => {
        profilePicture.src = data.avatar;
        editProfilePictureModal.closePopup();
      })
      .catch((error) => {
        console.error("An error occured:", error);
        return Promise.reject(error);
      });
  }
);

editProfilePictureModal.setEventListeners();

profileEditPictureButton.addEventListener("click", () => {
  changeProfilePictureFormValidator.toggleButtonState();
  editProfilePictureModal.openPopup();
});

/* ------------------------------------ X ----------------------------------- */
