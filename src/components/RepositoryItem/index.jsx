import * as Linking from 'expo-linking';
import { Pressable, StyleSheet } from "react-native";
import Stack from "../Stack";
import theme from "../../theme";
import RepositoryItemDetails from "./RepositoryItemDetails";
import RepositoryItemExtraDetails from "./RepositoryItemExtraDetails";
import Text from "../Text";

const RepositoryItem = ({ item, displayButton }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.backgroundSecondary,
      padding: 5,
    },
    button: {
      padding: 8,
      margin: 8,
      borderRadius: 5,
      backgroundColor: theme.colors.secondary,
      alignItems: 'center',
    }
  });

  const onPress = () => {
    if (item.url && Linking.canOpenURL(item.url))
      Linking.openURL(item.url);
  }

  return (
    <Stack style={styles.container}>
      <RepositoryItemDetails testID="repositoryItemDetails" item={item} />
      <RepositoryItemExtraDetails testID="repositoryItemExtraDetails" item={item} />
      {displayButton && <Pressable style={styles.button} onPress={onPress}>
        <Text color='textPrimary' fontWeight='bold'>Open in GitHub</Text>
      </Pressable>}
    </Stack>
  );
};

export default RepositoryItem;
