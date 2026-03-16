import { createContext, useContext } from "react";

import { Task } from "../types/task";

/**
 * EDUCATIONAL NOTE: Context Types
 *
 * When creating a React Context in TypeScript, we must define the shape of the
 * context value. This `TaskContextType` interface ensures that the Provider
 * passes exactly these properties.
 */

export interface TaskContextType {
  tasks: Task[];
  filteredTasks: Task[];
  filter: string;
  isEditing: boolean;
  editingTask: Task | null;
  addTask: (text: string) => void;
  updateTask: (id: number, text: string) => void;
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
  setFilter: (filter: string) => void;
  setIsEditing: (isEditing: boolean) => void;
  setEditingTask: (task: Task | null) => void;
}

/**
 * EDUCATIONAL NOTE: Context Default Value
 *
 * We use `<TaskContextType | null>` because initially there is no Provider wrapping the context.
 * So the default value is `null`. The hook below checks for `null` to ensure it's used correctly.
 */
export const TaskContext = createContext<TaskContextType | null>(null);

export const useTaskContext = () => {
  const ctx = useContext(TaskContext);
  // EDUCATIONAL NOTE: Type Narrowing. If ctx is null, we throw an error.
  // After this check, TypeScript safely knows `ctx` is exactly `TaskContextType`.
  if (!ctx) throw new Error("Task sub-components must be used inside <Task>");
  return ctx;
};
