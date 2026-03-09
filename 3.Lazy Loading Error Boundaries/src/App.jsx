import "./App.css";
import Task from "./components/Task";

function App() {
  return (
    <div className="App">
      <h1>Task — Lazy Loading + Error Boundaries</h1>

      <Task>
        <Task.Form />
        <Task.Filter />
        <Task.List />
      </Task>
    </div>
  );
}

export default App;
