import React, { Component } from 'react';

class Counter extends Component {
  
  render() {
    return (
      <div>
        <button id={this.props.id} key={this.props.id} className="decrease" onClick={this.props.handleChange} >Decrement</button> 
        {this.props.counter} 
        <button id={this.props.id} key={this.props.id + 0.5} className="increase" onClick={this.props.handleChange} >Increment</button>
      </div>
    );
  }
}

export default Counter;
