import { getDecks } from "../utils/api";

export const INDEX = "INDEX";
export const LOADING = "LOADING";
export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const CREATE_QUIZ = "CREATE_QUIZ";

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

function createQuiz(quiz) {
  return {
    type: CREATE_QUIZ,
    quiz
  };
}

// export function createQuizCard(quiz){
//   return dispatch => {
//     dispatch
//   }
// }

export function persistAllCardsThunk() {
  return dispatch => {
    getDecks().then(k => {
      dispatch(persistAllCards(k));
      dispatch(loading(false));
    });
  };
}
