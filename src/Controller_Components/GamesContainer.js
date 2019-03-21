import React, { Component } from 'react';
import './GamesContainer.css'
import '../Display Components/GameCard'
import GameCard from '../Display Components/GameCard';


class GamesContainer extends Component {


    render() {

        return (
            <div className="mainpage">
                <h1>All Games</h1>
                <hr className="main-line" />
                {this.props.games}
            </div >
        );
    }
}

export default GamesContainer;
