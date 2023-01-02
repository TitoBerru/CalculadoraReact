import React from 'react';
import './ClearButton.css';

const ClearButton = (props) => (
    <div className="btn-clear" onClick={props.clickClear}>
        {props.children}
    </div>
);

export default ClearButton;