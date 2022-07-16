import { FlatList, View, StyleSheet, Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import RepositoryItem from "../RepositoryItem";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {
    const navigate = useNavigate();
    const onPress = (id) => {
        navigate(`/repository/${id}`);
    }

    // Get the nodes from the edges array
    const repositoryNodes = repositories
        ? repositories.edges.map((edge) => edge.node)
        : [];

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <Pressable onPress={() => onPress(item.id)}>
                <RepositoryItem item={item} displayButton={false} />
            </Pressable>}
        />
    );
};

export default RepositoryListContainer;
