import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import ContentCard from "./ContentCard";
class PlayQuizCard extends Component {
  state = {
    isAnwser: false
  };

  toggleAnwser = () => {
    const { isAnwser } = this.state;
    this.setState(beforeState => ({
      isAnwser: !beforeState.isAnwser
    }));
  };

  nextQuestion = () => {
    this.props.incrementQuestion();
    this.setState({
      isAnwser: false
    });
  };

  anwserQuestion = status => {
    if (this.props.question.isRight === status) {
      this.props.incrementScore();
    }
    this.nextQuestion();
  };

  componentWillUnmount = () => {
    this.setState({
      isAnwser: false
    });
  };
  render() {
    const { question, answer, isRight } = this.props.question;
    const { isAnwser } = this.state;
    return (
      <View
        style={{
          width: "80%",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ContentCard
          toggleAnwser={this.toggleAnwser}
          text={isAnwser ? answer : question}
          isAnwser={isAnwser}
        />

        <View>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: "green", marginBottom: 15 }
            ]}
            onPress={() => this.anwserQuestion(true)}
          >
            <Text style={styles.textBtn}>Correta</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "red" }]}
            onPress={() => this.anwserQuestion(false)}
          >
            <Text style={styles.textBtn}>Errada</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f77a1f",
    height: 45,
    width: 150,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  textBtn: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "normal",
    textTransform: "uppercase",
    fontWeight: "bold"
  }
});

export default PlayQuizCard;
