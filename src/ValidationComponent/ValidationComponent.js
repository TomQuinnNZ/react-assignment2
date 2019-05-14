import React from 'react';
import './ValidationComponent.css';

const validationComponent = (props) => {

    let result = '';

    if (props.inputLength < 5) {
        result = 'Text too short';
    }
    else result = '';

    return (
        <p className="ValidationComponent">{result}</p>
    );
}

export default validationComponent;