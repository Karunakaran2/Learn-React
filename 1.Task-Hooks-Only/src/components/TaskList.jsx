import React, { useCallback } from "react";

const TaskList = ({
  tasks,
  deleteTask,
  toggleTask,
  setEditingTask,
  setIsEditing,
}) => {
  const handleDeleteTask = useCallback(
    (id) => {
      deleteTask(id);
    },
    [deleteTask],
  );

  const handleToggleCompleted = useCallback(
    (id) => {
      toggleTask(id);
    },
    [toggleTask],
  );

  const handleEditTask = useCallback(
    (task) => {
      setEditingTask(task);
      setIsEditing(true);
    },
    [setEditingTask, setIsEditing],
  );

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleCompleted(task.id)}
            />
            {task.text}{" "}
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="delete-button"
            >
              Delete
            </button>
            <button
              onClick={() => handleEditTask(task)}
              className="edit-button"
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default React.memo(TaskList);
