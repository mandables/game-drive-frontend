import React, { Component } from 'react';
import logo from './logo.svg';
import Sidebar from './Display Components/Sidebar'
import GamesContainer from './Controller_Components/GamesContainer'
import './App.css';

const URL = 'http://localhost:3001/api/v1/games'

class App extends Component {
  constructor() {
    super()
    this.state = {
      games: [],
    }

  }

  componentDidMount() {
    fetch(URL).then(resp => resp.json())
      .then(array => this.setState({ games: array }))
  }
  render() {
    return (
      <div className="App">
        <Sidebar />
        <GamesContainer />
      </div>
    );
  }
}

export default App;
