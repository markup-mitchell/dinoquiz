import React, { Component } from 'react';
import './App.css';
import DINOSAURS from './Dinosaurs';
import BigImage from './BigImage';
import Selector from './Selector';
class App extends Component {

  constructor() {
      super();
      this.state = {
        currentSelection: 'Tyrannosaurus',
        species: Object.keys(DINOSAURS)
      }
  }
  
  
  clickHandler(value) {
    console.log(value);
  }

  render() {
      return (
      <div className="App">
        <Selector clickHandler={this.clickHandler.bind(this)} species={this.state.species} />
        <BigImage src={'./images/'+this.state.currentSelection+'.jpg'} />
      </div>
      );
  }
}

    export default App;
