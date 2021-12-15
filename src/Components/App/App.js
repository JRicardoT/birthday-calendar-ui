import './App.css';
import React, { Component } from 'react';
import { months } from '../../months_data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      months: months,
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Birthdays</h1>
        <div className='bday-form'>
  
        </div>
        <div className='bday-container'>
  
        </div>
      </div>
    );
  }
}

export default App;
