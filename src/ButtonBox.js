import React, { Component } from 'react';
import AnswerButton from './AnswerButton.js';

class ButtonBox extends Component {
  render() {
    return (

      <div className="button-box">

          {
              // <AnswerButton className="Species-button" value={DINOSAURS.Tyrannosaurus.period} handler={this.speciesHandler} />
          }

      <AnswerButton className='Species-button' value={'Stegosaurus'} handler={this.speciesHandler} />
      <AnswerButton className='Species-button' value={'Triceratops'} handler={this.speciesHandler} />
      <AnswerButton className='Diet-button' value={'Plants'} handler={this.speciesHandler} />
      </div>
      // <BigImage src='./Stegosaurus_BW.jpg' alt='Stegosaurus' />
    );
  }
}
export default ButtonBox;
