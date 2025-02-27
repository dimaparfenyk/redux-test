import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksState,
  reducers: {
    addTask: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(text) {
        return { payload: { id: nanoid(), text, completed: false } };
      },
    },

    deleteTask: (state, action) =>
      state.filter((task) => task.id !== action.payload),

    toggleTask: (state, action) =>
      state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      ),
  },
});

export const { addTask, deleteTask, toggleTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
