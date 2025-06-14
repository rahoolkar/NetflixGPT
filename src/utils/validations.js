import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  fullName: Yup.string().min(5, "Too Short!").max(20, "Too Long!"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(20, "Too Long!")
    .required("Please provide a valid password"),
  email: Yup.string()
    .email("Please provide a valid email")
    .required("Please enter valid password"),
});