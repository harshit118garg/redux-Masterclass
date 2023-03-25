import {
  getAccountUserFulfilled,
  getAccountUserPending,
  getAccountUserRejected,
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "../actions";

export function accountReducer(state = { amount: 100 }, action) {
  const { type, payload, error } = action;
  switch (type) {
    case getAccountUserFulfilled:
      return { amount: payload, pending: false };
    case getAccountUserPending:
      return { ...state, pending: true };
    case getAccountUserRejected:
      return { ...state, error: error.message, pending: false };
    case increment:
      return { amount: state.amount + 10 };
    case decrement:
      return { amount: state.amount - 10 };
    case incrementByAmount:
      return { amount: state.amount + Number(payload) };
    case decrementByAmount:
      return { amount: state.amount - Number(payload) };
    default:
      return state;
  }
}
