import { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";
import css from "./Task.module.css";
import {
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "../../redux/tasks";

const Task = ({ task }) => {
  const [deleteTask, { isSuccess: isDeleteSuccess }] = useDeleteTaskMutation();
  const [toggleTask, { isSuccess: isToggleSuccess }] = useUpdateTaskMutation();

  useEffect(() => {
    if (isDeleteSuccess || isToggleSuccess) {
      toast.success(
        isDeleteSuccess
          ? "Task deleted successfully!"
          : "Task updated successfully!",
        {
          position: "top-right",
          autoClose: 1300,
        }
      );
    }
  }, [isDeleteSuccess, isToggleSuccess]);

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
