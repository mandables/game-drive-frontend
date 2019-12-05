import React, { Component } from "react";
import "./GameInfo.css";
import API from "../../adapters/API";
import GameReview from "../GameReview/GameReview";

const URL = "http://localhost:3001/api/v1/user_games";
const internalAPIURL = process.env.REACT_APP_INTERNAL_API;
const rawgGameUrl = process.env.REACT_APP_EXTERNAL_API;
const reviewUrl = "http://localhost:3001/api/v1/reviews";

class GameInfo extends Component {
  state = {
    game: "",
    user_games: [],
    // played: false,
    // rating: "",
    // content: "",
    InCollection: false
  };

  //fetch game

  game = gameId => {
    // const gameId = parseInt(this.props.match.params.gameId);
    return fetch(`${rawgGameUrl}/${gameId}`)
      .then(resp => resp.json())
      .then(game => this.setState({ game }));
    //   .then(() => this.playedGame());
  };

  //Check if the game is in the user's collection

  componentDidMount() {
    const gameId = parseInt(this.props.match.params.gameId);
    this.game(gameId).then(() => {
      debugger;
      API.GameInUserCollection(this.props.user.user_id, gameId);
    });
  }

  // loadUserAndGameData = () => {
  //     API.getGames()
  //         .then(games => {
  //             this.setState({ user_games: games }, this.playedGame
  //             )
  //         })
  // }

  getGameGenres = game => {
    if (game) {
      return game.genres.map(genre => genre.name);
    }
  };

  addGameToUserBackend = (user, gameObject) => {
    let genres = this.getGameGenres(this.state.game);
    //First add some of the game details to own API if it doesn't already exist
    let gameAndUserObject = {
      title: gameObject.name,
      img_url: gameObject.background_image,
      description: gameObject.description_raw,
      rawg_id: gameObject.id,
      user_id: user.user_id,
      game_genres: genres
    };
    console.log(gameAndUserObject);
    API.post(`${internalAPIURL}user_games`, gameAndUserObject);
  };

  addToUserCollection = (user, game) => {
    let object = {
      user_id: user.user_id,
      game_id: game.id
    };
    API.post(`${internalAPIURL}user_games`, object);
  };

  removeFromCollection = (user, game) => {
    fetch(URL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: user.user_id, game_id: game.id })
    }).then(() => this.game());
  };

  playedGame = () => {
    let userIds = this.state.game.users.map(user => user.id);
    if (userIds.includes(this.props.user.user_id)) {
      this.setState({ played: true });
    } else {
      this.setState({ played: false });
    }
    //if the game is in the user_games array return true
  };

  renderCollectionButton = () => {
    if (this.state.played) {
      return (
        <button
          className="remove-button"
          onClick={() =>
            this.removeFromCollection(this.props.user, this.state.game)
          }
        >
          Remove from collection
        </button>
      );
    } else {
      return (
        <button
          className="add-button"
          onClick={() =>
            this.addGameToUserBackend(this.props.user, this.state.game)
          }
        >
          Add to collection
        </button>
      );
    }
  };

  //Grabbing review
  // handleChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };
  //Creating review
  // submitReview = e => {
  //   let review = {
  //     user_id: this.props.user.user_id,
  //     username: this.props.user.username,
  //     game_id: this.state.game.id,
  //     content: this.state.content,
  //     rating: this.state.rating
  //   };
  //   e.preventDefault();
  //   fetch(reviewUrl, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(review)
  //   })
  //     .then((this.content.value = ""), (this.rating.value = ""))
  //     .then(this.game);
  // };

  //Displaying game reviews
  // renderReviews = () => {
  //   return this.state.game.reviews
  //     ? this.state.game.reviews.map(review => (
  //         <div>
  //           <GameReview review={review} key={review.id} /> <br />
  //         </div>
  //       ))
  //     : null;
  // };

  render() {
    // this.getGameGenres(this.state.game);
    const { game } = this.state;
    return (
      <div className="gameinfo-main">
        <div className="game-info">
          <div className="gameinfo-title">{game.title}</div>
          <img src={game.background_image} alt="" />
          <br />
          <div>{this.renderCollectionButton()}</div>

          {/* <label >Played?</label> */}
          {/* {this.renderCheckbox()} */}
          {/* <label>Completed?</label>
                    <input type="checkbox" name="completed" /> */}
          <p>{game.description_raw}</p>
        </div>
        <div className="write-review"></div>
        <strong> Leave a review</strong>
        <br />
        <form>
          <textarea
            name="content"
            className="review-box"
            onChange={this.handleChange}
            ref={text => (this.content = text)}
          ></textarea>
          <br />
          <select
            name="rating"
            onChange={this.handleChange}
            ref={select => (this.rating = select)}
          >
            <option value="">Choose a rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Submit" onClick={this.submitReview} />
        </form>
        <br />
        {/* {this.renderReviews()} */}
      </div>
    );
  }
}

export default GameInfo;
