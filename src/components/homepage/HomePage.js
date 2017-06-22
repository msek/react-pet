import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Search from '../search/Search';
import PostList from '../postlist/PostList';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import _ from 'lodash';
import 'whatwg-fetch';

export default class HomePage extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    deletePost: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      filteredPosts: []
    };
  }

  componentWillMount() {
    this.filterPosts();
  }

  componentWillReceiveProps() {
    this.filterPosts();
  }

  handleFilterTextInput = (filterText) => {
    this.setState({ filterText });
    this.filterPosts();
  };

  filterPosts = _.debounce(() => {
    let filteredPosts = this.props.posts.filter(post => {
      return post.body.indexOf(this.state.filterText) !== -1 || post.title.indexOf(this.state.filterText) !== -1;
    });
    this.setState({ filteredPosts });
  }, 300);

  render() {
    return (
      <div>
        <Header title="React Pet Project" />
        <Search onFilterTextInput={this.handleFilterTextInput} filterText={this.state.filterText} />
        <PostList posts={this.state.filteredPosts}
                  deletePost={this.props.deletePost} />
        <Footer />
      </div>
    );
  }
}
