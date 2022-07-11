import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  directionRow: {
    flexDirection: 'row',
  },
});

const Stack = ({ row, style, ...props }) => {
  const stackStyle = [
    styles.container,
    row && styles.directionRow,
    style,
  ];

  return <View style={stackStyle} {...props} />;
};

export default Stack;
