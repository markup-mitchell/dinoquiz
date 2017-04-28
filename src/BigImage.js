import React from 'react';
import PropTypes from 'prop-types';

function BigImage(props) {
  return (
    <div className='image-board'>
      <img src={require(props.src)} alt={props.alt} />
    </div>
  )
};

igImage.propTypes = {
  src: PropTypes.string.isRequired
}

module.exports = BigImage;
