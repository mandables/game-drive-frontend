import React, { Component } from 'react';
import logo from './logo.svg';
import Sidebar from './Display Components/Sidebar'
import GamesContainer from './Controller_Components/GamesContainer'
import './App.css';
import Login from './Display Components/Login'

const URL = 'http://localhost:3001/api/v1/games'

class App extends Component {
  constructor() {
    super()
    this.state = {
      games: [],
      user: null
    }

  }
  componentDidMount() {
    fetch(URL).then(resp => resp.json())
      .then(array => this.setState({ games: array }))

  }

  handleLogin = e => {
    debugger
    console.log(e)
  }
  render() {
    return (
      <div className="App">
        <Sidebar />
        {this.state.user ? <GamesContainer /> : <Login handleLogin={this.handleLogin} />}

      </div>

    );
  }
}

export default App;
