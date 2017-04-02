import React, {Component} from 'react';

class SpeciesButton extends Component {
    render() {
        return(
            <button onClick={this.props.handler}>
                TYRANNOSAURUS
            </button>
        );
    }
}

export default SpeciesButton;
