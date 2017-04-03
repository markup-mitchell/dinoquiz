import React, { Component } from 'react';
import logo from './dinologo.png';
import AnswerButton from './SpeciesButton';
import './App.css';

class App extends Component {

  speciesHandler() {
        console.log(this.props.value);
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
              Dinosaur Quiz
          </h1>
          <AnswerButton className="Species-button" value={"Tyrannosaurus Rex"} handler={this.speciesHandler} />
          <AnswerButton className="Species-button" value={"Stegosaurus"} handler={this.speciesHandler} />
          <AnswerButton className="Species-button" value={"Triceratops"} handler={this.speciesHandler} />
          <AnswerButton className="Diet-button" value={"Plants"} handler={this.speciesHandler} />
        </div>
      </div>
    );
  }
}

export default App;
