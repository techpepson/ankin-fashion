//async function to handle submission to an API

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//api endpoint
const endpoint = "http://localhost:5000/api/products";

export const postProducts: any = createAsyncThunk(
  "api/products",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(endpoint, data);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue({ Error: error });
    }
  }
);
