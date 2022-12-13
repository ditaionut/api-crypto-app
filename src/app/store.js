import { configureStore } from "@reduxjs/toolkit";
import coinReducers from "../feature/coinSlice";

export const store = configureStore({
  reducer: {
    coins: coinReducers,
  },
});
