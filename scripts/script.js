const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");
const editButtonProfile = document.querySelector(".profile__button-edit");
const addButtonProfile = document.querySelector(".profile__button-add");
const addPopup = document.querySelector(".popup_type_add");
const formAdd = document.querySelector(".popup__form_type_add");
const placeInput = formAdd.querySelector(".popup__input_place");
const linkInput = formAdd.querySelector(".popup__input_link");
const editPopup = document.querySelector(".popup_type_edit");
const formEdit = document.querySelector(".popup__form_type_edit");
const nameInput = formEdit.querySelector(".popup__input_name");
const jobInput = formEdit.querySelector(".popup__input_job");
const imgTypePopup = document.querySelector(".popup_type_image");
const imgPopup = document.querySelector(".popup__image");
const subtitlePopup = document.querySelector(".popup__subtitle");
const closeButtons = document.querySelectorAll(".popup__close-button");
const elementTemplate = document.querySelector(".element-template").content;
const elements = document.querySelector(".elements");

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

function createCard({ nameCard, linkCard }) {
  const cardElement = elementTemplate.querySelector(".element").cloneNode(true);
  const likeCardButton = cardElement.querySelector(".element__like-button");
  const imageCard = cardElement.querySelector(".element__image");
  imageCard.src = linkCard;
  imageCard.alt = nameCard;
  cardElement.querySelector(".element__title").textContent = nameCard;

  function toggleLike() {
    likeCardButton.classList.toggle("element__like-button_active");
  }
  cardElement
    .querySelector(".element__delete-button")
    .addEventListener("click", function () {
      deleteCard(cardElement);
    });
  likeCardButton.addEventListener("click", function () {
    toggleLike();
  });
  imageCard.addEventListener("click", function () {
    openImage({ nameCard, linkCard });
  });
  return cardElement;
}

function renderCard({ nameCard, linkCard }) {
  const card = createCard({ nameCard, linkCard });
  elements.prepend(card);
}

function render() {
  initialCards.forEach(renderCard);
}

render();

function addCard(evt) {
  evt.preventDefault();
  const nameCard = placeInput.value;
  const linkCard = linkInput.value;
  renderCard({ nameCard, linkCard });
  evt.target.reset();
  closePopup(addPopup);
}

function deleteCard(cardElement) {
  cardElement.remove();
}

function profileForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(editPopup);
}

function openImage({ nameCard, linkCard }) {
  imgPopup.src = linkCard;
  imgPopup.alt = nameCard;
  subtitlePopup.textContent = nameCard;
  openPopup(imgTypePopup);
}

function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
  document.addEventListener("keydown", closeEsc);
  popupElement.addEventListener("mousedown", closeCLick);
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeEsc);
  popupElement.removeEventListener("mousedown", closeCLick);
}

function closeEsc(evt) {
  if (evt.key === "Escape") {
    const openPopup = document.querySelector(".popup_opened");
    closePopup(openPopup);
  }
}

function closeCLick(evt) {
  if (evt.target.classList.contains("popup_opened")) {
    closePopup(evt.target);
  }
}

editButtonProfile.addEventListener("click", function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(editPopup);
});

addButtonProfile.addEventListener("click", function () {
  openPopup(addPopup);
});

closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => {
    closePopup(popup);
  });
});

formEdit.addEventListener("submit", profileForm);
formAdd.addEventListener("submit", addCard);
//Не забыть позже объединить обработчики у оверлея и крестика