import { useState } from "react";
import { useTaskContext } from "../../context/TaskContext";
import TaskItem from "./TaskItem";

/**
 * EDUCATIONAL NOTE: Consuming Typed Context
 *
 * Notice that we don't need to define `filteredTasks` type here!
 * Because `TaskContext` is strongly typed, `useTaskContext()` automatically
 * knows `filteredTasks` is a `Task[]` array. Auto-complete works perfectly.
 */

// ─── BuggyChild: simulates a component crash to demo ErrorBoundary ────────────
const BuggyChild = () => {
  throw new Error("💥 Simulated render crash in TaskList!");
};

const TaskList = () => {
  const { filteredTasks } = useTaskContext();
  const [shouldCrash, setShouldCrash] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      {/* Crash button — triggers the ErrorBoundary */}
      <button
        className="text-xs bg-red-100 text-red-700 mx-auto block px-3 py-1 rounded-full mb-4 hover:bg-red-200 transition-colors"
        onClick={() => setShouldCrash(true)}
        title="Simulate a render error to see the ErrorBoundary in action"
      >
        💥 Simulate Crash
      </button>

      {/* Conditionally render BuggyChild to trigger the ErrorBoundary */}
      {shouldCrash && <BuggyChild />}

      <ul className="flex flex-col gap-1">
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
