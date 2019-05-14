import React from 'react';

const ValidationComponent = (props) => {

    const result;

    if (props.inputLength < 5) {
        result = 'Text too short';
    }
    else result = '';

    return (
        <div className="ValidationComponent">
            <p>{result}</p>
        </div>
    );
}