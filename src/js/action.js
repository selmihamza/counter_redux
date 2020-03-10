import { INCREMENT_COUNT, DECREMENT_COUNT } from "./actionType";

export const increment = payload => {
  return {
    type: INCREMENT_COUNT,
    payload
  };
};

export const decrement = payload => ({
  type: DECREMENT_COUNT,
  payload
});
