import React, {PropTypes} from 'react';
import Logo from '../logo/Logo';

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="row">
          <div className="col-xs-12">
            <Logo imageSrc="http://lorempixel.com/200/200" />
            <h1>{this.props.title}</h1>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
