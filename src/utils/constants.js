export const profileButton = document.querySelector(".profile__button-edit")
export const popupProfile = document.querySelector(".popup_type_edit")
export const popupProfileForm = popupProfile.querySelector(".popup__form")
export const namePopupProfile = popupProfile.querySelector(".popup__input_name")
export const aboutPopupProfile = popupProfile.querySelector(".popup__input_job")
export const profileName = document.querySelector(".profile__name")
export const profileAbout = document.querySelector(".profile__description")
export const elements = document.querySelector('.elements')
export const elementTemplete = document.querySelector(".element-template").content.querySelector(".element")
export const popupButtonAdd = document.querySelector(".profile__button-add")
export const popupAdd = document.querySelector(".popup_type_add")
export const popupAddForm = popupAdd.querySelector(".popup__form_type_add")
export const popupImage = document.querySelector(".popup_type_image")

export const classes = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  errorClass: 'popup__input-error_active',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error', 
}

import baikal from '../images/baikal.jpeg';
import dombay from '../images/dombai.jpeg';
import elbrus from '../images/elbrus.jpeg';
import guamka from '../images/guamka.jpeg';
import kamchatka from '../images/kamchatka.jpeg';
import karachay from '../images/karach.jpeg';

export const initialCards = [
    {
        name: 'Байкал',
        link: baikal
    },
    {
        name: 'Домбай',
        link: dombay
    },
    {
        name: 'Эльбрус',
        link: elbrus
    },
    {
        name: 'Гуамское ущелье',
        link: guamka
    },
    {
        name: 'Камчатка',
        link: kamchatka
    },
    {
        name: 'Карачаево-черкесия',
        link: karachay
    },
  ];