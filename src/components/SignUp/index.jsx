import { Formik } from "formik";
import { useNavigate } from "react-router-native";
import * as yup from "yup";
import useSignIn from "../../hooks/useSignIn";
import useSignUp from "../../hooks/useSignUp";
import SignUpForm from "./SignUpForm";

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(1, "Username should be atleast 1 characters long")
        .max(30, "Username should be shorter than or equal to 30 characters")
        .required("Username is required"),
    password: yup.string()
        .min(5, "Password should be at least 5 characters longs")
        .max(50, "Password should be shorter than or equal to 50 characters")
        .required("Password is required"),
    passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], "Passwords do not match").required("Password confirmation is required")
});

export const SignUpContainer = ({ onSubmit }) => {
    const initialValues = {
        username: "",
        password: "",
        passwordConfirmation: "",
    };

    return (<Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
    >
        {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>)
}

const SignUp = () => {
    const [signUp] = useSignUp();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const { username, password, passwordConfirmation } = values;
        if (username && password && password === passwordConfirmation) {
            try {
                await signUp({ username, password });
                navigate('/');
            } catch (e) {
                console.log(e);
            }
        }
    };

    return (
        <SignUpContainer onSubmit={onSubmit} />
    );
};

export default SignUp;
