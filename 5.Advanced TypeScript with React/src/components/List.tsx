import { ReactNode } from "react";

// ─── EDUCATIONAL NOTE: Generic Components ────────────────────────────────────
// This is a "Generic Component" pattern.
// We don't know what kind of items this list will hold until it's used.
// It could be a List of Tasks, a List of Users, or a List of Strings.
//
// By using `<T,>`, we tell TypeScript to infer the type from the 'items' prop.
// Whatever type `items` is, `renderItem` and `keyExtractor` will automatically
// know the exact type of `item` without us declaring it!

interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  keyExtractor: (item: T) => string | number;
  emptyMessage?: string;
}

export const List = <T,>({
  items,
  renderItem,
  keyExtractor,
  emptyMessage = "No items found.",
}: ListProps<T>) => {
  if (items.length === 0) {
    return (
      <div className="text-gray-500 italic p-4 text-center">{emptyMessage}</div>
    );
  }

  return (
    <ul className="flex flex-col gap-2">
      {items.map((item, index) => (
        <li
          key={keyExtractor(item)}
          className="p-3 border rounded shadow-sm hover:shadow-md transition-shadow"
        >
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
};
