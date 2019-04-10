import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

class ContentCard extends Component {
  render() {
    const { text, toggleAnwser, isAnwser } = this.props;
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
          {text}
        </Text>
        <TouchableOpacity
          style={{ marginBottom: 80 }}
          onPress={() => toggleAnwser()}
        >
          <Text
            style={{
              fontSize: 16,
              color: "yellow",
              fontWeight: "bold",
              textAlign: "center"
            }}
          >
            {isAnwser ? "Ver Pergunta" : "Ver Resposta"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ContentCard;
