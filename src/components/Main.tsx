import React, { Component } from 'react';
import 'Styles/Main.scss';

export default class Main extends Component {

  constructor(props: {}) {
    super(props)
  }

  render() {
    return (
      <div className="main-container">
        <p>Hi</p>
        <img
          src={require('Assets/loading.svg')}>
        </img>
      </div>
    )
  }
}
