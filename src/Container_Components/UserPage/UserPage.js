import React, { Component } from 'react';
import './UserPage.css'
import GameCard from '../../Display_Components/GameCard/GameCard'
import UserGameCollection from '../../Display_Components/UserGameCollection/UserGameCollection'
import Sidebar from '../../Display_Components/Sidebar/Sidebar'

const url = 'http://localhost:3001/api/v1/users'


class UserPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userGames: []
        }
    }

    //fetch user's games
    fetchUserGames = () => {
        let id = parseInt(this.props.match.params.userId)
        fetch(`${url}/${id}`)
            .then(resp => resp.json())
            .then(array => this.setState({ userGames: array.games }))
    }

    componentDidMount() {
        this.fetchUserGames()
    }


    userGames = () => {
        return this.state.userGames.map(game => <UserGameCollection game={game} />)
    }

    render() {

        return (
            <div className='user-main'>
                <Sidebar signout={this.props.signout} user={this.props.user} />
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
