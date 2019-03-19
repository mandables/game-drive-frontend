import React, { Component } from 'react';
import './GameInfo.css';

class GameInfo extends Component {
    render() {
        return (
            <div className="main-info">
                <img src={this.props.game.image} />
                <br />
                {this.props.game.title}

            </div>
        );
    }
}

export default GameInfo;
