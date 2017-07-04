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
      return { ...state, isFetching: false, posts: action.posts };

    case POSTS.COMMENTS_GET:
    case POSTS.POST_UPDATE:
      return state;

    default:
      return state;
  }
}
