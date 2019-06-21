import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "../LoginScreen";
import RegisterScreen from "../RegisterScreen";
import CategoriesScreen from "../CategoriesScreen";

const AppNavigator = createStackNavigator({
  CategoriesScreen: {
    screen: CategoriesScreen,
    navigationOptions: {
      header: null
    }
  },
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
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
