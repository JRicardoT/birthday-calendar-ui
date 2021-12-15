import './App.css';
import React, { Component } from 'react';
import { months } from '../../months_data';
import Birthdays from '../BirthDays/Birthdays';
import { getAllBdays } from '../../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      months: months,
      birthdays: []
    }
  }

  componentDidMount() {
    getAllBdays()
      .then(data => this.setState({ birthdays: data}))
  }

  render() {
    return (
      <div className="App">
        <h1>Birthdays</h1>
        <Birthdays months={this.state.months} birthdays={this.state.birthdays} />
      </div>
    );
  }
}

export default App;
