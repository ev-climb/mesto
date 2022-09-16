import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popap){
    super(popap)
    this._image = this._popap.querySelector(".popup__image")
    this._name = this._popap.querySelector(".popup__subtitle")
  }

  open(cardName, cardImage){
    this._image.setAttribute ('src', cardImage)
    this._image.setAttribute ('alt', cardName)
    this._name.textContent = cardName
    super.open()
  }

  close(){
    super.close()
  }
}