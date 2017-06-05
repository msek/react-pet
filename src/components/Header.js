import React, {PropTypes} from 'react';

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="row">
          <div className="col-xs-12">
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
