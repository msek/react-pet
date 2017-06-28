 import { combineReducers } from 'redux';
 import { routerReducer } from 'react-router-redux';
 import posts from './postsReducer';

 const appReducer = combineReducers({
   router: routerReducer,
   posts
 });

 export default appReducer;
