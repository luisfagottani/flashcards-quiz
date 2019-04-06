import HomeScreen from "./../modules/HomeScreen";
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppRouterContainer = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppRouterContainer);
