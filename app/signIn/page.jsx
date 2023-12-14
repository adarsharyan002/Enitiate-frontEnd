'use client'
import { useState } from 'react';
import Image from 'next/image';
import logo from './logo.svg';
import companyLogo from './company_logo.svg';
import Link from 'next/link';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'next/navigation'


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage,setErrorMessage] = useState('')
  const router = useRouter()


  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        
        router.push('/posts')
    })
    .catch((error) => {
        const errorCode = error.code;
        setErrorMessage( error.message)
    });
   
}

  


  return (
    <div className="bg-gradient-to-r from-gray-800 via-black to-blue-900 absolute top-0 left-0  bottom-0 leading-5 h-full w-full overflow-hidden">
     <div className="fixed top-8 left-12 z-50">
  <Image
    src={companyLogo}
    width={120}
    alt="Company Logo"
  />
</div>

      <div className="relative min-h-screen flex  justify-center lg:gap-40  bg-transparent rounded-3xl shadow-xl">
        {/* Left side content */}
        <div className="flex-col flex self-center lg:px-4 sm:max-w-4xl xl:max-w-md z-10">
          <div className="self-start hidden lg:flex flex-col text-gray-300">
           
            <Image
            src={logo}
            alt='company logo'
            />
          </div>
        </div>

        {/* Right side content */}
        <div className="flex justify-center self-center z-10">
          <div className="p-12 bg-white mx-auto rounded-3xl w-96">
            <div className="mb-7">
              <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
              <p className="text-gray-400">
                Do not have an account? <Link href="/signUp" className="text-sm text-purple-700 hover:text-purple-700">Sign Up</Link>
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <input
                  className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                  type="email"
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>

              <div className="relative" x-data="{ show: true }">
                <input
                  placeholder="Password"
                  onChange={(e)=>setPassword(e.target.value)}
                  type='password'
                  className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                />
                
              </div>
              <div>
              <div className="flex items-center mb-4">
      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-black">
        I agree to terms and conditions
      </label>
    </div>
						<button onClick={onLogin}   className="w-full flex justify-center bg-blue-900  hover:bg-blue-800 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
                Sign in
              </button>
              <p className='mt-2'>{errorMessage}</p>
					</div>

              

            </div>
          </div>
        </div>
      </div>

    

      
    </div>
  );
};

export default SignIn;
