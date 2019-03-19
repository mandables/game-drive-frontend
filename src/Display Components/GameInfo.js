import React, { Component } from 'react';
import './GameInfo.css';

class GameInfo extends Component {
    render() {
        return (
            <div>
                <img src={this.props.game.image} />
                <div>
                    {this.props.game.title}
                </div>
            </div>
        );
    }
}

export default GameInfo;
