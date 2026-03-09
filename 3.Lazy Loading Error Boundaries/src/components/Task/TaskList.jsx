import { useState } from "react";
import { useTaskContext } from "./TaskContext";
import TaskItem from "./TaskItem";

// ─── BuggyChild: simulates a component crash to demo ErrorBoundary ────────────
const BuggyChild = () => {
  throw new Error("💥 Simulated render crash in TaskList!");
};

const TaskList = () => {
  const { filteredTasks } = useTaskContext();
  const [shouldCrash, setShouldCrash] = useState(false);

  return (
    <div>
      {/* Crash button — triggers the ErrorBoundary */}
      <button
        className="crash-button"
        onClick={() => setShouldCrash(true)}
        title="Simulate a render error to see the ErrorBoundary in action"
      >
        💥 Simulate Crash
      </button>

      {/* Conditionally render BuggyChild to trigger the ErrorBoundary */}
      {shouldCrash && <BuggyChild />}

      <ul>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
