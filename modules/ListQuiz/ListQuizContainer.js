import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  Animated
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { connect } from "react-redux";
import ListQuizCard from "./ListQuizCard";
import { getAllCards } from "../../redux/selectors";

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

class ListQuizContainer extends Component {
  state = {
    opacity: new Animated.Value(0),
    translateLogo: new Animated.Value(-100),
    translateButton: new Animated.Value(100)
  };
  _renderItem({ item }) {
    return <ListQuizCard item={item} />;
  }

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

  unmountComponent(view) {
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
    }).start(() => {
      this.props.navigation.navigate("CreateQuiz", { transition: "fade" });
    });
  }

  render() {
    const { opacity, translateLogo, translateButton } = this.state;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "stretch",
          flexDirection: "column",
          paddingBottom: 100,
          marginTop: 80
        }}
      >
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={this.props.getAllCards}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
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
            onPress={() => this.unmountComponent("quiz")}
          >
            <Text style={styles.textBtn}> Criar Baralho </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    getAllCards: Object.values(getAllCards(state))
  };
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
    fontWeight: "bold",
    textTransform: "uppercase"
  }
});

export default connect(mapStateToProps)(ListQuizContainer);
