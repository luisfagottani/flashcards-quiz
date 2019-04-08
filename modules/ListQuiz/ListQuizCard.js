import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { withNavigation } from "react-navigation";
import Dificulty from "./Dificulty";

const { height: viewportHeight } = Dimensions.get("window");

class ListQuizCard extends Component {
  render() {
    const { item } = this.props;
    return (
      <View style={styles.card}>
        <View style={styles.head}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.preheader}>
          <Text style={styles.subtitle}>{item.describe}</Text>
        </View>
        <View style={styles.content}>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.contentTitle}>Dificuldade:</Text>
            <Dificulty vote={item.dificulty} />
          </View>
          <View>
            <Text style={styles.contentTitle}>Perguntas:</Text>
            <Text
              style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}
            >
              {item.questions.length}
            </Text>
          </View>
          <View style={{ marginTop: 30 }}>
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => {
                this.props.navigation.navigate("PlayQuiz", {
                  uid: item.id
                });
              }}
            >
              <Text style={styles.textBtn}> Jogar </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10 }}>
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => {
                this.props.navigation.navigate("CreateQuestion", {
                  uid: item.id
                });
              }}
            >
              <Text style={styles.textBtn}> Add Pergunta </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: viewportHeight / 1.7,
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
    height: "10%",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  preheader: {
    backgroundColor: "#f7af41",
    height: "30%",
    justifyContent: "center"
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "400",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  content: {
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  contentTitle: {
    fontSize: 16,
    color: "#ccc",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 5
  },
  button: {
    backgroundColor: "#f77a1f",
    height: 40,
    width: 150,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  textBtn: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "normal",
    textTransform: "uppercase"
  }
});
export default withNavigation(ListQuizCard);
