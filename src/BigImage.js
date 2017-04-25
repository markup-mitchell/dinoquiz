import React from 'react';

function BigImage(props) {
        return (
            <div className='image-board'>
                <img src={require(props.src)} alt={props.alt} />
            </div>
        )
};

module.exports = BigImage;
