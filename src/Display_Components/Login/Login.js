import React, { Component } from 'react';
import './Login.css';
import API from '../../API'



class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = () => {

        const user = this.state
        API.signin(user).then(data => {
            if (data.error) {
                alert("Incorrect username and/or password")
            } else {
                this.props.signin(data)
                this.props.history.push('/games')
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome to GameDrive</h1>
                <div className='login-main'>
                    <div>
                        <label for="Username">Username</label>
                        <input onChange={this.handleInput} type="text" name="username" />
                        <br></br>
                        <label for="Password">Password   </label>
                        <input onChange={this.handleInput} type="password" name="password" />
                        <br />
                        <button onClick={this.handleLogin}>Login</button>
                    </div>
                </div >

            </div>


        );
    }
}

export default Login;
