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

export const data = {
  React: {
    title: "React",
    describe: "Perguntas genericas sobre React",
    dificulty: 3,
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces"
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event"
      }
    ]
  },
  JavaScript: {
    title: "JavaScript",
    describe: "Rei do Javascript",
    dificulty: 1,
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared."
      }
    ]
  }
};

export function createQuiz({ quiz }) {
  return AsyncStorage.mergeItem(
    CALENDAR_STORAGE_KEY,
    JSON.stringify({
      [generateUID()]: quiz
    })
  );
}

export const getDecks = () =>
  Promise.all(AsyncStorage.getAllKeys().then(ks => ks));
