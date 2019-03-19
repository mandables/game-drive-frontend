import React, { Component } from 'react';
import logo from './logo.svg';
import Sidebar from './Display Components/Sidebar'
import GamesContainer from './Controller_Components/GamesContainer'
import './App.css';
import Login from './Display Components/Login'
import GameCard from './Display Components/GameCard'
import GameInfo from './Display Components/GameInfo'

const URL = 'http://localhost:3000/api/v1/games'
const user = 'http://localhost:3000/api/v1/users/1'

class App extends Component {
  constructor() {
    super()
    this.state = {
      games: [],
      game: '',
      user: null,
      view: 'all'
    }

  }

  //User and game added for development
  componentDidMount() {
    fetch(URL).then(resp => resp.json())
      .then(array => this.setState({ games: array, game: array[0] }))
      .then(fetch(user).then(resp => resp.json().then(user => this.setState({ user: user }))))
  }

  // condiitonal component rendering
  showComponent = () => {
    if (this.state.view === "all") {
      return <GamesContainer games={this.allGameCards()} />
    }
    else if (this.state.view === 'game') {
      return <GameInfo game={this.state.game} />
    } else {
      return <Login />
    }
  }

  //Selecting a game 
  showGame = game => {
    this.setState({
      game: game,
      view: 'game'
    })
  }




  login = user => {
    this.setState({
      user: user,
      view: 'all'
    })
  }

  allGameCards = () => {
    return this.state.games.map(game => <GameCard showGame={this.showGame} game={game} key={game.id} />)
  }

  render() {
    return (
      <div className="App">
        <Sidebar />
        {this.showComponent()}
      </div>

    );
  }
}

export default App;
