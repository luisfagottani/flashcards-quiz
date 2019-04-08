import { AsyncStorage } from "react-native";

export const QUIZ_STORAGE_KEY = "FlashCardQuiz:cards";

function generateUID() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}

export function createQuiz(quiz) {
  const uid = generateUID();
  AsyncStorage.mergeItem(
    QUIZ_STORAGE_KEY,
    JSON.stringify({
      [uid]: { id: uid, ...quiz }
    })
  );
  return uid;
}

export function createQuestionApi(cards) {
  AsyncStorage.mergeItem(
    QUIZ_STORAGE_KEY,
    JSON.stringify({
      ...cards
    })
  );
}

export const getDecks = () =>
  AsyncStorage.getItem(QUIZ_STORAGE_KEY).then(results => JSON.parse(results));
