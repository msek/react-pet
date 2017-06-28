import { POSTS } from '../actions/actionTypes';

const initialState = {
  loading: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case POSTS.METADATA_GET:
    case POSTS.WIDGETS_GET:
    case POSTS.WIDGET_CONFIGS_GET:
      return { ...state, loading: true };

    default:
      return state;
  }
}
