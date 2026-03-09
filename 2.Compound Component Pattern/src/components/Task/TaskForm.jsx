import { useCallback, useEffect, useRef, useState } from "react";
import { useTaskContext } from "./TaskContext";

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
  const inputRef = useRef(null);

  useEffect(() => {
    setNewTask(editingTask ? editingTask.text : "");
  }, [editingTask]);

  const handleSubmit = useCallback(
    (e) => {
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
      inputRef.current.focus();
    },
    [newTask, editingTask, addTask, updateTask, setEditingTask, setIsEditing],
  );

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit">{isEditing ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
