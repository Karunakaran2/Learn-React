import React, { useCallback, useEffect, useReducer } from "react";
import { initialState, taskReducer } from "./taskReducer";
import useLocalStorage from "./useLocalStorage";

function useTask() {
  const [storedTasks, updateStoredTasks] = useLocalStorage("tasks", []);
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

  const addTask = useCallback((text) => {
    dispatch({ type: "ADD_TASK", payload: text });
  }, []);

  const updateTask = useCallback((id, text) => {
    dispatch({ type: "UPDATE_TASK", payload: { id, text } });
  }, []);

  const deleteTask = useCallback((id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  }, []);

  const toggleTask = useCallback((id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  }, []);

  return { tasks, addTask, updateTask, deleteTask, toggleTask };
}

export default useTask;
