import { getDecks, createQuiz, createQuestionApi } from "../utils/api";

export const INDEX = "INDEX";
export const LOADING = "LOADING";
export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const CREATE_QUIZ = "CREATE_QUIZ";
export const ADD_QUESTION = "ADD_QUESTION";

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

function createQuizRedux(quiz) {
  return {
    type: CREATE_QUIZ,
    quiz
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function createQuestion(question) {
  return (dispatch, getState) => {
    let cards = JSON.parse(JSON.stringify(getState().cards));

    cards[question.parentId].questions.push(question);
    createQuestionApi(cards);
    dispatch(addQuestion(question));
  };
}

export function createQuizCard(quiz) {
  return dispatch => {
    const uid = createQuiz(quiz);
    dispatch(createQuizRedux({ [uid]: { id: uid, ...quiz } }));
    return uid;
  };
}

export function persistAllCardsThunk() {
  return dispatch => {
    getDecks().then(k => {
      dispatch(persistAllCards(k));
      dispatch(loading(false));
    });
  };
}
