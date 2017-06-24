import React, { Component } from 'react';
import Navigation from './Navigation'

export default class App extends Component {
  render() {
    return (
      <div>
        <code>{this.props.params.build}</code>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}
