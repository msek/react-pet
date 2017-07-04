 import { combineReducers } from 'redux';
 import { routerReducer } from 'react-router-redux';
 import posts from './postsReducer';

 const rootReducer = combineReducers({
   router: routerReducer,
   posts
 });

 export default rootReducer;
