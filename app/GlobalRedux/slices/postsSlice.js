// store/slices/exampleSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchPosts = () => async (dispatch) => {
    dispatch(actions.fetchPostsStart());
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      dispatch(actions.fetchPostsSuccess(data));
    } catch (error) {
      dispatch(actions.fetchPostsError(error.message));
    }
  };

// ... imports
const initialState = {
    posts: [],
    isLoading: false,
    error: null,
    singlePost: null,
    fetchingSinglePost: false,
    singlePostError: null,
  };
  
  const slice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      // Existing reducers
      fetchPostsStart: (state) => {
        state.isLoading = true;
      },
      fetchPostsSuccess: (state, action) => {
        state.posts = action.payload;
        state.isLoading = false;
      },
      fetchPostsError: (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      },
  
      // New reducers for single post
      fetchSinglePostStart: (state) => {
        state.fetchingSinglePost = true;
        state.singlePost = null;
        state.singlePostError = null;
      },
      fetchSinglePostSuccess: (state, action) => {
        state.fetchingSinglePost = false;
        state.singlePost = action.payload;
      },
      fetchSinglePostError: (state, action) => {
        state.fetchingSinglePost = false;
        state.singlePostError = action.payload;
      },
    },
  });
  
  // Export actions and reducer
  export const { actions, reducer } = slice;
  
  // Action creators
  
  
  export const fetchSinglePost = (postId) => async (dispatch) => {
    dispatch(actions.fetchSinglePostStart());
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const data = await response.json();
      dispatch(actions.fetchSinglePostSuccess(data));
    } catch (error) {
      dispatch(actions.fetchSinglePostError(error.message));
    }
  };
  