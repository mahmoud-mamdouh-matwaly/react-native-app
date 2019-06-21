import React, { Component } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { Styles } from "./CategoriesScreen.css.js";
import CategoriesTab from "../CategoriesTab";
import CardItem from "../CardItem";

class CategoriesScreen extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
          <Text style={Styles.headerTitle}>Categories</Text>
          <View style={Styles.headerIcon}>
            <Image
              style={Styles.iconSearch}
              source={require("../../../assets/icSearchNav.png")}
            />
            <Text style={Styles.iconCart}>cart</Text>
          </View>
        </View>
        <CategoriesTab />
        <ScrollView showsVerticalScrollIndicator={false}>
          <CardItem />
        </ScrollView>
      </View>
    );
  }
}
export default CategoriesScreen;
