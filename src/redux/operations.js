import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(
        "https://67c096a0b9d02a9f224a588d.mockapi.io/api/tasks"
      );
      return await res.json();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (text, thunkAPI) => {
    try {
      const res = await fetch(
        "https://67c096a0b9d02a9f224a588d.mockapi.io/api/tasks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text }),
        }
      );
      return await res.json();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(
        `https://67c096a0b9d02a9f224a588d.mockapi.io/api/tasks/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return await res.json();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleTask = createAsyncThunk(
  "tasks/toggleTask",
  async (task, thunkAPI) => {
    try {
      const res = await fetch(
        `https://67c096a0b9d02a9f224a588d.mockapi.io/api/tasks/${task.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ completed: !task.completed }),
        }
      );
      return await res.json();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
