import React from 'react';
import Header from '../header/Header';
import Search from '../search/Search';
import Post from '../post/Post';
import Footer from '../footer/Footer';
import 'whatwg-fetch';

const Config = require('Config');

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
    fetch(`${Config.serverUrl}/posts`)
      .then(res => res.json())
      .then(responseJSON => {
        const posts = responseJSON;
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
