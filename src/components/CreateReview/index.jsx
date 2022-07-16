import { Formik } from "formik";
import { useNavigate } from "react-router-native";
import * as yup from "yup";
import useCreateReview from "../../hooks/useCreateReview";
import ReviewForm from "./ReviewForm";

const validationSchema = yup.object().shape({
    ownerName: yup.string().required("Repository owner name is required"),
    repositoryName: yup.string().required("Repository name is required"),
    rating: yup.number().min(0, "Rating must be greater than zero").max(100, "Rating must be less than 100").required("rating is required")
});

export const CreateReviewContainer = ({ onSubmit }) => {
    const initialValues = {
        ownerName: "",
        repositoryName: "",
        rating: "",
        text: "",
    };

    return (<Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
    >
        {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>)
}

const CreateReview = () => {
    const navigate = useNavigate();
    const [createReview, ] = useCreateReview();

    const onSubmit = async (values) => {
        const { ownerName, repositoryName, rating, text } = values;
        if (ownerName && repositoryName && rating) {
            try {
                const {data} = await createReview({ownerName, repositoryName, rating:Number(rating), text});
                navigate(`/repository/${data.createReview.repository.id}`);
            } catch (e) {
                console.log(e);
            }
        }
    };

    return (
        <CreateReviewContainer onSubmit={onSubmit} />
    );
};

export default CreateReview;