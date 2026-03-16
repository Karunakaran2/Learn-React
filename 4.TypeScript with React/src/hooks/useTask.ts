import React, { useCallback, useEffect, useReducer } from "react";
import { initialState, taskReducer } from "./taskReducer";
import useLocalStorage from "./useLocalStorage";

import { Task } from "../types/task";

/**
 * EDUCATIONAL NOTE: Interface for Hook Returns
 *
 * We define exactly what this custom hook will return. This is crucial
 * so that any component using `useTask()` knows exactly what functions
 * and data are available, and their precise types.
 */
interface UseTaskReturn {
  tasks: Task[];
  addTask: (text: string) => void;
  updateTask: (id: number, text: string) => void;
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
}

function useTask(): UseTaskReturn {
  const [storedTasks, updateStoredTasks] = useLocalStorage<Task[]>("tasks", []);
  const [tasks, dispatch] = useReducer(taskReducer, storedTasks);

  useEffect(() => {
    updateStoredTasks(tasks);
  }, [tasks]);

  // useEffect(() => {
  //   const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  //   dispatch({ type: "LOAD_TASKS", payload: storedTasks });
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  const addTask = useCallback((text: string) => {
    dispatch({ type: "ADD_TASK", payload: text });
  }, []);

  const updateTask = useCallback((id: number, text: string) => {
    dispatch({ type: "UPDATE_TASK", payload: { id, text } });
  }, []);

  const deleteTask = useCallback((id: number) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  }, []);

  const toggleTask = useCallback((id: number) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  }, []);

  return { tasks, addTask, updateTask, deleteTask, toggleTask };
}

export default useTask;
