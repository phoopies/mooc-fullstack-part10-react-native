import { Pressable, StyleSheet } from "react-native";

import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textPrimary,
    borderRadius: 5,
    padding: 10,
  },
  text: {
    textAlign: 'center',
  },
  colorSecondary: {
    backgroundColor: theme.colors.secondary,
  },
  colorRed: {
    backgroundColor: theme.colors.unwantedRed
  }
});

const Button = ({ secondary, red, style, text, ...props }) => {
  const buttonStyle = [
    styles.button,
    secondary && styles.colorSecondary,
    red && styles.colorRed,
    style,
  ];

  return <Pressable style={buttonStyle} {...props}>
    {text && <Text style={styles.text} fontSize='subheading'>{text}</Text>}
    </Pressable>;
};

export default Button;
