import React, {PropTypes} from 'react';

class Search extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          Search content
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  content: PropTypes.string
};

export default Search;
