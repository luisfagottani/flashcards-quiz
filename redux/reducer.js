import { INDEX, LOADING } from "./actions";

const initialState = {
  loading: true
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING: {
      return {
        loading: action.loading
      };
    }
    default:
      return state;
  }
}

export default reducer;
