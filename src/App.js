import React, { Component } from 'react';
import logo from './dinologo.png';
import AnswerButton from './SpeciesButton';
import './App.css';
import BigImage from './BigImage';
import DINOSAURS from './Dinosaurs';

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
          <div className="button-box">
          <AnswerButton className="Species-button" value={DINOSAURS.Tyrannosaurus.period} handler={this.speciesHandler} />
          <AnswerButton className="Species-button" value={"Stegosaurus"} handler={this.speciesHandler} />
          <AnswerButton className="Species-button" value={"Triceratops"} handler={this.speciesHandler} />
          <AnswerButton className="Diet-button" value={"Plants"} handler={this.speciesHandler} />
          </div>
          <BigImage src="./Stegosaurus_BW.jpg" alt="Stegosaurus" />
        </div>
      </div>
    );
  }
}

export default App;
