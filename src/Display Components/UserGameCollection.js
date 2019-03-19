import React, { Component } from 'react';
import './UserGameCollection.css';

class UserGameCollection extends Component {
    render() {
        return (
            <div className='collection-main'>
                <img src={this.props.game.image} onClick={() => this.props.showGame(this.props.game)} alt="" />
                <div>

                </div>
            </div>
        );
    }
}

export default UserGameCollection;
