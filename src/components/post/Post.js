import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import PostDeleteModal from '../postdeletemodal/PostDeleteModal';
import './post.scss';

export default class Post extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };
  }

  togglePostDeleteModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };

  deletePost = () => {
    this.togglePostDeleteModal();
    this.props.deletePost(this.props.id);
  };

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="row">
            <div className="col-sm-10">
              <h4>{this.props.title}</h4>
              <p>{this.props.body}</p>
            </div>
            <div className="col-sm-2">
              <Link to={'/post/'+this.props.id}>
                <button type="button" className="btn btn-default btn-post-list">
                  Edit
                </button>
              </Link>
              <button type="button" className="btn btn-default btn-post-list"
                      onClick={this.togglePostDeleteModal}>
                Delete
              </button>
            </div>
          </div>
        </div>

        <PostDeleteModal show={this.state.modalOpen} confirmDelete={this.deletePost}
                         closeModal={this.togglePostDeleteModal} />
      </div>
    );
  }
}
