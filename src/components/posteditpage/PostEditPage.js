import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Comment from '../comment/Comment';

const Config = require('Config');

export default class PostEditPage extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      post: {
        title: '',
        body: ''
      },
      comments: [],
      selectedOption: 'user1',
      postId: Number(this.props.match.params.postId)
    };
  }

  componentDidMount() {
    fetch(`${Config.serverUrl}/posts/${this.state.postId}`)
      .then(res => res.json())
      .then(responseJSON => { this.setState({ post: responseJSON }); });
    fetch(`${Config.serverUrl}/posts/${this.state.postId}/comments`)
      .then(res => res.json())
      .then(responseJSON => { this.setState({ comments: responseJSON }); });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    alert(this.state.selectedOption);
  };

  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.value });
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
    return (
      <div>
        <Header title="React Pet Project" postId={this.state.postId} postTitle={this.state.post.title} />
        <div className="row">
          <div className="col-xs-12">
            <h3>
              { this.state.postId ? `Edit Post #` + this.state.postId : `Create New Post` }
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
                  <input type="radio" value="user1" name="postAuthor"
                         checked={this.state.selectedOption === 'user1'}
                         onChange={this.handleOptionChange} />
                  User 1
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="user2" name="postAuthor"
                         checked={this.state.selectedOption === 'user2'}
                         onChange={this.handleOptionChange} />
                  User 2
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="user3" name="postAuthor"
                         checked={this.state.selectedOption === 'user3'}
                         onChange={this.handleOptionChange} />
                  User 3
                </label>
              </div>

              <button disabled={ this.state.post.title === '' || this.state.post.body === '' }
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
