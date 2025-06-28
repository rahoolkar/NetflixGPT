import { useState } from "react";
import LoginHeader from "./LoginHeader";
import { Formik, Form, Field } from "formik";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUserToken } from "../utils/userTokenSlice";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { NETFLIX_BG_IMG } from "../utils/constants";
import { SignupSchema } from "../utils/validations";

function LoginPage() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  function toggleForm() {
    setIsSignInForm(!isSignInForm);
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <LoginHeader></LoginHeader>
      <img className="absolute" src={NETFLIX_BG_IMG} alt="netflix-bg-img" />
      <div className="bg-black absolute mx-auto right-0 left-0 w-3/12 my-48 opacity-80 rounded p-8">
        <h2 className="text-3xl font-bold text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>

        <Formik
          initialValues={{
            fullName: "",
            password: "",
            email: "",
          }}
          className="flex flex-col"
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            if (isSignInForm) {
              signInWithEmailAndPassword(auth, values.email, values.password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  dispatch(addUserToken(user));
                  navigate("/browse");
                })
                .catch(() => {
                  setErrorMessage("Invalid email or password");
                });
            } else {
              createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password
              )
                .then((userCredential) => {
                  const user = userCredential.user;
                  dispatch(addUserToken(user));
                  updateProfile(user, {
                    displayName: values.fullName,
                  }).then(() => {
                    navigate("/browse");
                  });
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrorMessage(errorCode + " : " + errorMessage);
                });
            }
          }}
        >
          {({ errors, touched }) => (
            <Form>
              {isSignInForm ? null : (
                <Field
                  className="border border-white p-2 mt-4 rounded text-white w-full"
                  name="fullName"
                  placeholder="Full Name"
                  type="text"
                />
              )}
              {errors.fullName && touched.fullName ? (
                <div className="text-red-600 mt-2">{errors.fullName}</div>
              ) : null}
              <Field
                className="border border-white p-2 mt-4 rounded text-white w-full"
                name="email"
                placeholder="Email"
                type="text"
              />
              {errors.email && touched.email ? (
                <div className="text-red-600 mt-2">{errors.email}</div>
              ) : null}
              <Field
                className="border border-white p-2 mt-4 rounded text-white w-full"
                name="password"
                placeholder="Password"
                type="text"
              />
              {errors.password && touched.password ? (
                <div className="text-red-600 mt-2">{errors.password}</div>
              ) : null}
              {errorMessage ? (
                <div className="text-red-600 mt-2">{errorMessage}</div>
              ) : null}
              <button
                type="submit"
                className="bg-red-700 text-white font-bold w-full mt-4 mb-4 h-11 rounded cursor-pointer opacity-100"
              >
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
            </Form>
          )}
        </Formik>

        {isSignInForm ? (
          <span className="text-gray-300 mb-4">
            New to Netflix?{" "}
            <span onClick={toggleForm} className="font-bold cursor-pointer">
              Sign up now.
            </span>
          </span>
        ) : (
          <span className="text-gray-300 mb-4">
            Already a customer?{" "}
            <span onClick={toggleForm} className="font-bold cursor-pointer">
              Sign in now.
            </span>
          </span>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
