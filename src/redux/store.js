import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasks/reducer";
import { filtersReducer } from "./filters/reducer";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
