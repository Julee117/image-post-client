import {combineReducers} from 'redux';
import postsReducer from './postsReducer';
import postFormReducer from './postFormReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  postFormData: postFormReducer
})

export default rootReducer;
