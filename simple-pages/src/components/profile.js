import React, { Component } from 'react'

export class Profile extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>This page is for {this.props.params.username}</h2>
      </div>
    )
  }
}