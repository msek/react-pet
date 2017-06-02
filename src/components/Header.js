import React, {PropTypes} from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
