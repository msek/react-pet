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
      posts: []
    };

    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
  }

  componentDidMount() {
    fetch(`${Config.serverUrl}/posts`)
      .then(res => res.json())
      .then(responseJSON => this.setState({ posts: responseJSON }));
  }

  handleFilterTextInput(filterText) {
    this.setState({ filterText });
  }

  render() {
    const filteredPosts = this.state.posts.filter(post => {
        return post.body.indexOf(this.state.filterText) !== -1 || post.title.indexOf(this.state.filterText) !== -1;
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
