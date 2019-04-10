import React, { Component } from "react";
import { View, Text, Alert } from "react-native";
import { connect } from "react-redux";
import { getQuestionByCard } from "../../redux/selectors";
import BackScreenBtn from "../shared/BackScreenBtn";
import PlayQuizCard from "./PlayQuizCard";
import {
  clearLocalNotification,
  setLocalNotification
} from "../../utils/helpers";
import ResultCard from "./ResultCard";

class PlayQuizContainer extends Component {
  state = {
    numberOfQuestions: 0,
    currentQuestion: 0,
    score: 0,
    showScore: false
  };

  componentDidMount() {
    const { questions } = this.props;
    if (questions && questions.length === 0) {
      Alert.alert(
        "Opa!",
        "É preciso criar uma pergunta!",
        [
          {
            text: "OK",
            onPress: () =>
              this.props.navigation.navigate("ShowCardQuiz", {
                uid: this.props.navigation.state.params.uid
              })
          }
        ],
        { cancelable: false }
      );
    }
    this.setState({
      numberOfQuestions: questions.length,
      currentQuestion: 0,
      score: 0
    });
  }

  incrementScore = () => {
    this.setState(state => {
      return { score: state.score + 1 };
    });
  };

  incrementQuestion = () => {
    const { currentQuestion, numberOfQuestions } = this.state;
    if (currentQuestion < numberOfQuestions - 1) {
      this.setState(state => {
        return { currentQuestion: state.currentQuestion + 1 };
      });
    } else {
      clearLocalNotification().then(setLocalNotification);
      this.setState({ showScore: true });
    }
  };

  componentWillUnmount() {
    this.setState({
      numberOfQuestions: 0,
      currentQuestion: 0,
      score: 0
    });
  }
  render() {
    const { questions } = this.props;
    const { numberOfQuestions, currentQuestion, showScore, score } = this.state;
    if (questions.length === 0) {
      return <View />;
    }

    if (showScore) {
      return <ResultCard score={score} />;
    }
    return (
      <View>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            {currentQuestion + 1} / {numberOfQuestions}
          </Text>
        </View>
        <PlayQuizCard
          incrementQuestion={this.incrementQuestion}
          incrementScore={this.incrementScore}
          question={questions[currentQuestion]}
        />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  questions: getQuestionByCard(state, ownProps.navigation.state.params.uid)
});

export default connect(mapStateToProps)(PlayQuizContainer);
