import React, { Component } from 'react';
import './GameInfo.css';

const URL = 'http://localhost:3000/api/v1/user_games'
const gameUrl = 'http://localhost:3000/api/v1/games'

class GameInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            game: '',
        }
    }

    //fetch game 
    gameId = parseInt(this.props.match.params.gameId)
    game = () => {

        return fetch(`${gameUrl}/${this.gameId}`)
            .then(resp => resp.json())
            .then(game => this.setState({ game: game }))
    }

    componentDidMount() {
        this.game()
    }

    handleClick = (user, game, e) => {
        fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: user.id, game_id: game.id })
        })
    }


    render() {
        return (
            <div className="main-info">

                <img src={this.state.game.image} alt='' />
                <br />
                {this.state.game.title}
                <br />
                <label >Played?</label>
                <input onChange={e => this.handleClick(this.props.user, this.props.game, e)} type="checkbox" name="played" />
                <label>Completed?</label>
                <input type="checkbox" name="completed" />

            </div>
        );
    }
}

export default GameInfo;
