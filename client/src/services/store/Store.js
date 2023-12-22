import AuthSlice from "./reducers/AuthSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});