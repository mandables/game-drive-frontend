import React, { Component } from 'react';
import './UserGameCollection.css';

class UserGameCollection extends Component {
    render() {
        return (
            <div className='collection-main'>
                <img src={this.props.game.image} />
                <div>

                </div>
            </div>
        );
    }
}

export default UserGameCollection;
