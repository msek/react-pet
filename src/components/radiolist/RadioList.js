import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './radiolist.css';

export default class RadioList extends Component {
  static propTypes = {
    options: PropTypes.array,
    selectedOption: PropTypes.number,
    submitOption: PropTypes.func
  };

  render() {
    return (
      <div>
        {this.props.options.map(option =>
          <div className="radio" key={option.id}>
            <label>
              <input type="radio" value={option.id} name="postAuthor"
                     checked={this.props.selectedOption === option.id}
                     onChange={this.props.submitOption} />
              {option.firstName} {option.lastName}
            </label>
          </div>
        )}
      </div>
    );
  }
}
