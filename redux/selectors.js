export const getAllCards = state => {
  if (state.cards) {
    return state.cards;
  }
  return {};
};

export const getQuestionByCard = (state, id) => {
  if (state.cards[id].questions.length > 0) {
    return state.cards[id].questions;
  }
  return [];
};

export const getCardsById = (state, id) => {
  if (state.cards[id]) {
    return state.cards[id];
  }
  return [];
};
