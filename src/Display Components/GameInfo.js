import React, { Component } from 'react';
import './GameInfo.css';

class GameInfo extends Component {

    handleClick = e => {
        debugger
    }
    render() {
        return (
            <div className="main-info">
                <img src={this.props.game.image} />
                <br />
                {this.props.game.title}
                <br />
                <label >Played?</label>
                <input onChange={this.handleClick} type="checkbox" name="played" />
                <label>Completed?</label>
                <input type="checkbox" name="completed" />

            </div>
        );
    }
}

export default GameInfo;
