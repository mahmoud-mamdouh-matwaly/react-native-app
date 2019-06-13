import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "../LoginScreen";
import RegisterScreen from "../RegisterScreen";
import HomeScreen from "../HomeScreen";

const defaultnavigationOptions = {
  headerStyle: {
    borderColor: "#fff",
    borderBottomWidth: 0,
    elevation: null
  },

  initialRouteName: "LoginScreen",
  headerTransparent: true,
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "400",
    justifyContent: "center",
    alignItems: "center"
  }
};
const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      title: "Register"
    }
  },
  Home: {
    screen: HomeScreen,
     navigationOptions: {
      title: "Home"
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
