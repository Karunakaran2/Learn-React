import { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";

// ─── EDUCATIONAL NOTE: Polymorphic Components ─────────────────────────────────
// This is an advanced "Polymorphic" component pattern.
// It allows the Button to be rendered as a different HTML tag (e.g., <a>, <button>, or a custom Router Link)
// while keeping perfect TypeScript support for the attributes of that specific tag.
//
// By using `ComponentPropsWithoutRef<T>`, if `renderAs="a"`, TypeScript will
// allow `href` and `target` props. If `renderAs="button"`, it allows `disabled`.

type ButtonProps<T extends ElementType> = {
  renderAs?: T;
  isLoading?: boolean;
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
} & ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = "button">({
  renderAs,
  isLoading,
  children,
  variant = "primary",
  ...props
}: ButtonProps<T>) => {
  const Component = renderAs || "button";

  // Basic example styling classes based on variant
  const baseClasses =
    "px-4 py-2 rounded font-medium focus:outline-none transition-colors";
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  }[variant];

  return (
    <Component
      className={`${baseClasses} ${variantClasses} ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </Component>
  );
};
