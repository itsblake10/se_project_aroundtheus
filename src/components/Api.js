export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }

  getProfileData() {
    return fetch(`${this._baseUrl}/v1/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/v1/cards`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  editProfile(profileName, profileAbout) {
    return fetch(`${this._baseUrl}/v1/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: profileName,
        about: profileAbout,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  editProfilePic(newAvatar) {
    return fetch(`${this._baseUrl}/v1/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: newAvatar,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  createNewCard(cardName, cardLink) {
    return fetch(`${this._baseUrl}/v1/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: cardName,
        link: cardLink,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  deleteApiCard(cardId) {
    return fetch(`${this._baseUrl}/v1/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  addLike(cardId) {
    return fetch(`${this._baseUrl}/v1/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  removeLike(cardId) {
    return fetch(`${this._baseUrl}/v1/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}
