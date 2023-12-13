import { httpService } from "@/config/axios.config";

const getTasks = async () => {
  const response = await httpService.get<ITask[]>("/todos");
  return response.data.slice(0, 20);
};

export default getTasks;

export interface ITask {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
