import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//define an asyncThunk to handle axios posts to the API
const uri = "https://ankin-server.onrender.com/api/signup";

export const handleUserDetails: any = createAsyncThunk(
  "/api/signup",
  async (data, thunk) => {
    try {
      const response = await axios.post(uri, data);
      const token = response.data.token;
      return token;
    } catch (error) {
      console.error({ Error: thunk.rejectWithValue(error) });
    }
  }
);
