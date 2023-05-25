const initialCards = [
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

///*ELEMENTS*///

//*EDIT*//
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
const galleryListEl = document.querySelector(".gallery__cards");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

//*ADD*//
const modalAddCloseButton = document.querySelector("#modal-add-close-button");
const profileAddModal = document.querySelector("#profile-add-modal");
const profileAddButton = document.querySelector("#profile-add-button");
const profileAddForm = document.querySelector("#modal-add-form");

///*FUNCTIONS*///

//*OPEN AND CLOSE*//
function openPopup(modal) {
  modal.classList.add("modal_opened");
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

//*BUTTONS*//

/*EDIT*/
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

/*ADD####*/
/*function handleProfileAddSubmit(e) {
  e.preventDefault();
  const cardElement = 
  closePopup(profileAddModal);
}*/

//*CARDS*//
function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);

  const galleryTitleEl = cardElement.querySelector(".gallery__title");
  const galleryImageEl = cardElement.querySelector(".gallery__image");

  galleryTitleEl.textContent = cardData.name;
  galleryImageEl.src = cardData.link;
  galleryImageEl.alt = cardData.name;

  return cardElement;
}

///*EVENT LISTENERS*///

//*EDIT*//
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;

  profileEditModal.classList.add("modal_opened");
});

modalEditCloseButton.addEventListener("click", () =>
  closePopup(profileEditModal)
);
profileEditButton.addEventListener("click", () => openPopup(profileEditModal));
profileEditForm.addEventListener("submit", handleProfileEditSubmit);

//*ADD*//
modalAddCloseButton.addEventListener("click", () =>
  closePopup(profileAddModal)
);
profileAddButton.addEventListener("click", () => openPopup(profileAddModal));

/*profileEditForm.addEventListener("submit", handleProfileAddSubmit);*/

//*CARDS*//
initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  galleryListEl.append(cardElement);
});
