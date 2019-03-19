import React, { Component } from 'react';
import Event from './Event';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const sport = "soccer"
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Event sportName={sport}/>
{/*
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
*/}
        </header>
      </div>
    );
  }
}

export default App;
