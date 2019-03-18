import './App.css';

import React, { Component } from 'react';

import Counter from './components/Counter';
import TitleInput from './components/TitleInput';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Set Me When Mounted!</h1>
        <Counter />
        <TitleInput />
      </div>
    );
  }
}

export default App;
