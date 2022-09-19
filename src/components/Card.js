export class Card {

  constructor(name, link, templete, handleCardClick){
  this._name = name
  this._link = link
  this._templete = templete
  this._handleCardClick = handleCardClick
  }

  createElement() {
    this.card = this._templete.cloneNode(true);

    this._elementImage = this.card.querySelector(".element__image");
    this._elementName = this.card.querySelector(".element__title");

    this._elementButtonDel = this.card.querySelector(".element__delete-button")
    this._elementButtonLike = this.card.querySelector(".element__like-button")

    this._elementName.textContent = this._name;
    // this._elementImage.setAttribute ('alt', this._name)
    // this._elementImage.setAttribute ('src', this._link)
    this._elementImage.src = this._link
    this._elementImage.alt = this._name

    this._deleteElement()
    this._likeElement()
    this._openElement()

    return this.card

  }
  
  _openElement(){
    this._elementImage.addEventListener("click", this._handleCardClick)
  }

  _likeElement() {
    this._elementButtonLike.addEventListener('click', ()=>{
      this._elementButtonLike.classList.toggle("element__like-button_active")})
  }

  _deleteElement(){
    this._elementButtonDel.addEventListener('click', ()=>{
      this.card.remove()
      this.card = null
    })
  }
}