'use client'

import  { useState } from 'react';
import Image from 'next/image';
import logo from '../signIn/company_logo.svg'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {  signOut } from "firebase/auth";
import { auth } from '../firebase';




const Navbar = ({isLoggedIn}) => {
  const [open, setOpen] = useState(true);
  const router=useRouter();

  const toggleMenu = () => {
    setOpen(!open);
  };

  const toggleMoreOptions = () => {
    setOpen(!open);
  };

  //handling logout

  const handleLogout = () => {               
    signOut(auth).then(() => {
    // Sign-out successful.
    router.push('/')
       
        console.log("Signed out successfully")
    }).catch((error) => {
    // An error happened.
    });
  }

  return (
   
      <div className="antialiased bg-customBlue dark-mode:bg-gray-900">
        <div className="w-full text-gray-700 bg-customBlue dark-mode:text-gray-200 dark-mode:bg-gray-800">
          <div
            x-data="{ open: true }"
            className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
          >
            <div className="flex flex-row items-center justify-between p-4">
              <a
                href="#"
                className="text-lg font-semibold tracking-widest text-gray-100 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
              >
                 <Image
            src={logo}
            alt='company logo'
            />
              </a>
              <button
                className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                onClick={toggleMenu}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  {open ? (
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  )}
                </svg>
              </button>
            </div>
            <nav
              className={`flex-col flex-grow md:flex md:justify-end md:flex-row ${
                open ? 'flex' : 'hidden'
              } pb-4 md:pb-0`}
            >
              <a
                className="px-4 py-2 text-gray-100 mt-2 text-lg font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
              >
                About
              </a>
              <a
                className="px-4 py-2 text-gray-100 mt-2 text-lg font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
              >
                Blog
              </a>
              <a
                className="px-4 py-2 text-gray-100 mt-2 text-lg font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
              >
                Contact
              </a>

              {
                    isLoggedIn?<button onClick={handleLogout} className="px-4 py-2 text-gray-100 mt-2 text-lg font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    >Logout</button>:<Link className="px-4 py-2 text-gray-100 mt-2 text-lg font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href='/signIn'>Login</Link>
              }
              

              <div
                onClick={toggleMoreOptions}
                className="relative"
                x-data="{ open: true }"
              >
               
                
              </div>
            </nav>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Navbar;
