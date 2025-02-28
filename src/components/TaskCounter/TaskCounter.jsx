import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";
import { selectTasksCount } from "../../redux/selectors";

const TaskCounter = () => {
  const tasksCount = useSelector(selectTasksCount);

  return (
    <div>
      <p className={css.text}>Active: {tasksCount.active}</p>
      <p className={css.text}>Completed: {tasksCount.completed} </p>
    </div>
  );
};
export default TaskCounter;
