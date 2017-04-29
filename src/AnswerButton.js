import React from 'react';

function AnswerButton(props) {
  return(
    <button className={props.className} onClick={props.handler.bind(null, props.value)}>
        {props.value}
    </button>
  );
}

export default AnswerButton;
