import { Popup } from "./Popup.js";

export class PopupConfirm extends Popup {
  constructor(popup, callback) {
    super(popup);
    this._callback = callback;
    this._confirmButtom = this._popup.querySelector(".popup__confirm");
    this.setEventListeners()
    
  }

  setElement(element) {
    this._element = element;
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmButtom.addEventListener("click", (event) => {
      this._callback(this._element);
    });
  }
}