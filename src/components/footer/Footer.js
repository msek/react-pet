import React, {Component, PropTypes} from 'react';

class Footer extends Component {
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

Footer.propTypes = {
  content: PropTypes.string
};

export default Footer;
