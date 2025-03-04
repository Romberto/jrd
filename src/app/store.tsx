import { configureStore } from "@reduxjs/toolkit";
import { seminarApi } from "./seminarApi";

export const store = configureStore({
  reducer: {
    [seminarApi.reducerPath]: seminarApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(seminarApi.middleware),
});
