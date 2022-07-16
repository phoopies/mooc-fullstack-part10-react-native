import { StyleSheet } from "react-native";
import Button from "../Button";
import FormikTextInput from "../FormikTextInput";
import Stack from "../Stack";

const SignUpForm = ({ onSubmit }) => {
  const styles = StyleSheet.create({
    container: {
      margin: 10,
    },
    item: {
      marginBottom: 10,
    }
  })
  return (
    <Stack style={styles.container}>
      <FormikTextInput style={styles.item} placeholder="Username" name="username" />
      <FormikTextInput style={styles.item} secureTextEntry placeholder="Password" name="password" />
      <FormikTextInput style={styles.item} secureTextEntry placeholder="Confirm password" name="passwordConfirmation" />
      <Button onPress={onSubmit} text='Sign up' />
    </Stack>
  );
};

export default SignUpForm;
