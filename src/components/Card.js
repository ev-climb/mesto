export default class Card {

  constructor(name, link, templete, handleCardClick, handleClickDelete, handleClickLike, data, userId, likes, ownerId){
    this._name = name
    this._link = link
    this._templete = templete
    this._handleCardClick = handleCardClick
    this._handleClickDelete = handleClickDelete
    this._handleClickLike = handleClickLike
    this._data = data
    this._ownerId = ownerId
    this._userId = userId
    this._likes = likes;
  }
  

  createElement() {
    this.card = this._templete.cloneNode(true);

    this._elementImage = this.card.querySelector(".element__image");
    this._elementName = this.card.querySelector(".element__title");

    this._elementButtonDel = this.card.querySelector(".element__delete-button")

    this._elementButtonLike = this.card.querySelector(".element__like-button")
    this._elementLikes = this.card.querySelector(".element__likes");

    this._elementName.textContent = this._name;
    this._elementImage.src = this._link
    this._elementImage.alt = this._name

    this._deleteElement()
    this._likeElement()
    this._openElement()
    this.setLikes(this._likes);


    if (this._ownerId === this._userId) {
      this._elementButtonDel.classList.remove("element__delete-button_inactive");
    }

    if (
      this._likes.some((owner) => {
        return owner._id === this._userId;
      })
    ) {
      this._elementButtonLike.classList.toggle("element__like-button_active");
    }

    return this.card

  }
  
  _openElement(){
    this._elementImage.addEventListener("click", this._handleCardClick)
  }

  _likeElement() {
    this._elementButtonLike.addEventListener('click', ()=>{
      this._handleClickLike()
    })
  }

  _deleteElement(){
    this._elementButtonDel.addEventListener("click", () => {
      this._handleClickDelete(this);
    })
  }

  getId() {
    return this._data._id;
  }

  removeCard() {
    this.card.remove();
    this.card = null;
  }

  getLike() {
    if (this._elementButtonLike.classList.contains("element__like-button_active")) {
      return true;
    } else {
      return false;
    }
  }

  setLikes(likes) {
    this._elementLikes.textContent = likes.length;
  }

  updateLikes() {
    this._elementButtonLike.classList.toggle("element__like-button_active");
  }
}