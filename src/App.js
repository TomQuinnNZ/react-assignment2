import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    input: '',
    inputLength: 0
  }

  textChangedHandler = (event) => {
    this.setState({
      input: event.target.value,
      inputLength: event.target.value.length
    });
  }

  charClicked = (event) => {
    console.log(`Index is: ${event.target.dataset.id}`);
    const i = event.target.dataset.id;

    let newInput = [...this.state.input];
    newInput.splice(i, 1);

    const stringInput = newInput.join("");

    this.setState({
      input: stringInput
    });

    console.log(`state: ${newInput}`);
  }

  render = () => {
    return (
      <div className="App">
        <h1>Assignment 2</h1>
        <textarea cols="40" rows="5" value={this.state.input} onChange={this.textChangedHandler} >
          {this.state.input}
        </textarea>
        <ValidationComponent
          inputLength={this.state.inputLength} >
        </ValidationComponent>
        <p>Input length: {this.state.inputLength}</p>
        <div className="Characters">
          {[...this.state.input].map((value, index) => {
            return (<CharComponent 
                      index={index}
                      character={value}
                      click={this.charClicked} >
                    </CharComponent>
                    )
          })}
        </div>

      </div>
    );
  }
}

export default App;
