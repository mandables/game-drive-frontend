import React, { Component } from 'react';
import './GameInfo.css';

const URL = 'http://localhost:3000/api/v1/user_games'

class GameInfo extends Component {

    handleClick = (user, game, e) => {
        fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: user.id, game_id: game.id })
        })
    }
    render() {
        return (
            <div className="main-info">
                <img src={this.props.game.image} />
                <br />
                {this.props.game.title}
                <br />
                <label >Played?</label>
                <input onChange={e => this.handleClick(this.props.user, this.props.game, e)} type="checkbox" name="played" />
                <label>Completed?</label>
                <input type="checkbox" name="completed" />

            </div>
        );
    }
}

export default GameInfo;
