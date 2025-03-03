import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import {
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "../../redux/tasks";

const Task = ({ task }) => {
  const [deleteTask] = useDeleteTaskMutation();
  const [toggleTask] = useUpdateTaskMutation();

  const handleToggleTask = (task) => {
    const newTask = { ...task, completed: !task.completed };
    toggleTask(newTask);
  };

  return (
    <li className={css.listItem}>
      <div className={css.wrapper}>
        <input
          type="checkbox"
          className={css.checkbox}
          defaultChecked={task.completed}
          onChange={() => handleToggleTask(task)}
        />
        <p className={css.text}>{task.text}</p>
        <button className={css.btn} onClick={() => deleteTask(task.id)}>
          <MdClose size={24} />
        </button>
      </div>
    </li>
  );
};

export default Task;
