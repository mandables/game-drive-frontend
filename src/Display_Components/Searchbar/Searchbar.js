import React, { Component } from "react";
import "./Searchbar.css";

class Searchbar extends Component {
  state = {
    searchTerm: ""
  };
  render() {
    return (
      <div className="search-main">
        <form onSubmit={this.props.handleSearch}>
          <label>Search</label>
          &ensp;
          <input className="search-bar" name="search" type="text" />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default Searchbar;
