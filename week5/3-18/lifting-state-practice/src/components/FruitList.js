import React, { Component } from 'react'

class FruitList extends Component {
  render() {
    const lisOfFruit = this.props.fruitList.map((fruit,index) => <li key={index}>{fruit}</li>)
    return (
      <ul style={{listStyleType: 'none'}}>
        {lisOfFruit}
      </ul>
    )
  } 
}

export default FruitList 
