import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, redirect } from 'react-router-dom'
import './Content.css';
import GamesContainer from '../GamesContainer/GamesContainer'
import Login from '../../Display_Components/Login'

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: ''
        }
    }
    render() {
        return (
            <Route
                path="/games"
                render={routerProps => <GamesContainer {...routerProps} />} />




        );
    }
}

export default Content;
