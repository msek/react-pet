import React, {Component} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import HomePage from '../homepage/HomePage';
import PostEditPage from '../posteditpage/PostEditPage';
import './app.scss';

const Config = require('Config');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      authors: [
        { id: 0, name: "John" },
        { id: 1, name: "Jane" },
        { id: 2, name: "James" }
      ]
    };
  }

  componentDidMount() {
    fetch(`${Config.serverUrl}/posts`)
      .then(res => res.json())
      .then(responseJSON => this.setState({ posts: responseJSON }));
  }

  getPost = (postId) => {
    return this.state.posts.filter(obj => {
      return obj.id === Number(postId);
    });
  };

  addPost = (post) => {
    let posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  updatePost = (post) => {
    let posts = this.state.posts.map(obj => {
      return obj.id === post.id ? post : obj;
    });
    this.setState({ posts });
  };

  deletePost = (postId) => {
    let posts = this.state.posts.filter(obj => {
      return obj.id !== postId;
    });
    this.setState({ posts });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" render={ () =>
              <HomePage posts={this.state.posts}
                        deletePost={this.deletePost} /> }
            />
            <Route path="/post/new" render={ (props) =>
              <PostEditPage updatePost={this.addPost}
                            authors={this.state.authors}
                            {...props} /> }
            />
            <Route path="/post/:postId" render={ props =>
              <PostEditPage getPost={this.getPost}
                            updatePost={this.updatePost}
                            authors={this.state.authors}
                            {...props} /> }
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
