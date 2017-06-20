import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './breadcrumb.scss';

export default class Breadcrumb extends Component {
  static propTypes = {
    postId: PropTypes.number,
    postTitle: PropTypes.string
  };

  render() {
    if(!this.props.postId) {
      return null;
    }

    return (
      <div className="breadcrumbs">
        <Link to="/">Posts </Link>
         > {this.props.postTitle} ({this.props.postId})
      </div>
    );
  }
}
