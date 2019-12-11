import React, { Component } from "react";
import "./UserPage.css";
import UserGameCollection from "../../Display_Components/UserGameCollection/UserGameCollection";
import API from "../../adapters/API";

class UserPage extends Component {
  state = {
    userGames: []
  };

  //fetch user's games
  //   fetchUserGames = () => {
  //     fetch(`${url}/${id}`)
  //       .then(resp => resp.json())
  //       .then(array => this.setState({ userGames: array.games }));
  //   };

  componentDidMount() {
    let userId = parseInt(this.props.match.params.gamerId);
    API.getUserGames(userId).then(userData =>
      this.setState({ userGames: userData.games })
    );
  }

  renderUserGames = () => {
    return this.state.userGames.map(game => (
      <UserGameCollection key={game.id} game={game} />
    ));
  };

  render() {
    return (
      <div className="user-main">
        <h1>{this.props.user.username}</h1>
        <hr className="user-line" />
        <div className="user-games">{this.renderUserGames()}</div>
      </div>
    );
  }
}

export default UserPage;
