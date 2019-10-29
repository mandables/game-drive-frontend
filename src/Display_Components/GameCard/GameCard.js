import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./GameCard.css";

class GameCard extends Component {
  truncateTitle = title => {
    if (title === null) {
      return "Remove";
    } else if (title.split(" ").length <= 4) {
      return title;
    } else {
      let splitTitle = title.split(" ");
      let truncatedTitle = `${splitTitle[0]} ${splitTitle[1]} ${
        splitTitle[2]
      } ${splitTitle[3]}...`;
      return truncatedTitle;
    }
  };
  render() {
    const { game } = this.props;
    return (
      <div className="card-main">
        <Link to={`/games/${game.id}`}>
          <img className="card-img" src={game.background_image} alt="" />
        </Link>
        <div className="game-title">
          <p>{game.name}</p>
        </div>
      </div>
    );
  }
}

export default GameCard;
