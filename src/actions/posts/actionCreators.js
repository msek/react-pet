import { POSTS } from '../actionTypes';
import config from '../../config/Config';

export function getPosts() {
  return {
    type: POSTS.POSTS_GET
  };
}
