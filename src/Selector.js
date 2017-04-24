import React from 'react';

function Selector(props) {
    return (
      <ul>
        { props.species.map((species) => 
          <button
              value={species} 
              onClick={props.clickHandler.bind(null, species)} 
              key={species}
              className="Species-button"
          > {species} </button>
        )
        }
      </ul>
    )
  }

module.exports = Selector;
