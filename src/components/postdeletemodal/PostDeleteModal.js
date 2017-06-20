import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './postdeletemodal.scss';

export default class PostDeleteModal extends Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    confirmDelete: PropTypes.func.isRequired
  };

  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="modal" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={this.props.closeModal}>
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">Delete Post</h4>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete the post?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default"
                      onClick={this.props.closeModal}>
                Nope..
              </button>
              <button type="button" className="btn btn-primary"
                      onClick={this.props.confirmDelete}>
                Yes, delete it!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
