import React, { useCallback, useEffect, useRef, useState } from "react";

const TaskForm = ({
  tasks,
  addTask,
  updateTask,
  editingTask,
  setEditingTask,
  setIsEditing,
  isEditing,
}) => {
  const [newTask, setNewTask] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (editingTask) {
      setNewTask(editingTask.text);
    } else {
      setNewTask("");
    }
  }, [editingTask]);

  const handleAddTask = useCallback(
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
    [newTask, setEditingTask, addTask, updateTask, editingTask, setIsEditing],
  );

  return (
    <>
      <form className="form" onSubmit={handleAddTask}>
        <input
          ref={inputRef}
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button type="submit">{isEditing ? "Update Task" : "Add Task"}</button>
      </form>
    </>
  );
};

export default TaskForm;
