import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email format")
    .matches(/@gmail\.com$/, "Email must end with @gmail.com")
    .matches(/regex@gmail\.com$/, "Email must be regex@gmail.com")
    .required("Email is required"),
  password: Yup.string()
  .matches(
    /rishiMe@199$/,
    "Password must be start from r__M_9"
  )
  .required("Password is required"),
confirm_password: Yup.string()
  .oneOf([Yup.ref("password"), null], "Passwords must match")
  .required("Confirm password is required"),
});


// import * as Yup from "yup";

// export const signUpSchema = Yup.object({
//   name: Yup.string().min(2).max(25).required("Please enter your name"),
//   email: Yup.string().email().required("Please enter your email"),
//   password: Yup.string()
//   .matches(
//     /rishiMe@199$/,
//     "Password must be rishiMe@199"
//   )
//   .required("Password is required"),
// confirm_password: Yup.string()
//   .oneOf([Yup.ref("password"), null], "Passwords must match")
//   .required("Confirm password is required"),
// });