import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
class PlayQuizCard extends Component {
  state = {
    isAnwser: false,
    isCorrect: false,
    regressiveCount: 4,
    interval: ""
  };

  showAwnser = () => {
    const { isAnwser } = this.state;
    if (!isAnwser) {
      Alert.alert(
        "Opa, mas já desistiu?",
        "Voce deve primeiro responder! Apressadinho.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
  };

  clearInterval = () => {
    clearInterval(this.state.interval);
  };

  decrement = () => {
    if (this.state.regressiveCount === 0) {
      this.clearInterval();
      this.props.incrementQuestion();
      this.setState({
        isAnwser: false,
        isCorrect: false,
        regressiveCount: 4,
        interval: ""
      });
    } else {
      this.setState(state => {
        return { regressiveCount: state.regressiveCount - 1 };
      });
    }
  };
  regressiveCount = () => {
    let regressiveCount = setInterval(this.decrement, 1000);

    this.setState({ interval: regressiveCount });
  };
  anwserQuestion = status => {
    if (this.props.question.isRight === status) {
      this.props.incrementScore();
      this.setState({
        isCorrect: true
      });
    } else {
      this.setState({
        isCorrect: false
      });
    }

    this.setState({
      isAnwser: true
    });
    this.regressiveCount();
  };

  componentWillUnmount = () => {
    this.setState({
      isAnwser: false,
      isCorrect: false,
      regressiveCount: 4,
      interval: ""
    });
  };
  render() {
    const { question, answer, isRight } = this.props.question;
    const { isAnwser, isCorrect } = this.state;
    if (isAnwser) {
      return (
        <View
          style={{
            width: "80%",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 40,
              textAlign: "center",
              fontWeight: "bold",
              alignItems: "center",
              marginBottom: 30
            }}
          >
            {answer}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 30
            }}
          >
            A RESPOSTA ESTAVA:{" "}
            {isRight ? (
              <Text style={{ color: "green" }}>CERTA</Text>
            ) : (
              <Text style={{ color: "red" }}>ERRADA</Text>
            )}
          </Text>

          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 50
            }}
          >
            {isCorrect ? (
              <Text style={{ color: "green" }}>PARABÉNS! VOCÊ ACERTOU</Text>
            ) : (
              <Text style={{ color: "red" }}>PUTZ, VOCÊ ERROU</Text>
            )}
          </Text>

          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              textAlign: "center",
              color: "#fff"
            }}
          >
            Mudando a pergunta em:
          </Text>
          <Text
            style={{
              fontSize: 45,
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
              color: "#fff"
            }}
          >
            {this.state.regressiveCount}
          </Text>
        </View>
      );
    }
    return (
      <View
        style={{
          width: "80%",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 40,
            textAlign: "center",
            fontWeight: "bold",
            alignItems: "center"
          }}
        >
          {question}
        </Text>
        <TouchableOpacity
          style={{ marginBottom: 80 }}
          onPress={() => this.showAwnser()}
        >
          <Text style={{ fontSize: 16, color: "red", textAlign: "center" }}>
            Ver Resposta
          </Text>
        </TouchableOpacity>

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
