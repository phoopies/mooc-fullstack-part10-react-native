
import Text from "../Text"
import useAuthorizedUser from "../../hooks/useAuthorizedUser";
import ReviewItemList from "../ReviewItemList";

const UserReviewList = () => {
    const {user, loading, fetchMoreReviews, refetch} = useAuthorizedUser({reviewsFirst: 10, includeReviews: true});

    if (loading) return <Text>Loading...</Text>

    const reviewNodes = user.reviews.edges.map(edge => edge.node);

    return (
        <ReviewItemList
            reviews={reviewNodes}
            onEndReached={fetchMoreReviews}
            displayReviewButtons
            refetchOnDelete={refetch}
        />
    )
}

export default UserReviewList;