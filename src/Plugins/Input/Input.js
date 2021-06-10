import React, { useState } from 'react';
import classes from './Input.module.scss';

function Input(props) {
    const htmlFor = Math.random().toString(36);
    const [isFocused, setIsFocused] = useState(false);
    let errorMessage = '';

    if (props.type === 'text') {
        errorMessage = 'Заполните поле';
    } else if (props.type === 'tel') {
        errorMessage = 'Введите корректный телефон';
    } else if (props.type === 'email') {
        errorMessage = 'Введите корректный email';
    }

    function focusHandler() {
        if (!props.value.trim()) {
            setIsFocused(true);
        }
    }

    function blurHandler() {
        if (!props.value.trim()) {
            setIsFocused(false);
        }
    }

    return (
        <div className={classes.Input}>
            <input
                className={props.isValid ? null : classes.invalid}
                id={htmlFor}
                type={props.type}
                onFocus={focusHandler}
                onBlur={blurHandler}
                value={props.value}
                onChange={props.onChange}
                maxLength='70' />
            <label className={isFocused && props.isValid ? classes.focused : null} htmlFor={htmlFor} />
            <span className={`${classes.placeholder} ${isFocused || !props.isValid ? classes.focused : null}`}>{props.placeholder}</span>
            <span className={`${classes.errorMessage} ${props.isValid ? null : classes.show}`}>{errorMessage}</span>
        </div>
    )
}

export default Input;