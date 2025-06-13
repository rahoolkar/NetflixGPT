import { useState } from "react";
import LoginHeader from "./LoginHeader";

function LoginPage() {
  const [isSignInForm, setIsSignInForm] = useState(true);

  function toggleForm() {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <LoginHeader></LoginHeader>
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="netflix-bg-img"
      />
      <div className="bg-black absolute mx-auto right-0 left-0 w-3/12 my-48 opacity-80 rounded">
        <form className="p-12 text-white flex flex-col">
          <h2 className="text-3xl font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          {isSignInForm ? null : (
            <input
              className="border p-2 mt-4 rounded"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            className="border p-2 mt-4 rounded"
            type="text"
            placeholder="Email"
          />
          <input
            type="password"
            className="border p-2 mt-4 rounded"
            placeholder="Password"
          />
          <button className="bg-red-600 mt-4 mb-4 h-11 rounded">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          {isSignInForm ? (
            <span className="text-gray-300">
              New to Netflix?{" "}
              <span onClick={toggleForm} className="font-bold cursor-pointer">
                Sign up now.
              </span>
            </span>
          ) : (
            <span className="text-gray-300">
              Already a customer?{" "}
              <span onClick={toggleForm} className="font-bold cursor-pointer">
                Sign in now.
              </span>
            </span>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
