import { POSTS } from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  posts: [],
  authors: [],
  comments: []
};

export default function posts(state = initialState, action) {
  switch (action.type) {

    case POSTS.POSTS_REQUEST:
      return { ...state, isFetching: true };

    case POSTS.POSTS_RECEIVE:
      return { ...state, isFetching: false, posts: action.data };

    case POSTS.POST_CREATE:
      return { ...state, posts: [{...action.post, id: state.posts.length}, ...state.posts] };

    case POSTS.POST_UPDATE:
      return { ...state, posts: [action.post, ...state.posts.filter(post => post.id !== action.post.id)] };

    case POSTS.POST_DELETE:
      return { ...state, posts: state.posts.filter(({id}) => id !== action.id)};

    case POSTS.USERS_REQUEST:
      return { ...state, isFetching: true };

    case POSTS.USERS_RECEIVE:
      return { ...state, isFetching: false, users: action.data };

    case POSTS.COMMENTS_REQUEST:
      return { ...state, isFetching: true };

    case POSTS.COMMENTS_RECEIVE:
      return { ...state, isFetching: false, comments: action.data };

    default:
      return state;
  }
}
