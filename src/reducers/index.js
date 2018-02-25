import {combineReducers} from 'redux';
import postsReducer from './postsReducer';
import postFormReducer from './postFormReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  postFormData: postFormReducer,
  comments: commentsReducer
})

export default rootReducer;
