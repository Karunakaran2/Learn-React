import React from "react";

const TaskFIlter = ({ filter, setFilter, tasks }) => {
  return (
    <>
      <div className={`filter-buttons ${tasks.length === 0 ? "hidden" : ""}`}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("incomplete")}>Incomplete</button>
      </div>
    </>
  );
};

export default TaskFIlter;
