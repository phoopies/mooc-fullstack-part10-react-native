import { FlatList, Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import ItemSeparator from "../ItemSeperator";
import RepositoryItem from "../RepositoryItem";

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
