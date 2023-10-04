export default class userInfo {
  constructor(userTitleEl, userDescriptionEl) {
    this._userTitle = userTitleEl;
    this._userDescription = userDescriptionEl;
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
}
