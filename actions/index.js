import * as api from "../utils/api";
export const GET_DECKS = "GET_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";

export function getDecks(decks) {
  return {
    type: GET_DECKS,
    decks
  };
}

export const fetchDecks = () => dispatch =>
  api.fetchDecks().then(decks => dispatch(getDecks(decks)));

export function addNewDeck(decks) {
  return {
    type: ADD_DECK,
    decks
  };
}

export const addDeck = data => dispatch =>
  api.addDeck(data).then(decks => dispatch(addNewDeck(decks)));

export function addNewCard(decks) {
  return {
    type: ADD_CARD,
    decks
  };
}

export const addCard = data => dispatch =>
  api.addCard(data).then(decks => dispatch(addNewCard(decks)));
