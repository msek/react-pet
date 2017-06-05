import React, {PropTypes} from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

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
          <button type="button" className="btn btn-default pull-right">Add Post</button>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  filterText: PropTypes.string
};

export default Search;
