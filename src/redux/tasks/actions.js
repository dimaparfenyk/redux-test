import { nanoid } from "nanoid";

export const addTask = (text) => {
  return {
    type: "tasks/addTask",
    payload: { id: nanoid(), text, completed: false },
  };
};

export const deleteTask = (taskId) => {
  return {
    type: "tasks/deleteTask",
    payload: taskId,
  };
};

export const toggleTask = (taskId) => {
  return {
    type: "tasks/toggleTask",
    payload: taskId,
  };
};
