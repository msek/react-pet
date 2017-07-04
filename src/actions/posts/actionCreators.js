import { POSTS } from '../actionTypes';
import Config from '../../config/Config';

export function requestPosts() {
  return {
    type: POSTS.POSTS_REQUEST
  };
}

export function fetchComments(comments) {
  return {
    type: POSTS.COMMENTS_GET,
    comments
  };
}

function receivePosts(json) {
  return {
    type: POSTS.POSTS_RECEIVE,
    posts: json
  };
}

export function fetchPosts() {
  console.log('fetching posts');
  return dispatch => {
    dispatch(requestPosts());
    return fetch(`${Config.serverUrl}/posts`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)));
  };
}
