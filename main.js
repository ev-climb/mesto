(()=>{"use strict";var e=document.querySelector(".profile__button-edit"),t=document.querySelector(".popup_type_edit"),n=t.querySelector(".popup__form"),o=(t.querySelector(".popup__input_name"),t.querySelector(".popup__input_job"),document.querySelector(".profile__name")),r=document.querySelector(".profile__description"),i=document.querySelector(".elements"),u=document.querySelector(".element-template").content.querySelector(".element"),c=document.querySelector(".profile__button-add"),a=document.querySelector(".popup_type_add"),s=a.querySelector(".popup__form_type_add"),l=document.querySelector(".popup_type_image"),f=document.querySelector(".popup_type_avatar"),p=f.querySelector(".popup__form"),h=document.querySelector(".profile__avatar-button"),d=document.querySelector(".profile__avatar"),_=document.querySelector(".popup_type_confirm"),y=(document.querySelector(".element__delete-button"),{}),m={},v={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",errorClass:"popup__input-error_active",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error"};function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var k=function(){function e(t,n){var o=t.items,r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=o,this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"uppItem",value:function(e){this._container.append(e)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var E=function(){function e(t,n,o,r,i,u,c,a,s,l){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._link=n,this._templete=o,this._handleCardClick=r,this._handleClickDelete=i,this._handleClickLike=u,this._data=c,this._ownerId=l,this._userId=a,this._likes=s}var t,n;return t=e,(n=[{key:"createElement",value:function(){var e=this;return this.card=this._templete.cloneNode(!0),this._elementImage=this.card.querySelector(".element__image"),this._elementName=this.card.querySelector(".element__title"),this._elementButtonDel=this.card.querySelector(".element__delete-button"),this._elementButtonLike=this.card.querySelector(".element__like-button"),this._elementLikes=this.card.querySelector(".element__likes"),this._elementName.textContent=this._name,this._elementImage.src=this._link,this._elementImage.alt=this._name,this._deleteElement(),this._likeElement(),this._openElement(),this.setLikes(this._likes),this._ownerId===this._userId&&this._elementButtonDel.classList.remove("element__delete-button_inactive"),this._likes.some((function(t){return t._id===e._userId}))&&this._elementButtonLike.classList.toggle("element__like-button_active"),this.card}},{key:"_openElement",value:function(){this._elementImage.addEventListener("click",this._handleCardClick)}},{key:"_likeElement",value:function(){var e=this;this._elementButtonLike.addEventListener("click",(function(){e._handleClickLike()}))}},{key:"_deleteElement",value:function(){var e=this;this._elementButtonDel.addEventListener("click",(function(){e._handleClickDelete(e)}))}},{key:"getId",value:function(){return this._data._id}},{key:"removeCard",value:function(){this.card.remove(),this.card=null}},{key:"getLike",value:function(){return!!this._elementButtonLike.classList.contains("element__like-button_active")}},{key:"setLikes",value:function(e){this._elementLikes.textContent=e.length}},{key:"updateLikes",value:function(){this._elementButtonLike.classList.toggle("element__like-button_active")}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var S=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this),this._buttonClosePopup=this._popup.querySelector(".popup__close-button")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._buttonClosePopup.addEventListener("click",(function(t){e.close()})),this._popup.addEventListener("click",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function L(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=j(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},C.apply(this,arguments)}function j(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function I(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(o);if(r){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t._name=t._popup.querySelector(".popup__subtitle"),t.setEventListeners(),t}return t=u,(n=[{key:"open",value:function(e,t){this._name.textContent=e,this._image.setAttribute("src",t),this._image.setAttribute("alt",e),C(q(u.prototype),"open",this).call(this)}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(S);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function T(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=A(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},x.apply(this,arguments)}function A(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function D(e,t){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},D(e,t)}function N(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(o);if(r){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._form=n._popup.querySelector(".popup__form"),n.inputs=n._form.querySelectorAll(".popup__input"),n._callback=t,n.buttonSave=n._popup.querySelector(".popup__button"),n.setEventListeners(),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._values={},this.inputs.forEach((function(t){e._values[t.name]=t.value})),this._values}},{key:"setEventListeners",value:function(){var e=this;x(U(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._callback(e._getInputValues())}))}},{key:"close",value:function(){x(U(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setInputValues",value:function(e){this.inputs.forEach((function(t){t.value=e[t.name]}))}},{key:"changeButtonText",value:function(e){this.buttonSave.textContent="".concat(e)}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(S);function J(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var H=function(){function e(t){var n=t.userName,o=t.userAbout,r=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=n,this._userAbout=o,this._avatar=r}var t,n;return t=e,(n=[{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userAbout.textContent=e.about,this._avatar.setAttribute("src",e.avatar)}},{key:"getUserInfo",value:function(){return this.info={name:this._userName.textContent,about:this._userAbout.textContent,avatar:this._avatar},this.info}}])&&J(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function z(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),M(this,"_hideInputError",(function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(o._classes.inputErrorClass),n.classList.remove(o._classes.errorClass),n.textContent=""})),M(this,"_showInputError",(function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o._classes.inputErrorClass),r.textContent=n,r.classList.add(o._classes.errorClass)})),M(this,"_checkInputValidity",(function(e,t){t.validity.valid?o._hideInputError(e,t):o._showInputError(e,t,t.validationMessage)})),M(this,"_setEventListeners",(function(){return o.toggleButtonState(),o._inputList.forEach((function(e){e.addEventListener("input",(function(){o._checkInputValidity(o._form,e),o.toggleButtonState(o._inputList,o._buttonElement)}))})),o._buttonElement})),M(this,"enableValidation",(function(){o._setEventListeners()})),this._classes=t,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._classes.inputSelector)),this._buttonElement=this._form.querySelector(this._classes.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.setAttribute("disabled","disabled"),this._buttonElement.classList.add(this._classes.inactiveButtonClass)):(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._classes.inactiveButtonClass))}},{key:"deleteErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(e._form,t)}))}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function G(e){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(e)}function K(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Q(){return Q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=W(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},Q.apply(this,arguments)}function W(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Z(e)););return e}function X(e,t){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},X(e,t)}function Y(e,t){if(t&&("object"===G(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function Z(e){return Z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Z(e)}var $=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&X(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Z(o);if(r){var n=Z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Y(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._callback=t,n._confirmButtom=n._popup.querySelector(".popup__confirm"),n.setEventListeners(),n}return t=u,(n=[{key:"setElement",value:function(e){this._element=e}},{key:"setEventListeners",value:function(){var e=this;Q(Z(u.prototype),"setEventListeners",this).call(this),this._confirmButtom.addEventListener("click",(function(t){e._callback(e._element)}))}}])&&K(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(S);function ee(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var te,ne=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUser",value:function(){return fetch("".concat(this._url,"/v1/cohort-52/users/me"),{headers:this._headers}).then(this._handleResponse)}},{key:"editUser",value:function(e,t){return fetch("".concat(this._url,"/v1/cohort-52/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._handleResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._url,"/v1/cohort-52/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._handleResponse)}},{key:"getAllCards",value:function(){return fetch("".concat(this._url,"/v1/cohort-52/cards"),{headers:this._headers}).then(this._handleResponse)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._url,"/v1/cohort-52/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/v1/cohort-52/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._url,"/v1/cohort-52/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._handleResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"/v1/cohort-52/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}}])&&ee(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({url:"https://mesto.nomoreparties.co/",headers:{authorization:"d078071c-2838-4a0d-a4b4-dfd0e6c1822f","Content-Type":"application/json"}}),oe=new H({userName:o,userAbout:r,avatar:d}),re=new V(t,(function(e){re.buttonSave.textContent="Сохранение...",ne.editUser(e.name,e.about).then((function(e){oe.setUserInfo(e),re.close(),fe.toggleButtonState()})).catch((function(e){console.log("Ошибка сервера",e)})).finally((function(){re.buttonSave.textContent="Сохранить"}))})),ie=new V(f,(function(e){ie.changeButtonText("Сохранение..."),ne.editAvatar(e.link).then((function(e){oe.setUserInfo(e),ie.close(),pe.toggleButtonState()})).catch((function(e){console.log("Ошибка сервера",e)})).finally((function(){ie.changeButtonText("Сохранить")}))})),ue=new V(a,(function(e){ue.changeButtonText("Сохранение..."),ne.addCard(e.place,e.link).then((function(e){te.addItem(se(e.name,e.link,e._id,e,y.data)),ue.close(),le.toggleButtonState()})).catch((function(e){console.log("Ошибка сервера",e)})).finally((function(){ue.changeButtonText("Создать")}))})),ce=new $(_,(function(e){ce._confirmButtom.textContent="Удаление...",ne.deleteCard(e.getId()).then((function(){e.removeCard(),ce.close()})).catch((function(e){console.log("Ошибка сервера",e)})).finally((function(){ce._confirmButtom.textContent="Да"}))})),ae=new B(l);function se(e,t,n,o){var r=new E(e,t,u,(function(){ae.open(e,t,n)}),(function(e){ce.setElement(e),ce.open()}),(function(){r.getLike()?ne.deleteLike(r.getId()).then((function(e){r.setLikes(e.likes),r.updateLikes()})).catch((function(e){console.log("Ошибка сервера",e)})):ne.addLike(r.getId()).then((function(e){r.setLikes(e.likes),r.updateLikes()})).catch((function(e){console.log("Ошибка сервера",e)}))}),o,m.data,o.likes,o.owner._id);return r.createElement()}c.addEventListener("click",(function(){le.deleteErrors(),le.toggleButtonState(),ue.open()})),e.addEventListener("click",(function(){var e=oe.getUserInfo(),t=e.name,n=e.about;re.setInputValues({name:t,about:n}),re.open(),fe.deleteErrors()})),h.addEventListener("click",(function(){ie.open(),pe.deleteErrors(),pe.toggleButtonState()}));var le=new F(v,s),fe=new F(v,n),pe=new F(v,p);le.enableValidation(),fe.enableValidation(),pe.enableValidation(),Promise.all([ne.getUser(),ne.getAllCards()]).then((function(e){oe.setUserInfo(e[0]),y.data=e[0],m.data=e[0]._id,(te=new k({items:e[1],renderer:function(e){var t=se(e.name,e.link,e._id,e);te.addItem(t),te.uppItem(t)}},i)).renderItems()})).catch((function(e){console.log("Ошибка сервера",e)}))})();