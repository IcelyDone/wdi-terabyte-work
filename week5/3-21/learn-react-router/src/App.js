import React, { Component } from 'react'
import logo from './logo.svg'
import {Link, Route} from 'react-router-dom'
import './App.css'

import About from './About'
import Results from './Results'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>   
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/results">Results</Link></li>
            <li><Link to="/">Homepage</Link></li>
          </ul>
        </nav>
        <main>
          <Route path="/about" component={About} />
          <Route path="/results" component={Results} />
        </main>
      </div>
    )
  }
}

export default App
