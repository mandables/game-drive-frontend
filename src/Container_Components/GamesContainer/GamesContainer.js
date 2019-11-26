import React, { Component } from "react";
import { Route, redirect } from "react-router-dom";
import "./GamesContainer.css";
import GameList from "../../Display_Components/GameList/GameList";
import GameInfo from "../../Display_Components/GameInfo/GameInfo";
import Sidebar from "../../Display_Components/Sidebar/Sidebar";

// const URL = "http://localhost:3001/api/v1/games";
const newURL = process.env.REACT_APP_EXTERNAL_API;

class GamesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      nextPage: "",
      previousPage: ""
    };
  }

  //Fetch games
  //   fetchGames = () => {
  //     fetch(URL)
  //       .then(resp => resp.json())
  //       .then(array => this.setState({ games: array }));
  //   };
  fetchNewGames = url => {
    if (url) {
      fetch(url, {
        headers: { "User-Agent": "Game Drive" }
      })
        .then(resp => resp.json())
        .then(object =>
          this.setState({
            games: object.results,
            nextPage: object.next,
            previousPage: object.previous
          })
        );
    }
  };
  //User added for development
  componentDidMount() {
    this.fetchNewGames(newURL);
    // .then(fetch(user).then(resp => resp.json().then(user => this.setState({ user: user }))))
  }

  nextPage = () => {
    this.fetchNewGames();
  };

  render() {
    return (
      <div className="game-display">
        <Route
          exact
          path="/games"
          render={routerProps => (
            <GameList {...routerProps} games={this.state.games} />
          )}
        />
        <Route
          path={`${this.props.match.url}/:gameId`}
          render={routerProps => {
            return <GameInfo user={this.props.user} {...routerProps} />;
          }}
        />
        <div id="pages">
          <button
            onClick={() => this.fetchNewGames(this.state.previousPage)}
            id="previous"
          >
            Previous
          </button>
          <button
            onClick={() => this.fetchNewGames(this.state.nextPage)}
            id="next"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default GamesContainer;
