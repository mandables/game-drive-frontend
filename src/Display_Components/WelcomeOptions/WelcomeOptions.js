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
            <div className="wo-main" >
                <div >

                    <Link
                        to="/signup">
                        Signup
                            </Link>
                </div>
                &ensp;
                    <Link
                    to="/games">
                </Link>


            </div >

        );
    }
}

export default WelcomeOptions;
