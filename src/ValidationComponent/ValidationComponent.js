import React from 'react';
import './ValidationComponent.css';

const validationComponent = (props) => {

    let result = '';

    if (props.inputLength < 5) {
        result = 'Text too short';
    }
    else result = '';

    // Use ternary operator to return different paragraph element based on input check
    return (
            props.inputLength > 5 ? 
                <p className="ValidationSuccess">Text is long enough.</p> :
                <p className="ValidationFail">Text too short!</p>
    );
}

export default validationComponent;