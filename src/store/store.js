import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./couterSlice";

const store = configureStore({
  reducer: counterReducer,
});

export default store;
