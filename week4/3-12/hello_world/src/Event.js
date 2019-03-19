import React, { Component } from 'react'

class Event extends Component {
  render() {
    return (
      <div>
        <h1>LOOK AT ME I'M SPINNING! I LOVE {this.props.sportName.toUpperCase()}!</h1>
      </div>
    )
  }
}

export default Event
