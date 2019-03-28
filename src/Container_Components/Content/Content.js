import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './Content.css';
import GamesContainer from '../GamesContainer/GamesContainer'
import UserPage from '../UserPage/UserPage'
import Sidebar from '../../Display_Components/Sidebar/Sidebar'

class Content extends Component {


    render() {
        return (
            <div className="content-main">
                <Sidebar signout={this.props.signout} user={this.props.user} />
                <Route
                    path="/games"
                    render={routerProps => <GamesContainer user={this.props.user} {...routerProps} />} />
                <Route
                    path={`/gamer/${this.props.user.user_id}`}
                    render={routerProps => <UserPage user={this.props.user} {...routerProps} />} />
            </div >
        );
    }
}

export default Content;
