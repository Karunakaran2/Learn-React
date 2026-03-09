import { lazy, Suspense, useMemo, useState } from "react";
import { TaskContext } from "./TaskContext";
import useTask from "../../hooks/useTask";
import TaskErrorBoundary from "./TaskErrorBoundary";

// ─── Lazy-load sub-components ─────────────────────────────────────────────────
// React.lazy() takes a dynamic import and generates a lazy component.
// The module MUST have a default export.
const TaskForm = lazy(() => import("./TaskForm"));
const TaskFilter = lazy(() => import("./TaskFilter"));
const TaskList = lazy(() => import("./TaskList"));
const TaskItem = lazy(() => import("./TaskItem"));

// ─── Suspense fallback ────────────────────────────────────────────────────────
const LoadingSpinner = () => (
  <div className="suspense-loader">
    <span className="spinner" />
    <span>Loading…</span>
  </div>
);

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
      <div className="task-wrapper">
        {/*
          Each sub-component slice gets its OWN ErrorBoundary + Suspense pair.
          This means an error in TaskList doesn't kill TaskForm, etc.
        */}
        <TaskErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
        </TaskErrorBoundary>
      </div>
    </TaskContext.Provider>
  );
};

// Attach lazy sub-components as static properties
Task.Form = TaskForm;
Task.Filter = TaskFilter;
Task.List = TaskList;
Task.Item = TaskItem;

export default Task;
