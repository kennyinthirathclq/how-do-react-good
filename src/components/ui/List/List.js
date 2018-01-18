import React, { Component } from 'react';
import './List.css';

const HELLO_WORLD = ['Hello','World','!'];
export default class List extends Component {

  constructor(props) {
    super(props)

    this.state = {
      'prices' : ['$1.00', '$2.00', '$3.00']
    }
  }

  render() {
    return (
      <ul className='List'>
        {this.state.prices.map((val, ind) => <li>{val}</li>)}
      </ul>
    );
  }
}
