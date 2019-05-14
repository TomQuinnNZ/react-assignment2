import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
    return (
        <p id={props.index} data-id={props.index} className="CharComponent" onClick={props.click}>
            {props.character}
        </p>
    );
}

export default charComponent;