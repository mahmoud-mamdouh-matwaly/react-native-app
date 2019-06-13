import React from "react";
import { View, Text } from "react-native";
import { Styles } from "./Style__SocialMail";
import ButtonHighlight from "../ButtonHighlight";

onPressFacebook = () => {
  console.log("facebook");
};
onPressGoogle = () => {
  console.log("google");
};

const SocialMail = props => {
  return (
    <View style={Styles.buttonWrapper}>
      <ButtonHighlight
        onPress={this.onPressFacebook}
        activeOpacity={0.4}
        style={Styles.buttonStyle}
        underlayColor={"#fff"}
      >
        <Text style={Styles.titleStyle} title="Facebook">
          Facebook
        </Text>
      </ButtonHighlight>
      <ButtonHighlight
        onPress={this.onPressGoogle}
        activeOpacity={0.4}
        style={Styles.buttonStyle}
        underlayColor={"#fff"}
      >
        <Text style={Styles.titleStyle} title="Google">
          Google
        </Text>
      </ButtonHighlight>
    </View>
  );
};

export default SocialMail;
