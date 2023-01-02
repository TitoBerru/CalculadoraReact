import React from 'react';
import './button.css';

function Button(props) {

    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    };

    return (
        <div
            className={`container-btn ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
            onClick={() => props.click(props.children)}>
            {props.children}
        </div>
    );
}

export default Button;