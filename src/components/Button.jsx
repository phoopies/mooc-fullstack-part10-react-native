import { Pressable, StyleSheet } from "react-native";

import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textPrimary,
    textAlign: 'center',
    borderRadius: 5,
    padding: 10,
  },
  colorSecondary: {
    backgroundColor: theme.colors.secondary,
  },
});

const Button = ({ secondary, style, text, ...props }) => {
  const buttonStyle = [
    styles.button,
    secondary && styles.colorSecondary,
    style,
  ];

  return <Pressable style={buttonStyle} {...props}>
    {text && <Text fontSize='subheading'>{text}</Text>}
    </Pressable>;
};

export default Button;
