import { useTaskContext } from "../../context/TaskContext";

/**
 * EDUCATIONAL NOTE: Context Type Inference
 *
 * Similar to `TaskList`, we no longer need to manually cast the context values
 * like `as TaskFilter` because the overarching `TaskContext` enforces strict types globally.
 */
const TaskFilter = () => {
  const { tasks, filter, setFilter } = useTaskContext();

  return (
    <div
      className={`flex gap-3 justify-center mb-6 pt-4 border-t border-slate-100 ${tasks.length === 0 ? "hidden" : ""}`}
    >
      <button
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${filter === "all" ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${filter === "completed" ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
      <button
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${filter === "incomplete" ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
        onClick={() => setFilter("incomplete")}
      >
        Incomplete
      </button>
    </div>
  );
};

export default TaskFilter;
