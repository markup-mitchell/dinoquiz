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

  pickRandom(array) { // pass random pick to setState
    this.clickHandler(array[Math.floor(Math.random() * array.length)]);
  }

  render() {
      return (
      <div className="App">
        <Selector clickHandler={this.clickHandler.bind(this)} species={this.state.species} pickRandom={this.pickRandom.bind(this)}/>
        <BigImage src={'./images/'+this.state.currentSelection+'.jpg'} />
      </div>
      );
  }
}


    export default App;
