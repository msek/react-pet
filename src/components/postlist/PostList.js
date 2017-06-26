import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Post from '../post/Post';
import 'whatwg-fetch';
import './postlist.css';

export default class PostList extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    deletePost: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          {this.props.posts.map(post =>
            <Post key={post.id} id={post.id} title={post.title} body={post.body}
                  deletePost={this.props.deletePost} />
          )}
        </div>
      </div>
    );
  }
}
