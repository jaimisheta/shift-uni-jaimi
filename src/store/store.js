import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataListSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
