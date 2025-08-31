import { configureStore } from "@reduxjs/toolkit";

import { cartSlice } from "./cart-slice";

// create a Redux store. App level state management.
export const store = configureStore({
  // define a reducer.
  reducer: {
    cart: cartSlice.reducer,
  },
});
