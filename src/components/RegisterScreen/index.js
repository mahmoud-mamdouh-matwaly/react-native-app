import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import SocialMail from "../SocialMail";
import Logo from "../Logo";
import { Styles } from "./RegisterScreen.css.js";

export default class Register extends React.Component {
  state = {
    email: "",
    password: "",
    passwordConfirmation: "",
    errors: "",
    loading: false,
    name: "",
    phoneNum: "",
    disabledValue: true
  };

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#fff",
      elevation: null
    },
    headerTintColor: "#abb4bd",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  onRegisterPress = (email, password) => {
    console.log("kkk");
  };
  render() {
    const { disabledValue } = this.state;
    const extraButton = disabledValue
      ? Styles.disabledButton
      : Styles.enabledButton;
    return (
      <ScrollView>
        <KeyboardAvoidingView
          behavior="padding"
          style={Styles.container}
          enabled
        >
          <Logo />
          <SocialMail />
          <View style={Styles.formWrapper}>
            <TextInput
              onChangeText={name => this.setState({ name })}
              style={Styles.input}
              placeholder="Name"
              returnKeyType="next"
              underlineColorAndroid={"#cccccc"}
            />

            <TextInput
              onChangeText={email => this.setState({ email })}
              style={Styles.input}
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Email"
              underlineColorAndroid={"#cccccc"}
            />
            <TextInput
              onChangeText={phoneNum => this.setState({ phoneNum })}
              style={Styles.input}
              returnKeyType="next"
              autoCapitalize="none"
              placeholder="phone Num"
              underlineColorAndroid={"#cccccc"}
            />
            <TextInput
              onChangeText={password => this.setState({ password })}
              style={Styles.input}
              placeholder="Password"
              secureTextEntry={true}
              returnKeyType="next"
              secureTextEntry
              underlineColorAndroid={"#cccccc"}
            />

            <TextInput
              onChangeText={passwordConfirmation =>
                this.setState({ passwordConfirmation })
              }
              style={Styles.input}
              placeholder="Confirm Password"
              secureTextEntry={true}
              returnKeyType="go"
              secureTextEntry
              underlineColorAndroid={"#cccccc"}
            />

            <TouchableHighlight
              onPress={() =>
                this.onRegisterPress(this.state.email, this.state.password)
              }
              disabled={disabledValue}
              style={[Styles.submitLoginButton, extraButton]}
            >
              <Text style={Styles.buttonText}>Register</Text>
            </TouchableHighlight>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}
