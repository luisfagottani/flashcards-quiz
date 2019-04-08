import HomeScreen from "./../modules/HomeScreen";
import ListQuizContainer from "./../modules/ListQuiz/ListQuizContainer";
import CreateQuiz from "../modules/CreateQuiz/CreateQuiz";
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
    },
    CreateQuiz: {
      screen: CreateQuiz,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  {
    headerMode: "none",
    initialRouteName: "Home",
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
