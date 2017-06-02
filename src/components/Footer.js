import React, {PropTypes} from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>Footer content</footer>
    );
  }
}

Footer.propTypes = {
  content: PropTypes.string
};

export default Footer;
