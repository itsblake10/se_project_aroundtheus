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
/*                                  VARIABLES                                 */
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
export const profilePicture = document.querySelector(".profile__image");
export const profilePictureModal = document.querySelector(
  "#profile-picture-modal"
);
export const profileEditPictureButton = document.querySelector(
  ".profile__edit-image-button"
);

/* -------------------------------- ADD CARD -------------------------------- */

export const closeButton = document.querySelector(".modal__close-button");
export const profileAddModal = document.querySelector("#profile-add-modal");
export const profileAddButton = document.querySelector("#profile-add-button");
export const profileAddForm = document.querySelector("#modal-add-form");
export const cardTitleInput = document.querySelector("#card-title-input");
export const cardUrlInput = document.querySelector("#card-url-input");

/* ------------------------------ PREVIEW CARD ------------------------------ */

export const modalImageCloseButton = document.querySelector(
  "#modal-image-close-button"
);

/* ----------------------------------- GRID/CARDS ---------------------------------- */

export const galleryListEl = document.querySelector(".gallery__cards");
export const cardDeleteButton = document.querySelector(
  ".gallery__delete-button"
);
export const deleteCardModal = document.querySelector("#confirm-modal");
export const confirmDeleteButton = document.querySelector(
  ".modal-confirm__submit-button"
);
export const cardLikeIcon = document.querySelector(".gallery__like-button");

export const modal = document.querySelector(".modal");

export const submitButton = modal.querySelector(".modal__submit-button");
