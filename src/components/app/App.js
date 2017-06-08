import React, {Component} from 'react';
import Route, { BrowserRouter as Router } from 'react-router-dom';
import Header from '../header/Header';
import HomePage from '../homepage/HomePage';
import PostEditPage from '../posteditpage/PostEditPage';
import Footer from '../footer/Footer';
import './app.scss';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header title="React Pet Project #1" />
          <Route exact path="/" component={HomePage} />
          <Route path="/post/:postId" component={PostEditPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}
