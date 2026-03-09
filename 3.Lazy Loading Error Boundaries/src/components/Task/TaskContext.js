import { createContext, useContext } from "react";

export const TaskContext = createContext(null);

export const useTaskContext = () => {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error("Task sub-components must be used inside <Task>");
  return ctx;
};
