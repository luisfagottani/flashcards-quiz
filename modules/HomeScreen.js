import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Animated
} from "react-native";
import { connect } from "react-redux";
import { loading } from "../redux/actions";

class HomeScreen extends React.Component {
  state = {
    opacity: new Animated.Value(0),
    translateLogo: new Animated.Value(-100),
    translateButton: new Animated.Value(100)
  };

  componentDidMount() {
    const { opacity, translateLogo, translateButton } = this.state;
    Animated.timing(opacity, { duration: 500, toValue: 1 }).start();
    Animated.spring(translateLogo, { duration: 4, toValue: 0 }).start();
    Animated.spring(translateButton, {
      duration: 100,
      toValue: 0,
      useNativeDriver: true
    }).start();
  }

  unmountComponent() {
    const { opacity, translateLogo, translateButton } = this.state;
    Animated.timing(opacity, {
      duration: 500,
      toValue: 0,
      useNativeDriver: true
    }).start();
    Animated.spring(translateLogo, {
      duration: 4,
      toValue: -100,
      useNativeDriver: true
    }).start();
    Animated.spring(translateButton, {
      duration: 100,
      toValue: 500,
      useNativeDriver: true
    }).start(() =>
      this.props.navigation.navigate("ListQuiz", { transition: "fade" })
    );
  }

  render() {
    const { opacity, translateLogo, translateButton } = this.state;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          paddingLeft: 50,
          paddingRight: 50
        }}
      >
        <Animated.Image
          style={{
            alignSelf: "center",
            width: 300,
            height: 150,
            marginBottom: 80,
            opacity,
            transform: [
              {
                translateY: translateLogo
              }
            ]
          }}
          source={require("../assets/logo-quiz.png")}
          resizeMode="stretch"
        />
        <View>
          <TouchableOpacity
            style={[
              styles.button,
              {
                transform: [
                  {
                    translateX: translateButton
                  }
                ]
              }
            ]}
            onPress={() => this.unmountComponent()}
          >
            <Text style={styles.textBtn}> Jogar </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              {
                transform: [
                  {
                    translateX: translateButton
                  }
                ]
              }
            ]}
            onPress={this.onPress}
          >
            <Text style={styles.textBtn}> Cadastrar Quiz </Text>
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
    fontWeight: "normal",
    textTransform: "uppercase"
  }
});

function mapStateToProps(state) {
  return {
    isLoading: state.loading
  };
}

export default connect(mapStateToProps)(HomeScreen);
