import React, { Component } from 'react';
import logo from './dinologo.png';
import SpeciesButton from './SpeciesButton';
import './App.css';

class App extends Component {

  speciesHandler() {
        console.log("handler invoked");
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Dinosaur Quiz</h2>
          <SpeciesButton handler={this.speciesHandler} />
        </div>
      </div>
    );
  }
}

export default App;
