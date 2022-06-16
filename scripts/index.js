const profileEdit = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const formElement = document.querySelector('.popup__container');
const inputs = document.querySelectorAll('input');
const saveButton = document.querySelector('.popup__save');

function openPopup(event){
    popup.classList.add('popup_opened');
    inputs[0].value = profileName.textContent;
    inputs[1].value = profileDescription.textContent;
}

function closePopup(){
    popup.classList.remove('popup_opened');
}

profileEdit.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
saveButton.addEventListener('click', closePopup);

popup.addEventListener('click', (event) => {
    if(event.target === event.currentTarget) {
        closePopup()
    }
})

function formSubmitHandler (evt) {
     evt.preventDefault(); 

     profileName.textContent = inputs[0].value;
     profileDescription.textContent = inputs[1].value;
}

formElement.addEventListener('submit', formSubmitHandler);