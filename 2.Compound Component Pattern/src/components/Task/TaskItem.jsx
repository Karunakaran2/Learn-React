import { useCallback } from "react";
import { useTaskContext } from "./TaskContext";

const TaskItem = ({ task }) => {
  const { deleteTask, toggleTask, setEditingTask, setIsEditing } =
    useTaskContext();

  const handleDelete = useCallback(
    () => deleteTask(task.id),
    [deleteTask, task.id],
  );
  const handleToggle = useCallback(
    () => toggleTask(task.id),
    [toggleTask, task.id],
  );
  const handleEdit = useCallback(() => {
    setEditingTask(task);
    setIsEditing(true);
  }, [setEditingTask, setIsEditing, task]);

  return (
    <li className={task.completed ? "completed" : ""}>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      {task.text}{" "}
      <button onClick={handleDelete} className="delete-button">
        Delete
      </button>
      <button onClick={handleEdit} className="edit-button">
        Edit
      </button>
    </li>
  );
};

export default TaskItem;
