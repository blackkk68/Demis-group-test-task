import React from 'react';
import classes from './NewsItem.module.scss';
import Button from '../../Plugins/Button/Button';
import { useHistory } from 'react-router-dom';

function NewsItem(props) {
    const history = useHistory();
    const item = props.item;

    function goBack() {
        history.goBack();
    }

    return (
        <section className={classes.NewsItem}>
            <div className={classes.textContainer}>
                <span>{item.date}</span>
                <h1>{item.title}</h1>
                {item.paragraphs.map((item, index) => <p key={item.id + String(index)}>{item}</p>)}
            </div>
            <Button onClick={goBack} value='Назад' />
        </section>
    )
}

export default NewsItem;