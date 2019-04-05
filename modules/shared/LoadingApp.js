import React, { Component } from "react";
import { View, Image, ActivityIndicator, Animated } from "react-native";
class LoadingApp extends Component {
  state = {
    opacity: new Animated.Value(0),
    width: new Animated.Value(0),
    height: new Animated.Value(0)
  };

  componentDidMount() {
    const { width, opacity, height } = this.state;
    Animated.sequence([
      Animated.timing(opacity, { duration: 500, toValue: 1 }),
      Animated.spring(width, { toValue: 300, speed: 4 }),
      Animated.spring(height, { toValue: 150, speed: 4 })
    ]).start();
  }

  render() {
    const { width, height, opacity } = this.state;
    return (
      <View>
        <Animated.Image
          style={{
            alignSelf: "center",
            width,
            height,
            opacity,
            marginBottom: 30
          }}
          source={require("../../assets/logo-quiz.png")}
          resizeMode="stretch"
        />
        <Animated.View style={{ opacity }}>
          <ActivityIndicator size="large" color="#ffffff" />
        </Animated.View>
      </View>
    );
  }
}

export default LoadingApp;
