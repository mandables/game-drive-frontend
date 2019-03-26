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

    //fetch user and their games
    fetchUserGames = () => {
        if (this.props.user) {
            debugger
            fetch(`${url}/${this.props.user}`)
                .then(resp => resp.json())
                .then(array => this.setState({ userGames: array }))
        } else {
            return null
        }
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
                <Sidebar />
                <h1>{this.props.user.username}</h1>
                <hr className="main-line" />
                <div className="user-page">
                    {this.props.user.user_id}
                    {/* {this.userGames()} */}
                </div >
            </div>

        );
    }
}

export default UserPage;
