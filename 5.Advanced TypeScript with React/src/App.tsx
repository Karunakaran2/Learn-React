import { useState, useEffect } from "react";
import { List } from "./components/List";
import { Button } from "./components/Button";
import { Accordion } from "./components/Accordion";
import { useAsync } from "./hooks/useAsync";
import { Task } from "./types/task";
import "./index.css";

// Dummy Async Function that simulates fetching tasks.
const fetchTasks = (): Promise<Task[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          title: "Learn Generic Components",
          completed: true,
          priority: "high",
        },
        {
          id: "2",
          title: "Understand Polymorphic Pattern",
          completed: false,
          priority: "medium",
        },
        {
          id: "3",
          title: "Master Utility Types",
          completed: false,
          priority: "low",
        },
      ]);
    }, 1500); // Wait 1.5 seconds minimum to demo the "loading" state and discriminated unions perfectly.
  });
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // EDUCATIONAL NOTE: Using our strongly typed Generic Async Hook
  // We pass `fetchTasks` which returns a `Promise<Task[]>`.
  // Hover over `status`, `data`, and `error` in your IDE. They are perfectly typed
  // as `Task[]` or `Error` depending on what `status` is.
  const { status, data, error, execute } = useAsync<Task[]>(fetchTasks);

  // Automatically fetch on mount
  useEffect(() => {
    execute();
  }, [execute]);

  // When data arrives, update our local component state
  useEffect(() => {
    if (status === "success" && data) {
      setTasks(data);
    }
  }, [status, data]);

  const toggleTask = (id: string) => {
    // EDUCATIONAL NOTE: Updating State with Previous Value
    // Using `setTasks((prev) => ...)` guarantees we are modifying the most
    // recent state snapshot, avoiding race conditions in React.
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  // EDUCATIONAL NOTE: Indexed Access Types (Lookups)
  // `Task["priority"]` looks up the type of the `priority` property inside the `Task` interface
  // without us having to manually duplicate `"low" | "medium" | "high"`.
  const priorityColor = (priority: Task["priority"]) => {
    switch (priority) {
      case "high":
        return "text-red-500 font-bold";
      case "medium":
        return "text-yellow-600 font-medium";
      case "low":
        return "text-green-500";
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Advanced React + TypeScript
      </h1>

      <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-2 text-blue-900">
          Learning Patterns Shown:
        </h2>
        <ul className="list-disc pl-5 text-blue-800 space-y-1">
          <li>
            <strong>
              Generic <code>{"<List>"}</code> Component:
            </strong>{" "}
            Infers its item type strictly.
          </li>
          <li>
            <strong>
              Polymorphic <code>{"<Button>"}</code>:
            </strong>{" "}
            Can render as any HTML tag while keeping perfect attributes
            intellisense.
          </li>
        </ul>
      </div>

      <Accordion defaultOpenId="list">
        {/* Compound Component: Item 1 */}
        <Accordion.Item id="buttons" title="1. Polymorphic Buttons & Linking">
          <div className="flex gap-4 p-2">
            <Button
              onClick={() => alert("Polymorphic Button Clicked!")}
              variant="primary"
            >
              Standard Button
            </Button>
            <Button
              renderAs="a"
              href="https://react.dev/learn/typescript"
              target="_blank"
              variant="secondary"
            >
              Link behaving like a Button
            </Button>
          </div>
        </Accordion.Item>

        {/* Compound Component: Item 2 */}
        <Accordion.Item id="list" title="2. Generic Lists & Async Loading">
          <div className="p-2">
            {/* EDUCATIONAL NOTE: State Exhaustiveness Checking */}
            {/* Because we used a discriminated union, we MUST handle exactly these string states */}
            {status === "idle" && (
              <p className="text-gray-500">Waiting to start...</p>
            )}

            {status === "loading" && (
              <div className="flex items-center gap-2 text-blue-600 font-semibold p-4">
                <span className="animate-spin text-xl">↻</span> Loading Async
                Data...
              </div>
            )}

            {status === "error" && (
              <p className="bg-red-100 text-red-700 p-4 rounded border border-red-200">
                Failed to load: {error?.message}
              </p>
            )}

            {/* If status is "success", TypeScript KNOWS `tasks` is completely safe to use. */}
            {status === "success" && (
              <List
                items={tasks}
                keyExtractor={(task) => task.id}
                renderItem={(task) => (
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                        className="w-5 h-5 text-blue-600 rounded bg-gray-100 border-gray-300 focus:ring-blue-500 cursor-pointer"
                      />
                      <span
                        className={`text-lg transition-colors ${task.completed ? "line-through text-gray-400" : "text-gray-800"}`}
                      >
                        {task.title}
                      </span>
                    </div>
                    <span
                      className={`text-xs font-bold tracking-wider uppercase px-2 py-1 rounded-full ${task.priority === "high" ? "bg-red-100" : task.priority === "medium" ? "bg-yellow-100" : "bg-green-100"} ${priorityColor(task.priority)}`}
                    >
                      {task.priority}
                    </span>
                  </div>
                )}
              />
            )}
          </div>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default App;
