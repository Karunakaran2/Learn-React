import React from "react";

const initialState = [];

const taskReducer = (state, action) => {
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
