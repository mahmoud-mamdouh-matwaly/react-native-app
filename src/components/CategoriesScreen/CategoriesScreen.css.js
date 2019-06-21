import { StyleSheet, Dimensions } from "react-native";
const WINDOW = Dimensions.get("window");

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    marginTop: WINDOW.height * 0.054
  },
  header: {
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingTop: WINDOW.height * 0.015,
    paddingBottom: WINDOW.height * 0.031,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: WINDOW.width * 0.043
  },
  headerTitle: {
    color: "#5fc6d7",
    fontSize: 34
  },
  headerIcon: {
    flexDirection: "row",
    backgroundColor: "#FF0000"
  },
  iconSearch: {
    width: WINDOW.width * 0.064,
    height: WINDOW.height * 0.031,
    resizeMode: "contain"
  },
  iconCart: {
    color: "#b1b1b1"
  },
  Tabs: {
    backgroundColor: "#ccc"
  }
});
