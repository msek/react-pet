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
        <Header title="React Pet Project #1" />
        <div className="row">
          <div className="col-xs-12">
            Editing post no. {this.props.params.postId}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default PostPage;
