import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import Sidebar from "./Display_Components/Sidebar/Sidebar";
import Login from "./Display_Components/Login/Login";
import UserPage from "./Container_Components/UserPage/UserPage";
import GamesContainer from "./Container_Components/GamesContainer/GamesContainer";
import API from "./adapters/API";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      user_id: "",
      loading: true
    };
  }

  componentDidMount() {
    API.validate()
      .then(data => {
        if (data.error) {
          this.signout();
        } else {
          this.signin(data);
        }
      })
      .then(() => this.setState({ loading: false }));
  }

  signin = user => {
    localStorage.setItem("token", user.token);
    // debugger;
    this.setState({ username: user.username, user_id: user.user_id });
  };

  signout = () => {
    localStorage.removeItem("token");
    this.setState({ username: "", user_id: "" });
    this.props.history.push("/");
  };

  render() {
    return this.state.loading ? null : (
      <div className="app-main">
        <Route
          exact
          path="/"
          render={routerProps => (
            <Login {...routerProps} signin={this.signin} />
          )}
        />
        <Route
          path="/games"
          render={routerProps => (
            <div>
              {" "}
              <Sidebar signout={this.signout} user={this.state} />
              <GamesContainer user={this.state} {...routerProps} />
            </div>
          )}
        />
        <Route
          path={`/gamer/:gamerId`}
          render={routerProps => (
            <div>
              <Sidebar signout={this.signout} user={this.state} />
              <UserPage user={this.state} {...routerProps} />{" "}
            </div>
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
