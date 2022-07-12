import { Formik } from "formik";
import * as yup from "yup";
import SignInForm from "./SignInForm";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, "Username should be atleast 4 characters long")
    .required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = (values) => {
    if (values.username && values.password) {
      console.log("Sign in submit");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
