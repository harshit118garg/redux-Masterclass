import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `http://localhost:3000/users`;

// Create an async thunk to fetch the list of users from the API
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
});

// Create an async thunk to add a new user to the API and update the store
export const addUser = createAsyncThunk("users/addUser", async (user) => {
  const response = await axios.post(`${API_URL}`, user);
  return response.data;
});

// Create an async thunk to update an existing user on the API and update the store
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ id, updateUserData }) => {
    const response = await axios.put(`${API_URL}/${id}`, updateUserData);
    return response.data;
  }
);

// Create an async thunk to delete an existing user from the API and update the store
export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});
