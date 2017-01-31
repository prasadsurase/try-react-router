import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import About from './components/About';
import Repos from './components/Repos';

ReactDOM.render((
  <Router history={ hashHistory }>
    <Route path='/' component={ App }/>
    <Route path='/about' component={ About }/>
    <Route path='/repos' component={ Repos }/>
  </Router>
  ),document.getElementById('root')
);
