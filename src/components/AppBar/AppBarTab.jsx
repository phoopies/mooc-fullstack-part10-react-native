import { View } from "react-native";
import { Link } from "react-router-native";
import Text from "../Text";

const AppBarTab = ({ title, route }) => {
  return (
    <View>
      <Link to={route}>
        <Text fontWeight="bold" fontSize="subheading">
          {title}
        </Text>
      </Link>
    </View>
  );
};

export default AppBarTab;
