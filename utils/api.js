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

export const getDecks = () => {
  return Object.values(data).map(obj => obj);
};
