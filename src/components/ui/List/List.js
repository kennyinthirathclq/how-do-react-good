import React, { Component } from 'react';

const HELLO_WORLD = ['Hello','World','!'];
export default class List extends Component {
  render() {
    return (
      <ul>
        {HELLO_WORLD.map((val, ind) => <li>{val}</li>)}
      </ul>
    )
  }
}
