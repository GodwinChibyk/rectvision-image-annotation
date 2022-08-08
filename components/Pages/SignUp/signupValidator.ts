import * as yup from "yup";
export const signupValidationSchema = yup.object({
  email: yup.string().email().required("Your email is required"),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 charaters minimum.")
    .matches(
      /^(?=.*[\d])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
      "Password can only contain Alphanumeric."
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match"),
});
