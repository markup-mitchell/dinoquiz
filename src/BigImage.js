import React from 'react';

function BigImage(props) {
        return (
            <img src={require(props.src)} alt={props.alt} />
        )
};

module.exports = BigImage;
