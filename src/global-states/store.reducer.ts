import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user.slice";
import { productSlice } from "./product.slice";
//store definition for state management
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    product: productSlice.reducer,
  },
});

//type definition for root state
export type RootState = ReturnType<typeof store.getState>;

//app dispatch type definition
export type AppDispatch = typeof store.dispatch;
