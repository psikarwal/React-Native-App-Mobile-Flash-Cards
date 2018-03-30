import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { fetchDecks } from "../actions";
import { teal, white, gray } from "../utils/colors";
import { clearAll } from "../utils/api";
import { width, btnWidth } from "../utils/helpers";

class DeckListView extends React.Component {
  componentDidMount() {
    //clearAll();
    this.props.fetchDecks();
  }

  renderItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("DeckView", {
              deck: item
            })
          }
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.cardCount}>{`${
            item.questions.length
          } cards`}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.decks &&
          Object.keys(this.props.decks).length === 0 && (
            <View>
              <Text style={styles.title}>
                No Decks available, please add a deck!
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("NewDeckView")}
                style={styles.btn}
              >
                <Text style={styles.btnText}>Add Deck</Text>
              </TouchableOpacity>
            </View>
          )}

        <FlatList
          data={this.props.decks && Object.values(this.props.decks)}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.title}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  decks: state
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100
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
    marginBottom: 8,
    marginTop: 30
  },
  btnText: {
    textAlign: "center"
  }
});

export default connect(mapStateToProps, { fetchDecks })(DeckListView);
