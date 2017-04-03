import React, {Component} from 'react';

class AnswerButton extends Component {
    render() {
        return(
            <button className={this.props.className} onClick={this.props.handler.bind(this)}>
                {this.props.value}
            </button>
        );
    }
}

export default AnswerButton;
