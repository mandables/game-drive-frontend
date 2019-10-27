import React, { Component } from "react";
import "./Login.css";
import API from "../../API";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogin = () => {
    const user = this.state;
    API.signin(user).then(data => {
      console.log(data);
      if (data.error) {
        alert("Incorrect username and/or password");
      } else {
        this.props.signin(data);
        this.props.history.push("/games");
      }
    });
  };

  render() {
    return (
      <div className="login-main">
        <div className="login-header">
          <h1>Welcome to GameDrive</h1>
        </div>
        <div className="login-box">
          <label>Username</label>
          <input onChange={this.handleInput} type="text" name="username" />
          <br></br>
          <label>Password </label>
          <input onChange={this.handleInput} type="password" name="password" />
          <br />
          <button onClick={this.handleLogin}>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
