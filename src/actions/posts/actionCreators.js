import { POSTS } from '../actionTypes';
import Config from '../../config/Config';

function requestPosts() {
  return {
    type: POSTS.POSTS_REQUEST
  };
}

function requestUsers() {
  return {
    type: POSTS.USERS_REQUEST
  };
}

function requestComments() {
  return {
    type: POSTS.COMMENTS_REQUEST
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

const updatePost = post => ({
  type: POSTS.POST_UPDATE,
  post: post
});

const createPost = post => ({
  type: POSTS.POST_CREATE,
  post: post
});

export const savePost = (post) => {
  return dispatch => {
    if (post.id >= 0) {
      return dispatch(updatePost(post));
    }
    post = {...post, id: 202};
    return dispatch(createPost(post));
    // return fetch(`${Config.serverUrl}/comments`, { method: 'POST', post: post })
    //   .then(savedPost => savedPost.id ? console.log('success') : console.log('fail'));
  };
};

export const deletePost = postId => ({
  type: POSTS.POST_DELETE,
  id: postId
});

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

export const receiveComments = (data) => ({
    type: POSTS.COMMENTS_RECEIVE,
    data
});

export const fetchComments = () => {
  return dispatch => {
    dispatch(requestComments());

    return fetch(`${Config.serverUrl}/comments`)
      .then(response => response.json())
      .then(json => dispatch(receiveComments(json)));
  };
};
