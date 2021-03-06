import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
  static propTypes = {
    content: PropTypes.string
  };

  render() {
    return (
      <footer>
        <div className="panel panel-default">
          <div className="panel-body text-center">
            Copyright 2017
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
