import { useState } from "react";
import LoginHeader from "./LoginHeader";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().min(5, "Too Short!").max(20, "Too Long!"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(20, "Too Long!")
    .required("Please provide a valid password"),
  email: Yup.string()
    .email("Please provide a valid email")
    .required("Please enter valid password"),
});

function LoginPage() {
  const [isSignInForm, setIsSignInForm] = useState(true);

  function toggleForm() {
    setIsSignInForm(!isSignInForm);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit button clicked");
  }

  return (
    <div>
      <LoginHeader></LoginHeader>
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="netflix-bg-img"
      />
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
            console.log(values);
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

// {
//   isSignInForm ? null : (
//     <input
//       className="border p-2 mt-4 rounded"
//       type="text"
//       placeholder="Full Name"
//     />
//   );
// }
// {
/* <input
  className="border p-2 mt-4 rounded"
  type="text"
  placeholder="Email"
/>
<input
  type="password"
  className="border p-2 mt-4 rounded"
  placeholder="Password"
/>
<button
  type="submit"
  className="bg-red-600 mt-4 mb-4 h-11 rounded cursor-pointer"
>
  {isSignInForm ? "Sign In" : "Sign Up"}
</button> */
// }
