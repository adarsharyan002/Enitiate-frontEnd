// store/reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import postReducer from '../slices/postsSlice';

const rootReducer = combineReducers({
  post: postReducer,
  // Add other reducers here
});

export default rootReducer;
