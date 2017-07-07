import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { fetchPosts, fetchUsers, fetchComments } from './actions/posts/actionCreators';
import App from './components/app/App';

const store = configureStore();

store.dispatch(fetchPosts());
store.dispatch(fetchUsers());
store.dispatch(fetchComments());

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'));
