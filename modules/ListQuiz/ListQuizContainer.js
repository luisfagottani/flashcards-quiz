import React, { Component } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import Carousel from "react-native-snap-carousel";
import { connect } from "react-redux";
import ListQuizCard from "./ListQuizCard";
import { getAllCards } from "../../redux/selectors";

import BackScreenBtn from "../shared/BackScreenBtn";

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

  componentDidMount() {
    console.log(this.props.getAllCards);
    if (this.props.getAllCards.length === 0) {
      this.props.navigation.push("CreateQuiz", { transition: "fade" });
    }
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "stretch",
          flexDirection: "column",
          paddingBottom: 100
        }}
      >
        <BackScreenBtn
          route={"Home"}
          navigation={this.props.navigation}
          styles={{ marginBottom: 100 }}
        >
          Voltar
        </BackScreenBtn>

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
    getAllCards: Object.values(getAllCards(state))
  };
}

export default connect(mapStateToProps)(ListQuizContainer);
