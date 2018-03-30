import { GET_DECKS, ADD_DECK, ADD_CARD } from "../actions";

function receiveDecks(state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        ...action.decks
      };
    case ADD_CARD:
      return {
        ...state,
        ...action.decks
      };
  }
}

export default receiveDecks;
