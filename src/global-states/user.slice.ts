//slice definition for getting user details during signup
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../typedefs/user.slice.types";
import { handleUserDetails } from "./api/user.thunk.api";
const initialState: User = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: 1234,
  fulfilled: false,
  pending: false,
  rejected: false,
};

export const userSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    //function to update the name field
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    //function to update the email field
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    //function to update the password field
    updatePassword: (state, action: PayloadAction<string | number>) => {
      state.password = action.payload;
    },
    //function to update the confirm password field
    updateConfirmPassword: (state, action: PayloadAction<string | number>) => {
      state.confirmPassword = action.payload;
    },
    //function to update the phone number field
    updatePhoneNumber: (state, action: PayloadAction<number>) => {
      state.phoneNumber = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(handleUserDetails.fulfilled, (state) => {
        state.fulfilled = true;
        state.pending = false;
        state.rejected = false;
      })
      .addCase(handleUserDetails.rejected, (state) => {
        state.rejected = true;
        state.fulfilled = false;
        state.pending = false;
      })
      .addCase(handleUserDetails.pending, (state) => {
        state.pending = true;
        state.fulfilled = false;
        state.rejected = false;
      });
  },
});

export const {
  updateName,
  updateEmail,
  updatePassword,
  updateConfirmPassword,
  updatePhoneNumber,
} = userSlice.actions;

export default userSlice.reducer;
