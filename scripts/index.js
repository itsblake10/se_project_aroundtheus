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

//*EDIT PROFILE*//
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

//*ADD CARD*//
const modalAddCloseButton = document.querySelector("#modal-add-close-button");
const profileAddModal = document.querySelector("#profile-add-modal");
const profileAddButton = document.querySelector("#profile-add-button");
const profileAddForm = document.querySelector("#modal-add-form");
const cardTitleInput = document.querySelector("#card-title-input");
const cardUrlInput = document.querySelector("#card-url-input");

//*CARDS*//
const galleryListEl = document.querySelector(".gallery__cards");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

///*FUNCTIONS*///

//*OPEN AND CLOSE MODAL*//
function openPopup(modal) {
  modal.classList.add("modal_opened");
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

//*BUTTONS*//

/*EDIT PROFILE*/
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

/*ADD CARD*/
function handleProfileAddSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, galleryListEl);
  closePopup(profileAddModal);
}

//*CARDS*//
function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);

  const galleryTitleEl = cardElement.querySelector(".gallery__title");
  const galleryImageEl = cardElement.querySelector(".gallery__image");
  const likeButton = cardElement.querySelector(".gallery__like-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("gallery__like-button_active");
  });

  galleryTitleEl.textContent = cardData.name;
  galleryImageEl.src = cardData.link;
  galleryImageEl.alt = cardData.name;

  return cardElement;
}

function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  galleryListEl.prepend(cardElement);
}

///*EVENT LISTENERS*///

//*EDIT PROFILE*//
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

//*ADD CARD*//
modalAddCloseButton.addEventListener("click", () =>
  closePopup(profileAddModal)
);
profileAddButton.addEventListener("click", () => openPopup(profileAddModal));

profileAddForm.addEventListener("submit", handleProfileAddSubmit);

//*CARDS*//
initialCards.forEach((cardData) => renderCard(cardData, galleryListEl));
