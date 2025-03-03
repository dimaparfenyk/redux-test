import Button from "../Button/Button";
import css from "./TaskForm.module.css";
import { useAddTaskMutation } from "../../redux/tasks";

const TaskForm = () => {
  const [addTask] = useAddTaskMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    await addTask(form.elements.text.value).unwrap();
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};

export default TaskForm;
