import React, { Component } from 'react'

export class Search extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Your are searching for <strong>{this.props.location.query.q}</strong></p>
      </div>
    )
  }
}
