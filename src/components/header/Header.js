import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/Logo';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import './header.scss';

const Config = require('Config');

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    postId: PropTypes.number,
    postTitle: PropTypes.string
  };

  render() {
    return (
      <header id="header">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <Logo imageSrc={Config.logoUrl} />
            <h1>{this.props.title}</h1>
          </div>
          <div className="col-xs-12 col-sm-6 text-right">
            <Breadcrumb postId={this.props.postId} postTitle={this.props.postTitle} />
          </div>
        </div>
      </header>
    );
  }
}
