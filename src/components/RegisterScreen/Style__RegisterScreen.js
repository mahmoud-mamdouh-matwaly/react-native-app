import { StyleSheet, Dimensions } from "react-native";
const WINDOW = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: WINDOW.width * 0.08
  },

  input: {
    color: "#abb4bd",
    fontSize: 17,
    height: WINDOW.height * 0.05,
    paddingLeft: 5,
    paddingBottom: 10,
    marginBottom: WINDOW.height * 0.05
  },
  formWrapper: {
    flex: 1
  },
  submitLoginButton: {
    width: WINDOW.width * 0.84,
    height: WINDOW.height * 0.074,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12
  },
  enabledButton: {
    backgroundColor: "#5fc6d7"
  },
  disabledButton: {
    backgroundColor: "rgba(217, 221, 226, 1)"
  },
  buttonText: {
    fontSize: 17,
    color: "#fff"
  }
});
