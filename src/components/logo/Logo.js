import React, {Component} from 'react';
import PropTypes from 'prop-types';

require('./logo.scss');

export default class Logo extends Component {
  static propTypes = {
    imageSrc: PropTypes.string
  };

  render() {
    return (
      <img className="logo" src={this.props.imageSrc} width="80" height="80" alt="Logo"/>
    );
  }
}
