import React, { Component } from 'react';
import './App.css';

import fruitData from './components/fruitData'
import FruitInput from './components/FruitInput'
import FruitList from './components/FruitList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
    // console.log(this.state.searchTerm)
    // console.log(e.target.value)
  }

  render() {
    const searchedFruit = fruitData.filter(fruit => fruit.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    return (
      <div className="App">
        <h1>Search for your favorite fruit!</h1>
        <FruitInput handleInputChange={this.handleInputChange} />
        <FruitList fruitList={searchedFruit} />
      </div>
    )
  }
}

export default App;
