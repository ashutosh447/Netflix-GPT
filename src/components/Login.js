import { useState , useRef } from "react";
import Header from "./Header.js";
import { checkValidData } from "../utils/validate.js";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const name = useRef(null);

  const handleSignUp = () => {
    setisSignIn(!isSignIn);
  };
  const handleButtonClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const confirmPasswordValue = !isSignIn ? confirmPassword.current.value : "";
    const nameValue = !isSignIn ? name.current.value : "";

    const message = checkValidData(emailValue , passwordValue , confirmPasswordValue , nameValue , isSignIn);
    setErrorMessage(message);
  }
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
            ref={name}
            type="text"
            placeholder="User Name"
            className="p-2 my-4 w-full bg-gray-600 rounded-lg bg-opacity-50"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-600 rounded-lg bg-opacity-50"
        />
        <input
          ref={password}
          type="password"
          placeholder={isSignIn ? "password" : "Create New Password"}
          className="p-2 my-4 w-full bg-gray-600 rounded-lg bg-opacity-50"
        />
        {!isSignIn && (
          <input
            ref={confirmPassword}
            type="password"
            placeholder="Confirm New Password"
            className="p-2 my-4 w-full bg-gray-600 rounded-lg bg-opacity-50"
          />
        )}
        <p className="text-red-700 font-bold">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
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
