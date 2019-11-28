import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./GamesContainer.css";
import GameList from "../../Display_Components/GameList/GameList";
import GameInfo from "../../Display_Components/GameInfo/GameInfo";
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
