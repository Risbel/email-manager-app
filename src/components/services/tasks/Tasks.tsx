import AddTaskForm from "./AddTaskForm";
import TaskItem from "./TaskItem";

const Tasks = () => {
  return (
    <div className="py-4 px-4 md:px-8 bg-secondary">
      <div className="md:grid grid-cols-3 pb-4">
        <AddTaskForm />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <TaskItem key={item} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
