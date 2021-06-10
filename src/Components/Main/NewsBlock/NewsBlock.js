import React from 'react';
import classes from './NewsBlock.module.scss';
import Button from '../../../Plugins/Button/Button';
import { news } from '../../../Data/news';
import { useHistory } from 'react-router-dom';

function NewsBlock(props) {
    const history = useHistory();
    const buttonContainerStyle = {
        margin: '10px'
    }
    const buttonStyle = {
        padding: '10px 15px',
        fontSize: '0.6rem'
    }

    function goToNews() {
        history.push('/news');
    }

    return (
        <div className={classes.NewsBlock}>
            <ul>
                {news
                    .filter((item, index) => index < 3)
                    .map(item => {
                        return (
                            <li key={item.id} onClick={() => props.goToNewsItem(item)}>
                                <span>{item.date}</span>
                                <h3>{item.title}</h3>
                            </li>
                        )
                    })}
            </ul>
            <Button value='Ко всем новостям' onClick={goToNews} containerStyle={buttonContainerStyle} buttonStyle={buttonStyle} />
        </div>
    )
}

export default NewsBlock;