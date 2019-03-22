const signinURL = 'http://localhost:3000/signin'
const validateURL = 'http://localhost:3000/validate'

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

    static get(url) {
        return fetch(url, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(resp => resp.json())
    }
}