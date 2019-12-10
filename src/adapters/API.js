const signinURL = "http://localhost:3001/signin";
const validateURL = "http://localhost:3001/validate";
const BASE_URL = process.env.REACT_APP_INTERNAL_API;
const rawgGameUrl = process.env.REACT_APP_EXTERNAL_API;

class API {
  static signin(user) {
    return fetch(signinURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then(resp => resp.json());
  }

  static validate() {
    return this.get(validateURL);
  }

  static getGames() {
    return this.get("http://localhost:3001/games");
  }

  static get(url) {
    return fetch(url, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(this.parseJson);
  }

  static post(url, bodyObject) {
    return fetch(url, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyObject)
    }).then(this.parseJson);
  }

  static delete(url) {
    return fetch(url, {
      method: "DELETE"
    });
  }

  static parseJson = resp => resp.json();

  static fetchGames = url => {
    if (url) {
      return fetch(url, {
        headers: { "User-Agent": "Game Drive" }
      }).then(this.parseJson);
    }
  };

  static fetchGameInfo = gameId => {
    return this.get(`${rawgGameUrl}/${gameId}`);
  };

  static removeFromUserCollection = (user, game) => {
    return this.delete(BASE_URL + game.id + "/" + user.user_id);
  };

  static GameInUserCollection = (user_id, game_id) => {
    let object = {
      user_id,
      rawg_id: game_id
    };
    return this.post(BASE_URL + "in_collection", object);
  };

  static search = searchTerm => {
    return this.fetchGames(rawgGameUrl + "?search=" + searchTerm);
  };

  static getUserGames = userId => {
    return this.get(BASE_URL + "users/" + userId);
  };
}

export default API;
