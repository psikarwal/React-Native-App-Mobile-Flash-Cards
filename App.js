import React from "react";
import { Provider } from "react-redux";
import { View } from "react-native";

import { setLocalNotification } from "./utils/helpers";
import { teal, white } from "./utils/colors";

import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducers";
import MainNavigator from "./components/Navigation";
import MobileflashcardStatusBar from "./components/StatusBar";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <MobileflashcardStatusBar
            backgroundColor={teal}
            barStyle="light-content"
          />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
