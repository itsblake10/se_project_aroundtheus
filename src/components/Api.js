export default class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getProfileData() {
    return fetch(`${this.baseUrl}/v1/users/me`, {
      method: "GET",
      headers: {
        authorization: "177c16b7-240f-4206-a2e5-5bd359c96b1d",
      },
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`Error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("An error occured:", error);
        return Promise.reject(error);
      });
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/v1/cards`, {
      method: "GET",
      headers: {
        authorization: "177c16b7-240f-4206-a2e5-5bd359c96b1d",
      },
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`Error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("An error occured:", error);
        return Promise.reject(error);
      });
  }

  editProfile(profileName, profileAbout) {
    return fetch(`${this.baseUrl}/v1/users/me`, {
      method: "PATCH",
      headers: {
        authorization: "177c16b7-240f-4206-a2e5-5bd359c96b1d",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: profileName,
        about: profileAbout,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`Error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("An error occured:", error);
        return Promise.reject(error);
      });
  }

  editProfilePic(newAvatar) {
    return fetch(`${this.baseUrl}/v1/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: "177c16b7-240f-4206-a2e5-5bd359c96b1d",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: newAvatar,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`Error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("An error occured:", error);
        return Promise.reject(error);
      });
  }

  createNewCard(cardName, cardLink) {
    return fetch(`${this.baseUrl}/v1/cards`, {
      method: "POST",
      headers: {
        authorization: "177c16b7-240f-4206-a2e5-5bd359c96b1d",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: cardName,
        link: cardLink,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`Error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("An error occured:", error);
        return Promise.reject(error);
      });
  }

  deleteApiCard(cardId) {
    return fetch(`${this.baseUrl}/v1/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: "177c16b7-240f-4206-a2e5-5bd359c96b1d",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`Error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("An error occured:", error);
        return Promise.reject(error);
      });
  }

  addLike(cardId) {
    return fetch(`${this.baseUrl}/v1/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        authorization: "177c16b7-240f-4206-a2e5-5bd359c96b1d",
      },
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`Error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("An error occured:", error);
        return Promise.reject(error);
      });
  }

  removeLike(cardId) {
    return fetch(`${this.baseUrl}/v1/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        authorization: "177c16b7-240f-4206-a2e5-5bd359c96b1d",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`Error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("An error occured:", error);
        return Promise.reject(error);
      });
  }
}
