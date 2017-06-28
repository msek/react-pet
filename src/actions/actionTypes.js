import { createTypes, async } from 'redux-action-types';

export const POSTS = createTypes(
  'STATUS_CLEAR',
  async('POSTS_GET')
);
