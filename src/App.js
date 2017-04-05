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
                'Triceratops'
            ]
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
            <div className="button-box">
                {
                    this.state.species.map((item, i) => <AnswerButton className="Species-button" value={item} handler={this.speciesHandler} />)
                }
            </div>
            <BigImage src="./Stegosaurus_BW.jpg" alt="Stegosaurus" />
        </div>
        </div>
        );
    }
    }

    export default App;
