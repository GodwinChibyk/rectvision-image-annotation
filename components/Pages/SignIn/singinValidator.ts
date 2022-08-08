import * as yup from "yup";
export const siginValidationSchema = yup.object({
  email: yup.string().email().required("Your email is required"),
  password: yup.string().required("Your password is required"),
});
