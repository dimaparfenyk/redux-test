import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";
import { getTasks } from "../../redux/selectors";

const TaskCounter = () => {
  const tasks = useSelector(getTasks);

  const tasksCount = tasks.reduce(
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

  return (
    <div>
      <p className={css.text}>Active: {tasksCount.active}</p>
      <p className={css.text}>Completed: {tasksCount.completed} </p>
    </div>
  );
};
export default TaskCounter;
