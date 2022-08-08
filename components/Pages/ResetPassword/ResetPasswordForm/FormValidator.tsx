import * as yup from "yup";
export const resetPasswordValidationSchema = yup.object({
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
