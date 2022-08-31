export class Card {

    constructor(initialCards, templateSelector, openImage, imageElement) {
      this._initialCards = initialCards;
      this._name = initialCards.nameCard;
      this._link = initialCards.linkCard;
      this._openImage = openImage;
      this._templateSelector = templateSelector;
      this._imageElement = imageElement;
    }

    _getTemplate() {
      return document
          .querySelector(this._templateSelector)
          .content
          .querySelector('.element')
          .cloneNode(true);
    }

    generateCard() {
      this._element = this._getTemplate();
      this.button = this._element.querySelector('.element__like-button');
      this._setEventListeners();
      this._element.querySelector(this._imageElement).src = this._link;
      this._element.querySelector(this._imageElement).alt = this._name;
      this._element.querySelector('.element__title').textContent = this._name;
      
      return this._element;
    }

    _toggleLike() {
      this.button.classList.toggle('element__like-button_active');
    }

    _deleteCard() {
      this._element.remove(); //При присваивании null метод перестает работать. Подумать на досуге
    }

    _setEventListeners() {
      this.button.addEventListener('click', () => this._toggleLike());
      this._element.querySelector('.element__delete-button').addEventListener('click', () => this._deleteCard());
      this._element.querySelector(this._imageElement).addEventListener('click', () => this._openImage(this._name, this._link));
    }

}

