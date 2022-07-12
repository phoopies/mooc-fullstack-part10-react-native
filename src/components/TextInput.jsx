import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    borderRadius: 3,
    color: theme.colors.textSecondary,
    backgroundColor: theme.colors.backgroundSecondary,
  },
  error: {
    border: '1px solid ' + theme.colors.error
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.textInput, error && styles.error, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
