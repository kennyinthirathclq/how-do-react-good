import React, { Component } from 'react';
import Header from '../Header/Header'
import './List.css';

const HELLO_WORLD = ['Hello','World','!'];
export default class List extends Component {

  constructor(props) {
    super(props)

    this.state = {
      'prices' : [1,2,3],
      'status' : 'unmounted',
      'color' : 'blue'
    }

    this.upcharge = this.upcharge.bind(this)
    this.handleText = this.handleText.bind(this)
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

  handleText(event) {
    this.setState({'color' : event.target.value})    
  }

  render() {
    return (
      <div>
        <Header title={`Lifecycle Status? ${this.state.status}`}/>
        <ul className='List' style={{color:this.state.color}}>
          {this.state.prices.map((val, ind) => <li>${`${val.toFixed(2)}`}</li>)}
        </ul>
        <button onClick={this.upcharge}>Upcharge $1</button>
        <input type='text' onChange={this.handleText} value={this.state.color}></input>
      </div>
    );
  }
}
