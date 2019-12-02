const signinURL = "http://localhost:3001/signin";
const validateURL = "http://localhost:3001/validate";

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
    }).then(resp => resp.json());
  }

  static post(url, bodyObject) {
    return fetch(url, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyObject)
    }).then(resp => resp.json());
  }

  static fetchGames = url => {
    if (url) {
      return fetch(url, {
        headers: { "User-Agent": "Game Drive" }
      }).then(resp => resp.json());
    }
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
}

export default API;
