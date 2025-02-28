import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./Layout/Layout";
import AppBar from "./AppBar/AppBar";
import TaskForm from "./TaskForm/TaskForm";
import TaskList from "./TaskList/TaskList";
import { fetchTasks } from "../redux/operations";
import { selectError, selectIsLoading } from "../redux/selectors";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <div>Tasks are loading...</div>}
      <TaskList />
    </Layout>
  );
};

export default App;
