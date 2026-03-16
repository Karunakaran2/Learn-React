import "./App.css";
import Task from "./components/Task";

function App() {
  return (
    <div className="max-w-2xl mx-auto p-6 lg:p-10 bg-white rounded-2xl shadow-xl border border-slate-100 mt-12 w-full">
      <h1 className="text-3xl font-extrabold text-center text-slate-800 tracking-tight mb-8">
        TypeScript + React Tasks
      </h1>

      <Task>
        <Task.Form />
        <Task.Filter />
        <Task.List />
      </Task>
    </div>
  );
}

export default App;
