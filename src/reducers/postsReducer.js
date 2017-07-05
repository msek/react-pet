import { POSTS } from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  posts: [],
  authors: [
    { id: 0, name: "John" },
    { id: 1, name: "Jane" },
    { id: 2, name: "James" }
  ]
};

export default function posts(state = initialState, action) {
  switch (action.type) {

    case POSTS.POSTS_REQUEST:
      return { ...state, isFetching: true };

    case POSTS.POSTS_RECEIVE:
      return { ...state, isFetching: false, posts: action.data };

    case POSTS.USERS_REQUEST:
      return { ...state, isFetching: true };

    case POSTS.USERS_RECEIVE:
      return { ...state, isFetching: false, users: action.data };

    default:
      return state;
  }
}
