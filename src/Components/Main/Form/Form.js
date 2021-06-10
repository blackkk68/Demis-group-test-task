import React, { useState } from 'react';
import classes from './Form.module.scss';
import Input from '../../../Plugins/Input/Input';
import Button from '../../../Plugins/Button/Button';
import { textValidation, phoneValidation, emailValidation } from '../../../Functions/InputsValidation';

function Form(props) {
    const [nameValue, setNameValue] = useState('');
    const [addressValue, setAddressValue] = useState('');
    const [phoneValue, setPhoneValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [isNameValid, setIsNameValid] = useState(true);
    const [isAddressValid, setIsAddressValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);

    function nameChangeHandler(evt) {
        setNameValue(evt.target.value);
    }

    function addressChangeHandler(evt) {
        setAddressValue(evt.target.value);
    }

    function phoneChangeHandler(evt) {
        setPhoneValue(evt.target.value);
    }

    function emailChangeHandler(evt) {
        setEmailValue(evt.target.value);
    }

    function submitHandler(evt) {
        evt.preventDefault();
        if (checkValidation()) {
            props.showTable({ nameValue, addressValue, phoneValue, emailValue });
        }
    }

    function checkValidation() {
        setIsNameValid(textValidation(nameValue));
        setIsAddressValid(textValidation(addressValue));
        setIsPhoneValid(phoneValidation(phoneValue));
        setIsEmailValid(emailValidation(emailValue));
        if (textValidation(nameValue) && textValidation(addressValue) && phoneValidation(phoneValue) && emailValidation(emailValue)) {
            return true;
        }
        return false;
    }

    return (
        <div className={classes.Form}>
            <h1>Заполните форму</h1>
            <form onSubmit={submitHandler}>
                <Input type='text' placeholder='ФИО' value={nameValue} onChange={nameChangeHandler} isValid={isNameValid} />
                <Input type='text' placeholder='Адрес' value={addressValue} onChange={addressChangeHandler} isValid={isAddressValid} />
                <Input type='tel' placeholder='Телефон' value={phoneValue} onChange={phoneChangeHandler} isValid={isPhoneValid} />
                <Input type='email' placeholder='Email' value={emailValue} onChange={emailChangeHandler} isValid={isEmailValid} />
                <Button type='submit' value='Отправить' />
            </form>
        </div>
    )
}

export default Form;