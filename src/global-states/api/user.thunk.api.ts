import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//define an asyncThunk to handle axios posts to the API
const uri = "https://ankin-server.onrender.com/api/signup";
const loginUri = "https://ankin-server.onrender.com/api/login";

const navigate = useNavigate()
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
export const handleLogin: any = createAsyncThunk(
  "/api/login",
  async (data, thunk) => {
    try {
      const response = await axios.post(loginUri, data);
      const token = response.data.token; // Assuming the response contains a token
      if (response.status === 200){
        navigate("/login")
      }
      else{
        console.log("Error logining in")
      }
      return token;
    } catch (error) {
      console.error({ Error: thunk.rejectWithValue(error.message) });
      throw error;
    }
  }
);