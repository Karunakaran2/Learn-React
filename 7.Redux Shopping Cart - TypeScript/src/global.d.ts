// Tell TypeScript to allow CSS file imports (handled by Vite at build time)
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}
