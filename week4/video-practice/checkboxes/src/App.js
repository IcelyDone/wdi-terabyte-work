import React, { Component } from 'react'

import TodoItem from './TodoItem'

import todosData from "./todosData"

class App extends Component {
  constructor() {
    super() 
    this.state = todosData
  }
  render() {
    const todosComponents = this.state.map(item => <TodoItem item={item} />)
    return (
      <div>
        <ul style={{listStyleType: 'none', backgroundColor: '#BB00BB'}}>
        {todosComponents}
        </ul>
      </div>
    )
  }
}

export default App
