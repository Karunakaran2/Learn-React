import { useTaskContext } from "./TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { filteredTasks } = useTaskContext();

  return (
    <ul>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
