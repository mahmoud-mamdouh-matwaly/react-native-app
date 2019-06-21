import { StyleSheet, Dimensions } from "react-native";
const WINDOW = Dimensions.get("window");

export const Styles = StyleSheet.create({
  Tabs: {
    backgroundColor: "#ccc"
  },
  scrollViewStyle: {
    backgroundColor: "#fff",
    marginLeft: 19
  },
  categorySection: {
    marginHorizontal: 15
  },
  btnActive: {
    borderBottomColor: "#5fc6d7",
    borderBottomWidth: 3
  },
  btnUnActive: { borderBottomWidth: 0 },
  categoryText: {
    fontSize: 15.3,
    color: "#606060",
    lineHeight: 36.9,
    fontWeight: "700"
  }
});
