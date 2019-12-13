import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faGamepad);
library.add(faBookmark);
library.add(faSignOutAlt);

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <nav>
          <Link to={`/games`} className="nav-link">
            <FontAwesomeIcon icon="gamepad" />
            Browse
          </Link>
          <Link to={`/gamer/${this.props.user.user_id}`} className="nav-link">
            <FontAwesomeIcon icon="bookmark" />
            My Games
          </Link>
          <span className="nav-link" onClick={() => this.props.signout()}>
            <FontAwesomeIcon icon="sign-out-alt" />
            Signout
          </span>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
