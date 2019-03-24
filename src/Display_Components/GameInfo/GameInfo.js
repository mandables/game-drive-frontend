import React, { Component } from 'react';
import './GameInfo.css';
import API from '../../API'

const URL = 'http://localhost:3001/api/v1/user_games'
const gameUrl = 'http://localhost:3001/api/v1/games'

class GameInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            game: '',
            user_games: [],
            played: false
        }
    }

    //fetch game 
    gameId = parseInt(this.props.match.params.gameId)
    game = () => {
        debugger
        return fetch(`${gameUrl}/${this.gameId}`)
            .then(resp => resp.json())
            .then(game => this.setState({ game: game }))
    }

    componentDidMount() {

        API.getGames()
            .then(games => this.setState({ user_games: games }))
            .then(this.game())
            .then(this.playedGame())
            .then(this.renderCheckbox())
    }

    handleClick = (user, game, e) => {
        fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: user.user_id, game_id: game.id, played: true })
        })
    }

    playedGame = () => {
        debugger
        this.setState({ played: this.state.user_games.includes(this.state.game) })
        //if the game is in the user_games array return true
    }

    renderCheckbox = () => {
        debugger
        if (this.state.played) {
            return <input onChange={e => this.handleClick(this.props.user, this.state.game, e)} type="checkbox" name="played" id="played" checked />
        } else {
            return <input onChange={e => this.handleClick(this.props.user, this.state.game, e)} type="checkbox" name="played" id="played" />
        }
    }





    render() {
        return (
            <div className="main-info">

                <img src={this.state.game.image} alt='' />
                <br />
                {this.state.game.title}
                <br />
                <label >Played?</label>
                {this.renderCheckbox()}
                <label>Completed?</label>
                <input type="checkbox" name="completed" />

            </div>
        );
    }
}

export default GameInfo;
