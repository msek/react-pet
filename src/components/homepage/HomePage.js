import React, {Component} from 'react';
import Header from '../header/Header';
import Search from '../search/Search';
import PostList from '../postlist/PostList';
import Footer from '../footer/Footer';
import 'whatwg-fetch';

const Config = require('Config');

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    fetch(`${Config.serverUrl}/posts`)
      .then(res => res.json())
      .then(responseJSON => this.setState({ posts: responseJSON, filteredPosts: responseJSON }));
  }

  handleFilterTextInput = (filterText) => {
    this.setState({ filterText });
    this.setState({ filteredPosts: this.filterPosts(filterText) });
  };

  filterPosts(filterQuery) {
    return this.state.posts.filter(post => {
      return post.body.indexOf(filterQuery) !== -1 || post.title.indexOf(filterQuery) !== -1;
    });
  }

  render() {
    return (
      <div className="container">
        <Header title="React Pet Project #1" />
        <Search onFilterTextInput={this.handleFilterTextInput} filterText={this.state.filterText} />
        <PostList posts={this.state.filteredPosts} />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
