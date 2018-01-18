import React, { Component } from 'react';
import './List.css';

const HELLO_WORLD = ['Hello','World','!'];
export default class List extends Component {
  render() {
    return (
      <ul className='List'>
        {HELLO_WORLD.map((val, ind) => <li>{val}</li>)}
      </ul>
    )
  }
}
