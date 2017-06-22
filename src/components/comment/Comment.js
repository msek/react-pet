import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import './comment.scss';

export default class Comment extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="row">
            <div className="col-sm-12">
              <h4>{this.props.name}</h4>
              <p>{this.props.body}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
