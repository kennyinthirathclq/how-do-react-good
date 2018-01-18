import React, { Component } from 'react';

const HELLO_WORLD = ['Hello','World','!'];
export default class List extends Component {
  render() {
    return (
      <ul>
        {
          HELLO_WORLD.map(function(val, ind){
            return (<li>{val}</li>)
          })
        }
      </ul>
    )
  }
}
