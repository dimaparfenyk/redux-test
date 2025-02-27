import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer, tasksReducer } from "./slice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
