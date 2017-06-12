import React, {Component} from 'react';
import Search from '../search/Search';
import PostList from '../postlist/PostList';
import _ from 'lodash';
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
    this.filterPosts();
  };

  filterPosts = _.debounce(() => {
    let filteredPosts = this.state.posts.filter(post =>
      post.body.indexOf(this.state.filterText) !== -1 || post.title.indexOf(this.state.filterText) !== -1
    );
    this.setState({ filteredPosts });
  }, 500);

  render() {
    return (
      <div>
          <Search onFilterTextInput={this.handleFilterTextInput} filterText={this.state.filterText} />
          <PostList posts={this.state.filteredPosts} />
      </div>
    );
  }
}

export default HomePage;
