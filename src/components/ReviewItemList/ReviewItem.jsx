import { Alert, StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";
import useDeleteReview from "../../hooks/useDeleteReview";
import theme from "../../theme";
import { prettifyDate } from "../../utils/misc";
import Button from "../Button";
import Stack from "../Stack"
import Text from "../Text"

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.backgroundSecondary
    },
    creatorContainer: {
        justifyContent: 'center',
    },
    rating: {
        width: 56,
        height: 56,
        borderRadius: 50,
        marginTop: 5,
        marginHorizontal: 10,
        borderColor: theme.colors.secondary,
        borderWidth: 3,
        justifyContent: 'center',
    },
    ratingText: {
        textAlign: 'center'
    },
    text: {
        margin: 10,
    },
    buttons: {
        justifyContent: 'space-evenly',
        paddingBottom: 10
    },
    button: {
        flexGrow: 1,
        marginHorizontal: 10,
    }
})

const ReviewItem = ({ review, displayButtons, refetchOnDelete }) => {
    const [deleteReview] = useDeleteReview();
    const navigate = useNavigate();

    const handleDelete = () => {
        Alert.alert(
            "Delete review",
            "Delete this review?",
            [
                { text: "Cancel", style: 'cancel' },
                {
                    text: "Yes", onPress: async () => {
                        await deleteReview(review.id);
                        if (refetchOnDelete)
                            refetchOnDelete();
                    }
                }
            ]
        )

    }

    const handleView = () => {
        navigate(`/repository/${review.repository.id}`);
    }

    return (
        <Stack style={styles.container}>
            <Stack row>
                <View style={styles.rating}>
                    <Text style={styles.ratingText} color="textPrimary" fontWeight='bold' fontSize='large'>{review.rating}</Text>
                </View>
                <Stack style={styles.creatorContainer}>
                    <Text fontWeight='bold'>{review.user.username}</Text>
                    <Text color='textSecondary'>{prettifyDate(review.createdAt)}</Text>
                </Stack>
            </Stack>
            <Text style={styles.text} color='textSecondary'>{review.text}</Text>
            {displayButtons && <Stack row style={styles.buttons}>
                <Button style={styles.button} text="View Repository" onPress={handleView} />
                <Button style={styles.button} red text="Delete review" onPress={handleDelete} />
            </Stack>}
        </Stack>
    )
};

export default ReviewItem;