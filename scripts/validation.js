/* ------------------------------- Show Error ------------------------------- */

function showInputError(formEl, inputEl, validationConfig) {
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.add("modal__input_type_error");
  errorMessageEl.textContent = inputEl.validationMessage;
  errorMessageEl.classList.add("modal__error_visible");
}

/* ------------------------------- Hide Error ------------------------------- */

function hideInputError(formEl, inputEl, validationConfig) {
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.remove("modal__input_type_error");
  errorMessageEl.textContent = "";
  errorMessageEl.classList.remove("modal__error_visible");
}

/* ----------------------------- Check Validity ----------------------------- */

function checkInputValidity(formEl, inputEl, validationConfig) {
  if (!inputEl.validity.valid) {
    return showInputError(formEl, inputEl, validationConfig);
  }

  hideInputError(formEl, inputEl, validationConfig);
}

/* ---------------------- Toggle Submit Button Inactive/Active --------------------- */

function toggleButtonState(inputEls, submitButton, validationConfig) {
  let foundInvalid = false;

  inputEls.forEach((inputEl) => {
    if (!inputEl.validity.valid) {
      foundInvalid = true;
    }
  });

  if (foundInvalid) {
    submitButton.classList.add("modal__submit-button_disabled");
    return (submitButton.disabled = true);
  }

  submitButton.classList.remove("modal__submit-button_disabled");
  submitButton.disabled = false;
}

function setEventListeners(formEl, validationConfig) {
  const inputEls = Array.from(
    formEl.querySelectorAll(validationConfig.inputSelector)
  );
  const submitButton = formEl.querySelector(".modal__submit-button");

  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      checkInputValidity(formEl, inputEl, validationConfig);
      toggleButtonState(inputEls, submitButton);
    });
  });
}

function enableValidation(validationConfig) {
  const formEls = Array.from(
    document.querySelectorAll(validationConfig.formSelector)
  );

  formEls.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    setEventListeners(formEl, validationConfig);
  });
}

/* --------------------------------- Config --------------------------------- */

const validationConfig = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-button",
  inactiveButtonClass: ".modal__submit-button_disabled",
  inputErrorClass: ".modal__input_type_error",
  errorClass: ".modal__error_visible",
};

enableValidation(validationConfig);
