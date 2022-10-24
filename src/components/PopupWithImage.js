import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popup){
    super(popup)
    this._image = this._popup.querySelector('.popup__image')
    this._name = this._popup.querySelector('.popup__subtitle')
    this.setEventListeners();
  }

  open(cardName, cardImage){
    this._name.textContent = cardName
    this._image.setAttribute ('src', cardImage)
    this._image.setAttribute ('alt', cardName)  
    super.open()
  }

}