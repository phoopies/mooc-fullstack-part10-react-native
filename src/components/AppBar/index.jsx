import { ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../../theme";
import AppBarTab from "./AppBarTab";
import Stack from "../Stack";
import useAuthorizedUser from "../../hooks/useAuthorizedUser";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    paddingVertical: 5,
    backgroundColor: theme.colors.primary,
  },
  scrollView: {
    display: "flex",
    paddingHorizontal: 5,
    alignItems: "center",
    // gap: 20,
  },
  item: {
    padding: 15
  }
});


const AppBar = () => {
  const { user, loading } = useAuthorizedUser();

  return (
    <Stack row style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView} horizontal>
        <AppBarTab style={styles.item} title={"Repositories"} route={"/"} />
        {!loading && (user ?
        <>
        <AppBarTab style={styles.item} title="Create a review" route="/review" />
        <AppBarTab style={styles.item} title={"Sign out"} route={"/signout"} />
        </>
          :
          <> 
          <AppBarTab style={styles.item} title={"Sign in"} route={"/signin"} />
          <AppBarTab style={styles.item} title="Sign up" route="/signup" /> 
          </>
        )}
      </ScrollView>
    </Stack>
  );
};

export default AppBar;
