import React from 'react';
import classes from './Button.module.scss';

function Button(props) {

    return (
        <div className={classes.Button} style={props.containerStyle}>
            <button style={props.buttonStyle} type={props.type || 'button'} onClick={props.onClick}>{props.value}</button>
        </div>
    )
}

export default Button;