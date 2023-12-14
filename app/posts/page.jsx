'use client'

import Post from './Post';
import Navbar from '../components/Navbar';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, actions } from '../GlobalRedux/slices/postsSlice';
import { useRouter } from 'next/navigation'

const Posts = () => {
  // Define an array of post data

  const dispatch = useDispatch();
  const router = useRouter();
  const { posts, isLoading, error } = useSelector((state) => state.posts);



  const [isLoggedIn,setIsLoggedIn]=useState(false)
  

  //checking whether user is logged in
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          setIsLoggedIn(true)
          console.log("uid", uid)
        } else {
          // User is signed out
          // ...
          router.push('/signIn')
          console.log("user is logged out")
        }
      });
     
}, [router])

//fetching data
useEffect(() => {
  dispatch(fetchPosts());
}, [dispatch]);





  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn}/>
    
      
      {!isLoading?<div className="py-4 bg-customGray px-6 h-screen">
        <div className="container mx-3  px-6 text-gray-500 md:px-12 xl:px-0">
        <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
          {posts.map((post, index) => (
            <Post
              key={index} // Provide a unique key for each item in the array
              title={post.title.substring(0,9)}
              content={post.body.substring(0,40)}
              display={false}
              id={post.id}
            />
          ))}
        </div>
      </div></div>:<h1>Loading</h1>}
    </div>
    
  );
};

export default Posts;
