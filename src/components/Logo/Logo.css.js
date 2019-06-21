import { StyleSheet, Dimensions } from "react-native";
const WINDOW = Dimensions.get("window");

export const Styles = StyleSheet.create({
  imageWrapper: {
    alignItems: "center"
  },
  logo: {
    width: WINDOW.width * 0.46,
    height: WINDOW.height * 0.053,
    paddingHorizontal: WINDOW.width * 0.3,
    paddingTop: WINDOW.height * 0.12,
    resizeMode: "contain"
  }
});
