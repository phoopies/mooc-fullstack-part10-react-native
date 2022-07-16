import { FlatList, Pressable, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useNavigate } from "react-router-native";
import ItemSeparator from "../ItemSeperator";
import RepositoryItem from "../RepositoryItem";
import { useState } from "react";

const styles = StyleSheet.create({
    picker: {
        margin: 5,
        padding: 5,
    },
})

const OrderPicker = ({ setOrderBy, orderByOptions }) => {
    const [selectedValue, setSelectedValue] = useState(orderByOptions[0]);

    const onChange = (value) => { setSelectedValue(value); setOrderBy(value); }

    return (<Picker
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={(itemValue) => onChange(itemValue)}
    >
        {orderByOptions.map(option => <Picker.Item key={option} label={option} value={option} />)}
    </Picker>)
}

const RepositoryListContainer = ({ repositories, setOrderBy, orderByOptions }) => {
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
            ListHeaderComponent={<OrderPicker setOrderBy={setOrderBy} orderByOptions={orderByOptions} />}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Pressable onPress={() => onPress(item.id)}>
                <RepositoryItem item={item} displayButton={false} />
            </Pressable>}
        />
    );
};

export default RepositoryListContainer;
