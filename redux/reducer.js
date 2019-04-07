import { INDEX, LOADING, RECEIVE_CARDS } from "./actions";

const initialState = {
  loading: true,
  cards: {}
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        loading: action.loading
      };
    }
    case RECEIVE_CARDS: {
      return {
        ...state,
        cards: action.cards
      };
    }
    default:
      return state;
  }
}

export default reducer;
