import './pages/index.css'
import * as constants from "./utils/constants.js"
import { Section } from "./components/Section.js"
import { Card } from "./components/Card.js"
import { PopupWithImage } from "./components/PopupWithImage.js"
import { PopupWithForm } from "./components/PopupWithForm.js"
import { UserInfo } from "./components/UserInfo.js"
import {FormValidator} from "./components/FormValidator.js"

export const user = new UserInfo({userName: constants.profileName, userAbout: constants.profileAbout})

const section = new Section({
  items: constants.initialCards,
  renderer: (element)=>{
    const card = addElement(element.name, element.link)
    section.addItem(card)
  }
},
constants.elements
)

const popupProfileWithForm  = new PopupWithForm (constants.popupProfile, (values)=>{
  user.setUserInfo(values.name, values.about)
  popupProfileWithForm.close()
  profileValidator.toggleButtonState()
})

const blockPopupAddWithForm  = new PopupWithForm (constants.popupAdd, (values)=>{
  constants.elements.prepend (addElement (values.name, values.link))
  blockPopupAddWithForm.close()
  addValidator.toggleButtonState()
})

const image = new PopupWithImage(constants.popupImage)

function openEditPopup() {
  user.getUserInfo()
  constants.namePopupProfile.value = user.info.name;
  constants.aboutPopupProfile.value = user.info.about;
  profileValidator.deleteErrors()
  popupProfileWithForm.open()
}

function addElement(name, link,){
  const card = new Card (name, link, constants.elementTemplete, ()=>{
    image.open(name, link)
    })
  const element = card.createElement(name, link)

  return element
}

function openAddPopup() {
  addValidator.deleteErrors()
  addValidator.toggleButtonState()
  blockPopupAddWithForm.open()
}

constants.popupButtonAdd.addEventListener("click", openAddPopup)
constants.profileButton.addEventListener("click", openEditPopup)

const addValidator = new FormValidator(constants.classes, constants.popupAddForm)
const profileValidator = new FormValidator(constants.classes, constants.popupProfileForm)

addValidator.enableValidation()
profileValidator.enableValidation()
popupProfileWithForm.setEventListeners()
blockPopupAddWithForm.setEventListeners()
section.renderItems()
image.setEventListeners()