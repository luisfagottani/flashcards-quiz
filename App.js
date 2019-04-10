import React from "react";
import { View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { isIphoneX } from "./utils/identify-iphone";
import reducer from "./redux/reducer";
import Hello from "./modules/Hello";
import { setLocalNotification } from "./utils/helpers";

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }
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
          <StatusBar backgroundColor="#bf29ec" barStyle="light-content" />
          <Hello />
        </View>
      </Provider>
    );
  }
}
