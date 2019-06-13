import React from "react";
import { TouchableHighlight } from "react-native";

const ButtonHighlight = props => {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      activeOpacity={props.activeOpacity}
      disabled={props.disabled}
      style={props.style}
      underlayColor={props.underlayColor}
    >
      {props.children}
    </TouchableHighlight>
  );
};
export default ButtonHighlight;
