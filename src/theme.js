import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#FDFDFF",
    textSecondary: "#C6C5B9",
    primary: "#546A7B",
    secondary: "#62929E",
    error: "#cc0000",
    background: "#414141",
    backgroundSecondary: "#525252",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    large: 20,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    })
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
