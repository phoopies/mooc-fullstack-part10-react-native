import Text from "../Text";
import Stack from "../Stack";
import { Image, StyleSheet } from "react-native";
import theme from "../../theme";

const RepositoryItemDetails = ({ item }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.backgroundSecondary,
      padding: 5,
    },
    detailContainer: {
      marginLeft: 15,
    },
    avatar: {
      width: 66,
      height: 66,
      borderRadius: 50,
    },
    language: {
      backgroundColor: theme.colors.secondary,
      borderRadius: 5,
      padding: 5,
      textAlign: "center",
    },
  });

  return (
    <Stack style={styles.container} row>
      <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
      <Stack style={styles.detailContainer}>
        <Text fontWeight="bold" fontSize="subheading">
          {item.fullName}
        </Text>
        <Text color="textSecondary">{item.description}</Text>
        <Stack row>
          <Text style={styles.language}>{item.language}</Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default RepositoryItemDetails;
