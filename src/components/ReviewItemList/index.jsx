import { FlatList } from "react-native";
import ItemSeparator from "../ItemSeperator";
import ReviewItem from "./ReviewItem";

const ReviewItemList = ({onEndReached, ListHeaderComponent, reviews}) => {
    return (
        <FlatList
            data={reviews}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={ListHeaderComponent}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5}
        />
    )
}

export default ReviewItemList;