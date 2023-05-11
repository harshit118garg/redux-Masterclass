import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, addUser, updateUser, deleteUser } from "../api";

const initialState = {
  users: [],
  status: "idle",
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading"; 
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const { id, ...updatedData } = action.payload;
        const index = state.users.findIndex((data) => data.id === id);
        state.users[index] = { ...state.users[index], ...updatedData };
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((data) => data.id !== action.payload);
      });
  },
});

export default usersSlice.reducer;
