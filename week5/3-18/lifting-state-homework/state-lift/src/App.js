import './App.css';

import React, { Component } from 'react';

import Counter from './components/Counter';
import TitleInput from './components/TitleInput';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mountMessage: 'Set Me When Mounted!',
      counterCounts: [0]
    }
  }

  componentDidMount() {
    this.setState({
      mountMessage: 'My React Counter'
    })
  }

  handleChange = event => {
    const { id, className } = event.target
    const tempCountArray = this.state.counterCounts
    if (className === 'decrease') {
      tempCountArray[id] -= 1
    } else if (className === 'increase') {
      tempCountArray[id] += 1
    }
    this.setState({counterCounts: tempCountArray})
  }

  updateTitle = event => {
    this.setState({mountMessage: event.target.value})
  }
  
  handleChangeAll(sign) {
    const tempChangedArray = this.state.counterCounts.map(num => (sign === '+' ? num+=1 : num-=1))
    this.setState({counterCounts: tempChangedArray})
  }

  addCounter = () => {
    const tempAddedArray = this.state.counterCounts
    tempAddedArray.push(0)
    this.setState({counterCounts: tempAddedArray})
  }

  render() {
    console.log(this.state.counterCounts)
    const counters = this.state.counterCounts.map((num,index) => (<Counter id={index} key={index} counter={num} handleChange={this.handleChange} />))
    return (
      <div className="App">
        <h1>{this.state.mountMessage}</h1>
        <button onClick={() => this.handleChangeAll('-')}>Decrement All</button>
        <button onClick={() => this.handleChangeAll('+')}>Increment All</button>
        {counters}
        <TitleInput updateTitle={this.updateTitle} />
        <br />
        <button onClick={this.addCounter}>Add a counter!</button>
        <br />
      </div>
    );
  }
}

export default App;
