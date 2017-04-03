import React, {Component} from 'react';

class SpeciesButton extends Component {
    render() {
        return(
            <button onClick={this.props.handler.bind(this)}>
                {this.props.value}
            </button>
        );
    }
}

export default SpeciesButton;
