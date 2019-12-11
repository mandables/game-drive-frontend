import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./UserGameCollection.css";

class UserGameCollection extends Component {
  render() {
    return (
      <div className="collection-main">
        <Link to={`/games/${this.props.game.rawg_id}`}>
          <img src={this.props.game.img_url} alt="game cover art" />
        </Link>
      </div>
    );
  }
}

export default UserGameCollection;
