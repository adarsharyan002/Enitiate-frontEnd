'use client'
import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSinglePost } from '../../GlobalRedux/slices/postsSlice'; // Replace with your actual slice path
import Post from '../Post';

const PostDetails = ({params}) => {

  const dispatch = useDispatch();
  const { singlePost, fetchingSinglePost, singlePostError } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchSinglePost(params.id)); // Fetch post based on ID from params
  }, [dispatch, params.id]);

    // const id = params.id
    return ( 
        <div className="flex justify-center items-center h-screen">
          
        <Post
              title={singlePost?.title}
              content={singlePost?.body}
              display={true}
            />
            </div>

     );
}
 
export default PostDetails;