import css from "./TaskCounter.module.css";
import { tasksApi } from "../../redux/tasks";
import { tasksCount } from "../../utilities/getTasksCount";

const TaskCounter = () => {
  const { data } = tasksApi.endpoints.getTasks.useQueryState();
  const count = tasksCount(data);

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
export default TaskCounter;
