import React, { Component } from "react";
import { View, Text, Animated } from "react-native";
import { connect } from "react-redux";
import LoadingApp from "./shared/LoadingApp";

import { loading } from "../redux/actions";

class Hello extends Component {
  state = {
    opacity: new Animated.Value(1)
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.dispatch(loading(false));
    }, 6000);
  }

  componentWillReceiveProps(nextProps) {
    const { opacity } = this.state;
    const { isLoading } = this.props;

    if (isLoading !== nextProps) {
      Animated.timing(opacity, { duration: 500, toValue: 0 }).start();
    }
  }

  render() {
    const { isLoading } = this.props;
    const { opacity } = this.state;

    if (isLoading) {
      return (
        <View
          style={{
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1
          }}
        >
          <Animated.View style={{ opacity }}>
            <LoadingApp />
          </Animated.View>
        </View>
      );
    }
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.loading
  };
}
export default connect(mapStateToProps)(Hello);
