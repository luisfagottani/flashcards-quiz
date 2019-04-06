import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";
import Carousel from "react-native-snap-carousel";

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
  _renderItem({ item, index }) {
    return (
      <View style={styles.card}>
        <View style={styles.head}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
    );
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "stretch",
          flexDirection: "row",
          paddingTop: 100,
          paddingBottom: 100
        }}
      >
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={[{ title: "teste" }, { title: "teste2" }, { title: "teste3" }]}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: viewportHeight / 2,
    borderRadius: 3,
    shadowColor: "#000",
    backgroundColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  head: {
    backgroundColor: "#f77a1f",
    height: "15%",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default ListQuizContainer;
