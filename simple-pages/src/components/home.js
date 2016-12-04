import React, { Component } from 'react'

const style = {
    main: { position: 'absolute', textAlign: 'center', top: '50%', width: '100%', color: 'black' }
}

export class Home extends Component {

  render() {
    return (
      <div style={style.main}>
        <h1>Home page</h1>
        <p>Click <a href="./#/contact">here</a> to contact us</p>
        <p>Click <a href="./#/search?q=bitcoin">here</a> to search for bitcoin</p>
      </div>
    )
  }
}