
'use client'
import Image from 'next/image';
import  {  useEffect } from 'react';
import logo from './signIn/logo.svg';
import companyLogo from './signIn/company_logo.svg';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import Link from 'next/link';
import {  signOut } from "firebase/auth";
import { useRouter } from 'next/navigation';


const Home = () => {

  const router = useRouter();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          router.push('/posts')
          console.log("uid", uid)
        } else {
          // User is signed out
          // ...
          console.log("user is logged out")
        }
      });
     
}, [router])


 

  return (
    <div className="bg-gradient-to-r from-gray-800 via-black to-blue-900 absolute top-0 left-0  bottom-0 leading-5 h-full w-full overflow-hidden">
     <div className="fixed top-8 left-12 z-50">
  <Image
    src={companyLogo}
    width={120}
    alt="Company Logo"
  />

</div>

       <section className="h-screen bg-cover" >
  <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
    <div className="max-w-4xl text-center">
      <h1 className="text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-7xl">Welcome to Enitiate</h1>

      <p className="mt-6 lg:text-lg text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ad repudiandae nobis consectetur magni? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, laboriosam.</p>

      <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">

        <button className="transform rounded-md bg-blue-900  hover:bg-blue-800 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200  focus:bg-blue-800 focus:outline-none sm:mx-2"><Link href='/signUp'>Login/SignUp</Link></button>
      </div>
    </div>
  </div>
</section>



     
    </div>
  );
};

export default Home;
