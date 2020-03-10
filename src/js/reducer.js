import { INCREMENT_COUNT, DECREMENT_COUNT } from "./actionType";

const initState = {
  counter: 0
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { counter: action.payload + 1 };
    case DECREMENT_COUNT:
      return { counter: state.counter > 0 ? action.payload - 1 : 0 };

    default:
      return state;
  }
};
export default reducer;
