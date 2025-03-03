import { statusFilters } from "../redux/constants";

export const selectVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};
