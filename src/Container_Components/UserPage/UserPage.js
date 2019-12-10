import React, { Component } from "react";
import "./UserPage.css";
import GameCard from "../../Display_Components/GameCard/GameCard";
import UserGameCollection from "../../Display_Components/UserGameCollection/UserGameCollection";
import Sidebar from "../../Display_Components/Sidebar/Sidebar";

const url = "http://localhost:3001/api/v1/users";

class UserPage extends Component {
  state = {
    userGames: []
  };

  //fetch user's games
  fetchUserGames = () => {
    let id = parseInt(this.props.match.params.gamerId);
    fetch(`${url}/${id}`)
      .then(resp => resp.json())
      .then(array => this.setState({ userGames: array.games }));
  };

  // componentDidMount() {
  //     this.fetchUserGames()
  // }

  userGames = () => {
    this.fetchUserGames();
    return this.state.userGames.map(game => <UserGameCollection game={game} />);
  };

  render() {
    return (
      <div className="user-main">
        <h1>{this.props.user.username}</h1>
        <hr className="user-line" />
        <div className="user-games">{this.userGames }</div>
      </div>
    );
  }
}

export default UserPage;
