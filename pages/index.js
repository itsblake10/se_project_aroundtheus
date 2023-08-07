import Card from "../components/card.js";

import FormValidator from "../components/formvalidator.js";

import { openPopup, closePopup, validationConfig } from "../utils/utils.js";

const cardData = [
  {
    name: "Yosmite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  ELEMENTS                                  */
/* -------------------------------------------------------------------------- */

/* ------------------------------ EDIT PROFILE ------------------------------ */

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const modalEditCloseButton = document.querySelector("#modal-edit-close-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = document.querySelector("#modal-edit-form");

/* -------------------------------- ADD CARD -------------------------------- */

const modalAddCloseButton = document.querySelector("#modal-add-close-button");
const profileAddModal = document.querySelector("#profile-add-modal");
const profileAddButton = document.querySelector("#profile-add-button");
const profileAddForm = document.querySelector("#modal-add-form");
const cardTitleInput = document.querySelector("#card-title-input");
const cardUrlInput = document.querySelector("#card-url-input");
const addSubmitButton = profileAddModal.querySelector(".modal__submit-button");

/* ------------------------------ PREVIEW CARD ------------------------------ */

export const imageModal = document.querySelector("#image-modal");
const modalImageCloseButton = document.querySelector(
  "#modal-image-close-button"
);

/* ----------------------------------- CARDS ---------------------------------- */

const galleryListEl = document.querySelector(".gallery__cards");

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
  renderCard({ name, link }, galleryListEl);
  profileAddForm.reset();

  addSubmitButton.classList.add("modal__submit-button_disabled");
  addSubmitButton.disabled = true;

  closePopup(profileAddModal);
}

/* ------------------------------- RENDER CARD ------------------------------ */

cardData.forEach((cardData) => {
  renderCard(cardData);
});

function renderCard(cardData) {
  const card = new Card(cardData, "#card-template");

  const cardElement = card.getTemplate();

  galleryListEl.prepend(cardElement);
}

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

/* -------------------------------------------------------------------------- */
/*                               EVENT LISTENERS                              */
/* -------------------------------------------------------------------------- */

/* ------------------------------ EDIT PROFILE ------------------------------ */

profileEditButton.addEventListener("click", () => {
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

/* -------------------------------- ADD CARD -------------------------------- */

modalAddCloseButton.addEventListener("click", () => {
  closePopup(profileAddModal);
});

profileAddButton.addEventListener("click", () => openPopup(profileAddModal));

profileAddModal.addEventListener("mousedown", function (event) {
  if (event.target.matches("#profile-add-modal")) {
    closePopup(profileAddModal);
  }
});

profileAddForm.addEventListener("submit", handleProfileAddSubmit);

/* -------------------------------- PREVIEW IMAGE -------------------------------- */
modalImageCloseButton.addEventListener("click", () => closePopup(imageModal));

imageModal.addEventListener("mousedown", function (event) {
  if (event.target.matches("#image-modal")) {
    closePopup(imageModal);
  }
});
