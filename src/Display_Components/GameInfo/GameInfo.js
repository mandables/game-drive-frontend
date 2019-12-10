import React, { Component } from "react";
import "./GameInfo.css";
import API from "../../adapters/API";

const internalAPIURL = process.env.REACT_APP_INTERNAL_API;

class GameInfo extends Component {
  state = {
    game: "",
    user_games: [],
    inCollection: "",
    loading: true
  };

  componentDidMount() {
    const gameId = parseInt(this.props.match.params.gameId);
    API.GameInUserCollection(this.props.user.user_id, gameId).then(boolean =>
      this.setState({ inCollection: boolean })
    );
    API.fetchGameInfo(gameId).then(game =>
      this.setState({ loading: false, game })
    );
  }

  getGameGenres = game => {
    if (game) {
      return game.genres.map(genre => genre.name);
    }
  };

  addGameToUserBackend = (user, gameObject) => {
    let genres = this.getGameGenres(this.state.game);
    let gameAndUserObject = {
      title: gameObject.name,
      img_url: gameObject.background_image,
      description: gameObject.description_raw,
      rawg_id: gameObject.id,
      user_id: user.user_id,
      game_genres: genres
    };
    return API.post(`${internalAPIURL}user_games`, gameAndUserObject);
  };

  addToUserCollection = (user, game) => {
    let object = {
      user_id: user.user_id,
      game_id: game.id
    };
    API.post(`${internalAPIURL}user_games`, object);
  };

  renderCollectionButton = () => {
    if (this.state.inCollection) {
      return (
        <button
          className="remove-button"
          onClick={() =>
            API.removeFromUserCollection(
              this.props.user,
              this.state.game
            ).then(() => this.setState({ inCollection: false }))
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
            this.addGameToUserBackend(
              this.props.user,
              this.state.game
            ).then(() => this.setState({ inCollection: true }))
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
    const { game } = this.state;
    return this.state.loading ? (
      "Loading"
    ) : (
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
        {/* <div className="write-review"></div>
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
        {this.renderReviews()} */}
      </div>
    );
  }
}

export default GameInfo;
