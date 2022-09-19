import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popup, callback) {
    super(popup)
    this._form = this._popup.querySelector(".popup__form")
    this.inputs = this._form.querySelectorAll(".popup__input")
    this._callback = callback
  }

  _getInputValues() {
    this._values = {}
    this.inputs.forEach(input => {
      this._values[input.name] = input.value
  })
    return this._values
  }

  setEventListeners(){
    super.setEventListeners()
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault()
      this._callback(this._getInputValues())
    })
  }

  close(){
    super.close()
    this._form.reset()
  }

  setInputValues(data) {
    this.inputs[0].value = data.name;
    this.inputs[1].value = data.about;
  }
}