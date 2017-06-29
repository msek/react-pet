import { POSTS } from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  posts: [],
  authors: [
    { id: 0, name: "John" },
    { id: 1, name: "Jane" },
    { id: 2, name: "James" }
  ]
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case POSTS.METADATA_GET:
    case POSTS.WIDGETS_GET:
    case POSTS.WIDGET_CONFIGS_GET:
      return { ...state, isLoading: true };

    default:
      return state;
  }
}
