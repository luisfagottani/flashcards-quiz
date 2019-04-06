import React, { Component } from "react";
import { View, Animated } from "react-native";
import { connect } from "react-redux";
import LoadingApp from "./shared/LoadingApp";

import { loading } from "../redux/actions";

import AppRouterContainer from "../router/AppRouterContainer";
const AppContainer = AppRouterContainer;

class Hello extends Component {
  state = {
    isLoadingLocal: true,
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
      Animated.timing(opacity, { duration: 500, toValue: 0 }).start(() =>
        this.setState({ isLoadingLocal: false })
      );
    }
  }
  render() {
    const { opacity, isLoadingLocal } = this.state;

    if (isLoadingLocal) {
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
    return <AppContainer />;
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.loading
  };
}
export default connect(mapStateToProps)(Hello);
