import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import HomePage from '../homepage/HomePage';
import PostEditPage from '../posteditpage/PostEditPage';
import './app.scss';

const Config = require('Config');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch(`${Config.serverUrl}/posts`)
      .then(res => res.json())
      .then(responseJSON => this.setState({ posts: responseJSON }));
  }

  deletePost = (postId) => {
    let posts = this.state.posts.filter(obj => {
      return obj.id !== postId;
    });
    this.setState({ posts});
  };

  getPost = (postId) => {
    return this.state.posts.filter(obj => {
      return obj.id !== postId;
    });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" render={() =>
            <HomePage posts={this.state.posts}
                      deletePost={this.deletePost} />}
          />
          <Route path="/post/:postId"
                 component={PostEditPage}
                 updatePost={this.updatePost}
          />
          <Route path="/post/new"
                 component={PostEditPage}
                 updatePost={this.addPost}
          />
        </div>
      </Router>
    );
  }
}
