import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { getQuestionByCard } from "../../redux/selectors";
import BackScreenBtn from "../shared/BackScreenBtn";
import PlayQuizCard from "./PlayQuizCard";

class PlayQuizContainer extends Component {
  state = {
    numberOfQuestions: 0,
    currentQuestion: 0,
    score: 0,
    showScore: false
  };

  componentDidMount() {
    const { questions } = this.props;
    if (questions.length === 0) {
      this.props.navigation.pop();
      this.props.navigation.navigate("CreateQuestion", {
        uid: this.props.navigation.state.params.uid
      });
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
      return (
        <View
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <BackScreenBtn
            route={"ListQuiz"}
            navigation={this.props.navigation}
            styles={{ marginBottom: 50 }}
          >
            Voltar
          </BackScreenBtn>
          <Text style={{ fontSize: 30, color: "#fff", fontWeight: "bold" }}>
            Sua pontuação:
          </Text>
          <Text
            style={{
              fontSize: 30,
              color: "#000",
              fontWeight: "bold",
              marginBottom: 40
            }}
          >
            {score} {score === 0 || score > 1 ? " pontos" : "ponto"}
          </Text>
        </View>
      );
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
