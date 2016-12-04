import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'
import { Profile } from './profile.js'

const Contact = () => (
    <div>
      <h1>We are located at Dist 6, Ho Chi Minh city.</h1>
      <p>Back to <Link to="/">Home</Link> or <Link to="/profile/pcdinh">view</Link> our profile</p>
    </div>
)
export default Contact