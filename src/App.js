import React, { Component } from 'react';
import './App.css';
import DINOSAURS from './Dinosaurs';
import BigImage from './BigImage';
import Selector from './Selector';

class App extends Component {

  constructor() {
      super();
      this.state = {
        currentSelection: 'egg',
        species: Object.keys(DINOSAURS)
      }
  }
  
  clickHandler(value) {
    this.setState({currentSelection: value});
  }

  pickRandom(array) { // pass 'random' pick to setState
    let nextPick =  array[Math.floor(Math.random() * array.length)];
    nextPick === this.state.currentSelection ? // avoids replicating current selection but destroys reusability of function
      this.pickRandom(array)
      :
      this.clickHandler(nextPick); // the use of clickHandler also limits applicablility
  }

  render() {
      return (
      <div className="App">
        <Selector
          clickHandler={this.clickHandler.bind(this)}
          species={this.state.species}
          pickRandom={this.pickRandom.bind(this)}/>
        <BigImage
          src={'./images/'+this.state.currentSelection+'.jpg'} />
      </div>
      );
  }
}
    export default App;
