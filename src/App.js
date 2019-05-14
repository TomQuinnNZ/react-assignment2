import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    inputLength: 0
  }

  textChangedHandler = (event) => {
    this.setState({
      inputLength: event.target.value.length
    });
  }

  render = () => {
    return (
      <div className="App">
        <h1>Assignment 2</h1>
        <textarea cols="40" rows="5" onChange={this.textChangedHandler}/>
        <p>Input length: {this.state.inputLength}</p>
      </div>
    );
  }
}

export default App;
