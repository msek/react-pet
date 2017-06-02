import React from 'react';
import Header from './Header';
import Search from './Search';
import Footer from './Footer';
import 'whatwg-fetch';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch(`http://jsonplaceholder.typicode.com/posts`)
      .then(res => res.json())
      .then(responseJSON => {
        const posts = responseJSON.map(item => item);
        this.setState({ posts });
      });
  }

  render() {
    return (
      <div className="container">
        <Header title="React Pet Project #1" />
        <Search />
        <div className="row">
          <div className="col-xs-12">
            <h2>Posts</h2>
            <ul>
              {this.state.posts.map(post =>
                <li key={post.id}>{post.body}</li>
              )}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
