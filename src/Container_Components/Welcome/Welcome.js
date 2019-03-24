import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, redirect, Link } from 'react-router-dom'
import './Welcome.css';
import Login from '../../Display_Components/Login/Login'
import Signup from '../../Display_Components/Signup/Signup'


class Welcome extends Component {

    render() {
        return (
            <div>
                <div className="welcome-header">
                    <h1>Welcome to GameDrive</h1>
                </div>
                <div>
                    <div className="options-box">
                        <div>

                            <Link
                                to="/login">
                                Login
                            </Link>
                            &ensp;
                            <Link
                                to="/signup">
                                Signup
                            </Link>

                        </div>
                        <Link
                            to="/games">
                            Browse games
                            </Link>
                    </div>

                </div>

                {/* <Route
                    path='/'
                    render={routerProps => <Login {...routerProps} signin={this.props.signin} />}
                /> */}
            </div>

        );
    }
}

export default Welcome;
