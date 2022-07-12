import Text from "../Text";
import Stack from "../Stack";
import { StyleSheet } from "react-native";
import theme from "../../theme";
import { prettifyNumber } from "../../utils";

const Detail = ({ value, label }) => {
  const dStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 3,
      alignItems: "center",
      borderBottomColor: theme.colors.secondary,
      borderBottomWidth: 2
    },
  });
  return (
    <Stack style={dStyles.container}>
      <Text>{prettifyNumber(value)}</Text>
      <Text color="textSecondary">{label}</Text>
    </Stack>
  );
};

const RepositoryItemExtraDetails = ({ item }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.backgroundSecondary,
      // gap: 15,
      justifyContent: "space-evenly",
    },
  });

  return (
      <Stack style={[styles.container, styles.details]} row>
        <Detail value={item.stargazersCount} label="stars" />
        <Detail value={item.forksCount} label="forks" />
        <Detail value={item.reviewCount} label="reviews" />
        <Detail value={item.ratingAverage} label="rating" />
      </Stack>
  );
};

export default RepositoryItemExtraDetails;
