import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Config = require('Config');

export default class PostPage extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      post: []
    };
  }

  componentDidMount() {
    fetch(`${Config.serverUrl}/posts/${this.props.params.postId}`)
      .then(res => res.json())
      .then(responseJSON => {
        const post = responseJSON;
        this.setState({ post });
      });
  }

  render() {
    return (
      <div className="container">
        <Header title="React Pet Project" />
        <div className="row">
          <div className="col-xs-12">
            <h3>Edit / Insert Post #{this.props.params.postId}</h3>
            <form action="">
              <div className="form-group">
                <input type="text"
                       className="form-control"
                       id="postTitle"
                       value={this.state.post.title}
                />
              </div>
              <div className="form-group">
                <textarea className="form-control"
                          rows="6"
                value={this.state.post.body} />
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
