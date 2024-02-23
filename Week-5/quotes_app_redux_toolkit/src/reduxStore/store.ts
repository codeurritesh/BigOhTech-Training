import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./quoteSlice";
export const store = configureStore({
  reducer: todoSlice,
});
