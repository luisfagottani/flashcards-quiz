import {
  INDEX,
  LOADING,
  RECEIVE_CARDS,
  CREATE_QUIZ,
  ADD_QUESTION
} from "./actions";

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
    case CREATE_QUIZ: {
      return {
        ...state,
        cards: { ...state.cards, ...action.quiz }
      };
    }
    case ADD_QUESTION: {
      return {
        ...state,
        cards: {
          ...state.cards,
          [action.question.parentId]: {
            ...state.cards[action.question.parentId],
            questions: [
              ...state.cards[action.question.parentId].questions,
              { ...action.question }
            ]
          }
        }
      };
    }
    default:
      return state;
  }
}

export default reducer;
