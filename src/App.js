import React, { Component } from 'react';
import AnswerButton from './AnswerButton';
import './App.css';
import DINOSAURS from './Dinosaurs';
import BigImage from './BigImage';

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

        <div className="board">
          { this.state.species.map((species) => 
            <AnswerButton 
              value={species} 
              className="Species-button" 
              handler={this.clickHandler.bind(this)} 
              key={species} 
            />) 
          }
        </div>
        <BigImage src={'./images/'+this.state.currentSelection+'.jpg'} />
      </div>
      );
  }
}

    export default App;
