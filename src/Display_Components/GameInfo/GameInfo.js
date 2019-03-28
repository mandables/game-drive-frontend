import React, { Component } from 'react';
import './GameInfo.css';
import API from '../../API'
import GameReview from '../GameReview/GameReview'

const URL = 'http://localhost:3001/api/v1/user_games'
const gameUrl = 'http://localhost:3001/api/v1/games'
const reviewUrl = 'http://localhost:3001/api/v1/reviews'

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

    game = () => {

        let gameId = parseInt(this.props.match.params.gameId)
        return fetch(`${gameUrl}/${gameId}`)
            .then(resp => resp.json())
            .then(game => this.setState({ game: game }))
            .then(() => this.playedGame())
    }

    componentDidMount() {
        this.game()

    }

    // loadUserAndGameData = () => {
    //     API.getGames()
    //         .then(games => {
    //             this.setState({ user_games: games }, this.playedGame
    //             )
    //         })
    // }


    addToCollection = (user, game, e) => {

        fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: user.user_id, game_id: game.id, played: true })
        }).then(() => this.game())
    }

    removeFromCollection = (user, game) => {
        fetch(URL, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: user.user_id, game_id: game.id })
        }).then(() => this.game())
    }

    playedGame = () => {
        let userIds = this.state.game.users.map(user => user.id)
        if (userIds.includes(this.props.user.user_id)) {
            this.setState({ played: true })
        }
        else {
            this.setState({ played: false })
        }
        //if the game is in the user_games array return true
    }

    renderCollectionButton = () => {
        if (this.state.played) {
            return <button className="remove-button" onClick={() => this.removeFromCollection(this.props.user, this.state.game)}>Remove from collection</button>
        } else {
            return <button className="add-button" onClick={() => this.addToCollection(this.props.user, this.state.game)}>Add to collection</button>
        }
    }

    //Grabbing review 
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    //Creating review 
    submitReview = e => {
        let review = { user_id: this.props.user.user_id, username: this.props.user.username, game_id: this.state.game.id, content: this.state.content, rating: this.state.rating }
        e.preventDefault()
        fetch(reviewUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        }).then(this.content.value = '', this.rating.value = '')
            .then(this.game)

    }

    //Displaying game reviews 
    renderReviews = () => {
        return this.state.game.reviews
            ? this.state.game.reviews.map(review => <div><GameReview review={review} key={review.id} /> <br /></div>)
            : null
    }





    render() {
        return (
            <div className="gameinfo-main" >
                <div className="game-info">
                    <div className="gameinfo-title">
                        {this.state.game.title}
                    </div>
                    <img src={this.state.game.image} alt='' />
                    <br />
                    <div>
                        {this.renderCollectionButton()}

                    </div>

                    {/* <label >Played?</label> */}
                    {/* {this.renderCheckbox()} */}
                    {/* <label>Completed?</label>
                    <input type="checkbox" name="completed" /> */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie sagittis erat et rhoncus. Donec dictum, augue eget dictum rhoncus, nulla justo convallis nunc, quis sollicitudin elit urna a sem. Vestibulum quam metus, volutpat quis venenatis nec, imperdiet eget neque. Aliquam fermentum lorem erat, tincidunt bibendum nisl fringilla id. Vestibulum sagittis a nisi sed ultrices. Fusce ultricies consequat pulvinar. Fusce in hendrerit dui. Aliquam tincidunt eros orci, nec vulputate eros porta vitae. Vivamus interdum consectetur rutrum.</p>
                </div>
                <div className='write-review'>

                </div>
                <strong> Leave a review</strong>
                <br />
                <form>
                    <textarea name="content" className="review-box" onChange={this.handleChange} ref={text => this.content = text}></textarea>
                    <br />
                    <select name="rating" onChange={this.handleChange} ref={select => this.rating = select}>
                        <option value="">Choose a rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input type="submit" value="Submit" onClick={this.submitReview} />
                </form>
                <br />
                {this.renderReviews()}

            </div >
        );
    }
}

export default GameInfo;
