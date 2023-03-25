import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

// actions names
const init = "account/init";
const increment = "account/inc";
const decrement = "account/dec";
const incrementByAmount = "account/incByAmount";
const decrementByAmount = "account/decByAmount";
const getAccountUserPending = "account/getUser/pending";
const getAccountUserFulfilled = "account/getUser/fulfilled";
const getAccountUserRejected = "account/getUser/rejected";
const incBonus = "bonus/inc";

// store
const store = createStore(
  combineReducers({ account: accountReducer, bonus: bonusReducer }),
  applyMiddleware(logger.default, thunk.default)
);

let history = [];

function accountReducer(state = { amount: 100 }, action) {
  const { type, payload, error } = action;
  switch (type) {
    case getAccountUserFulfilled:
      return { amount: payload, pending: false };
    case getAccountUserPending:
      return { ...state, pending: true };
    case getAccountUserRejected:
      return { ...state, error: error.message, pending: false };
    case increment:
      return { amount: state.amount + 100 };
    case decrement:
      return { amount: state.amount - 100 };
    case incrementByAmount:
      return { amount: state.amount + payload };
    case decrementByAmount:
      return { amount: state.amount - payload };
    default:
      return state;
  }
}

function bonusReducer(state = { points: 15 }, action) {
  const { type, payload } = action;
  switch (type) {
    case init:
      return { points: state.points };
    case incBonus:
      return { points: state.points + 5 };
    case incrementByAmount:
      if (payload >= 150) return { points: state.points + 5 };
    default:
      return state;
  }
}

// async api call
// async function getUser() {
//   const { data } = await axios.get("http://localhost:3000/accounts/1");
//   console.log("data from api -> ", data);
// }

// getUser()

// action creators
function getUser(id) {
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

function getAccountUserFulfilledFn(value) {
  return { type: getAccountUserFulfilled, payload: value };
}

function getAccountUserPendingFn() {
  return { type: getAccountUserPending };
}

function getAccountUserRejectedFn(error) {
  return { type: getAccountUserRejected, error: error };
}

function incrementFn() {
  return { type: increment };
}

function decrementFn() {
  return { type: decrement };
}

function incrementByAmountFn(value) {
  return { type: incrementByAmount, payload: value };
}

function decrementByAmountFn(value) {
  return { type: decrementByAmount, payload: value };
}

function bonusIncrementFn() {
  return { type: incBonus };
}

// dispatching actions
setTimeout(() => {
  store.dispatch(getUser(2));
  // store.dispatch(bonusIncrementFn());
}, 2000);
