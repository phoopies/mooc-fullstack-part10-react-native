import { View, Text } from "react-native";

const RepositoryItem = ({ item }) => {
  return (
    <View>
      <Text>Full name: {item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>stars: {item.stargazersCount}</Text>
      <Text>forks: {item.forksCount}</Text>
      <Text>reviews: {item.reviewCount}</Text>
      <Text>rating: {item.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
