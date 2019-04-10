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
    translateContainer: new Animated.Value(-200),
    translateButton: new Animated.Value(100)
  };

  componentDidMount() {
    const { translateContainer, translateButton } = this.state;
    Animated.spring(translateContainer, { duration: 4, toValue: 0 }).start();
    Animated.spring(translateButton, {
      duration: 100,
      toValue: 0,
      useNativeDriver: true
    }).start();
  }

  _renderItem = ({ item }) => {
    return <ListQuizCard clickOpen={this.unmountComponent} item={item} />;
  };

  unmountComponent = (view, id = 0) => {
    const { translateContainer, translateButton } = this.state;
    Animated.spring(translateContainer, {
      duration: 4,
      toValue: -600,
      useNativeDriver: true
    }).start();
    Animated.spring(translateButton, {
      duration: 100,
      toValue: 500,
      useNativeDriver: true
    }).start(() => {
      if (view === "quiz") {
        this.props.navigation.navigate("CreateQuiz", { transition: "fade" });
      } else {
        this.props.navigation.navigate("ShowCardQuiz", {
          uid: id
        });
      }
    });
  };

  render() {
    const { translateContainer, translateButton } = this.state;
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
          layout={"stack"}
          containerCustomStyle={{
            transform: [
              {
                translateY: translateContainer
              }
            ]
          }}
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
            <Text style={styles.textBtn}> Criar Quiz </Text>
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
