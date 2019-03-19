import React, { Component } from 'react';
import './UserPage.css'
import GameCard from '../Display Components/GameCard';
import UserGameCollection from '../Display Components/UserGameCollection';



class UserPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userGames: []
        }
    }

    userGames = () => {
        return this.props.user.games.map(game => <UserGameCollection game={game} />)
    }

    render() {

        return (
            <div>
                <h1>{this.props.user.username}</h1>
                <hr className="main-line" />
                <div className="user-page">

                    {this.userGames()}
                </div >
            </div>

        );
    }
}

export default UserPage;
