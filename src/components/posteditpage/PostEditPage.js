import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Comment from '../comment/Comment';

const Config = require('Config');

export default class PostEditPage extends Component {
  static propTypes = {
    getPost: PropTypes.func,
    updatePost: PropTypes.func,
    match: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      post: {
        id: Number(this.props.match.params.postId) || -1,
        title: '',
        body: '',
        author: ''
      },
      comments: [],
      postId: Number(this.props.match.params.postId) || -1,
      redirect: false
    };
  }

  componentDidMount() {
    if(this.state.postId !== -1) {
      this.getPost(this.state.postId);
      fetch(`${Config.serverUrl}/posts/${this.state.postId}/comments`)
        .then(res => res.json())
        .then(responseJSON => { this.setState({ comments: responseJSON }); });
    }
  }

  getPost = (postId) => {
    let post = this.props.getPost(postId);
    post.length === 0 ? this.setState({ redirect: true }) : this.setState({ post : post[0] });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.updatePost(this.state.post);
    this.setState({ redirect: true });
  };

  handleOptionChange = (e) => {
    let post = Object.assign({}, this.state.post, {author: Number(e.target.value)});
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
              { this.state.postId === -1 ? `Create New Post` : `Edit Post #` + this.state.postId}
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

              <div className="radio">
                <label>
                  <input type="radio" value="0" name="postAuthor"
                         checked={this.state.post.author === 0}
                         onChange={this.handleOptionChange} />
                  User 1
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="1" name="postAuthor"
                         checked={this.state.post.author === 1}
                         onChange={this.handleOptionChange} />
                  User 2
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="2" name="postAuthor"
                         checked={this.state.post.author === 2}
                         onChange={this.handleOptionChange} />
                  User 3
                </label>
              </div>

              <button disabled={ this.state.post.title === '' ||
                                 this.state.post.body === '' ||
                                 this.state.post.author === '' }
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
