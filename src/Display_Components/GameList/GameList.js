import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, withRouter, redirect } from 'react-router-dom'
import './GameList.css';
import GameCard from '../../Display_Components/GameCard/GameCard'



class GameList extends Component {

    //Render all games
    allGameCards = () => {
        return this.props.games.map(game => {
            return <GameCard
                showGame={this.showGame}
                game={game}
                key={game.id} />
        })
    }

    render() {
        return (
            <div className="mainpage">
                <div className="header">
                    <h1>All Games</h1>
                    <hr className="main-line" />
                </div>


                {this.allGameCards()}


            </div >
        );
    }
}

export default GameList;
