export class UserInfo {
  constructor({userName, userAbout, avatar}) {
  this._userName = userName
  this._userAbout = userAbout
  this._avatar = avatar
  }

  // setUserInfo(name, about){
  //   this._userName.textContent = name
  //   this._userAbout.textContent = about
  // }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userAbout.textContent = data.about;
    this._avatar.setAttribute("src", data.avatar);
  }

  getUserInfo(){
    this.info = {
      name: this._userName.textContent, 
      about: this._userAbout.textContent,
      avatar: this._avatar
    }
    return this.info
  }
}