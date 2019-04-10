import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Slider,
  Alert
} from "react-native";
import { connect } from "react-redux";
import { createQuizCard } from "../../redux/actions";
import BackScreenBtn from "../shared/BackScreenBtn";

const { height: viewportHeight } = Dimensions.get("window");

class CreateQuiz extends Component {
  state = {
    titleQuiz: "",
    describeQuiz: "",
    dificulty: 0
  };

  submitForm = () => {
    if (
      this.state.titleQuiz.trim().length === 0 ||
      this.state.describeQuiz.trim().length === 0
    ) {
      Alert.alert(
        "Campos obrigatórios!",
        "Você esqueceu de preencher alguns campos!",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    } else {
      this.props.dispatch(
        createQuizCard({
          title: this.state.titleQuiz,
          describe: this.state.describeQuiz,
          dificulty: this.state.dificulty,
          questions: []
        })
      );

      this.setState({
        titleQuiz: "",
        describeQuiz: "",
        dificulty: "",
        questions: []
      });

      this.props.navigation.pop();
      this.props.navigation.push("ListQuiz");
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        style={{
          flex: 1,
          justifyContent: "flex-start",
          flexDirection: "column",
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 100
        }}
      >
        <BackScreenBtn
          navigation={this.props.navigation}
          route={"Home"}
          styles={{
            marginBottom: 100,
            alignSelf: "flex-start",
            marginLeft: 0
          }}
        >
          Voltar
        </BackScreenBtn>
        <View style={styles.card}>
          <View style={styles.head}>
            <Text style={styles.title}>Cadastrar Quiz</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.subtitle}>Qual será o tema do seu quiz?</Text>
            <View style={{ width: "100%" }}>
              <TextInput
                style={{
                  height: 45,
                  width: "80%",
                  borderColor: "gray",
                  borderWidth: 1,
                  alignSelf: "center",
                  borderRadius: 3,
                  paddingLeft: 10,
                  paddingRight: 10,
                  marginBottom: 15,
                  borderRadius: 3
                }}
                placeholder={"Digite o tema do seu quiz..."}
                onChangeText={text => this.setState({ titleQuiz: text })}
                value={this.state.titleQuiz}
              />
              <TextInput
                style={{
                  height: 45,
                  width: "80%",
                  borderColor: "gray",
                  borderWidth: 1,
                  alignSelf: "center",
                  borderRadius: 3,
                  paddingLeft: 10,
                  paddingRight: 10,
                  borderRadius: 3,
                  marginBottom: 15
                }}
                placeholder={"Descreva sobre o tema"}
                onChangeText={text => this.setState({ describeQuiz: text })}
                value={this.state.describeQuiz}
              />
              <Text
                style={{
                  fontSize: 14,
                  width: "80%",
                  alignSelf: "center",
                  color: "#333",
                  fontWeight: "bold"
                }}
              >
                Dificuldade: {this.state.dificulty}
              </Text>
              <Slider
                style={{ width: "80%", alignSelf: "center" }}
                step={1}
                value={this.state.dificulty}
                maximumValue={5}
                minimumValue={0}
                onValueChange={value => this.setState({ dificulty: value })}
              />
            </View>
            <View style={{ marginTop: 10, marginBottom: 30 }}>
              <TouchableOpacity
                style={[styles.button]}
                onPress={this.submitForm}
              >
                <Text style={styles.textBtn}> Cadastrar </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
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
    height: 50,
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
    fontSize: 24,
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 15
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
export default connect()(CreateQuiz);
