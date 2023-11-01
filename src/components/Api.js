export default class Api {
  constructor(apiBaseUrl) {
    this.baseUrl = apiBaseUrl;
  }

  getInitialCards() {
    return fetch(
      "https://around-api.en.tripleten-services.com/v1/users/cards",
      {
        method: "GET",
        headers: {
          authorization: "74d9af6b-378b-4926-b030-13bc7ddfd7d9",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
}

//const api = new Api({
//baseUrl: "https://around-api.en.tripleten-services.com/v1",
//headers: {
//authorization: "74d9af6b-378b-4926-b030-13bc7ddfd7d9",
//"Content-Type": "application/json",
//},
//});
