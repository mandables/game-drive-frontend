import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, redirect } from 'react-router-dom'
import './Content.css';
import GamesContainer from '../GamesContainer/GamesContainer'
import Login from '../../Display_Components/Login/Login'
import Welcome from '../../Container_Components/Welcome/Welcome'
import API from '../../API'

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
        }
    }

    siginin = user => {
        localStorage.setItem('token', user.token)
        this.setState({ user: user })
    }

    signout = () => {
        localStorage.removeItem('token')
        this.setState({ user: '' })
    }
    render() {
        return (
            <React.Fragment>
                <Route
                    path="/games"
                    render={routerProps => <GamesContainer {...routerProps} />} />
                <Route
                    path="/"
                    render={() => <Welcome user={this.state.user} />} />
            </React.Fragment>
        );
    }
}

export default Content;
