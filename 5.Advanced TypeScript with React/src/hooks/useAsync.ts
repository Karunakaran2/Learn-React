import { useState, useCallback } from "react";

// ─── EDUCATIONAL NOTE: Advanced Discriminated Union for State ───────────────
// When fetching data, your component can only be in ONE of these exact states at a time.
// By using a Discriminated Union (checking the `status` string), TypeScript becomes smart enough
// to know that if `status === "success"`, then the `data` property definitely exists,
// and it will stop you from trying to access `data` when `status === "error"`.

// We use `<T, E = Error>` to say "This state resolves to some Type T, and falls back to a generic Error if one isn't provided."
export type AsyncState<T, E = Error> =
  | { status: "idle"; data: null; error: null }
  | { status: "loading"; data: null; error: null }
  | { status: "success"; data: T; error: null }
  | { status: "error"; data: null; error: E };

// ─── EDUCATIONAL NOTE: Generic Custom Hook ──────────────────────────────────
// This hook takes an asynchronous function `asyncFunction` as an argument.
// Typescript infers the `<T>` from whatever data type your async function returns!
export const useAsync = <T, E = Error>(asyncFunction: () => Promise<T>) => {
  // We initialize the state to "idle"
  const [state, setState] = useState<AsyncState<T, E>>({
    status: "idle",
    data: null,
    error: null,
  });

  // useCallback prevents this function from being recreated on every render
  const execute = useCallback(async () => {
    setState({ status: "loading", data: null, error: null });

    try {
      const responseData = await asyncFunction();
      // TypeScript guarantees we MUST provide data of type T here, because status is "success"
      setState({ status: "success", data: responseData, error: null });
    } catch (error) {
      // TypeScript guarantees we MUST provide an error of type E here, because status is "error"
      setState({ status: "error", data: null, error: error as E });
    }
  }, [asyncFunction]);

  return { execute, ...state };
};
