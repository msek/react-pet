import React from 'react';
import Header from '../header/Header';
import Search from '../search/Search';
import Post from '../post/Post';
import Footer from '../footer/Footer';
import 'whatwg-fetch';

class HomePage extends React.Component {
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
              <Post key={post.id} id={post.id} title={post.title} body={post.body} />
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
