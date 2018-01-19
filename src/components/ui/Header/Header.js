import React, { PureComponent } from 'react'

export default class Header extends PureComponent {

  render() {
    return (
      <h1>{this.props.title}</h1>
    )
  }
}