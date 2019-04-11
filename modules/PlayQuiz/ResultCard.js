import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BackScreenBtn from "../shared/BackScreenBtn";
import { withNavigation } from "react-navigation";

class ResultCard extends Component {
  render() {
    const { score } = this.props;
    return (
      <View
        style={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <BackScreenBtn
          navigation={this.props.navigation}
          route={"ShowCardQuiz"}
          uid={this.props.navigation.state.params.uid}
          styles={{
            marginBottom: 30
          }}
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
            marginBottom: 60
          }}
        >
          {score} {score === 0 || score > 1 ? " pontos" : "ponto"}
        </Text>
        <View>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => this.props.restartQuiz()}
          >
            <Text style={styles.textBtn}> Restart Quiz </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f77a1f",
    height: 60,
    paddingTop: 5,
    paddingBottom: 5,
    color: "#fff",
    marginBottom: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  textBtn: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase"
  }
});

export default withNavigation(ResultCard);
