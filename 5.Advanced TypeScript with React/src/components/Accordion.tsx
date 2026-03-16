import { createContext, useContext, useState, ReactNode } from "react";

// ─── EDUCATIONAL NOTE: Compound Components & Internal Context ───────────────
// Sometimes you want parent and child components to share state automatically
// without forcing the user to pass `isOpen={true}` down to every single child.
// We use a React Context *inside* this file.
// We DO NOT export it! This forces developers to only use `<Accordion.Item>`
// inside an `<Accordion>`.

// 1. Define the internal State shape
interface AccordionContextType {
  openItemId: string | null;
  toggleItem: (id: string) => void;
}

// 2. Create the internal Context
const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined,
);

// 3. Create a custom hook to consume the Context
const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  // EDUCATIONAL NOTE: Guard Clause
  // If undefined, someone tried rendering `<Accordion.Item>` without wrapping
  // it in the main `<Accordion>`. TypeScript enforces this check!
  if (!context) {
    throw new Error("Accordion components must be used within an <Accordion>");
  }
  return context;
};

// ─── Component 1: The Parent Wrapper ───────────────────────────────────────
interface AccordionProps {
  children: ReactNode;
  defaultOpenId?: string | null;
}

export const Accordion = ({
  children,
  defaultOpenId = null,
}: AccordionProps) => {
  const [openItemId, setOpenItemId] = useState<string | null>(defaultOpenId);

  const toggleItem = (id: string) => {
    // If clicking the currently open item, close it. Otherwise, open the new one.
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  return (
    <AccordionContext.Provider value={{ openItemId, toggleItem }}>
      <div className="border border-gray-200 rounded-md divide-y divide-gray-200 bg-white shadow-sm overflow-hidden">
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

// ─── Component 2: The Individual Item ──────────────────────────────────────
interface AccordionItemProps {
  id: string; // Used to track which accordion is open
  title: string;
  children: ReactNode;
}

const AccordionItem = ({ id, title, children }: AccordionItemProps) => {
  const { openItemId, toggleItem } = useAccordionContext();
  const isOpen = openItemId === id;

  return (
    <div>
      <button
        onClick={() => toggleItem(id)}
        className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-50 focus:outline-none transition-colors"
      >
        <span>{title}</span>
        <span
          className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="p-4 bg-gray-50 text-gray-600 border-t border-gray-100">
          {children}
        </div>
      )}
    </div>
  );
};

// ─── EDUCATIONAL NOTE: Creating the Compound Object ─────────────────────────
// This is where the magic happens. We attach the sub-components DIRECTLY
// onto the main exported Accordion function component!
// Now developers can write `<Accordion.Item>` instead of importing multiple files.
Accordion.Item = AccordionItem;
