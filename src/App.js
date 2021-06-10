import React, { useState } from 'react';
import './App.scss';
import Main from './Components/Main/Main';
import News from './Components/News/News';
import NewsItem from './Components/NewsItem/NewsItem';
import { Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();
  const [currentNewsItem, setCurrentNewsItem] = useState(null);

  function goToNewsItem(item) {
    setCurrentNewsItem(item);
    history.push(`/news/${item.id}`);
  }

  return (
    <div className="App">
      <Switch>
        {currentNewsItem
          ? <Route exact path={`/news/${currentNewsItem.id}`} render={() => <NewsItem item={currentNewsItem} />} />
          : null}
        <Route exact path='/news' render={() => <News goToNewsItem={goToNewsItem} />} />
        <Route exact path='/' render={() => <Main goToNewsItem={goToNewsItem} />} />
      </Switch>
    </div>
  );
}

export default App;
