import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//define an asyncThunk to handle axios posts to the API
const uri = "https://ankin-server.onrender.com/api/signup";
const loginUri = "https://ankin-server.onrender.com/api/login";

// eslint-disable-next-line react-hooks/rules-of-hooks
export const handleUserDetails: any = createAsyncThunk(
  "/api/signup",
  async ({ data, navigate }: { data: any; navigate: any }, thunkAPI) => {
    try {
      const response = await axios.post(uri, data);
      const token = response.data.token;
      return token;
      if (response.status === 2000) {
        navigate("/signin");
      }
    } catch (error) {
      console.error({ Error: thunkAPI.rejectWithValue(error) });
    }
  }
);
export const handleLogin: any = createAsyncThunk(
  "/api/login",
  async ({ data, navigate }: { data: any; navigate: any }, thunkAPI) => {
    try {
      const response = await axios.post(loginUri, data);
      if (response.status === 2000) {
        navigate("/login");
      }
      const token = response.data.token; // Assuming the response contains a token
      return token;
    } catch (error) {
      console.error({ Error: thunkAPI.rejectWithValue(error) });
      throw error;
    }
  }
);
