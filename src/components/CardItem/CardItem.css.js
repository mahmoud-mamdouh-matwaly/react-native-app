import { StyleSheet, Dimensions, Platform } from "react-native";
const WINDOW = Dimensions.get("window");

export const Styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: "#fcfcfc",
    alignItems: "stretch",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  cardItem: {
    marginBottom: WINDOW.height * 0.033,
    width: 155,
    marginTop: WINDOW.height * 0.02
  },
  cardHeader: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
    height: 176,
    marginBottom: WINDOW.height * 0.01,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5
        },
        shadowOpacity: 0.06,
        shadowRadius: 8
      },
      android: {
        elevation: 5
      }
    })
  },
  cardWrapText: {
    justifyContent: "space-between",
    flexDirection: "row"
  },
  cardHeaderSign: {
    color: "#6f788c"
  },
  cardHeaderMolarMass: {
    color: "#000",
    fontSize: 12,
    fontWeight: "500"
  },
  cardWarpImage: {
    alignSelf: "center",
    backgroundColor: "#FFf"
  },
  cardImage: {
    width: 70,
    height: 133,
    resizeMode: "contain"
  },
  cardDetails: {
    marginHorizontal: WINDOW.width * 0.016
  },
  cardPrice: {
    color: "#5fc6d7",
    fontSize: 15
  },
  CardDescription: {
    color: "#8e8e8e",
    fontSize: 16
  }
});
