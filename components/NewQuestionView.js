import React, { Component } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { width, btnWidth, inputWidth } from "../utils/helpers";
import { teal, white, gray, red } from "../utils/colors";
import { addCard } from "../actions";

class NewQuestionView extends Component {
  state = {
    question: "",
    answer: "",
    errorMessageQ: "",
    errorMessageA: "",
    colorQ: teal,
    colorA: teal
  };

  onInputQuestion = question =>
    this.setState({ question, errorMessageQ: "", colorQ: teal });

  onInputAnswer = answer =>
    this.setState({ answer, errorMessageA: "", colorA: teal });

  handleSubmit = () => {
    if (this.state.question !== "" && this.state.answer !== "") {
      const { deck } = this.props.navigation.state.params;
      const updatedDeck = {
        [deck.title]: {
          title: deck.title,
          questions: [
            {
              question: this.state.question,
              answer: this.state.answer
            },
            ...deck.questions
          ]
        }
      };

      this.props.addCard(updatedDeck);
      this.props.navigation.navigate("DeckView", {
        deck
      });
      this.setState({
        question: "",
        answer: ""
      });
    } else if (this.state.question === "" && this.state.answer === "") {
      this.setState({
        errorMessageA: "Please fill in an answer!",
        errorMessageQ: "Please fill in a question",
        colorQ: red,
        colorA: red
      });
    } else if (this.state.answer == "") {
      this.setState({
        errorMessageA: "Please fill in an answer!",
        colorA: red
      });
    } else {
      this.setState({
        errorMessageQ: "Please fill in a question!",
        colorQ: red
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={this.onInputQuestion}
          style={styles.input}
          placeholder="Add Question"
          underlineColorAndroid={this.state.colorQ}
        />
        <View>
          <Text style={styles.errorMessage}>{this.state.errorMessageQ}</Text>
        </View>
        <TextInput
          onChangeText={this.onInputAnswer}
          style={styles.input}
          placeholder="Add answer"
          underlineColorAndroid={this.state.colorA}
        />
        <View>
          <Text style={styles.errorMessage}>{this.state.errorMessageA}</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.handleSubmit()}
          style={styles.btn}
        >
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  btn: {
    padding: 10,
    borderRadius: 1,
    borderWidth: 2,
    borderColor: "teal",
    width: btnWidth
  },
  btnText: {
    textAlign: "center"
  },
  input: {
    width: inputWidth,
    fontSize: 15,
    padding: 10,
    margin: 25
  },
  errorMessage: {
    color: red,
    textAlign: "center"
  }
});

export default connect(null, { addCard })(NewQuestionView);
