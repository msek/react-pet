import { createTypes, async } from 'redux-action-types';

export const POSTS = createTypes('POSTS/',
  async('POSTS_GET'),
  'STATUS_CLEAR',
  'POST_UPDATE',
  'POST_CREATE',
  'POST_DELETE',
  'POSTS_LIST',
  async('COMMENTS_GET'),
  'COMMENTS_LIST'
);
