import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faGamepad)
library.add(faBookmark)
library.add(faSignOutAlt)

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="bar-text">
                    <h1> Game Drive</h1>
                    <hr />
                    <div className="all-games">
                        <h2 ><FontAwesomeIcon icon="gamepad" />All Games</h2>
                    </div>

                    <br />
                    <br />
                    <hr />
                    <div className="my-games">
                        <b id="my-games-text"><FontAwesomeIcon icon="bookmark" />MY GAMES</b>
                    </div>
                    <div className="signout">

                        <h3 onClick={this.props.signout}>&emsp;<FontAwesomeIcon icon="sign-out-alt" />Signout</h3>
                    </div>
                </div>


            </div>
        )
    }
}

export default Sidebar;