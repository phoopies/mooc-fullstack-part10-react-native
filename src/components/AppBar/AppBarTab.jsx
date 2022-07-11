import { Pressable, View } from "react-native";
import Text from "../Text";

const AppBarTab = ({ title }) => {
  return (
    <View>
      <Pressable onPress={() => console.log("Pressed")}>
        <Text fontWeight="bold" fontSize="subheading">
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBarTab;
