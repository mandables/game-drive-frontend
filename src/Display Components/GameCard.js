import React, { Component } from 'react';
import './GameCard.css';

class GameCard extends Component {
    render() {
        return (
            <div className='card-main'>
                <img src={this.props.game.image} onClick={() => this.props.showGame(this.props.game)} alt="" />
                <div>
                    {this.props.game.title}
                </div>
            </div>
        );
    }
}

export default GameCard;
