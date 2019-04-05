import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { isIphoneX } from "./utils/identify-iphone";
import reducer from "./redux/reducer";
import Hello from "./modules/Hello";

export default class App extends React.Component {
  render() {
    const HEADER_SIZE = isIphoneX() ? 60 : 0;
    return (
      <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <View
          style={{
            flex: 1,
            paddingTop: HEADER_SIZE,
            alignItems: "stretch",
            backgroundColor: "#bf29ec"
          }}
        >
          <Hello />
        </View>
      </Provider>
    );
  }
}
