import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
class BackScreenBtn extends Component {
  _onPressButton = route => {
    if (route === "Home" || route === "ListQuiz") {
      this.props.navigation.pop();
      this.props.navigation.push(route, { transition: "fade" });
    } else {
      this.props.navigation.goBack();
      this.props.navigation.pop();
    }
  };
  render() {
    const { styles, children, route, ...rest } = this.props;
    return (
      <TouchableOpacity onPress={() => this._onPressButton(route)}>
        <View style={[styles, { flexDirection: "row", marginLeft: 15 }]}>
          <Ionicons name="md-arrow-round-back" color={"#fff"} size={25} />
          <Text
            style={[
              {
                marginLeft: 10,
                fontSize: 20,
                color: "#fff",
                fontWeight: "bold"
              }
            ]}
          >
            {children}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default BackScreenBtn;