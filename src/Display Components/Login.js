import React, { Component } from 'react';
import './Login.css';



class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usernameInput: '',
            passwordInput: '',
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = () => {
        if (this.state.usernameInput === 'Mani' && this.state.passwordInput === 'admin') {
            fetch()
        }
    }

    render() {
        return (
            <div className='login-main'>
                <div>
                    <label for="Username">Username</label>
                    <input onChange={this.handleInput} type="text" name="usernameInput" />
                    <br></br>
                    <label for="Password">Password   </label>
                    <input onChange={this.handleInput} type="text" name="passwordInput" />
                    <br />
                    <button onClick={this.props.handleLogin}>Login</button>
                </div>
            </div >

        );
    }
}

export default Login;
