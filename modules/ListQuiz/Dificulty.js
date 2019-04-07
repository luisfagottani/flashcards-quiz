import React, { Component } from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

class Dificulty extends Component {
  renderDificulty() {
    const { vote } = this.props;
    let auxVote = vote;
    let votes = [];
    for (let x = 0; x < 5; x++) {
      if (auxVote > 0) {
        auxVote = auxVote - 1;
        votes.push(1);
      } else {
        votes.push(0);
      }
    }

    return votes.map((vote, index) => {
      if (vote === 1) {
        return (
          <FontAwesome key={index} name="star" color={"#f7af41"} size={25} />
        );
      }
      return (
        <FontAwesome key={index} name="star-o" color={"#f7af41"} size={25} />
      );
    });
  }
  render() {
    return (
      <View style={{ flexDirection: "row" }}>{this.renderDificulty()}</View>
    );
  }
}

export default Dificulty;
