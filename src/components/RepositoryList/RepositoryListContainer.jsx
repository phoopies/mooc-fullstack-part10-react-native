import { FlatList, Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import ItemSeparator from "../ItemSeperator";
import RepositoryItem from "../RepositoryItem";
import Filterer from "./Filterer";

const RepositoryListContainer = ({ repositories, orderBy, setOrderBy, orderByOptions, searchKeyword, setSearchKeyword }) => {
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
            ListHeaderComponent={<Filterer
                searchKeyword={searchKeyword}
                setSearchKeyword={setSearchKeyword}
                orderBy={orderBy} setOrderBy={setOrderBy}
                orderByOptions={orderByOptions}
            />}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Pressable onPress={() => onPress(item.id)}>
                <RepositoryItem item={item} displayButton={false} />
            </Pressable>}
        />
    );
};

export default RepositoryListContainer;
