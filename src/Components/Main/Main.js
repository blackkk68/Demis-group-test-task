import React, { useState } from 'react';
import classes from './Main.module.scss';
import Form from './Form/Form';
import Table from './Table/Table';
import NewsBlock from './NewsBlock/NewsBlock';

function Main(props) {
    const [isTableActive, setIsTableActive] = useState(false);
    const [formData, setFormData] = useState({});

    function showTable(data) {
        setIsTableActive(true);
        setFormData(data);
    }

    return (
        <section className={classes.Main}>
            <NewsBlock goToNewsItem={props.goToNewsItem} />
            {isTableActive
                ? <Table formData={formData} />
                : <Form showTable={showTable} />}
        </section>
    )
}

export default Main;