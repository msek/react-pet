import React, {PropTypes, Component} from 'react';

export default class Logo extends Component {
  static propTypes = {
    imageSrc: PropTypes.string
  };

  render() {
    return (
      <img className="logo" src={this.props.imageSrc} width="100" height="100" alt="Logo"/>
    );
  }
}
