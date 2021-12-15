import './App.css';
import React, { Component } from 'react';
import { months } from '../../months_data';
import Birthdays from '../BirthDays/Birthdays';

class App extends Component {
  constructor() {
    super();
    this.state = {
      months: months,
    }
  }

  render() {
    console.log(this.state.months)
    return (
      <div className="App">
        <h1>Birthdays</h1>
        <div className='bday-form'>
  
        </div>
        <Birthdays months={this.state.months}/>
      </div>
    );
  }
}

export default App;
