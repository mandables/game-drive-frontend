import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, withRouter, redirect } from 'react-router-dom'
import './GameList.css';
import GameCard from '../../Display_Components/GameCard/GameCard'
import Searchbar from '../Searchbar/Searchbar'



class GameList extends Component {
    state = {
        searchTerm: ''
    }
    //Render all games
    allGameCards = () => {
        return this.props.games.map(game => {
            return <GameCard
                showGame={this.showGame}
                game={game}
                key={game.id} />
        })
    }

    handleSearch = e => {
        this.setState({ searchTerm: e.target.value })
    }

    render() {
        return (
            <div className="mainpage">
                <div className="header">
                    <h1>All Games</h1>
                    <hr className="main-line" />
                </div>
                <div className="search">
                    <Searchbar handleSearch={this.handleSearch} />
                </div>

                <div id="allgames-container">
{this.allGameCards()}
                </div>
                


            </div >
        );
    }
}

export default GameList;
