import { ITask } from "@/services/getTasks";
import DetailsTask from "./DetailsTask";

const TaskItem = ({ item }: { item: ITask }) => {
  return (
    <div className="flex justify-between items-center bg-background rounded-xl py-1 px-2 md:px-4">
      <div className="flex">
        <div className="flex flex-col items-center leading-3 border-r-2 px-2">
          <p className="text-sm text-primary font-semibold">December</p>
          <p className="text-2xl text-primary font-semibold">01</p>
        </div>
        <div className="flex flex-col justify-end px-2 leading-5">
          <p className="text-primary font-light text-xs">Task {item.id}</p>
          <p className="text-primary font-semibold text-sm">
            {new Date().getHours()}: {new Date().getMinutes()}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <DetailsTask />
      </div>
    </div>
  );
};

export default TaskItem;
