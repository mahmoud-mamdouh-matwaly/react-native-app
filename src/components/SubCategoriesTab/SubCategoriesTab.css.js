import { StyleSheet, Dimensions } from "react-native";
const WINDOW = Dimensions.get("window");

export const Styles = StyleSheet.create({
  SubCategoryContainer: {
    flex: 1,
    backgroundColor: "#ff0000",
    alignItems: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  SubCategoryItem: {
    borderRadius: 6,
    borderWidth: 1,
    marginLeft: 8,
    width: 91,
    borderColor: "#606060",
    alignItems: "center"
  },
  SubCategoryText: {
    color: "#fff",
    fontSize: 15.3,
    color: "#606060",
    lineHeight: 36.9
  }
});
