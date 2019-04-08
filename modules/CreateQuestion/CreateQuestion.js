import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Switch,
  Alert
} from "react-native";
import { connect } from "react-redux";
import { createQuestion } from "../../redux/actions";
import BackScreenBtn from "../shared/BackScreenBtn";

const { height: viewportHeight } = Dimensions.get("window");

class CreateQuestion extends Component {
  state = {
    question: "",
    answer: "",
    isRight: false
  };

  submitForm = () => {
    if (
      this.state.question.trim().length === 0 ||
      this.state.answer.trim().length === 0
    ) {
      Alert.alert(
        "Campos obrigatórios!",
        "Você esqueceu de preencher alguns campos!",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    } else {
      this.props.dispatch(
        createQuestion({
          parentId: this.props.navigation.state.params.uid,
          question: this.state.question,
          answer: this.state.answer,
          isRight: this.state.isRight
        })
      );

      this.setState({
        question: "",
        answer: "",
        isRight: false
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
          route={"ListQuiz"}
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
            <Text style={styles.title}>Cadastrar Pergunta</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.subtitle}>Uma pergunta para o seu quiz!</Text>
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
                placeholder={"Digite a pergunta..."}
                onChangeText={text => this.setState({ question: text })}
                value={this.state.question}
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
                placeholder={"Digite a resposta"}
                onChangeText={text => this.setState({ answer: text })}
                value={this.state.answer}
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
                Ela está certa?
              </Text>
              <Switch
                style={{ width: "80%", alignSelf: "center" }}
                onValueChange={value => this.setState({ isRight: value })}
                value={this.state.isRight}
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
export default connect()(CreateQuestion);
