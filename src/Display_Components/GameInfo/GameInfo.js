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
            played: false,
            rating: '',
            content: '',
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
        this.setState({ played: this.state.user_games.includes(this.state.game) })
        //if the game is in the user_games array return true
    }

    renderCheckbox = () => {
        if (this.state.played) {
            return <input onChange={e => this.handleClick(this.props.user, this.state.game, e)} type="checkbox" name="played" id="played" checked />
        } else {
            return <input onChange={e => this.handleClick(this.props.user, this.state.game, e)} type="checkbox" name="played" id="played" />
        }
    }

    //Grabbing review 
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
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
                {this.renderCheckbox()}
                <label>Completed?</label>
                <input type="checkbox" name="completed" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie sagittis erat et rhoncus. Donec dictum, augue eget dictum rhoncus, nulla justo convallis nunc, quis sollicitudin elit urna a sem. Vestibulum quam metus, volutpat quis venenatis nec, imperdiet eget neque. Aliquam fermentum lorem erat, tincidunt bibendum nisl fringilla id. Vestibulum sagittis a nisi sed ultrices. Fusce ultricies consequat pulvinar. Fusce in hendrerit dui. Aliquam tincidunt eros orci, nec vulputate eros porta vitae. Vivamus interdum consectetur rutrum.</p>
                <div className='write-review'>

                </div>
                <strong> Leave a review</strong>
                <br />
                <textarea name="content" className="review-box" onChange={this.handleChange}></textarea>
                <br />
                <select name="rating" onChange={this.handleChange}>
                    <option value="">Choose a rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        );
    }
}

export default GameInfo;
