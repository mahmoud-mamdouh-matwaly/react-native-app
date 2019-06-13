import { StyleSheet, Dimensions } from "react-native";
const WINDOW = Dimensions.get("window");

export const Styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: WINDOW.width * 0.031
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: WINDOW.width * 0.001,
    borderRadius: 5,
    borderColor: "#abb4bd",
    width: WINDOW.width * 0.38,
    height: WINDOW.height * 0.062,
    elevation: 1
  },
  titleStyle: {
    color: "#1d2029",
    fontSize: 12
  }
});
