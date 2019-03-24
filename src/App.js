import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, redirect } from 'react-router-dom'
import Content from './Container_Components/Content/Content'
import Sidebar from './Display_Components/Sidebar'
import Welcome from './Container_Components/Welcome/Welcome'
import API from './API'
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
    }
  }

  componentDidMount() {
    API.validate().then(data => {
      if (data.error) {
        this.props.signout()
        this.props.history.push('/')
      } else {
        this.props.signin(data)
        this.props.history.push('/games')
      }
    })
  }

  signin = user => {
    localStorage.setItem('token', user.token)
    this.setState({ user: user })
  }

  signout = () => {
    localStorage.removeItem('token')
    this.setState({ user: '' })
  }


  render() {
    return (
      <div>
        {/* <Sidebar signout={this.signout} /> */}
        <Welcome />
        <Route
          path="/games"
          render={routerProps => <Content signout={this.signout} signin={this.signin} {...routerProps} />} />

      </div>


    );
  }
}

export default withRouter(App);
