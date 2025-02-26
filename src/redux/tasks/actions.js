import { createAction, nanoid } from "@reduxjs/toolkit";

// After

export const addTask = createAction("tasks/addTask", (text) => {
  return { payload: { id: nanoid(), text, completed: false } };
});
export const deleteTask = createAction("tasks/deleteTask");
export const toggleTask = createAction("tasks/toggleTask");

// Before
// export const addTask = (text) => {
//   return {
//     type: "tasks/addTask",
//     payload: { id: nanoid(), text, completed: false },
//   };
// };
// console.log(addTask("Learn Redux Toolkit"));

// export const deleteTask = (taskId) => {
//   return {
//     type: "tasks/deleteTask",
//     payload: taskId,
//   };
// };

// export const toggleTask = (taskId) => {
//   return {
//     type: "tasks/toggleTask",
//     payload: taskId,
//   };
// };
