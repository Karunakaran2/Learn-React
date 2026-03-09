import { useMemo, useRef, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskFIlter from "./components/TaskFIlter";
import TaskList from "./components/TaskList";
import useTask from "./hooks/useTask";

function App() {
  const { tasks, addTask, updateTask, deleteTask, toggleTask } = useTask();
  const [filter, setFilter] = useState("all");
  const [isEditing, setIsEditing] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "all":
        return tasks;
      case "completed":
        return tasks.filter((task) => task.completed);
      case "incomplete":
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  console.log(tasks);

  return (
    <>
      <div className="App">
        <h1>Task Hooks Only</h1>

        <TaskForm
          tasks={tasks}
          addTask={addTask}
          updateTask={updateTask}
          setEditingTask={setEditingTask}
          editingTask={editingTask}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />

        <div className="task-list">
          <h2>Task List</h2>
          <TaskFIlter filter={filter} setFilter={setFilter} tasks={tasks} />
          <TaskList
            tasks={filteredTasks}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            setEditingTask={setEditingTask}
            setIsEditing={setIsEditing}
          />
        </div>
      </div>
    </>
  );
}

export default App;
