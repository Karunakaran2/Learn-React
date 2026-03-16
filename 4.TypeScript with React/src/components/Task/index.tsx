import { lazy, Suspense, useMemo, useState } from "react";
import { TaskContext } from "../../context/TaskContext";
import { Task as TaskType } from "../../types/task";
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

interface Task {
  addTask?: (text: string) => void;
  updateTask?: (id: number, text: string) => void;
  deleteTask?: (id: number) => void;
  toggleTask?: (id: number) => void;
  tasks?: { text: string; id: number; completed: boolean }[];
}

// ─── Task (root = Context Provider) ──────────────────────────────────────────
/**
 * EDUCATIONAL NOTE: Strict Functional Components
 *
 * `React.ReactNode` represents anything that can be rendered in React (strings, elements, arrays).
 * By strictly typing `children`, we prevent passing invalid objects to our component.
 */
const Task = ({ children }: { children: React.ReactNode }) => {
  const { tasks = [], addTask, updateTask, deleteTask, toggleTask } = useTask();
  const [filter, setFilter] = useState("all");
  const [isEditing, setIsEditing] = useState(false);
  const [editingTask, setEditingTask] = useState<TaskType | null>(null);

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "completed":
        return tasks.filter((t: any) => t.completed);
      case "incomplete":
        return tasks.filter((t: any) => !t.completed);
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
      <div className="flex flex-col gap-6">
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
