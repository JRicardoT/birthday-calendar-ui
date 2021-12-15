import React, { Component} from "react";
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      month: '',
      day: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  createBday = event => {
    event.preventDefault();
    const newBday = {
      name: this.state.name,
      month: parseInt(this.state.month),
      day: parseInt(this.state.day)
    }
    console.log(newBday)
    this.clearInputs()
    this.props.submitBday(newBday)
  }

  clearInputs = () => {
    this.setState({ name: '', month: '', day: ''})
  }

  render() {
    return (
      <form className='bday-form'>
        <input 
          type='text'
          name='name'
          placeholder='Name:'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
          />
        <input 
          type='number'
          name='month'
          placeholder='Month:'
          value={this.state.month}
          onChange={event => this.handleChange(event)}
          />
        <input 
          type='number'
          name='day'
          placeholder='Day:'
          value={this.state.day}
          onChange={event => this.handleChange(event)}
          />
        <button className='add-bday-bttn' onClick={event => this.createBday(event)}>Add this Birthday!</button>
      </form>
    )
  }
}

export default Form;