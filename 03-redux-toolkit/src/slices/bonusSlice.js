import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 5,
};

const incByAmount = createAction("account/incrementByAmount");

export const bonusSlice = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    increment: (state) => {
      state.points += 5;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incByAmount, (state, action) => {
      if (action.payload >= 13) {
        state.points += 12;
      }
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment } = bonusSlice.actions;

export default bonusSlice.reducer;
