export class Card {
  
    constructor(initialCards, templateSelector, openImage) {
      this._initialCards = initialCards;
      this._name = initialCards.nameCard;
      this._link = initialCards.linkCard;
      this._openImage = openImage;
      this._templateSelector = templateSelector;
    }

    _getTemplate() {
      return document
          .querySelector('.element-template')
          .content
          .querySelector('.element')
          .cloneNode(true);
    }

    generateCard() {
      this._element = this._getTemplate();
      this.button = this._element.querySelector('.element__like-button');
      this._setEventListeners();
      this._element.querySelector('.element__image').src = this._link;
      this._element.querySelector('.element__image').alt = this._name;
      this._element.querySelector('.element__title').textContent = this._name;
      
      return this._element;
    }

    _toggleLike() {
      this.button.classList.toggle('element__like-button_active');
    }

    _deleteCard() {
      this._element.remove()
    }

    _setEventListeners() {
      this.button.addEventListener('click', () => this._toggleLike());
      this._element.querySelector('.element__delete-button').addEventListener('click', () => this._deleteCard());
      this._element.querySelector('.element__image').addEventListener('click', () => this._openImage(this._name, this._link));
    }

}

