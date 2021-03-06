import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Home } from './components/home.js'
import {UserListWrapper} from './components/user/list_wrapper.js'

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/users' component={UserListWrapper} />
        <Route path='*' component={NotFound} />
      </Router>
    );
  }
}

const NotFound = () => (<h1>404.. This page is not found!</h1>)