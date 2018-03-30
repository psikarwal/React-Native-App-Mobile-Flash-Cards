import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { teal, white, gray } from "../utils/colors";
import { width, btnWidth } from "../utils/helpers";
import { getDecks } from "../actions";

class DeckView extends Component {
  componentDidMount() {
    this.props.getDecks;
  }

  render() {
    //Get the deck title from navigation params
    const { title } = this.props.navigation.state.params.deck;
    //Use the deck title to get the deck from the Redux Store.
    const deck = this.props.decks[title];
    if (!deck) {
      return null;
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.cardCount}>{`${
            deck.questions.length
          } cards`}</Text>

          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("NewQuestionView", { deck })
            }
            style={styles.btn}
          >
            <Text style={styles.btnText}>Add Card</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("QuizView", { deck })}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20
  },
  title: {
    fontSize: 18,
    textAlign: "center"
  },
  cardCount: {
    color: gray,
    textAlign: "center",
    marginBottom: 15
  },
  btn: {
    padding: 10,
    borderRadius: 1,
    borderWidth: 2,
    borderColor: "teal",
    width: btnWidth,
    marginBottom: 8
  },
  btnText: {
    textAlign: "center"
  }
});

const mapStateToProps = state => ({
  decks: state
});

export default connect(mapStateToProps, { getDecks })(DeckView);
