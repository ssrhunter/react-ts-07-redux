import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";

import { AppDispatch, RootState } from "./store";

type DispatchFunction = () => AppDispatch;

// Custom improved version of the standard
// AppDispatch hook with extra type safety.
export const useCartDispatch: DispatchFunction = useDispatch;

// Create an improved, more type aware version
// of the default selector hook. useCartSelector is customized
// for the cart data in our data store.
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
