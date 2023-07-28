import React, { Component } from "react";
import Input from "./Form";
import Display from "./Display";
import "./styles.css"

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      location : "London",
      tempName : "London",
      temperature : " ",
      pressure : " ",
      humidity : " ",
      condition : " ",
      cloud : " ",
      wind : " ",
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      location : this.state.tempName
    })
    this.componentDidMount()
    console.log(this.state)
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      tempName : e.target.value
    })
  }

  async componentDidMount() {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=a2fddff4f9f8442da39151158230607&q=${this.state.tempName}`, {mode: 'cors'})
    const json = await response.json();
    this.setState({
      ...this.state,
      temperature : json.current.temp_c,
      pressure: json.current.pressure_mb,
      humidity: json.current.humidity,
      condition: json.current.condition.text,
      cloud: json.current.cloud,
      wind: json.current.wind_kph
    })
  }

  render() {
    return (
    <div className="main">
      <div className="input">
      <Input data = {this.state} onDataChange = {this.handleChange} onDataSubmit = {this.handleSubmit}/>
      <Display className = "dishplay" data = {this.state} />
      </div>
    </div>
    );
  }
}

export default App;
