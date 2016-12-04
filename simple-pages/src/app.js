import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Home } from './components/home.js'
import Contact from './components/contact.js'
import { Profile } from './components/profile.js'
import { Search } from './components/search.js'

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/profile/:username' component={Profile} />
        <Route path='/search' component={Search} />
        <Route path='*' component={NotFound} />
      </Router>
    );
  }
}

const NotFound = () => (<h1>404.. This page is not found!</h1>)