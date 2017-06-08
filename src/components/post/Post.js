import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

require('./post.scss');

class Post extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="row">
            <div className="col-sm-10">
              <h4>{this.props.title}</h4>
              <p>{this.props.body}</p>
            </div>
            <div className="col-sm-2">
              <Link to={'/post/'+this.props.id}>
                <button type="button" className="btn btn-default btn-post-list">Edit</button>
              </Link>
              <button type="button" className="btn btn-default btn-post-list">Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
