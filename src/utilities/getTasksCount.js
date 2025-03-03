export const tasksCount = (tasks = []) =>
  tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      }
      if (!task.completed) {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
