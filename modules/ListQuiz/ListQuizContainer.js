import React, { Component } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { connect } from "react-redux";
import ListQuizCard from "./ListQuizCard";

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
  _renderItem({ item }) {
    return <ListQuizCard item={item} />;
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
          data={this.props.getAllCards}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    getAllCards: state.cards
  };
}

export default connect(mapStateToProps)(ListQuizContainer);
