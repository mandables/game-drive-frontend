const signinURL = 'http://localhost:3001/signin'
const validateURL = 'http://localhost:3001/validate'

class API {
    static signin(user) {
        return fetch(signinURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then(resp => resp.json())
    }

    static validate() {
        return this.get(validateURL)
    }

    static getGames() {
        return this.get("http://localhost:3001/games");
    }

    static get(url) {
        return fetch(url, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(resp => resp.json())
    }
}

export default API

// fetch("http://localhost:3000/games", {
//     headers: {
//         Authorization: localStorage.getItem("token")
//     }
// }).then(resp => resp.json())