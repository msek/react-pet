import { POSTS } from '../actionTypes';
import Config from '../../config/Config';

export function requestPosts() {
  return {
    type: POSTS.POSTS_REQUEST
  };
}

export function requestUsers() {
  return {
    type: POSTS.USERS_REQUEST
  };
}

export function fetchComments(comments) {
  return {
    type: POSTS.COMMENTS_GET,
    comments
  };
}

const receivePosts = (data) => ({
    type: POSTS.POSTS_RECEIVE,
    data
});

export const fetchPosts = () => {
  return dispatch => {
    dispatch(requestPosts());

    return fetch(`${Config.serverUrl}/posts`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)));
  };
};

const receiveUsers = (data) => ({
    type: POSTS.USERS_RECEIVE,
    data
});

export const fetchUsers = () => {
  return dispatch => {
    dispatch(requestUsers());

    return fetch(`${Config.serverUrl}/users`)
      .then(response => response.json())
      .then(json => dispatch(receiveUsers(json)));
  };
};
