import { createReducer } from "@reduxjs/toolkit";
import { addTask, deleteTask, toggleTask } from "./actions";

const initialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

export const tasksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTask.type, (state, action) => [...state, action.payload])
    .addCase(deleteTask.type, (state, action) =>
      state.filter((task) => task.id !== action.payload)
    )
    .addCase(toggleTask.type, (state, action) =>
      state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      )
    );
});
