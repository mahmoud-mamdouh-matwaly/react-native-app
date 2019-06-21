import React, { Component } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import SubcategoriesTab from "../SubCategoriesTab";
import { Styles } from "./CategoriesTab.css.js";

class CategoriesTab extends Component {
  state = {
    btnSelected: 1,
    categories: [
      {
        id: 1,
        name: "Drugs"
      },
      {
        id: 2,
        name: "Cosmetics"
      },
      {
        id: 3,
        name: "Soap & Detergents"
      },
      {
        id: 4,
        name: "Perfumes"
      },
      {
        id: 5,
        name: "Drugs"
      },
      {
        id: 6,
        name: "Cosmetics"
      },
      {
        id: 7,
        name: "Soap & Detergents"
      },
      {
        id: 8,
        name: "Perfumes"
      }
    ]
  };
  // TODO
  renderCategoryName = () => {
    return this.state.categories.map(category => {
      return (
        <View key={category.id} style={Styles.categorySection}>
          <TouchableOpacity
            onPress={() => this.getCategoriesId(category.id)}
            style={
              category.id === this.state.btnSelected
                ? Styles.btnActive
                : Styles.btnUnActive
            }
          >
            <Text style={Styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        </View>
      );
    });
  };
  getCategoriesId = categoryId => {
    this.setState({ btnSelected: categoryId });
  };
  render() {
    const { btnSelected } = this.state;
    return (
      <View style={Styles.tabs}>
        <ScrollView
          horizontal={true}
          style={Styles.scrollViewStyle}
          showsHorizontalScrollIndicator={false}
        >
          {this.renderCategoryName()}
        </ScrollView>
        <SubcategoriesTab categoryId={btnSelected} />
      </View>
    );
  }
}
export default CategoriesTab;
