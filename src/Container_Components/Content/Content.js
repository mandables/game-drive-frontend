import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, redirect } from 'react-router-dom'
import './Content.css';
import GamesContainer from '../GamesContainer/GamesContainer'
import Login from '../../Display_Components/Login/Login'
import Welcome from '../../Container_Components/Welcome/Welcome'
import API from '../../API'
import Sidebar from '../../Display_Components/Sidebar'

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
                <Sidebar />
                <Route
                    path="/games"
                    render={routerProps => <GamesContainer {...routerProps} />} />
                {/* <Route
                    path="/"
                    render={routerProps => <Welcome {...routerProps} user={this.state.user} signin={this.props.signin} />} /> */}
            </React.Fragment>
        );
    }
}

export default Content;
