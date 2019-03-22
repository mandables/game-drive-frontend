import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, redirect } from 'react-router-dom'
import Content from './Container_Components/Content/Content'
import Sidebar from './Display_Components/Sidebar'
import './App.css';


class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     user: null,
  //   }
  // }


  render() {
    return (
      <div>
        <Sidebar />
        <Content />
      </div>


    );
  }
}

export default withRouter(App);
