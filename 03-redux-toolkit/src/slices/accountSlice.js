import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  amount: 10,
};

export const fetchUserById = createAsyncThunk(
  "accounts/getUser",
  async (userId, thunkAPI) => {
    const { data } = await axios.get(
      `http://localhost:3000/accounts/${userId}`
    );
    return data.amount;
  }
);

export const amountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1;
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action) => {
      state.amount += Number(action.payload);
    },
    decrementByAmount: (state, action) => {
      state.amount -= Number(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.amount = Number(action.payload);
        state.pending = false;
      })
      .addCase(fetchUserById.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.error = action.error.message;
        state.pending = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount } =
  amountSlice.actions;

export default amountSlice.reducer;
