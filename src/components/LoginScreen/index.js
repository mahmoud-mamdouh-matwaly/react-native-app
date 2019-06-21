import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";
import { Styles } from "./LoginScreen.css.js";
import Logo from "../Logo";
import SocialMail from "../SocialMail";
import ButtonHighlight from "../ButtonHighlight";

class LoginScreen extends Component {
  state = {
    email: "",
    password: "",
    disabledValue: true
  };
  onChangeEmail(email) {
    if (email.length !== 0) {
      this.setState(state => ({ disabledValue: false }));
    }
  }
  onChangePassword(password) {
    if (password.length !== 0) {
      this.setState(state => ({ disabledValue: false }));
    }
  }
  onLoginPressed = (email, password) => {
    console.log("--> onLoginPressed", email.length === 0, password);
    this.props.navigation.navigate("Home");
  };

  onPressButtonRegister = () => {
    console.log("onPressButtonRegister");
    this.props.navigation.navigate("Register");
  };
  render() {
    const { email, password, disabledValue } = this.state;
    const extraButton = this.state.disabledValue
      ? Styles.disabledButton
      : Styles.enabledButton;

    return (
      <View style={Styles.container}>
        <View style={Styles.headerLoginScreen}>
          <Logo />
          <SocialMail />
          <Text style={Styles.TextCenter}>or</Text>
        </View>
        <KeyboardAvoidingView
          behavior="padding"
          style={Styles.formWrapper}
          enabled
        >
          <TextInput
            style={Styles.input}
            placeholder="Email ID"
            onChangeText={email => this.onChangeEmail(email)}
            underlineColorAndroid={"#abb4bd"}
            autoCapitalize="none"
          />

          <TextInput
            style={[Styles.input, Styles.noMargin]}
            placeholder="Password"
            onChangeText={password => this.onChangePassword(password)}
            secureTextEntry
            underlineColorAndroid={"#abb4bd"}
            returnKeyType="go"
          />
          <TouchableOpacity
            style={Styles.forgotButtonStyles}
            onPress={this.onPressButtonRegister}
            activeOpacity={0.8}
          >
            <Text
              style={Styles.forgotButtonTextStyles}
              title="Forgot Password?"
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <View style={Styles.submitLogin}>
          <ButtonHighlight
            onPress={() => this.onLoginPressed(email, password)}
            disabled={disabledValue}
            style={[Styles.submitLoginButton, extraButton]}
            title="Login"
          >
            <Text style={Styles.submitLoginText} title="Login">
              Login
            </Text>
          </ButtonHighlight>
          <View style={Styles.registerStyles}>
            <Text style={Styles.registerTextStyles}>
              Don’t have an account?
            </Text>
            <TouchableOpacity
              style={Styles.registerButtonStyles}
              onPress={this.onPressButtonRegister}
              activeOpacity={0.8}
            >
              <Text
                style={Styles.registerButtonTextStyles}
                title="Register Now"
              >
                Register Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
