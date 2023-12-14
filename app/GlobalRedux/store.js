import { configureStore } from '@reduxjs/toolkit';

// Import your slice reducers here
import { reducer as postsReducer } from './slices/postsSlice';

export default configureStore({
  reducer: {
    // Combine your reducers here
    posts: postsReducer,
  },
});
