import { StyleSheet } from "react-native";
import Button from "../Button";
import FormikTextInput from "../FormikTextInput";
import Stack from "../Stack";

const ReviewForm = ({ onSubmit }) => {
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
      <FormikTextInput style={styles.item} placeholder="Repository owner name" name="ownerName" />
      <FormikTextInput style={styles.item} placeholder="Repository name" name="repositoryName" />
      <FormikTextInput style={styles.item} placeholder="Rating between 0 and 100" name="rating" />
      <FormikTextInput style={styles.item} multiline placeholder="Review" name="text" />
      <Button onPress={onSubmit} text='Create a review' />
    </Stack>
  );
};

export default ReviewForm;
