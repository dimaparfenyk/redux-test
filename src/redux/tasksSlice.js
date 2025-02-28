import { createSlice } from "@reduxjs/toolkit";
import { addTask, deleteTask, fetchTasks, toggleTask } from "./operations";

const tasksState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, handleRejected)
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (task) => task.id !== action.payload.id
        );
      })
      .addCase(deleteTask.rejected, handleRejected)
      .addCase(toggleTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (task) => task.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
        // state.items = state.items.map((task) => {
        //   if (task.id === action.payload.id) {
        //     return { ...task, completed: action.payload.completed };
        //   }
        //   return task;
        // });
      })
      .addCase(toggleTask.rejected, handleRejected);
  },
});

export const tasksReducer = tasksSlice.reducer;
