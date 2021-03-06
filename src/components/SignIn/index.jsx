import { Formik } from "formik";
import { useNavigate } from "react-router-native";
import * as yup from "yup";
import useSignIn from "../../hooks/useSignIn";
import SignInForm from "./SignInForm";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, "Username should be atleast 4 characters long")
    .required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const SignInContainer = ({ onSubmit }) => {
  const initialValues = {
    username: "",
    password: "",
  };

  return (<Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
  </Formik>)
}

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();


  const onSubmit = async (values) => {
    const { username, password } = values;
    if (username && password) {
      try {
        await signIn({ username, password });
        navigate('/');
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <SignInContainer onSubmit={onSubmit} />
  );
};

export default SignIn;
