import { StyleSheet, Dimensions } from "react-native";
const WINDOW = Dimensions.get("window");

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "#fcfcfc",
    paddingHorizontal: WINDOW.width * 0.08
  },
  headerLoginScreen: {
    flex: 2,
    justifyContent: "flex-end"
  },
  TextCenter: {
    fontSize: 15,
    color: "#1d2029",
    textAlign: "center",
    color: "#abb4bd"
  },
  formWrapper: {
    flex: 1,
    justifyContent: "flex-end"
  },
  input: {
    color: "#abb4bd",
    fontSize: 17,
    height: WINDOW.height * 0.05,
    paddingLeft: 5,
    paddingBottom: 10,
    marginBottom: WINDOW.height * 0.05
  },
  noMargin: {
    marginBottom: 0
  },

  forgotButtonStyles: {
    alignItems: "flex-end"
  },
  forgotButtonTextStyles: {
    color: "#d75f5f",
    fontSize: 15
  },
  submitLogin: {
    flex: 1,
    marginTop: WINDOW.height * 0.03
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
  submitLoginText: {
    fontSize: 17,
    color: "#fff"
  },

  registerStyles: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: WINDOW.height * 0.18,
    marginTop: WINDOW.height * 0.038
  },
  registerTextStyles: {
    color: "#abb4bd",
    fontSize: 17
  },
  registerButtonStyles: {},
  registerButtonTextStyles: {
    color: "#5fbfe1",
    marginLeft: 1,
    fontSize: 17
  }
});
