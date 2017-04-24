import React, { Component } from 'react';
import logo from './dinologo.png';
import AnswerButton from './SpeciesButton';
import './App.css';
import BigImage from './BigImage';
import DINOSAURS from './Dinosaurs';

class App extends Component {

    constructor() {
        super();
        this.state = {
            species : [
                'Tyrannosaurus',
                'Stegosaurus',
                'Coelophysis',
                'Brachiosaurus',
                'Ankylosaurus',
                'Edmontonia',
                'Lambeosaurus'
            ],
          // all the above should be coming in via Dinoraurs component
          // currentPick: 

            get random() { // This is not ideal. Investigate combining get and set.
                return this.species[Math.floor(Math.random()*this.species.length)]
            },
            get imageSrc(){ // ... or use a separate method to explicitly create a default prop on load.
                return './images/'+this.random+'.jpg'
            },

        }
    }

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
            <h2>{this.state.random}</h2>
            <div className="button-box">
                {
                  this.state.species.sort().map((item, i) => <AnswerButton className="Species-button" value={item} handler={this.speciesHandler} key={i} />)
              }
            </div>
            <BigImage src={this.state.imageSrc} />
        </div>
    </div>
        );
    }
    }

    export default App;
