import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, callback) {
    super(popup)
    this._form = this._popup.querySelector(".popup__form")
    this.inputs = this._form.querySelectorAll(".popup__input")
    this._callback = callback
    this.buttonSave = this._popup.querySelector(".popup__button");
    this.setEventListeners();
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
    this.inputs.forEach(input => {
      input.value = data[input.name]
    })
  }

  changeButtonText(text) {
    this.buttonSave.textContent = `${text}`
  }
}