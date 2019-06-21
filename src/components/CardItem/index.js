import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Styles } from "./CardItem.css.js";

class CardItem extends Component {
  state = {
    products: [
      {
        name: "Gr",
        image: require("../../../assets/pholcodine.jpg"),
        molarMass: "250ml",
        price: "12 EGP",
        description: "Pholcodine Sugar Free Oral Solution"
      },
      {
        name: "Gr",
        image: require("../../../assets/pholcodine.jpg"),
        molarMass: "250ml",
        price: "12 EGP",
        description: "Pholcodine Sugar Free Oral Solution"
      },
      {
        name: "Gr",
        image: require("../../../assets/pholcodine.jpg"),
        molarMass: "250ml",
        price: "12 EGP",
        description: "Pholcodine Sugar Free Oral Solution"
      },
      {
        name: "Gr",
        image: require("../../../assets/pholcodine.jpg"),
        molarMass: "250ml",
        price: "12 EGP",
        description: "Pholcodine Sugar Free Oral Solution"
      },
      {
        name: "Gr",
        image: require("../../../assets/pholcodine.jpg"),
        molarMass: "250ml",
        price: "12 EGP",
        description: "Pholcodine Sugar Free Oral Solution"
      },
      {
        name: "Gr",
        image: require("../../../assets/pholcodine.jpg"),
        molarMass: "250ml",
        price: "12 EGP",
        description: "Pholcodine Sugar Free Oral Solution"
      }
    ]
  };

  renderItemsName = () => {
    return this.state.products.map((product, index) => {
      return (
        <View key={index} style={Styles.cardItem}>
          <View style={Styles.cardHeader}>
            <View style={Styles.cardWrapText}>
              <Text style={Styles.cardHeaderSign}>{product.name}</Text>
              <Text style={Styles.cardHeaderMolarMass}>
                {product.molarMass}
              </Text>
            </View>
            <View style={Styles.cardWarpImage}>
              <Image source={product.image} style={Styles.cardImage} />
            </View>
          </View>
          <View style={Styles.cardDetails}>
            <Text style={Styles.cardPrice}>{product.price}</Text>
            <Text style={Styles.CardDescription}>{product.description}</Text>
          </View>
        </View>
      );
    });
  };

  render() {
    return <View style={Styles.cardContainer}>{this.renderItemsName()}</View>;
  }
}
export default CardItem;
