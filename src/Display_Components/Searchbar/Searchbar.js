import React, { Component } from 'react';
import './Searchbar.css';

class Searchbar extends Component {
    state = {
        searchTerm: ''
    }
    render() {
        return (
            <div className="search-main">
                <label >Search</label>
                &ensp;
                <input onChange={this.props.handleSearch} className="search-bar" name="search" type="text" />
            </div>
        );
    }
}

export default Searchbar;
