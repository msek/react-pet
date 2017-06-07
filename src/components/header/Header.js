import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/Logo';

const Config = require('Config');

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <header id="header">
        <div className="row">
          <div className="col-xs-12">
            <Logo imageSrc={Config.logoUrl} />
            <h1>{this.props.title}</h1>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
