import { configureStore } from "@reduxjs/toolkit";

import { cartSlice } from "./cart-slice";

// create a Redux store. App level state management.
export const store = configureStore({
  // define a reducer.
  reducer: {
    cart: cartSlice.reducer,
  },
});

// use ReturnType to get the return type of the getState function
// and assign that to RootState.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
