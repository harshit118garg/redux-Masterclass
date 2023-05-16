import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction("reward/increment");
export const incrementByAmount = createAction("reward/incrementByAmount");

const initialState = { points: 100 };

const rewardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.points += 10;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.points += Number(action.payload);
    });
});

export default rewardReducer;
