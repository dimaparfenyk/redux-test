import { useSelector } from "react-redux";
import { selectStatusFilter } from "../../redux/selectors";
import { useGetTasksQuery } from "../../redux/tasks";
import { selectVisibleTasks } from "../../utilities/selectVisibleTasks";
import Task from "../Task/Task";
import css from "./TaskList.module.css";

const TaskList = () => {
  const filterStatus = useSelector(selectStatusFilter);
  const { data } = useGetTasksQuery();

  const visibleTasks = selectVisibleTasks(data, filterStatus);

  return (
    <>
      {data && (
        <ul className={css.list}>
          {visibleTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      )}
    </>
  );
};

export default TaskList;
