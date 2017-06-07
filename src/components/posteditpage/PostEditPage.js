import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    };
  }

  componentDidMount() {
    fetch(`http://jsonplaceholder.typicode.com/post/` + this.props.params.postId)
      .then(res => res.json())
      .then(responseJSON => {
        const post = responseJSON.map(item => item);
        this.setState({ post });
      });
  }

  render() {
    return (
      <div className="container">
        <Header title="React Pet Project" />
        <div className="row">
          <div className="col-xs-12">
            <h3>Edit / Insert Post #{this.props.params.postId}</h3>
            <form action="">
              <div className="form-group">
                <input type="text"
                       className="form-control"
                       id="postTitle"
                       value={this.state.post.title}
                />
              </div>
              <div className="form-group">
                <textarea className="form-control"
                          rows="6"
                value={this.state.post.body} />
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default PostPage;
