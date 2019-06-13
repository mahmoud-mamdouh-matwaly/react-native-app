import React from "react";
import { View, Image } from "react-native";
import { Styles } from "./Style__Logo";

const Logo = props => {
  return (
    <View style={Styles.imageWrapper}>
      <Image
        style={Styles.logo}
        source={require("../../../assets/icSplash.png")}
      />
    </View>
  );
};

export default Logo;
