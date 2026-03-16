/**
 * EDUCATIONAL NOTE: Custom Types & Interfaces
 *
 * In TypeScript, we use `interface` or `type` to define the "shape" of data.
 * This helps the editor catch mistakes (like misspelling a property)
 * and provides great auto-completion.
 */

// We define what a single Task object looks like.
export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

/**
 * EDUCATIONAL NOTE: Discriminated Unions
 *
 * This `Action` type is a "Discriminated Union". It's a very powerful pattern in TypeScript
 * used primarily with Reducers.
 *
 * Instead of having a loose type like `{ type: string, payload: any }`, we define
 * EXACTLY what payload is allowed for each specific `type`.
 *
 * For example: If `type === "ADD_TASK"`, TypeScript knows `payload` MUST be a `string`.
 * It will throw an error if you try to pass a number or object.
 */
export type Action =
  | { type: "LOAD_TASKS"; payload: Task[] }
  | { type: "ADD_TASK"; payload: string }
  | { type: "UPDATE_TASK"; payload: { id: number; text: string } }
  | { type: "DELETE_TASK"; payload: number }
  | { type: "TOGGLE_TASK"; payload: number };
