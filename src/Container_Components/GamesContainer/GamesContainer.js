import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, redirect } from 'react-router-dom'
import './GamesContainer.css'
import GameList from '../../Display_Components/GameList/GameList'
import GameInfo from '../../Display_Components/GameInfo/GameInfo'

const URL = 'http://localhost:3001/api/v1/games'

class GamesContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            games: [],
        }
    }

    //Fetch games 
    fetchGames = () => {
        fetch(URL).then(resp => resp.json())
            .then(array => this.setState({ games: array }))
    }
    //User added for development
    componentDidMount() {
        this.fetchGames()
        // .then(fetch(user).then(resp => resp.json().then(user => this.setState({ user: user }))))
    }

    render() {

        return (
            <React.Fragment>
                <Route
                    exact path="/games"
                    render={routerProps => <GameList {...routerProps} games={this.state.games} />} />
                <Route
                    path={`${this.props.match.url}/:gameId`}
                    render={routerProps => {
                        return <GameInfo {...routerProps} games={this.state.games} />
                    }} />
            </React.Fragment>

        );
    }
}

export default GamesContainer;
