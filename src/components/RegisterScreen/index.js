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
import { styles } from "./Style__RegisterScreen";

export default class Register extends React.Component {
  state = {
    email: "",
    password: "",
    password_confirmation: "",
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
      ? styles.disabledButton
      : styles.enabledButton;
    return (
      <ScrollView>
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.container}
          enabled
        >
          <Logo />
          <SocialMail />
          <View style={styles.formWrapper}>
            <TextInput
              onChangeText={name => this.setState({ name })}
              style={styles.input}
              placeholder="Name"
              returnKeyType="next"
              underlineColorAndroid={"#cccccc"}
            />

            <TextInput
              onChangeText={email => this.setState({ email })}
              style={styles.input}
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Email"
              underlineColorAndroid={"#cccccc"}
            />
            <TextInput
              onChangeText={phoneNum => this.setState({ phoneNum })}
              style={styles.input}
              returnKeyType="next"
              autoCapitalize="none"
              placeholder="phone Num"
              underlineColorAndroid={"#cccccc"}
            />
            <TextInput
              onChangeText={password => this.setState({ password })}
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              returnKeyType="next"
              secureTextEntry
              underlineColorAndroid={"#cccccc"}
            />

            <TextInput
              onChangeText={password_confirmation =>
                this.setState({ password_confirmation })
              }
              style={styles.input}
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
              style={[styles.submitLoginButton, extraButton]}
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableHighlight>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}
