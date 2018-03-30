import React from "react";
import { View, Platform } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";
import { teal, white } from "../utils/colors";
import DeckListView from "./DeckListView";
import NewDeckView from "./NewDeckView";
import DeckView from "./DeckView";
import QuizView from "./QuizView";
import NewQuestionView from "./NewQuestionView";

const Tabs = TabNavigator(
  {
    DeckListView: {
      screen: DeckListView,
      navigationOptions: {
        tabBarLabel: "Decks"
      }
    },
    NewDeckView: {
      screen: NewDeckView,
      navigationOptions: {
        tabBarLabel: "Add Deck"
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? teal : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === "ios" ? white : teal,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.deck.title}`,
      headerTitleStyle: {
        alignSelf: "center"
      },
      headerRight: <View />,
      headerTintColor: white,
      headerStyle: {
        backgroundColor: teal
      }
    })
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      title: "Quiz",
      headerTitleStyle: {
        alignSelf: "center"
      },
      headerRight: <View />,
      headerTintColor: white,
      headerStyle: {
        backgroundColor: teal
      }
    }
  },
  NewQuestionView: {
    screen: NewQuestionView,
    navigationOptions: {
      title: "Add card",
      headerTitleStyle: {
        alignSelf: "center"
      },
      headerRight: <View />,
      headerTintColor: white,
      headerStyle: {
        backgroundColor: teal
      }
    }
  }
});

export default MainNavigator;
