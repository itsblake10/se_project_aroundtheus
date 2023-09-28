export default class UserInfo {
  constructor(userTitle, userDescription) {
    this._userTitle = document.querySelector(userTitle);
    this._userDescription = document.querySelector(userDescription);
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

//user.setUserInfo({ userTitle: userTitleInput.value })
