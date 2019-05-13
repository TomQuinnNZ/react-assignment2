import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    inputLenght: 0
  }

  textChangedHandler = (event) => {
    this.setState({
      
    });
  }

  render = () => {
    return (
      <div className="App">
        <h1>Assignment 2</h1>
        <input type="text" onChange={textChangedHandler}/>
      </div>
    );
  }
}

export default App;
