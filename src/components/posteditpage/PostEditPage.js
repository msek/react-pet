import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { savePost } from '../../actions/posts/actionCreators';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import RadioList from '../radiolist/RadioList';
import Comment from '../comment/Comment';
import _ from 'lodash';
import './posteditpage.css';

class PostEditPage extends Component {
  static propTypes = {
    post: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      post: Object.assign({}, props.post),
      postId: props.post.id,
      redirect: false
    };
  }

  componentDidMount() {
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.savePost(this.state.post);
    this.setState({ redirect: true });
  };

  handleAuthorChange = (e) => {
    let post = Object.assign({}, this.state.post, {userId: Number(e.target.value)});
    this.setState({ post });
  };

  handlePostTitleChange = (e) => {
    let post = Object.assign({}, this.state.post, {title: e.target.value});
    this.setState({ post });
  };

  handlePostBodyChange = (e) => {
    let post = Object.assign({}, this.state.post, {body: e.target.value});
    this.setState({ post });
  };

  render() {
    if(this.state.redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <Header title="React Pet Project" postId={this.props.post.id} postTitle={this.state.post.title} />
        <div className="row">
          <div className="col-xs-12">
            <h3>
              {this.state.postId === -1 ? `Create New Post` : `Edit Post #` + this.state.postId}
            </h3>
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-group">
                <input type="text"
                       className="form-control"
                       onChange={this.handlePostTitleChange}
                       value={this.state.post.title} />
              </div>
              <div className="form-group">
                <textarea className="form-control"
                          rows="6"
                          onChange={this.handlePostBodyChange}
                          value={this.state.post.body} />
              </div>

              <RadioList options={this.props.state.users}
                         selectedOption={this.state.post.userId}
                         submitOption={this.handleAuthorChange} />

              <button disabled={this.state.post.title === '' ||
                                 this.state.post.body === '' ||
                                 this.state.post.userId === -1}
                      className="btn btn-default" type="submit">
                Save changes
              </button>
              <Link to="/" className="btn btn-default">Cancel</Link>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h3>Comments</h3>
            {this.props.comments.map(comment =>
              <Comment key={comment.id} name={comment.name} body={comment.body} />
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  let post = {
    id: -1,
    userId: '',
    title: '',
    body: ''
  };
  let comments = [];

  if (_.has(props, 'match.params.postId')) {
    const postId = props.match.params.postId;

    const getPostById = (postId) => state.posts.posts.filter(obj => obj.id === Number(postId));
    post = getPostById(postId)[0];

    const getCommentsByPostId = (postId) => state.posts.comments.filter(obj => obj.postId === Number(postId));
    comments = getCommentsByPostId(postId);
  }

  return {
    state: state.posts,
    post,
    comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    savePost: post => {
      dispatch(savePost(post));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostEditPage);
