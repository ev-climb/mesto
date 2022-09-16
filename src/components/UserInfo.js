export class UserInfo {
  constructor({userName, userAbout}) {
  this._userName = userName
  this._userAbout = userAbout
  }

  setUserInfo(name, about){
    this._userName.textContent = name
    this._userAbout.textContent = about
  }

  getUserInfo(){
    this.info = {name: this._userName.textContent, about: this._userAbout.textContent}
    return this.info
  }
}