import React, {PropTypes} from 'react';

class Post extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <h4>{this.props.title}</h4>
          <p>{this.props.body}</p>
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
