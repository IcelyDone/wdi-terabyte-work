import React, { Component } from 'react';
import './App.css';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

const toCelsius = fahrenheit => {
  return (fahrenheit - 32) * 5 / 9;
}

const toFahrenheit = celsius => {
  return (celsius * 9 / 5) + 32;
}

const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const BoilingVerdict = props => {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}


class TemperatureInput extends Component {
  constructor(props) {
    super(props)
    // this.state = {temperature: ''}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { onTemperatureChange } = this.props
    onTemperatureChange(e.target.value)
    // this.setState({temperature: e.target.value})
  }
  
  render() {
    // const { temperature } = this.state
    const { scale, temperature } = this.props
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: '',
      scale: ''
    }
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
  }

  handleCelsiusChange(temperature) {
    this.setState({
      temperature: temperature,
      scale: 'c'
    })
  }

  handleFahrenheitChange(temperature) {
    this.setState({
      temperature: temperature,
      scale: 'f'
    })
  }

  render() {
    const { temperature, scale } = this.state
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
    

    
    return (
      <div>
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
     <div className="App">
       <Calculator />
     </div>
    );
  }
}

export default App;
