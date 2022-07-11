import { ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../../theme";
import AppBarTab from "./AppBarTab";
import Stack from "../Stack";

const styles = StyleSheet.create({
  container: {
    height: Constants.statusBarHeight === 0 ? 50 : Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
  },
  scrollView: {
    display: "flex",
    paddingHorizontal: 20,
    alignItems: "center",
    gap: 20,
  },
});

const AppBar = () => {
  return (
    <Stack row style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView} horizontal>
        <AppBarTab title={"Repositories"} route={"/"} />
        <AppBarTab title={"Sign in"} route={"/signin"} />
      </ScrollView>
    </Stack>
  );
};

export default AppBar;
