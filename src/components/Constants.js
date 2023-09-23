/* -------------------------------------------------------------------------- */
/*                                    DATA                                    */
/* -------------------------------------------------------------------------- */
export const cardData = [
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
/*                             ELEMENTS/VARIABLES                             */
/* -------------------------------------------------------------------------- */

/* ------------------------------ EDIT PROFILE ------------------------------ */
export const profileEditButton = document.querySelector("#profile-edit-button");
export const profileEditModal = document.querySelector("#profile-edit-modal");
export const modalEditCloseButton = document.querySelector(
  "#modal-edit-close-button"
);
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const profileTitleInput = document.querySelector("#profile-title-input");
export const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
export const profileEditForm = document.querySelector("#modal-edit-form");

/* -------------------------------- ADD CARD -------------------------------- */

export const modalAddCloseButton = document.querySelector(
  "#modal-add-close-button"
);

export const profileAddModal = document.querySelector("#profile-add-modal");
export const profileAddButton = document.querySelector("#profile-add-button");
export const profileAddForm = document.querySelector("#modal-add-form");
export const cardTitleInput = document.querySelector("#card-title-input");
export const cardUrlInput = document.querySelector("#card-url-input");

/* ------------------------------ PREVIEW CARD ------------------------------ */

export const imageModal = document.querySelector("#image-modal");
export const modalImageCloseButton = document.querySelector(
  "#modal-image-close-button"
);

/* ----------------------------------- CARDS ---------------------------------- */

export const galleryListEl = document.querySelector(".gallery__cards");
