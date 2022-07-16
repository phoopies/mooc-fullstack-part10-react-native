import { StyleSheet, View } from "react-native";
import theme from "../../theme";
import { prettifyDate } from "../../utils/misc";
import Stack from "../Stack"
import Text from "../Text"

const ReviewItem = ({review}) => {
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
            textAlign: 'center',
            justifyContent: 'center',
        },
        ratingText: {
            paddingBottom: 3,
        },
        text: {
            margin: 10,
        },
    })

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
        </Stack>
    )
};

export default ReviewItem;