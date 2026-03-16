import { useCallback } from "react";
import { useTaskContext } from "../../context/TaskContext";
import { Task } from "../../types/task";

/**
 * EDUCATIONAL NOTE: Component Props Typing
 *
 * We define exactly what props this Component expects to receive from its parent.
 * It expects a `task` object that perfectly matches the `Task` interface we defined.
 */
interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
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
    <li
      className={`flex items-center gap-3 p-2 bg-slate-50 border border-slate-100 rounded-lg group transition-all hover:shadow-md ${task.completed ? "opacity-60 bg-slate-100/50" : ""}`}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
        className="w-5 h-5 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
      />
      <span
        className={`flex-1 text-slate-800 font-medium ${task.completed ? "line-through text-slate-500" : ""}`}
      >
        {task.text}
      </span>
      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={handleEdit}
          className="text-sm px-3 py-1.5 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 rounded-md font-medium transition-colors"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="text-sm px-3 py-1.5 bg-red-100 text-red-700 hover:bg-red-200 rounded-md font-medium transition-colors"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
