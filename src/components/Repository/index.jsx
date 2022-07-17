import { View } from "react-native";
import { useParams } from "react-router-native";
import useRepository from "../../hooks/useRepository";
import ItemSeparator from "../ItemSeperator";
import RepositoryItem from "../RepositoryItem";
import Text from "../Text"
import ReviewItemList from "../ReviewItemList";

const Repository = () => {
    const { id } = useParams();
    const { repository, loading, fetchMore } = useRepository({ repositoryId: id, reviewsFirst: 10 });

    if (loading) return <Text>Loading...</Text>
    if (!repository) return <Text>Repository not found!</Text>

    const reviewNodes = repository.reviews.edges.map(edge => edge.node);
    const onEndReached = () => {
        fetchMore();
    };

    return (
        <ReviewItemList
            onEndReached={onEndReached}
            ListHeaderComponent={(() => <View>
                <RepositoryItem item={repository} displayButton={true} />
                <ItemSeparator />
            </View>)}
            reviews={reviewNodes}
        />
    )
}

export default Repository;