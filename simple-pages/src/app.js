import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/contact' component={Contact} />
      </Router>
    );
  }
}

class Home extends Component {

  render() {
    return (
      <div>
        <h1>Home page</h1>
        <p>Click <a href="./#/contact">here</a> to contact us</p>
      </div>
    )
  }
}
const Contact = () => <h1>We are located at Dist 6, Ho Chi Minh city.</h1>
const NotFound = () => (<h1>404.. This page is not found!</h1>)