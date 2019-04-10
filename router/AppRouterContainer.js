import HomeScreen from "./../modules/HomeScreen";
import ListQuizContainer from "./../modules/ListQuiz/ListQuizContainer";
import ListQuizOpenCard from "./../modules/ListQuiz/ListQuizOpenCard";
import CreateQuiz from "../modules/CreateQuiz/CreateQuiz";
import CreateQuestion from "../modules/CreateQuestion/CreateQuestion";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { fadeIn } from "react-navigation-transitions";
import PlayQuizContainer from "../modules/PlayQuiz/PlayQuizContainer";

const AppRouterContainer = createSwitchNavigator(
  {
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
    },
    CreateQuestion: {
      screen: CreateQuestion,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    ShowCardQuiz: {
      screen: ListQuizOpenCard,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    PlayQuiz: {
      screen: PlayQuizContainer,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  {
    headerMode: "none",
    initialRouteName: "ListQuiz",
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
