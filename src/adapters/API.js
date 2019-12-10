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
    }).then(this.jsonify);
  }

  static post(url, bodyObject) {
    return fetch(url, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyObject)
    }).then(this.jsonify);
  }

  static delete(url, bodyObject) {
    return fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyObject)
    });
  }

  static jsonify = resp => resp.json();

  static fetchGames = url => {
    if (url) {
      return fetch(url, {
        headers: { "User-Agent": "Game Drive" }
      }).then(this.jsonify);
    }
  };

  static isGameInUserCollection = (user_id, game_id) => {
    return this.get(BASE_URL + "in_collection");
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

  removeFromUserCollection = (user, game) => {
    let object = {
      user_id: user.id,
      game_id: game.id
    }
    this.delete()
    fetch(URL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: user.user_id, game_id: game.id })
    }).then(() => this.game());
  };

  static GameInUserCollection = (user_id, game_id) => {
    let object = {
      user_id,
      rawg_id: game_id
    };
    console.log(BASE_URL + "in_collection");
    return this.post(BASE_URL + "in_collection", object);
  };


}

export default API;
