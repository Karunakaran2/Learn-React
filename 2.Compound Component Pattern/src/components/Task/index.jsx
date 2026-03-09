import { useMemo, useState } from "react";
import { TaskContext } from "./TaskContext";
import useTask from "../../hooks/useTask";
import TaskForm from "./TaskForm";
import TaskFilter from "./TaskFilter";
import TaskList from "./TaskList";
import TaskItem from "./TaskItem";

// ─── Task (root = Context Provider) ──────────────────────────────────────────
const Task = ({ children }) => {
  const { tasks, addTask, updateTask, deleteTask, toggleTask } = useTask();
  const [filter, setFilter] = useState("all");
  const [isEditing, setIsEditing] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "completed":
        return tasks.filter((t) => t.completed);
      case "incomplete":
        return tasks.filter((t) => !t.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const value = {
    // data
    tasks,
    filteredTasks,
    filter,
    isEditing,
    editingTask,
    // actions
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
    setFilter,
    setIsEditing,
    setEditingTask,
  };

  return (
    <TaskContext.Provider value={value}>
      <div className="task-wrapper">{children}</div>
    </TaskContext.Provider>
  );
};

// Attach sub-components as static properties
Task.Form = TaskForm;
Task.Filter = TaskFilter;
Task.List = TaskList;
Task.Item = TaskItem;

export default Task;
