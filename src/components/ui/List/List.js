import React, { Component } from 'react';
import './List.css';

const HELLO_WORLD = ['Hello','World','!'];
export default class List extends Component {

  constructor(props) {
    super(props)

    this.state = {
      'prices' : [1,2,3],
      'status' : 'unmounted'
    }

    this.upcharge = this.upcharge.bind(this)
  }

  componentWillMount() {
    setTimeout(() => this.setState({status:'async'}), 3000)
  }

  componentDidMount() {
    this.setState({status:'mounted'})
  }

  upcharge() {
    this.setState(prev => ({'prices' : prev.prices.map(v => v+1)}))
  }

  render() {
    return (
      <div>
        <h3>Lifecycle Status? {this.state.status} </h3>
        <ul className='List'>
          {this.state.prices.map((val, ind) => <li>${`${val.toFixed(2)}`}</li>)}
        </ul>
        <button onClick={this.upcharge}>Upcharge $1</button>
      </div>
    );
  }
}
