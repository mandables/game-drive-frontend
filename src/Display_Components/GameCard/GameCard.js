import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './GameCard.css';

class GameCard extends Component {
    truncateTitle = title => {
        if (title === null) {
            return 'Remove'
        } else if (title.split(' ').length <= 4) {
            return title
        } else {
            let splitTitle = title.split(' ')
            let truncatedTitle = `${splitTitle[0]} ${splitTitle[1]} ${splitTitle[2]} ${splitTitle[3]}...`
            return truncatedTitle
        }
    }
    render() {
        return (
            <div className='card-main'>
                <Link
                    to={`/games/${this.props.game.id}`}>
                    <img className="card-img" src={this.props.game.image} alt="" />
                </Link>
                <div className="game-title">
                    {this.truncateTitle(this.props.game.title)}
                </div>
            </div>
        );
    }
}

export default GameCard;
