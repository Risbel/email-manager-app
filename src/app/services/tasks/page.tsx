"use client";

import { useGetTasks } from "@/hooks/useGetTasks";
import AddTaskForm from "./components/AddTaskForm";
import SkeletonTaskItems from "./components/SkeletonTaskItems";
import TaskItem from "./components/TaskItem";

const Tasks = () => {
  const { data, isLoading } = useGetTasks();

  if (isLoading || !data) {
    return <SkeletonTaskItems />;
  }

  return (
    <div className="py-4 px-4 md:px-8 bg-secondary">
      <div className="md:grid grid-cols-3 pb-4">
        <AddTaskForm />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {data?.map((item) => (
          <TaskItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
