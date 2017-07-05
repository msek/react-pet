import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import RadioList from '../radiolist/RadioList';
import Comment from '../comment/Comment';
import './posteditpage.css';

class PostEditPage extends Component {
  static propTypes = {
    match: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.state = {
      post: {
        id: Number(this.props.match.params.postId) || -1,
        title: '',
        body: '',
        userId: -1
      },
      comments: [],
      postId: Number(this.props.match.params.postId) || -1,
      redirect: false
    };
  }

  componentDidMount() {
    this.state.postId !== -1 && this.fetchPostAndComments(this.state.postId);
  }

  fetchPostAndComments = (postId) => {
    let post = this.props.getPost(postId);
    if(post.length === 0) {
      this.setState({ redirect: true });
    } else {
      this.setState({ post : post[0] });
      // get comments for post
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.updatePost(this.state.post);
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
        <Header title="React Pet Project" postId={this.state.postId} postTitle={this.state.post.title} />
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
                       value={this.props.state.posts[this.state.postId].title} />
              </div>
              <div className="form-group">
                <textarea className="form-control"
                          rows="6"
                          onChange={this.handlePostBodyChange}
                          value={this.props.state.posts[this.state.postId].body} />
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
            {this.state.comments.map(comment =>
              <Comment key={comment.id} name={comment.name} body={comment.body} />
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const getPostById = (postId) => {
    return state.posts.posts.filter(obj => {
      return obj.id === Number(postId);
    });
  };

  return {
    state: state.posts,
    post: getPostById(2)
  };
};

export default connect(mapStateToProps)(PostEditPage);
