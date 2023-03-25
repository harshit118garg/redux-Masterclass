import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

// action names
const loading = "posts/loading";
const fetched = "posts/fetched";
const failed = "posts/failed";
const sortByTitle = "posts/sort";

const store = createStore(
  combineReducers({ posts: postReducer }),
  applyMiddleware(logger.default, thunk.default)
);

function postReducer(state = { posts: [] }, action) {
  const { type, payload, error } = action;
  switch (type) {
    case fetched:
      return { posts: payload, loading: false };
    case sortByTitle:
      return {
        posts: payload.sort((a, b) =>
          a.title > b.title ? 1 : b.title > a.title ? -1 : 0
        ),
        loading: false,
      };
    case loading:
      return { ...state, loading: true };
    case failed:
      return { ...state, loading: false, error: error.message };

    default:
      return state;
  }
}

function fetchPostsFn(flag = false) {
  return async (dispatch) => {
    try {
      dispatch(loadingFn());
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      flag && dispatch(sortByTitleFn(data));
      dispatch(fetchedFn(data));
    } catch (error) {
      dispatch(failedFn(error));
    }
  };
}

function loadingFn() {
  return { type: loading };
}

function fetchedFn(data) {
  return { type: fetched, payload: data };
}

function sortByTitleFn(data) {
  return { type: sortByTitle, payload: data };
}

function failedFn(error) {
  return { type: failed, error: error };
}

setTimeout(() => {
  store.dispatch(fetchPostsFn());
}, 2000);
