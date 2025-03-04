import { useSelector } from "react-redux";
import { FadeLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import { selectStatusFilter } from "../../redux/selectors";
import { useGetTasksQuery } from "../../redux/tasks";
import { selectVisibleTasks } from "../../utilities/selectVisibleTasks";
import Task from "../Task/Task";
import css from "./TaskList.module.css";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#1976d2",
};

const TaskList = () => {
  const filterStatus = useSelector(selectStatusFilter);
  const { data, isFetching } = useGetTasksQuery();

  const visibleTasks = selectVisibleTasks(data, filterStatus);

  return (
    <>
      <ToastContainer />
      <FadeLoader
        color="#1976d2"
        loading={isFetching}
        cssOverride={override}
        size={150}
      />
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
