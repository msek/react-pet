// Set up your application entry point here...
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import HomePage from './components/homepage/HomePage';
import PostPage from './components/posteditpage/PostEditPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={HomePage} />
    <Route path="/post/:postId" component={PostPage}/>
  </Router>
), document.getElementById('app'));
