import { useState } from 'react';
import Header from './header';

import { BG_URL } from './utils/constants';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="bg" className="h-screen w-screen" />
      </div>
      <form className="p-12 absolute w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
        {isSignUp && (
          <input type="text" placeholder="Enter your Full Name" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
        )}
        <input type="text" placeholder="email Address" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-lgx" />
        <button className="p-4 my-6 bg-red-700 w-full  rounded-lg">Sign In</button>
        <p onClick={() => setIsSignUp(!isSignUp)} className="cursor-pointer">
          {isSignUp ? 'Already a member? Sign In' : '  New to Aiflix? Sign Up Now'}
        </p>
      </form>
    </div>
  );
};

export default Login;
