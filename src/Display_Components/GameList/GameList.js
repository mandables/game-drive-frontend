import React, { Component } from "react";
import "./GameList.css";
import GameCard from "../../Display_Components/GameCard/GameCard";
import Searchbar from "../Searchbar/Searchbar";
import API from "../../adapters/API";

const URL = process.env.REACT_APP_EXTERNAL_API;

class GameList extends Component {
  state = {
    searchTerm: "",
    games: [],
    nextPage: "",
    previousPage: ""
  };

  setGamesAndPaginationState = object => {
    this.setState({
      games: object.results,
      nextPage: object.next,
      previousPage: object.previous
    });
  };

  componentDidMount() {
    API.fetchGames(URL).then(this.setGamesAndPaginationState);
  }

  changePage = url => {
    API.fetchGames(url).then(this.setGamesAndPaginationState);
  };
  //Render all games
  allGameCards = () => {
    if (this.state.games.length === 0) {
      return "No results";
    }
    return this.state.games.map(game => {
      return <GameCard showGame={this.showGame} game={game} key={game.id} />;
    });
  };

  handleSearch = e => {
    e.preventDefault();
    API.search(e.target.search.value).then(this.setGamesAndPaginationState);
  };

  render() {
    const { previousPage, nextPage } = this.state;
    return (
      <div className="mainpage">
        <div className="header">
          <h1>All Games</h1>
          <hr className="main-line" />
        </div>
        <div className="search">
          <Searchbar handleSearch={this.handleSearch} />
        </div>

        <div id="allgames-container">{this.allGameCards()}</div>
        <div id="pages">
          <button
            onClick={() => this.changePage(this.state.previousPage)}
            id="previous"
          >
            Previous
          </button>
          <button
            onClick={() => this.changePage(this.state.nextPage)}
            id="next"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default GameList;
