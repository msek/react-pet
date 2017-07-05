import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Post from '../post/Post';
import 'whatwg-fetch';
import './postlist.css';

const mapStateToProps = state => {
  return {
    state: state.posts
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchPosts: () => dispatch(fetchPosts()),
//     fetchComments: fetchComments
//   };
// };

class PostList extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          {this.props.state.posts.map(post =>
            <Post key={post.id} id={post.id} title={post.title} body={post.body} />
          )}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(PostList);
