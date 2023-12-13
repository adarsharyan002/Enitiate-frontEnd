

import Image from 'next/image';
import logo from './signIn/logo.svg';
import companyLogo from './signIn/company_logo.svg';
import Link from 'next/link';

const SignIn = () => {
 

  return (
    <div className="bg-gradient-to-r from-gray-800 via-black to-blue-900 absolute top-0 left-0  bottom-0 leading-5 h-full w-full overflow-hidden">
     <div className="fixed top-8 left-12 z-50">
  <Image
    src={companyLogo}
    width={120}
    alt="Company Logo"
  />
</div>

       <section class="h-screen bg-cover" >
  <div class="flex h-full w-full items-center justify-center container mx-auto px-8">
    <div class="max-w-4xl text-center">
      <h1 class="text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-7xl">Welcome to Enitiate</h1>

      <p class="mt-6 lg:text-lg text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ad repudiandae nobis consectetur magni? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, laboriosam.</p>

      <div class="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">

        <button class="transform rounded-md bg-blue-900  hover:bg-blue-800 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200  focus:bg-blue-800 focus:outline-none sm:mx-2"><Link href='/signUp'>Login/SignUp</Link></button>
      </div>
    </div>
  </div>
</section>



     
    </div>
  );
};

export default SignIn;
