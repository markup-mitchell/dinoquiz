import React from 'react';

function Selector(props) {
    return (
      <div className='button-board'>
        
          <button 
            className="Species-button" 
            onClick={props.pickRandom.bind(null, props.species)}>
            Random
          </button>

        { props.species.map((species) => 
          <button
              value={species} 
              onClick={props.clickHandler.bind(null, species)} 
              key={species}
              className="Species-button">
          {species}
          </button>
        )
        }
      </div>
    )
  }

module.exports = Selector;
