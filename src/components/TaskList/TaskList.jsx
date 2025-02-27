import { useDispatch, useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { getTasks, getStatusFilter } from "../../redux/selectors";
import Task from "../Task/Task";
import css from "./TaskList.module.css";

const getVisibleTasks = (tasks, status) => {
  switch (status) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

const TaskList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
