import React, { Component } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";

import { Styles } from "./SubCategoriesTab.css.js";

class SubCategoriesTab extends Component {
  state = {
    subCategoriesItem: [
      {
        categoryId: 1,
        id: 1,
        name: "Analgesics"
      },
      {
        categoryId: 1,
        id: 2,
        name: "Cold & flu"
      },
      {
        categoryId: 1,
        id: 3,
        name: "Laxatives"
      },
      {
        categoryId: 1,
        id: 4,
        name: "Anti biotic"
      },
      {
        categoryId: 2,
        id: 1,
        name: "Analgesics-2"
      },
      {
        categoryId: 2,
        id: 2,
        name: "Cold & flu-2"
      },
      {
        categoryId: 3,
        id: 3,
        name: "Laxatives-3"
      },
      {
        categoryId: 2,
        id: 4,
        name: "Anti biotic-3"
      }
    ]
  };

  render() {
    const { categoryId } = this.props;
    let SubCategory = this.state.subCategoriesItem.filter(
      subCategoryItem => subCategoryItem.categoryId === categoryId
    );

    return (
      <ScrollView
        horizontal={true}
        style={{ marginLeft: 19 }}
        showsHorizontalScrollIndicator={false}
      >
        <View style={Styles.SubCategoryContainer}>
          {SubCategory.map(item => {
            return (
              <View key={item.id} style={Styles.SubCategoryItem}>
                <Text style={Styles.SubCategoryText}>{item.name}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}
export default SubCategoriesTab;
