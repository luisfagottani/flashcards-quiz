import HomeScreen from "./../modules/HomeScreen";
import ListQuizContainer from "./../modules/ListQuiz/ListQuizContainer";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { fadeIn } from "react-navigation-transitions";

const AppRouterContainer = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    ListQuiz: {
      screen: ListQuizContainer,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  {
    headerMode: "none",
    initialRouteParams: { transition: "fade" },
    transitionConfig: () => fadeIn(),
    cardStyle: {
      backgroundColor: "#bf29ec",
      shadowColor: "#0000000",
      shadowOpacity: 0,
      shadowOffset: {
        height: 0
      },
      shadowRadius: 0
    }
  }
);

export default createAppContainer(AppRouterContainer);
