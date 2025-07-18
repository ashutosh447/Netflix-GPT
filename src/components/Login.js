import { useState } from "react";
import Header from "./Header.js";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const handleSignUp = () => {
    setisSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg"
        alt="background"
      />
      <form className="absolute my-40 p-12 mx-auto left-0 right-0 w-3/12 bg-black text-white rounded-lg bg-opacity-80">
        <h1 className="p-5 font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="User Name"
            className="p-2 my-4 w-full bg-gray-600 rounded-lg bg-opacity-50"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-600 rounded-lg bg-opacity-50"
        />
        <input
          type="password"
          placeholder={isSignIn ? "password" : "Create New Password"}
          className="p-2 my-4 w-full bg-gray-600 rounded-lg bg-opacity-50"
        />
        {!isSignIn && (
          <input
            type="password"
            placeholder="Confirm New Password"
            className="p-2 my-4 w-full bg-gray-600 rounded-lg bg-opacity-50"
          />
        )}
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={handleSignUp}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
