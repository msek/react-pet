import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './search.scss';

export default class Search extends Component {
  static propTypes = {
    filterText: PropTypes.string,
    onFilterTextInput: PropTypes.func
  };

  handleFilterTextInputChange = (e) => {
    this.props.onFilterTextInput(e.target.value);
  };

  render() {
    return (
      <div className="row" id="menu">
        <div className="col-xs-12 col-sm-4">
          <form action="">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search"
                     value={this.props.filterText}
                     onChange={this.handleFilterTextInputChange}
              />
              <span className="input-group-addon" id="search">Go!</span>
            </div>
          </form>
        </div>
        <div className="col-xs-12 col-sm-8">
          <Link to="/post/new">
            <button type="button" className="btn btn-default pull-right">Add Post</button>
          </Link>
        </div>
      </div>
    );
  }
}
