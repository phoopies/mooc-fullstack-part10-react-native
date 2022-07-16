import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from "./RepositoryList";
import theme from "../theme";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import Repository from "./Repository";
import CreateReview from "./CreateReview";
import SignUp from "./SignUp";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.background,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} exact />
        <Route path='/repository/:id' element={<Repository />} exact />
        <Route path='/review' element={<CreateReview />} exact />
        <Route path='/signin' element={<SignIn />} exact />
        <Route path='/signup' element={<SignUp />} exact />
        <Route path='/signout' element={<SignOut />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
