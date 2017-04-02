import React, { Component } from 'react';
import logo from './dinologo.png';
import SpeciesButton from './SpeciesButton';
import './App.css';

class App extends Component {

   handler() {
        console.log("handler invoked");
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Dinosaur Quiz</h2>
          <SpeciesButton />
        </div>
      </div>
    );
  }
}

export default App;
