import Stack from "../Stack";
import { StyleSheet } from "react-native";
import theme from "../../theme";
import RepositoryItemDetails from "./RepositoryItemDetails";
import RepositoryItemExtraDetails from "./RepositoryItemExtraDetails";

const RepositoryItem = ({ item }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.backgroundSecondary,
      padding: 5,
    },
  });

  return (
    <Stack style={styles.container} >
      <RepositoryItemDetails testID="repositoryItemDetails" item={item} />
      <RepositoryItemExtraDetails testID="repositoryItemExtraDetails" item={item} />
    </Stack>
  );
};

export default RepositoryItem;
