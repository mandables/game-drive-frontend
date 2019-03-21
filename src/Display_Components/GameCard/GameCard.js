import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, redirect, Link } from 'react-router-dom'
import './GameCard.css';

class GameCard extends Component {
    render() {
        return (
            <div className='card-main'>
                <Link
                    key={this.props.game.id}
                    to={`/games/${this.props.game.id}`}>
                    <img className="card-img" src={this.props.game.image} alt="" />
                </Link>
                <div>
                    {this.props.game.title}
                </div>
            </div>
        );
    }
}

export default GameCard;
