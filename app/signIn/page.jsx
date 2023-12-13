'use client'
import { useState } from 'react';
import Image from 'next/image';
import logo from './logo.svg';
import companyLogo from './company_logo.svg';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 via-black to-blue-900 absolute top-0 left-0  bottom-0 leading-5 h-full w-full overflow-hidden">
     <div className="fixed top-8 left-12 z-50">
  <Image
    src={companyLogo}
    width={120}
    alt="Company Logo"
  />
</div>

      <div className="relative min-h-screen sm:flex sm:flex-row justify-center lg:gap-40 md:gap-32 sm:gap-20 bg-transparent rounded-3xl shadow-xl">
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
                Don't have an account? <a href="#" className="text-sm text-purple-700 hover:text-purple-700">Sign Up</a>
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <input
                  className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <div className="relative" x-data="{ show: true }">
                <input
                  placeholder="Password"
                  type={showPassword ? 'password' : 'text'}
                  className="text-sm text-gray-200 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"
                />
                <div className="flex items-center absolute inset-y-0 right-0 mr-3 text-sm leading-5">
                  <svg
                    onClick={togglePasswordVisibility}
                    className={`${showPassword ? 'block' : 'hidden'} h-4 text-purple-700`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    {/* ... */}
                  </svg>
                  {/* The eye icon when the password is hidden */}
                  <svg
                    onClick={togglePasswordVisibility}
                    className={`${showPassword ? 'hidden' : 'block'} h-4 text-purple-700`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    {/* ... */}
                  </svg>
                </div>
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
						<button type="submit" class="w-full flex justify-center bg-blue-900  hover:bg-blue-800 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
                Sign in
              </button>
					</div>

              {/* Rest of your form elements */}
              {/* ... */}

            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
    

      {/* SVG background */}
      {/* <svg className="absolute bottom-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#fff" fillOpacity="1" d="M0,0L40,42.7C80,85,160,171,240,197.3C320,224,400,192,480,154.7C560,117,640,75,720,74.7C800,75,880,117,960,154.7C1040,192,1120,224,1200,213.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg> */}
    </div>
  );
};

export default SignIn;
