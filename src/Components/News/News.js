import React from 'react';
import classes from './News.module.scss';
import Button from '../../Plugins/Button/Button';
import { news } from '../../Data/news';
import { useHistory } from 'react-router-dom';

function News(props) {
    const history = useHistory();

    function goToMain() {
        history.push('/');
    }

    return (
        <section className={classes.News}>
            <Button onClick={goToMain} value='На главную' />
            <h1>Новости</h1>
            <ul>
                {news.map(item => {
                    return (
                        <li key={item.id} onClick={() => props.goToNewsItem(item)}>
                            <span>{item.date}</span>
                            <h3>{item.title}</h3>
                            <p>{item.paragraphs[0]}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default News;