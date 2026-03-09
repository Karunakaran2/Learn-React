import { useTaskContext } from "./TaskContext";

const TaskFilter = () => {
  const { tasks, filter, setFilter } = useTaskContext();

  return (
    <div className={`filter-buttons ${tasks.length === 0 ? "hidden" : ""}`}>
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={filter === "completed" ? "active" : ""}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
      <button
        className={filter === "incomplete" ? "active" : ""}
        onClick={() => setFilter("incomplete")}
      >
        Incomplete
      </button>
    </div>
  );
};

export default TaskFilter;
