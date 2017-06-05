import React from 'react';
import Header from './Header';
import Search from './Search';
import Post from './Post';
import Footer from './Footer';
import 'whatwg-fetch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      posts: []
    };

    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
  }

  componentDidMount() {
    fetch(`http://jsonplaceholder.typicode.com/posts`)
      .then(res => res.json())
      .then(responseJSON => {
        const posts = responseJSON.map(item => item);
        this.setState({ posts });
      });
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    let filteredPosts = this.state.posts.filter(post => {
        return post.body.indexOf(this.state.filterText) !== -1;
    });

    return (
      <div className="container">
        <Header title="React Pet Project #1" />
        <Search onFilterTextInput={this.handleFilterTextInput.bind(this)} filterText={this.state.filterText} />
        <div className="row">
          <div className="col-xs-12">
            {filteredPosts.map(post =>
              <Post key={post.id} title={post.title} body={post.body} />
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
