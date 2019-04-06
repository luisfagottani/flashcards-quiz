import React from "react";
import { Button, View, ImageBackground, Text } from "react-native";
import { connect } from "react-redux";
import { loading } from "../redux/actions";

class HomeScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.dispatch(loading(true));
    }, 3000);
  }

  render() {
    return (
      <ImageBackground
        source={require("../assets/background-app.jpg")}
        resizeMode="cover"
        style={{
          width: 1332,
          height: 850
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text>Home Screen</Text>
          <Text>{this.props.isLoading && "TestE"}</Text>
        </View>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.loading
  };
}

export default connect(mapStateToProps)(HomeScreen);
