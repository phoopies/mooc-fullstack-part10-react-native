import { StyleSheet } from "react-native";
import Button from "../Button";
import FormikTextInput from "../FormikTextInput";
import Stack from "../Stack";

const SignInForm = ({ onSubmit }) => {
  const styles = StyleSheet.create({
    container: {
      margin: 10,
      // gap: 10
    },
    item: {
      marginBottom: 10,
    }
  })
  return (
    <Stack style={styles.container}>
      <FormikTextInput style={styles.item} placeholder="Username" name="username" />
      <FormikTextInput style={styles.item} secureTextEntry placeholder="Password" name="password" />
      <Button onPress={onSubmit} text='Sign in' />
    </Stack>
  );
};

export default SignInForm;
