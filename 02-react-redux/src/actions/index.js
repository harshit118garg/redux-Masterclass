import axios from "axios";

// actions names
export const init = "account/init";
export const increment = "account/inc";
export const decrement = "account/dec";
export const incrementByAmount = "account/incByAmount";
export const decrementByAmount = "account/decByAmount";
export const getAccountUserPending = "account/getUser/pending";
export const getAccountUserFulfilled = "account/getUser/fulfilled";
export const getAccountUserRejected = "account/getUser/rejected";
export const incBonus = "bonus/inc";

// action creators
export function getUser(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getAccountUserPendingFn());
      const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
      dispatch(getAccountUserFulfilledFn(data.amount));
    } catch (error) {
      dispatch(getAccountUserRejectedFn(error));
    }
  };
}

export function getAccountUserFulfilledFn(value) {
  return { type: getAccountUserFulfilled, payload: value };
}

export function getAccountUserPendingFn() {
  return { type: getAccountUserPending };
}

export function getAccountUserRejectedFn(error) {
  return { type: getAccountUserRejected, error: error };
}

export function incrementFn() {
  return { type: increment };
}

export function decrementFn() {
  return { type: decrement };
}

export function incrementByAmountFn(value) {
  return { type: incrementByAmount, payload: value };
}

export function decrementByAmountFn(value) {
  return { type: decrementByAmount, payload: value };
}

export function bonusIncrementFn() {
  return { type: incBonus };
}
