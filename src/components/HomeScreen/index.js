import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.TextStyle}>HomeScreen!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  TextStyle: {
    color: "#fff"
  }
});
