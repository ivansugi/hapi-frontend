import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route,IndexRoute, hashHistory } from 'react-router'
import App from './contact/App.js';
import indexContact from './contact/Index.js';
import editContact from './contact/Edit.js';
import './index.css';

ReactDOM.render((
  <Router history={hashHistory}>
   
     <Route path="/" component={App}>
          <IndexRoute component={indexContact}/>
          <Route path="edit/:id" component={editContact}/>
      </Route>
    
  </Router>),
  document.getElementById('root')
);
