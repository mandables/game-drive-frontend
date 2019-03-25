import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './WelcomeOptions.css';




class WelcomeOptions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }


    render() {
        return (
            <div>
                <div >

                    <Link
                        to="/signup">
                        Signup
                            </Link>
                    &ensp;
                    <Link
                        to="/games">
                        Browse games
                            </Link>
                </div>

            </div >

        );
    }
}

export default WelcomeOptions;
