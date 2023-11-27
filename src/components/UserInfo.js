export default class UserInfo {
  constructor(userTitleEl, userDescriptionEl, userAvatarEl) {
    this._userTitle = userTitleEl;
    this._userDescription = userDescriptionEl;
    this._userAvatar = userAvatarEl;
  }

  getUserInfo() {
    const userTitleValue = this._userTitle.textContent;
    const userDescriptionValue = this._userDescription.textContent;

    return {
      userTitle: userTitleValue,
      userDescription: userDescriptionValue,
    };
  }

  setUserInfo({ userTitle, userDescription }) {
    this._userTitle.textContent = userTitle;
    this._userDescription.textContent = userDescription;
  }

  setUserAvatar(userAvatar) {
    this._userAvatar.src = userAvatar;
  }
}
