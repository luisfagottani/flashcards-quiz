export const getAllCards = state => {
  if (state.cards) {
    return state.cards;
  }
  return {};
};
