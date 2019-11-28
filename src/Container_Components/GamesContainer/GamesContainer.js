import React, { Component } from "react";
import { Route, redirect } from "react-router-dom";
import "./GamesContainer.css";
import GameList from "../../Display_Components/GameList/GameList";
import GameInfo from "../../Display_Components/GameInfo/GameInfo";
import Sidebar from "../../Display_Components/Sidebar/Sidebar";
import API from "../../adapters/API";

// const URL = "http://localhost:3001/api/v1/games";
const URL = process.env.REACT_APP_EXTERNAL_API;

class GamesContainer extends Component {
  render() {
    return (
      <div className="game-display">
        <Route
          exact
          path="/games"
          render={routerProps => <GameList {...routerProps} />}
        />
        <Route
          path={`${this.props.match.url}/:gameId`}
          render={routerProps => {
            return <GameInfo user={this.props.user} {...routerProps} />;
          }}
        />
      </div>
    );
  }
}

export default GamesContainer;
