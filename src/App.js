import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import Content from './Container_Components/Content/Content'
import Sidebar from './Display_Components/Sidebar/Sidebar'
import Welcome from './Container_Components/Welcome/Welcome'
import Login from './Display_Components/Login/Login'
import WelcomeOptions from './Display_Components/WelcomeOptions/WelcomeOptions'
import UserPage from './Container_Components/UserPage/UserPage'
import API from './API'
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      user_id: '',
    }
  }

  componentDidMount() {
    API.validate().then(data => {
      if (data.error) {
        this.signout()
        this.props.history.push('/')
      } else {
        this.signin(data)

      }
    })
  }

  signin = user => {
    localStorage.setItem('token', user.token)
    this.setState({ username: user.username, user_id: user.user_id })
  }

  signout = () => {
    localStorage.removeItem('token')
    this.setState({ username: '', user_id: '' })
  }


  render() {
    return (
      <div>
        <Route
          exact path='/'
          render={routerProps => <div> <Login {...routerProps} signin={this.signin} /> <WelcomeOptions /> </div>} />
        <Route
          path="/games"
          render={routerProps => <Content signout={this.signout} signin={this.signin} user={this.state} {...routerProps} />} />
        <Route
          path={`/gamer/:userId`}
          render={routerProps => <UserPage user={this.state} {...routerProps} />} />

      </div>


    );
  }
}

export default withRouter(App);
