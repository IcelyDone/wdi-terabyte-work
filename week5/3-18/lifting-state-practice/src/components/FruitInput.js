import React, { Component } from 'react'

class FruitInput extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.handleInputChange(event)
  }

  render() {
    return (
      <input type="text" onChange={this.handleChange} />
    )
  } 
}

export default FruitInput
