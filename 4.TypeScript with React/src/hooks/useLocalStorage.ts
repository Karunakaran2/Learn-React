import React, { useEffect, useState } from "react";

/**
 * EDUCATIONAL NOTE: Generics <T>
 *
 * Generics behave like temporary "variables" for types.
 * `useLocalStorage<T>` means "this interface works with SOME type T".
 * When we use the hook as `useLocalStorage<Task[]>`, `T` becomes `Task[]`.
 * This prevents us from having to use `any` and allows the hook to be reusable.
 */
interface useLocalStorage<T> {
  key: string;
  defaultValue: T;
}

const useLocalStorage = <T>(
  key: string,
  defaultValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
