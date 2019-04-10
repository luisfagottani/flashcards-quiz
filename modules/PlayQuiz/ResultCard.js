import React, { Component } from "react";
import { View, Text } from "react-native";
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
            marginBottom: 40
          }}
        >
          {score} {score === 0 || score > 1 ? " pontos" : "ponto"}
        </Text>
      </View>
    );
  }
}

export default withNavigation(ResultCard);
