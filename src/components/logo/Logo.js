import React, {PropTypes} from 'react';

class Logo extends React.Component {
  render() {
    return (
      <img className="logo" src={this.props.imageSrc} width="100" height="100" alt="Logo"/>
    );
  }
}

Logo.propTypes = {
  imageSrc: PropTypes.string
};

export default Logo;
