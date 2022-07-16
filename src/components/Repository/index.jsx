import { FlatList, StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";
import useRepository from "../../hooks/useRepository";
import ItemSeparator from "../ItemSeperator";
import RepositoryItem from "../RepositoryItem";
import Text from "../Text"
import ReviewItem from "./ReviewItem";

const Repository = () => {
    const { id } = useParams();
    const { repository, loading } = useRepository(id);


    if (loading) return <Text>Loading...</Text>
    if (!repository) return <Text>Repository not found!</Text>

    const reviewNodes = repository.reviews.edges.map(edge => edge.node);

    return (
        <FlatList
            data={reviewNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={(() => <View>
                <RepositoryItem item={repository} displayButton={true} />
                <ItemSeparator />
            </View>)}
        />
    )
}

export default Repository;