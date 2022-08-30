import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");
const buttonProfileEdit = document.querySelector(".profile__button-edit");
const buttonProfileAdd = document.querySelector(".profile__button-add");
const popupAdd = document.querySelector(".popup_type_add");
const formAdd = document.querySelector(".popup__form_type_add");
const placeInput = formAdd.querySelector(".popup__input_place");
const linkInput = formAdd.querySelector(".popup__input_link");
const popupEdit = document.querySelector(".popup_type_edit");
const formEdit = document.querySelector(".popup__form_type_edit");
const nameInput = formEdit.querySelector(".popup__input_name");
const jobInput = formEdit.querySelector(".popup__input_job");
const imgTypePopup = document.querySelector(".popup_type_image");
const imgPopup = document.querySelector(".popup__image");
const subtitlePopup = document.querySelector(".popup__subtitle");
const buttonClose = document.querySelectorAll(".popup__close-button");
const cardsContainer = document.querySelector(".elements");
const buttonSubmit = document.querySelector('.popup__button_type_submit');

const validationConfig = {
  formElement: '.popup__form',
  inputElement: '.popup__input',
  submitButton: '.popup__button',
  inactiveButton: 'popup__button_disabled',
  inputError: 'popup__input_type_error',
  errorVisibility: 'popup__input-error_active',
};

const initialCards = [
  {
    nameCard: "Байкал",
    linkCard: "./images/baikal.jpeg",
  },
  {
    nameCard: "Домбай",
    linkCard: "./images/dombai.jpeg",
  },
  {
    nameCard: "Эльбрус",
    linkCard: "./images/elbrus.jpeg",
  },
  {
    nameCard: "Гуамское ущелье",
    linkCard: "./images/guamka.jpeg",
  },
  {
    nameCard: "Камчатка",
    linkCard: "./images/kamchatka.jpeg",
  },
  {
    nameCard: "Карачаево-черкесия",
    linkCard: "./images/karach.jpeg",
  },
];

//Открытие попапа
function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
  document.addEventListener("keydown", closeEsc);
  popupElement.addEventListener("mousedown", closeCLick);
}

//Увеличение картинки по нажатию
const openImage = (nameCard, linkCard) => {
  imgPopup.src = linkCard;
  imgPopup.alt = nameCard;
  subtitlePopup.textContent = nameCard;
  openPopup(imgTypePopup);
}

//Закрытие попапа
function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeEsc);
  popupElement.removeEventListener("mousedown", closeCLick);
}

//Закрытие попапа кликом на оверлей
function closeCLick(evt) {
  if (evt.target.classList.contains("popup_opened")) {
    closePopup(evt.target);
  }
}

//Закрытие попапа на Esc
function closeEsc(evt) {
  if (evt.key === "Escape") {
    const openPopup = document.querySelector(".popup_opened");
    closePopup(openPopup);
  }
}

buttonClose.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => {
    closePopup(popup);
  });
});

//Отправка формы с карточкой
function addCard(evt) {
  evt.preventDefault();
  renderCard({nameCard:placeInput.value, linkCard:linkInput.value});
  evt.target.reset();
  closePopup(popupAdd);
  buttonSubmit.classList.add('popup__button_disabled');
  buttonSubmit.setAttribute('disabled', true);
}

formAdd.addEventListener("submit", addCard);

//Отправка формы профиля
function profileForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

formEdit.addEventListener("submit", profileForm);

//Открываем попап профиль
buttonProfileEdit.addEventListener("click", function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEdit);
});

//Открываем попап добавления карточки
buttonProfileAdd.addEventListener("click", function () {
  openPopup(popupAdd);
});

//Создаем новую карточку
const createCard = (card) => new Card(card, '.element-template', openImage).generateCard();

function renderCard (card) {
  cardsContainer.prepend(createCard(card));
};

initialCards.forEach((card) => {
  renderCard(card);
});

//Валидация
const EditProfileValidation = new FormValidator(validationConfig, popupEdit);
const AddCardValidation = new FormValidator(validationConfig, popupAdd);

EditProfileValidation.enableValidation(validationConfig);
AddCardValidation.enableValidation(validationConfig);