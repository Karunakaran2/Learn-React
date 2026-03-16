import React from "react";
// Import our shared types
import { Task, Action } from "../types/task";

// Provide a strongly-typed initial state for the reducer
const initialState: Task[] = [];

/**
 * EDUCATIONAL NOTE: Typing a Reducer
 *
 * A reducer takes the current state and an action, and returns the new state.
 * By typing `state: Task[]` and `action: Action`, TypeScript ensures that
 * whatever we return from this switch statement MUST be an array of Tasks.
 */
const taskReducer = (state: Task[], action: Action) => {
  switch (action.type) {
    case "LOAD_TASKS":
      return action.payload;
    case "ADD_TASK":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "UPDATE_TASK":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, text: action.payload.text }
          : task,
      );
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task,
      );
    default:
      return state;
  }
};

export { initialState, taskReducer };
