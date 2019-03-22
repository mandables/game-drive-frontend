import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, redirect } from 'react-router-dom'
import './Welcome.css';
import Login from '../../Display_Components/Login/Login'


class Welcome extends Component {

    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <Login />
            </div>

        );
    }
}

export default Welcome;
