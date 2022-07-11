import Text from "../Text";
import Stack from "../Stack";
import { StyleSheet } from "react-native";
import theme from "../../theme";
import { prettifyNumber } from "../../utils";
import RepositoryItemDetails from "./RepositoryItemDetails";
import RepositoryItemExtraDetails from "./RepositoryItemExtraDetails";

const Detail = ({ value, label }) => {
  const dStyles = StyleSheet.create({
    container: {
      paddingHorizontal: 3,
      alignItems: "center",
      borderBottomColor: theme.colors.secondary,
      borderBottomWidth: 2,
    },
  });
  return (
    <Stack style={dStyles.container}>
      <Text>{prettifyNumber(value)}</Text>
      <Text color="textSecondary">{label}</Text>
    </Stack>
  );
};

const RepositoryItem = ({ item }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.backgroundSecondary,
      padding: 5,
    },
  });

  return (
    <Stack style={styles.container}>
      <RepositoryItemDetails item={item} />
      <RepositoryItemExtraDetails item={item} />
    </Stack>
  );
};

export default RepositoryItem;
