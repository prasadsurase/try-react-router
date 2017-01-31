import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import About from './components/About';
import Repos from './components/Repos';
import Repo from './components/Repo';

ReactDOM.render(
  (
    <Router history={ hashHistory }>
      <Route path='/' component={ App }>
        <Route path='/repos' component={ Repos }>
          <Route path='/repos/:userName/:repoName' component={ Repo }/>
        </Route>
        <Route path='/about' component={ About }/>
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
