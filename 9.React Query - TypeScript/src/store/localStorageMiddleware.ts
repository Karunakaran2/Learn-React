import { Cart } from "../types";
import { Middleware } from "@reduxjs/toolkit";

export const localStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    const result = next(action);
    localStorage.setItem("cart", JSON.stringify(store.getState().cart));
    return result;
  };

export const loadState = (): { cart: Cart } | undefined => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return undefined;
    }
    return {
      cart: JSON.parse(serializedState),
    };
  } catch (error) {
    console.error("Error loading state from localStorage:", error);
    return undefined;
  }
};
