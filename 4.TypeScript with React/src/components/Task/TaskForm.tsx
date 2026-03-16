import { useCallback, useEffect, useRef, useState } from "react";
import { useTaskContext } from "../../context/TaskContext";

const TaskForm = () => {
  const {
    addTask,
    updateTask,
    editingTask,
    setEditingTask,
    isEditing,
    setIsEditing,
  } = useTaskContext();

  const [newTask, setNewTask] = useState("");
  // EDUCATIONAL NOTE: Generic useRef
  // By passing `<HTMLInputElement>` to useRef, TypeScript knows this ref
  // will attach to an actual HTML input tag, exposing methods like `.focus()`.
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setNewTask(editingTask ? editingTask.text : "");
  }, [editingTask]);

  const handleSubmit = useCallback(
    // EDUCATIONAL NOTE: Typing HTML Events
    // `React.FormEvent<HTMLFormElement>` specifically types the `e` object
    // for standard form submissions, giving us access to methods like `preventDefault`.
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!newTask.trim()) {
        alert("Please enter a task.");
        return;
      }
      if (editingTask) {
        updateTask(editingTask.id, newTask);
        setEditingTask(null);
      } else {
        addTask(newTask);
      }
      setNewTask("");
      setIsEditing(false);
      inputRef.current?.focus();
    },
    [newTask, editingTask, addTask, updateTask, setEditingTask, setIsEditing],
  );

  return (
    <form className="flex w-full gap-2 items-center" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
        className="flex-1 px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {isEditing ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
