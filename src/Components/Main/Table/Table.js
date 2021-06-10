import React from 'react';
import classes from './Table.module.scss';

function Table(props) {

    return (
        <div className={classes.Table}>
            <table>
                <tr>
                    <td>Имя</td>
                    <td>{props.formData.nameValue}</td>
                </tr>
                <tr>
                    <td>Адрес</td>
                    <td>{props.formData.addressValue}</td>
                </tr>
                <tr>
                    <td>Телефон</td>
                    <td>{props.formData.phoneValue}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{props.formData.emailValue}</td>
                </tr>
            </table>
        </div>
    )
}

export default Table;