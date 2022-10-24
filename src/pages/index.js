import './index.css'
import * as constants from "../utils/constants.js"
import { Section } from "../components/Section.js"
import { Card } from "../components/Card.js"
import { PopupWithImage } from "../components/PopupWithImage.js"
import { PopupWithForm } from "../components/PopupWithForm.js"
import { UserInfo } from "../components/UserInfo.js"
import { FormValidator } from "../components/FormValidator.js"
import { PopupConfirm } from '../components/PopupConfirm.js';
import { Api } from "../components/Api.js"

let section;


// const api = new Api({
//   url: 'https://mesto.nomoreparties.co/',
//   headers: {
//     authorization: '4509e525-ca77-4a01-926a-8836b37164ae',
//     'Content-Type': 'application/json'
//   }
// });
const api = new Api({
  url: 'https://mesto.nomoreparties.co/',
  headers: {
    authorization: 'd078071c-2838-4a0d-a4b4-dfd0e6c1822f',
    'Content-Type': 'application/json'
  }
});

export const user = new UserInfo({userName: constants.profileName, userAbout: constants.profileAbout, avatar: constants.imageAvatar})

const popupProfileWithForm  = new PopupWithForm (constants.popupProfile, (values)=>{
  popupProfileWithForm.buttonSave.textContent = "Сохранение..."
  api.editUser(values.name, values.about)
    .then((data)=>{
      user.setUserInfo(data)
      popupProfileWithForm.close()
      profileValidator.toggleButtonState()
    })
    .catch((err)=>{
      console.log('Ошибка сервера', err )
    })
    .finally(()=>{
      popupProfileWithForm.buttonSave.textContent = "Создать"
    })
})

const popupEditAvatar = new PopupWithForm (constants.popupAvatar, (values)=>{
  popupEditAvatar.buttonSave.textContent = "Сохранение..."
  api.editAvatar(values.link)
    .then((data)=>{
      user.setUserInfo(data)
      popupEditAvatar.close()
      avatarValidator.toggleButtonState()
    })
    .catch((err)=>{
      console.log('Ошибка сервера', err )
    })
    .finally(()=>{
      popupEditAvatar.buttonSave.textContent = "Создать"
    })
  
  })

const popupAddWithForm  = new PopupWithForm (constants.popupAdd, (values)=>{
  popupAddWithForm.buttonSave.textContent = "Сохранение..."
  api.addCard(values.place, values.link)
    .then((res) => {
      section.addItem(addElement (res.name, res.link, res._id, res, constants.userData.data))
      popupAddWithForm.close()
      addValidator.toggleButtonState()
    })
    .catch((err)=>{
      console.log('Ошибка сервера', err )
    })
    .finally(()=>{
      popupAddWithForm.buttonSave.textContent = "Создать"
    })
    
})

const popupConfirm = new PopupConfirm (constants.popupTypeConfirm,(element)=>{  
  popupConfirm._confirmButtom.textContent = "Удаление..."
  api.deleteCard(element.getId())
    .then(()=>{
      element.removeCard()
      popupConfirm.close()
    })
    .catch((err)=>{
      console.log('Ошибка сервера', err )
    })
    .finally(()=>{
      popupConfirm._confirmButtom.textContent = "Да"
    })
})

const image = new PopupWithImage(constants.popupImage)

function openEditPopup() {
  const { name, about } = user.getUserInfo()
  popupProfileWithForm.setInputValues({ name, about })
  popupProfileWithForm.open()
  profileValidator.deleteErrors()
}

function openAddPopup() {
  addValidator.deleteErrors()
  addValidator.toggleButtonState()
  popupAddWithForm.open()
}

function openAvatarPopup() {
  popupEditAvatar.open()
  avatarValidator.deleteErrors()
  avatarValidator.toggleButtonState()
}

function addElement(name, link, id, data, user){
  const card = new Card (
    name,
    link, 
    constants.elementTemplete, 
    ()=>{
      image.open(name, link, id)
    },
    (element)=>{
      popupConfirm.setElement(element)
      popupConfirm.open()
    },
    ()=>{
      if(card.getLike()){
        api.deleteLike(card.getId())
          .then((data)=>{
            card.setLikes(data.likes)
            card.updateLikes()
          })
          .catch((err)=>{
            console.log('Ошибка сервера', err )
          })
      }
      else{
        api.addLike(card.getId())
          .then((data)=>{
            card.setLikes(data.likes)
            card.updateLikes()
          })
          .catch((err)=>{
            console.log('Ошибка сервера', err )
          })
      }
    },
    data, constants.userData, data.likes)
    
  const element = card.createElement()

  return element
}

constants.popupButtonAdd.addEventListener("click", openAddPopup)
constants.profileButton.addEventListener("click", openEditPopup)
constants.buttonOpenPopupAvatar.addEventListener("click", openAvatarPopup)

const addValidator = new FormValidator(constants.classes, constants.popupAddForm)
const profileValidator = new FormValidator(constants.classes, constants.popupProfileForm)
const avatarValidator = new FormValidator(constants.classes, constants.formPopupAvatar)

addValidator.enableValidation()
profileValidator.enableValidation()
avatarValidator.enableValidation()

api.getUser()
  .then((res) => {
      user.setUserInfo(res)
      constants.userData.data = res
  })
  .catch(function(err){
    console.log(`Ошибка!`,err)
  })

api.getAllCards()
  .then(function(data) {
    section = new Section({
      items: data,
      renderer: (element)=>{
        const card = addElement(element.name, element.link, element.id, element)
        section.addItem(card)
      }
    },
    constants.elements
    );
    section.renderItems();
  })
  .catch(function(err){
    console.log(`Упс!`,err)
  })

