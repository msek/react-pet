import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchPosts, fetchComments } from '../../actions/posts/actionCreators';

import HomePage from '../homepage/HomePage';
import PostEditPage from '../posteditpage/PostEditPage';
// import _ from 'lodash';
import './app.css';


const mapStateToProps = (state) => {
  return {
    posts: fetchPosts(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchComments: fetchComments
  };
};

class App extends Component {
  static propTypes = {
    posts: PropTypes.array,
    fetchPosts: PropTypes.func,
    fetchComments: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      searchParams: ''
    };
  }

  componentDidMount() {
  }

  // fetchPosts = () => {
  //   fetch(`${Config.serverUrl}/posts`)
  //     .then(res => res.json())
  //     .then(responseJSON => this.setState({posts: responseJSON}));
  // };

  // getPost = (postId) => {
  //   return this.state.posts.filter(obj => {
  //     return obj.id === Number(postId);
  //   });
  // };
  //
  // addPost = (post) => {
  //   post.id = _.last(this.state.posts).id + 1;
  //   let posts = [...this.state.posts, post];
  //   this.setState({ posts });
  // };
  //
  // updatePost = (post) => {
  //   let posts = this.state.posts.map(obj => {
  //     return obj.id === post.id ? post : obj;
  //   });
  //   this.setState({ posts });
  // };
  //
  // deletePost = (postId) => {
  //   let posts = this.state.posts.filter(obj => {
  //     return obj.id !== postId;
  //   });
  //   this.setState({ posts });
  // };

  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => <HomePage />} />
            <Route path="/post/new" render={(props) =>
              <PostEditPage updatePost={this.addPost}
                            authors={this.state.authors}
                            {...props} />} />
            <Route path="/post/:postId" render={props =>
              <PostEditPage getPost={this.getPost}
                            updatePost={this.updatePost}
                            authors={this.state.authors}
                            {...props} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
