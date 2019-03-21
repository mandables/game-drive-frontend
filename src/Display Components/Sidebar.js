import React, { Component } from 'react';
import './Sidebar.css'

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <h1> Game Drive</h1>
                <hr />
                <h2 onClick={() => this.props.showAllGames()}>All Games</h2>
                <h2>Games</h2>
                <h2>Games</h2>
                <br />
                <br />
                <hr />
                <b onClick={this.props.showUser} className="my-games">MY GAMES</b>
            </div>
        )
    }
}

export default Sidebar;
