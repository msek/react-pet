import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class Post extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <h4>{this.props.title}</h4>
          <p>{this.props.body}</p>
          <Link to={'/post/'+this.props.id}>
            <button type="button" className="btn btn-default pull-right">Edit</button>
          </Link>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Post;
