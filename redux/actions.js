import { getDecks } from "../utils/api";

export const INDEX = "INDEX";
export const LOADING = "LOADING";
export const RECEIVE_CARDS = "RECEIVE_CARDS";

export function index(index) {
  return {
    type: INDEX,
    index
  };
}

export function loading(loading) {
  return {
    type: LOADING,
    loading
  };
}

function persistAllCards(cards) {
  return {
    type: RECEIVE_CARDS,
    cards
  };
}

export function persistAllCardsThunk() {
  return dispatch => {
    dispatch(persistAllCards(getDecks()));
    dispatch(loading(false));
  };
}
