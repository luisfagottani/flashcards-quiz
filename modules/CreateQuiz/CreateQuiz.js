import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput
} from "react-native";

const { height: viewportHeight } = Dimensions.get("window");

class CreateQuiz extends Component {
  state = {
    inputText: ""
  };
  render() {
    return (
      <View>
        <Text>Cadastrar um Quiz</Text>
        <View style={styles.card}>
          <View style={styles.head}>
            <Text style={styles.title} />
          </View>
          <View style={styles.preheader}>
            <Text style={styles.subtitle} />
          </View>
          <View style={styles.content}>
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.contentTitle}>Titulo do Quiz:</Text>
            </View>
            <View>
              <TextInput
                style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                onChangeText={text => this.setState({ inputText: text })}
                value={this.state.inputText}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity style={[styles.button]} onPress={this.onPress}>
                <Text style={styles.textBtn}> Cadastrar </Text>
              </TouchableOpacity>
            </View>
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
export default CreateQuiz;
