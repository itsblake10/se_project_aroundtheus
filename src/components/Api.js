export default class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/v1/cards`, {
      method: "GET",
      headers: {
        authorization: "74d9af6b-378b-4926-b030-13bc7ddfd7d9",
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
        authorization: "74d9af6b-378b-4926-b030-13bc7ddfd7d9",
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

  createNewCard(cardName, cardLink) {
    return fetch(`${this.baseUrl}/v1/cards`, {
      method: "POST",
      headers: {
        authorization: "74d9af6b-378b-4926-b030-13bc7ddfd7d9",
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

  deleteCard(cardId) {
    return fetch(`${this.baseUrl}/v1/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: "74d9af6b-378b-4926-b030-13bc7ddfd7d9",
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
        authorization: "74d9af6b-378b-4926-b030-13bc7ddfd7d9",
      },
    });
  }
}
