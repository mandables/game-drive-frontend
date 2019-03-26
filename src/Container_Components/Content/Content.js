import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './Content.css';
import GamesContainer from '../GamesContainer/GamesContainer'

import Sidebar from '../../Display_Components/Sidebar/Sidebar'

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
        }
    }

    //


    render() {
        return (
            <React.Fragment>
                <Sidebar signout={this.props.signout} />
                <Route
                    path="/games"
                    render={routerProps => <GamesContainer user={this.props.user} {...routerProps} />} />
                {/* <Route
                    path="/"
                    render={routerProps => <Welcome {...routerProps} user={this.state.user} signin={this.props.signin} />} /> */}
            </React.Fragment>
        );
    }
}

export default Content;
