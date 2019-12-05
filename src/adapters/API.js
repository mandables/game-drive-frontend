const signinURL = "http://localhost:3001/signin";
const validateURL = "http://localhost:3001/validate";
const BASE_URL = "http://localhost:3001/api/v1/";

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
    }).then(API.jsonify);
  }

  static post(url, bodyObject) {
    return fetch(url, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyObject)
    }).then(API.jsonify);
  }

  static jsonify = resp => resp.json();

  static fetchGames = url => {
    if (url) {
      return fetch(url, {
        headers: { "User-Agent": "Game Drive" }
      }).then(API.jsonify);
    }
  };

  static isGameInUserCollection = (user_id, game_id) => {
    return API.get(BASE_URL + "in_collection");
  };
  static addGameToUserCollection = (url, user, game) => {
    fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user.user_id,
        game_id: game.id,
        played: true
      })
    }).then(() => this.game());
  };

  static GameInUserCollection = (user_id, game_id) => {
    // if (user_id) {
    debugger;
    let object = {
      user_id,
      rawg_id: game_id
    };
    console.log(object);
    console.log(BASE_URL + "in_collection");
    this.post(BASE_URL + "in_collection", object);
    // }
  };
}

export default API;
